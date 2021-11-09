import { useEffect, useRef, useState } from "react";
import type { ThemeOptions } from "@mui/material/styles";
import type * as monaco from "monaco-editor";
import { options } from "./monaco-config";
import { BeforeMount, OnMount, useMonaco } from "@monaco-editor/react";
import MonacoEditor from "@monaco-editor/react";
import { themeOptionsType } from "../types/theme-options";

export const defaultThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#3f51b5", // the default primary color
    },
    secondary: {
      main: "#f50057", // the default secondary color
    },
  },
};

const model = (themeOptions: ThemeOptions) => {
  return `import { ThemeOptions } from '@mui/material/styles';

export const theme: ThemeOptions = ${JSON.stringify(themeOptions, null, 2)};
`;
};

const overrideOptions = (monaco: any, OverrideOptions: any) => {
  Object.assign(options, {
    ...OverrideOptions,
    model:
      monaco.editor.getModel(monaco.Uri.parse("file:///main.tsx")) ||
      monaco.editor.createModel(
        model({
          palette: {},
        }),
        "typescript",
        monaco.Uri.parse("file:///main.tsx")
      ),
  });
  return options;
};

const readOnlyLines = {
  top: 3,
  bottom: 1,
};

const Editor: React.FC<any> = ({ OverrideOptions, ...props }) => {
  const [initiate, setInitiate] = useState(false);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const instanceMonaco = useMonaco();

  const handleEditorBeforeMount: BeforeMount = (monaco) => {
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      themeOptionsType,
      monaco.Uri.file(`node_modules/@mui/material/styles/index.d.ts`).toString(true)
    );
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ESNext,
      module: monaco.languages.typescript.ModuleKind.ESNext,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      allowNonTsExtensions: true,
      noImplicitAny: false,
      lib: ["esnext"],
      typeRoots: ["node_modules/@types"],
    });
  };

  const handleEditorOnMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    setInitiate(true);
  };

  useEffect(() => {
    if (!initiate || !editorRef.current || !instanceMonaco) return;
    function preventModifyReadOnlyLines(event: monaco.IKeyboardEvent) {
      const selection = editorRef.current?.getSelection();
      const lastEditableLine = (editorRef.current?.getModel()?.getLineCount() || 0) - readOnlyLines.bottom;

      if (!selection || lastEditableLine < 0) return null;

      if (selection.startLineNumber <= readOnlyLines.top || selection.endLineNumber > lastEditableLine) {
        const allowedKeys = [
          instanceMonaco?.KeyCode.LeftArrow,
          instanceMonaco?.KeyCode.RightArrow,
          instanceMonaco?.KeyCode.UpArrow,
          instanceMonaco?.KeyCode.DownArrow,
          instanceMonaco?.KeyCode.PageUp,
          instanceMonaco?.KeyCode.PageDown,
        ];
        const eventIsPaste = event.ctrlKey && event.keyCode === instanceMonaco?.KeyCode.KeyV;
        const eventIsCut = event.ctrlKey && event.keyCode === instanceMonaco?.KeyCode.KeyX;

        if (eventIsPaste || eventIsCut || (!event.ctrlKey && !allowedKeys.includes(event.keyCode))) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    }

    /**
     * Prevent backspace on column 1 of the first editable line
     */
    function preventBackspaceToReadOnlyLines(event: monaco.IKeyboardEvent) {
      if (event.keyCode === instanceMonaco?.KeyCode.Backspace) {
        const selection = editorRef.current?.getSelection();

        if (!selection) return null;

        if (selection.startLineNumber === readOnlyLines.top + 1) {
          if (selection.startColumn === 1 && selection.isEmpty()) {
            console.log("preventing backspace on read-only line");
            event.stopPropagation();
          }
        }
      }
    }

    /**
     * Prevent delete key on last column of last editable line
     */
    function preventDeleteToReadOnlyLines(event: monaco.IKeyboardEvent) {
      if (event.keyCode === instanceMonaco?.KeyCode.Delete) {
        const selection = editorRef.current?.getSelection();
        const lastEditableLine = (editorRef.current?.getModel()?.getLineCount() || 0) - readOnlyLines.bottom;

        if (!selection || lastEditableLine < 0) return null;

        if (selection.endLineNumber === lastEditableLine) {
          const lineLength = editorRef.current?.getModel()?.getLineLength(lastEditableLine) || 0;

          if (selection.endColumn > lineLength && selection.isEmpty()) {
            console.log("preventing delete on read-only lines");
            event.stopPropagation();
          }
        }
      }
    }

    const keyDownBinding = editorRef.current?.onKeyDown((event: monaco.IKeyboardEvent) => {
      preventModifyReadOnlyLines(event);
      preventBackspaceToReadOnlyLines(event);
      preventDeleteToReadOnlyLines(event);
    });

    return () => keyDownBinding?.dispose();
  }, [initiate, instanceMonaco]);

  return (
    <>
      {!!instanceMonaco && (
        <MonacoEditor
          theme={"vs-dark"}
          path={"file:///main.tsx"}
          options={overrideOptions(instanceMonaco, OverrideOptions)}
          defaultLanguage="typescript"
          defaultValue={model({})}
          beforeMount={handleEditorBeforeMount}
          onMount={handleEditorOnMount}
          {...props}
        />
      )}
    </>
  );
};

export default Editor;
