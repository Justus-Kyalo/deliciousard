import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FetchData from "./Components/FetchData";
import Cart from "./Components/Cart";
import About from "./Components/About";
import CustomerCare from "./Components/CustomerCare";
import Footer from "./Components/Footer";

function App() {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = [...cart];
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (

    <div className="App">
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/" element={<FetchData handleClick={handleClick} />} />

        <Route path="/cart" element={<Cart setCart={setCart} cart={cart} handleChange={handleChange} />}/>

        <Route path="/about" element={<About />} />

        <Route path="/customercare" element={< CustomerCare />} />
      </Routes>
      <Footer />
    </div>




  );
}

export default App;
