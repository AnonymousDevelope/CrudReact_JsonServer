import { BrowserRouter,Route,Router} from "react-router-dom";
import { UI } from "./components/"
import "./style/css/style.css"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <UI />
    </BrowserRouter>
    </div>
  );
}

export default App;
