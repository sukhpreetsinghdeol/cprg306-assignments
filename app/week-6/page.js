"use client"

import { useState } from "react";

import ItemList from "./item-list";
import itemData from  './items.json';
import NewItem from "./new-item";

export default function Page(){

    let [items, setItems] = useState(itemData);

    let handleAddItem = (newItem) => {setItems([...items, newItem])};
    
    return(
        <main className="bg-slate-800">
        <h1 className="text-2xl text-white font-extrabold p-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList itemsProp={items}/>
        </main>
    );
}