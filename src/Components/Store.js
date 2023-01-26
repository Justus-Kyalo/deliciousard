import React, { useState } from "react";
import "./css/Store.css";


function Store({ onAddItem }) {
    const[category, setCategory] = useState("")
    const[productName, setProductName] = useState("")
    const[image, setImage] = useState("")
    const[unitPrice, setUnitPrice] = useState()
    const[unitsInStock, setUnitsInStock] = useState()

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            category: category,
            productName: productName,
            image: image,
            unitPrice: unitPrice,
            unitsInStock: unitsInStock
        }
        fetch("https://grocery-uo79.onrender.com/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((newData) => onAddItem(newData))
    }

    return (
        <div id="additem" >
            <h4 style={{ marginLeft: "43%" }}>Add New Product Here</h4>
            <form onSubmit={handleSubmit} >
                <input
            onChange={(event) => {setCategory(event.target.value)}}
                    placeholder="category"
                    className="additem"
                    name="category"
                    value={category}>
                </input>
                <input
                    onChange={(event) => setProductName(event.target.value)}
                    placeholder="product name"
                    className="additem"
                    name="productName"
                    value={productName}>
                </input>
                <input
                    onChange={(event) => setImage(event.target.value)}
                    placeholder="image url"
                    className="additem"
                    name="image"
                    value={image}>
                </input>
                <input
                    onChange={(event) => setUnitPrice(event.target.value)}
                    type="number"
                    placeholder="price per unit"
                    className="additem"
                    name="unitPrice"
                    value={unitPrice}>
                </input>
                <input
                    onChange={(event) => setUnitsInStock(event.target.value)}
                    type="number"
                    placeholder="units in stock"
                    className="additem"
                    name="unitsInStock"
                    value={unitsInStock}>
                </input>
                <button id="inputbutton">Send</button>
            </form>
        </div>
    )
}

export default Store;