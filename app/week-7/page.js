"use client"

import { useState } from "react";

import ItemList from "./item-list";
import itemData from  './items.json';
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page(){

    let [items, setItems] = useState(itemData);
    let [selectedItemName, setSelectedItemName] = useState("");

    let handleAddItem = (newItem) => {setItems([...items, newItem])};
    let handleItemSelect = (itemName) => {
        
        const cleanedName = itemName
            .split(",")[0] 
            .trim() 
            .replace(/[\u2700-\u27BF\uE000-\uF8FF\uD83C-\uDFFF\uD83D-\uDFFF]/g, '');

        setSelectedItemName(cleanedName);
    };
    
    return(
        <main className="bg-slate-800 flex">
            <div className="flex-1 p-2">
                <h1 className="text-2xl text-white font-extrabold mb-4">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList itemsProp={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="flex-1 p-2">
                 <MealIdeas ingredient={selectedItemName} /> 

            </div>
        </main>
        

    );
}