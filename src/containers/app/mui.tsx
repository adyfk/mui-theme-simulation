import { ThemeProvider } from "@mui/system";

const Mui: React.FC = ({ children }) => {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
};

export default Mui;
