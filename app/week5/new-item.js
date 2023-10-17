"use client"

import { useState } from "react"
import itemsList from "./items"

export default function NewItem(){
	const [name, setName] = useState("");
	const [quantity, setQuantity] = useState(1);
	const [category, setCategory] = useState("Produce");
	const categoryOptions = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"]

	const handleSubmit = (event) => {
				
		event.preventDefault();
			
		const item = {
			id: Math.random().toString(36).substring(0,17),
			name: name,
			quantity: quantity,
			category: category
		};
			
		console.log(item);
		itemsList.push(item)

		if(quantity == 1) alert(`Added ${quantity} ${name} (${category}) to the shopping list`);
		else alert(`Added ${quantity} ${name}s (${category}) to the shopping list`);
				
		setName("")
		setQuantity(1)
		setCategory("Produce")};

	const handleNameChange = (event) => {setName(event.target.value)};
	const handleQuantityChange = (event) => {setQuantity(parseInt(event.target.value))};
	const handleCategoryChange = (event) => {setCategory(event.target.value)};

	return(
		<form onSubmit={handleSubmit} className="flex flex-col sticky top-10">
			<input type="text" value={name} placeholder="Item Name" onChange={handleNameChange} required={true} className="bg-[#eff3f0] text-gray-800 text-center border-2 border-gray-300 p-4 rounded m-2"></input>
			<div className="flex justify-between text-center">
				<input type="number" min={1} max={99} value={quantity} onChange={handleQuantityChange} required={true} className="bg-[#eff3f0] text-gray-800 rounded border-2 border-gray-300 p-4 m-2"></input>
				<select value={category} onChange={handleCategoryChange} className="bg-[#eff3f0] text-gray-800 rounded border-2 border-gray-300 p-4 m-2">
					<option value disabled>Category</option>
					{categoryOptions.map((option) => (<option key={name} value={option}>{option}</option>))}
				</select>
			</div>
			<button type="submit" className="bg-[#30a143fd] hover:bg-[#1e5e28fd] active:bg-[#5e521efd] p-4 rounded m-2">Submit</button>    
		</form>
	)
}