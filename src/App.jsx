import { BrowserRouter as Router } from "react-router-dom";
import "./utils/fontImport";
import "./App.css";
import Layout from "./layout/index.jsx";

const App = () => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
};

export default App;
