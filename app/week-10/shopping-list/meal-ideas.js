"use client"

import { useEffect, useState } from "react";

export default function MealIdeas({ingredient}){

    let [meals, setMeals] = useState([]);
    let [ingredientDetails, setIngredientDetails] = useState("");
    
    async function fetchMealIdeas(ingredient){
        try {
            if(ingredient != ""){
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if(!response.ok){
                console.log(response.status);
            }
            const data = await response.json();
            if (data.meals == null){
                setIngredientDetails("");
            }
            return data.meals;
        }
        } catch (error) {
            console.log(`Error ${error.message}`);
        }
        
    }
    async function loadMealIdeas(){

        const mealsData = await fetchMealIdeas(ingredient);
        setMeals(mealsData);
   
        
    }

    async function loadIngredientDetails(id){
  
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        console.dir(data);
        setIngredientDetails(data);
    }

    useEffect( () => {
        if(ingredient){
        loadMealIdeas();}
    }, [ingredient]);


    return(
        <div>
    <h2 className="text-2xl text-white font-extrabold mb-4">Meal Ideas</h2>
    <ul>
        {meals != null ? (
            meals.map((meal) => (
                <li key={meal.idMeal} className="text-lg text-white font-bold hover:bg-red-700 mb-2 border-b border-gray-600">
                    <button className="w-full text-left" onClick={() => loadIngredientDetails(meal.idMeal)}>
                        {meal.strMeal}
                    </button>
                    {ingredientDetails != "" && ingredientDetails.meals[0].idMeal == meal.idMeal ? (
                        <div className="text-sm text-gray-400">
                            {Object.keys(ingredientDetails.meals[0])
                                .filter(key => key.startsWith('strIngredient') && ingredientDetails.meals[0][key])
                                .map(key => (
                                    <p key={key}>{ingredientDetails.meals[0][key]}</p>
                                ))}
                        </div>
                    ) : null}
                </li>
            ))
        ) : (
             ingredientDetails.meals == null ? (
                <li className="text-lg text-white mb-4">No meal ideas found for {ingredient}</li>
            ) : null
        )}
    </ul>
</div>


    
    );
}