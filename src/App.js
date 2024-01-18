import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Component/Cart";
import Header from "./Component/Header";
import ProductList from "./Component/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="w-[90%] mx-auto">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App; 