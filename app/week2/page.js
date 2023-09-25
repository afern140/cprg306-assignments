import Link from 'next/link'
import StudentInfo from '../studentinfo'

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section class="max-w-5xl w-full items-center justify-between lg:flex">
        <h1 class="text-4xl">My Shopping List</h1><br/>
        <StudentInfo/>
      </section>
      <p><Link href="./" class="bg-[#885053ff] p-4 rounded">Home</Link></p>
    </main>
  )
}
