import React, { useState }  from "react";
import Navbar from "./Components/Navbar";
import FetchData from "./Components/FetchData";
import Cart from "./Components/Cart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (
    <div className="App">
      
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
      <FetchData handleClick={handleClick}/>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
     

    </div>
  );
}

export default App;
