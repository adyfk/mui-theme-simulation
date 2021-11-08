import { RecoilRoot } from "recoil";

const App: React.FC = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default App;
