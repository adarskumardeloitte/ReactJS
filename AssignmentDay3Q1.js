import { useState } from "react";
import React from 'react'


function ShoppingCart() {

    const [shopArray, setShopArray] = useState([]);
    const [pname, setPname] = useState("");
    const [price, setPrice] = useState(null);
    const [qty, setQty] = useState(null);
    const [total, setTotal] = useState(null);


    function getTempArray()
    {
        let tempArray1 = [];
    }

    function addShoppingData()
    {
        let shopObj = {};
        shopObj.pname = pname;
        shopObj.price = price;
        shopObj.qty = qty;

        let tempArray1 = [...shopArray];
        tempArray1.push(shopObj);
        setShopArray(tempArray1);
        let cost = total+calculateDiscount((price*qty),qty);
        setTotal(cost)
        clearFields();
    }

    function clearFields()
    {
        setPname("");
        setPrice("");
        setQty("");
    }

    let resultArray = shopArray.map((item, index) => {
        return <tr key = {index}>
            <td> {item.pname}</td>
            <td> {item.price}</td>
            <td> {item.qty}</td>
            <td> {calculateDiscount((item.qty*item.price), item.qty)}</td>
            
        </tr>
    })


    function calculateDiscount(total,qty){
        if(qty>10 && qty<20){
           return 0.95*total;
        }
        else if(qty>20&&qty<30){
            return 0.9*total;
        }
        else if(qty>=30){
            return 0.85*total;
        }
        else{
            return total;
        }
    }

  return (
    <>
    <h3>Shopping Cart</h3>
    <input type="text" placeholder="Product Name" value={pname} onChange = {(e) => setPname(e.target.value)}/>
    <input type="number" placeholder="Product Price" value={price} onChange = {(e) => setPrice(e.target.value)} />
    <input type="number" placeholder="Product Quantity" value={qty} onChange = {(e) => setQty(e.target.value)} />
    
    <hr />
    <input type="button" value="Add to Cart" onClick={addShoppingData}/>
    <table border="2" width="500" cellspacing="0" cellpadding="5">
        <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Item Total</th>
        </tr>
        {resultArray}
    </table>
    
    <p>Total of all items is : {total}</p>
    </>
  );
}

export default ShoppingCart