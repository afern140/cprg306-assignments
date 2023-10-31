"use client"

import { useState} from "react"
import Home from '../home'
import StudentInfo from '../studentinfo'
import ItemList from './item-list'
import NewItem from './new-item'
import itemsData from "./items"
import MealIdeas from "./meal-ideas"

export default function Main() {
	const [items, setItems] = useState(itemsData);
	const [selectedItem, setSelectedItem] = useState(null);
	const handleAddItem = (item) => {setItems((items) => [...items, item]);};
	const handleSelectItem = (item) => {setSelectedItem(item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, ''));}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="max-w-5xl w-full items-center justify-between lg:flex">
				<h1 className="text-4xl">My Shopping List</h1><br/>
				<StudentInfo/>
			</section>
			<section className="max-w-5xl w-full items-start space-y-5 justify-between lg:flex">
				<ItemList items={items} onItemSelect={handleSelectItem}/>
				<MealIdeas ingredient={selectedItem}/>
				<NewItem onAddItem={handleAddItem}/>
			</section>
			<section className="max-w-5xl sticky bottom-10 items-center justify-between lg:flex">
				<Home/>
			</section>
		</main>
	)
}