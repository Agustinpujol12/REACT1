import "./App.css";
import Itemlistcontainer from "./componentes/itemlistcontainer";
import Navbar from "./componentes/navbar";

function App() {
  return (
    <div>
    <Navbar />
    <Itemlistcontainer greeting={"HOLA MUNDO"}/>
    </div>
  );
}

export default App;
