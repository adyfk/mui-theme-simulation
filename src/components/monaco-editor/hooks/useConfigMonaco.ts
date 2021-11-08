import * as monaco from 'monaco-editor';
import { useEffect } from 'react';

export const useEditorResizeListener = (editorRef: any) => {
  const resizeEditor = () => editorRef.current?.layout();
  useEffect(() => {
    window.addEventListener('resize', resizeEditor);
    return () => {
      window.removeEventListener('resize', resizeEditor);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

const useConfigMonaco = ({ containerRef }: { containerRef: any }) => {
  useEffect(() => {
    monaco.editor.create(document.getElementById('container')!, {
      value: '',
      // this will ensure the model is created only once
      model:
        monaco.editor.getModel(monaco.Uri.parse('file:///main.tsx')) ||
        monaco.editor.createModel(
          '',
          'typescript',
          monaco.Uri.parse('file:///main.tsx')
        ),
    });
  }, []);
};

export default useConfigMonaco;
