import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./ComponentList/Header/Header";
import Shop from "./ComponentList/Shop/Shop";

import Manage from "./ComponentList/Manage_Inventory/Manage";
import { Notfound } from "./ComponentList/NotFound/Notfound";
import Ordersummery from "../src/ComponentList/Order_Summery/Ordersummery.jsx";
import { Productview } from "./ComponentList/Productview/Productview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/ordersummery" element={<Ordersummery />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/product/:productkey" element={<Productview />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
