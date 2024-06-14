"use client"
import { useState } from "react";
import Item from "./item";
import itemData from  './items.json';

export default function ItemList(){

    let itemArray = itemData.map( (obj) => ({...obj}) ); // creating new copy not a reference
    let [sortBy, setSortBy] = useState("name");
    let handleChangeSort = (newSortBy) => setSortBy(newSortBy);

    itemArray = itemArray.sort(

        (a,b) => { 
            if(isNaN(parseInt(a[sortBy]))) { 
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0;
        }
        else if (sortBy === 'category') {
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if (nameA.category < nameB.category) return -1;
            if (nameA.category > nameB.category) return 1;
            return 0;  
        }
    }
    );

return (
    <div>
        <div className='flex-1 px-4'> 
            <label className="text-xl text-white"> Sort By: </label>
        <button onClick={() => handleChangeSort("name")}
          className={`px-4 py-2 mr-2 border rounded ${
            sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`} >
          Name
        </button>
        <button onClick={() => handleChangeSort("category") }
          className={`px-4 py-2 border rounded ${
            sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}>
        Category
        </button>
        </div>
        <div>
        <section className= "p-3">
            {itemArray.map( (itemObj) => ( 
                <Item item={itemObj}/>
            ) )}
            </section>
        </div>
    </div>
);
}