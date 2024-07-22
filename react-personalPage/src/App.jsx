import "./App.css";

import { Home } from "../component/home/HomeFun";
import { Header } from "../component/header/HeaderFun";

function App() {
  return (
    <div className="App ">
      <div className="bg">     
        <Home name="Carlota" surname="Ruiz" abilities="UX/UI designer" />
      </div>
      <Header description="I have a background in graphic design" experience="10 years" hobbies="Crochet and booklover" />
    </div>
  );
}

export default App;
