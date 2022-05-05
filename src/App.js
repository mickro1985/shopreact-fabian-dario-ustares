import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={"Dario"} />
    </div>
  );
}

export default App;
