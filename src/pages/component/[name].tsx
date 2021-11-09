import { IFileType } from "@/containers/component/component.types";
import dynamic from "next/dynamic";
import filesSchema from "../../clone-mui/files-schema.json";

const Component = dynamic(() => import("@/containers/component"), { ssr: false });

const ComponentName: React.FC<{ name: string; files: IFileType[] }> = ({ name, files }) => {
  return <Component name={name} files={files} />;
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
