"use client"

import { useState } from "react";

export default function NewItem(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {
            name: name,
            quantity: quantity,
            category: category
        }
        alert(`Added item: ${item.name}, Quantity: ${item.quantity}, Category:  ${item.category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    const handleSetName = (event) => setName(event.target.value);
    const handleSetQuantity = (event) => {
        setQuantity(Number(event.target.value));    
    }
    const handleSetCategory = (event) => setCategory(event.target.value);

    return(
        <main className="bg-slate-800 min-h-screen">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4">
            <input type="text" onChange={handleSetName} value={name} required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Item Name" />
        </div>
        <div className="mb-4">
            <input type="number" min="1" max="99" onChange={handleSetQuantity} value={quantity} required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
        </div>
        <div className="mb-4">
            <select onChange={handleSetCategory} required value={category}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" >
            <option value="" disabled>Select a category</option>
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
            </select>
        </div>
        <div>
            <button type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
            Submit
            </button>
        </div>
</form>
</main>

    )
}