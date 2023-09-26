import Link from "next/link";
import StudentInfo from '../studentinfo'
import ItemList from "./item-list";

export default function Main() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="max-w-5xl w-full items-center justify-between lg:flex">
          <h1 className="text-4xl">My Shopping List</h1><br/>
          <StudentInfo/>
        </section>
        <section className="max-w-5xl w-full items-center justify-between lg:flex">
            <ItemList/>
        </section>
        <section className="max-w-5xl items-center justify-between lg:flex">
            <p><Link href="./" className="bg-[#885053ff] p-4 rounded">Home</Link></p>
        </section>
      </main>
    )
  }