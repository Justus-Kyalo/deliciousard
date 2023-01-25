import React from "react";
import { useState, useEffect } from "react";
import "./css/Fetchdata.css"

function FetchData({handleClick }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://grocery-uo79.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>

      {items.map((item)=>{
        return(
        <div key={item.id}>
        <div className="card" style={{width: '18rem', }}>
          <img src= {item.image} className="card-img-top" alt={item.productName} />
          <div className="card-body">
            <h5 className="card-title">{item.productName}</h5>
            <h5 className="card-title"> Ksh {item.unitPrice}</h5>
            {/* <h5 className="card-title"> Instock: {item.unitsInStock}</h5> */}




            <button onClick={() => handleClick(item)} className=" btn btn-primary">Add to cart</button>
          </div>
        </div>
        </div>)
      })}
    </div>
  );
}

export default FetchData;
