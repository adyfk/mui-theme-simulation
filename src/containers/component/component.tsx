import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Main from "../../layout/main";
import { ThemeProvider } from "@mui/system";
import { IFileType } from "./component.types";
import { useRecoilValue } from "recoil";
import { recoilComponentTheme } from "./recoil";
import { BrowserRouter } from "react-router-dom";
import { useError, ErrorBoundary } from "@stefanprobst/next-error-boundary";

const Component: React.FC<{ name: string; files: IFileType[] }> = ({ files, name }) => {
  const theme = useRecoilValue(recoilComponentTheme);

  return (
    <Main>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ErrorBoundaries>
            <Grid container spacing={2}>
              {files.map(({ name: nameComponent }, index) => {
                const Demo = dynamic(() => import(`../../clone-mui/demo/${name}/${nameComponent}`), { ssr: false });
                return (
                  <Grid item key={index} xs={12} md={12} lg={12} sm={12}>
                    <Box mx={2}>
                      <Box>{nameComponent}</Box>
                      <Demo />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </ErrorBoundaries>
        </BrowserRouter>
      </ThemeProvider>
    </Main>
  );
};

function CustomErrorPage() {
  const { error, onReset } = useError();
  return (
    <section role="alert">
      <p>An unexpected error has occurred: {error.message}.</p>
      <button onClick={onReset}>Reset</button>
    </section>
  );
}

function ErrorBoundaries({ children }: any) {
  return (
    <ErrorBoundary
      fallback={<CustomErrorPage />}
      onError={(error: any, errorInfo: any) => console.error(error, errorInfo)}
    >
      {children}
    </ErrorBoundary>
  );
}
export default Component;
