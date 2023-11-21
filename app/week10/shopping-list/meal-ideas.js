"use client"

import { useState, useEffect } from "react"

async function fetchMealIdeas(ingredient){
	try{
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
		const {data} = await response.json();
		console.log(data);
		return data;
	}
	catch(error){
		alert(`Failed to fetch recipes for ${ingredient}\nRetrieved error ${error}`);
	}
}

export default function MealIdeas({ ingredient }){
	const [meals, setMeals] = useState([]); 

	async function loadMealIdeas(){
		setMeals(await fetchMealIdeas(ingredient));
	}

	useEffect(() => {loadMealIdeas();}, [ingredient])

	return(
		<section>
			<h2>Meal Ideas</h2>
			{meals ? <h3>Some meal ideas using {ingredient} include:</h3> : <h3>No meal ideas for {ingredient}</h3>}
			<ul>
				{meals && meals.map((meal) =>  (<li key = {meal.idMeal} className="bg-[#b33232] hover:bg-[#b3323288] active:bg-[#61b33288] p-4 rounded space-y-2">{meal.strMeal}</li>))}
			</ul>
		</section>
	)
}