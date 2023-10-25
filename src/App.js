import "./App.css";
import Allstud from "./component/All";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Config from "./component/Config";
import Addstud from "./component/Addstud";
import Edit from "./component/Edit";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/allstud" element={<Allstud />} />
        <Route path="/addstud" element={<Addstud />} />
        <Route path="/view/:id" element={<Config />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
