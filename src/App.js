import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFooter from "./components/Footer";
import MyCard from "./components/MyCard";
import MyNav from "./components/MyNav";
import Consigliati from "./components/Consigliati";
import Articolo from "./components/Articolo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<MyCard />}></Route>
          <Route path="/Co" element={<Consigliati />}></Route>
          <Route path="/articolo/:id" element={<Articolo />}></Route>
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
