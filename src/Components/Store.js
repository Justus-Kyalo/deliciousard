import React, {useState} from "react";
import"./css/Store.css";


function Store({onAddItem}) {
    const[formData, setFormdata] = useState({
        category: "",
        productName: "",
        image: "",
        unitPrice: "",
        unitsInStock: ""
    })

    function handlechange(event) {
        setFormdata({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

        function handleSubmit(){
        fetch("https://grocery-uo79.onrender.com/products",{
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(formData)
        })
        .then((response) => response.json())
        .then((formData) => onAddItem(formData))
        }

    return (
        <div id="additem" >
            <h4 style={{marginLeft: "43%"}}>Add New Product Here</h4>
            <form onSubmit={handleSubmit} >
                <input onChange={handlechange} placeholder="category" className="additem" name="category" ></input>
                <input onChange={handlechange} placeholder="product name" className="additem" name="productName"></input>
                <input onChange={handlechange} placeholder="image url" className="additem" name="image"></input>
                <input onChange={handlechange} type="number" placeholder="price per unit" className="additem" name="unitPrice"></input>
                <input onChange={handlechange} type="number" placeholder="units in stock" className="additem" name="unitsInStock"></input>
                <button id="inputbutton">Add New Product</button>
            </form>
        </div>
    )
}

export default Store;