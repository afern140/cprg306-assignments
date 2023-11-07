"use client"

import { useState} from "react"
import { useUserAuth } from "../_utils/auth-context";
import Home from '@/app/home'
import StudentInfo from '@/app/studentinfo'
import ItemList from './item-list'
import NewItem from './new-item'
import itemsData from "./items"
import MealIdeas from "./meal-ideas"
import Auth from "../auth";

export default function Main() {
	const [items, setItems] = useState(itemsData);
	const [selectedItem, setSelectedItem] = useState(null);
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
	const handleAddItem = (item) => {setItems((items) => [...items, item]);};
	const handleSelectItem = (item) => {setSelectedItem(item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, ''));}
	const handleSignIn = async () => {await gitHubSignIn();}
	const handleSignOut = async () => {await firebaseSignOut();}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{user ? (
				<>
				<header className="sticky top-10">
					<Auth user={user} onSignInClick={handleSignIn} onSignOutClick={handleSignOut}/>
				</header>
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
				</>
			) : (
				<>
					<h2 className="text-2xl">Welcome, Please Login to Acces the Shopping List</h2>
					<Auth user={user} onSignInClick={handleSignIn} onSignOutClick={handleSignOut}/>
				</>
			)}
		</main>
	)
}