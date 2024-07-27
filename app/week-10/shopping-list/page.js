"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from '../_services/shopping-list-service';

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const { user } = useUserAuth(); 

    if (!user) {
        return <p>Please log in to view your shopping list.</p>;
    }

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    // Load items on component mount
    useEffect(() => {
        const loadItems = async () => {
            try {
                const fetchedItems = await getItems(user.uid);
                setItems(fetchedItems);
            } catch (error) {
                console.error("Error loading items:", error);
            }
        };
        
        loadItems();
    }, [user.uid]); // Dependency on user.uid ensures the effect runs when the user changes

    const handleAddItem = async (newItem) => {
        try {
            const addedItem = await addItem(user.uid, newItem);
            setItems([...items, { ...newItem, id: addedItem.id }]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleItemSelect = (itemName) => {
        const cleanedName = itemName
            .split(",")[0]
            .trim()
            .replace(/[\u2700-\u27BF\uE000-\uF8FF\uD83C-\uDFFF\uD83D-\uDFFF]/g, '');
        setSelectedItemName(cleanedName);
    };

    return (
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
