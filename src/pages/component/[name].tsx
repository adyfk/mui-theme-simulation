import dynamic from "next/dynamic";
import filesSchema from "../../clone-mui/files-schema.json";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Main from "../../layout/main";
interface IFileType {
  name: string;
  fileName: string;
}

const ComponentName: React.FC<{ name: string; files: IFileType[] }> = ({ name, files }) => {
  return (
    <Main>
      <Grid container spacing={2}>
        {files.map(({ name: nameComponent }, index) => {
          const Demo = dynamic(import(`../../clone-mui/demo/${name}/${nameComponent}`), { ssr: false });
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
    </Main>
  );
};

export function getStaticProps({ params }: { params: { name: string } }) {
  const folder = filesSchema.find(({ folder }) => folder === params.name);

  return {
    props: {
      files: folder?.files,
      name: params.name,
    },
  };
}

export function getStaticPaths() {
  const paths = filesSchema.map(({ folder }) => ({
    params: {
      name: folder,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default ComponentName;
