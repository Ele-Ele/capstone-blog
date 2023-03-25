import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/Footer";
import MyCard from "./components/MyCard";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyCard />
      <MyFooter />
    </div>
  );
}

export default App;
