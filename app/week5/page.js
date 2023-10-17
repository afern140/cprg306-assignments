import Link from 'next/link'
import Home from '../home'
import StudentInfo from '../studentinfo'
import ItemList from './item-list'
import NewItem from './new-item'

export default function Main() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="max-w-5xl w-full items-center justify-between lg:flex">
				<h1 className="text-4xl">My Shopping List</h1><br/>
				<StudentInfo/>
			</section>
			<section className="max-w-5xl w-full items-start space-y-5 justify-between lg:flex">
				<ItemList/>
				<NewItem/>
			</section>
			<section className="max-w-5xl sticky bottom-10 items-center justify-between lg:flex">
				<Home/>
			</section>
		</main>
	)
}