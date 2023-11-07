"use client"

import Link from "next/link"
import { useUserAuth } from "./_utils/auth-context"
import Auth from "./auth";
import Home from "../home";

export default function Main() {
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
	const handleSignIn = async () => {await gitHubSignIn();}
	const handleSignOut = async () => {await firebaseSignOut();}

	return (
		<section className="flex min-h-screen flex-col items-center justify-between p-24">
			<header className="max-w-5xl w-full items-center justify-between lg:flex">
				{user ? (<h2 className="text-lg">Welcome, {user.displayName} ({user.email})</h2>) : (<h2 className="text-lg">Welcome, Please Login</h2>)}
				<Auth user={user} onSignInClick={handleSignIn} onSignOutClick={handleSignOut}/>
			</header>
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<section>
					{user ? (<Link href="week8/shopping-list" className="bg-[#30a143fd] hover:bg-[#1e5e28fd] active:bg-[#5e521efd] p-4 rounded">Shopping List</Link>) : (<h1 className="text-2xl">Access Denied, Login to View Pages</h1>)}
				</section>
				<section className="max-w-5xl sticky bottom-10 items-center justify-between lg:flex">
					<Home/>
				</section>
			</main>
		</section>
	)
}