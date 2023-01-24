import React, {useEffect,useState}from "react";
import "../App.css"

function FetchData() {
  const [products,setProducts]=useState([])
  //fetching data 
  useEffect(()=>{
    fetch("https://grocery-uo79.onrender.com/products")
    .then(response => response.json())
    .then(products => setProducts(products))
  },[]);
  return (
    <div class="home">
      {products.map((item,index)=>{
        item.quantity=1;
        return(
        <div class="card" key={index}>
          <img src={item.image} class="card-img-top" alt="..." />
            <div class="card-body">
          <h5 class="card-title">{item.category}</h5>
          <p>{item.productName}</p>
          <h3>Kshs. {item.unitPrice}</h3>
          <button>Add to cart</button>
        </div>
      </div>
        )
      })}
      
    </div>
  );
}

export default FetchData;
