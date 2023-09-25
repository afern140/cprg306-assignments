import Link from 'next/link'
import StudentInfo from './studentinfo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 class="text-4xl">CPRG 306: Web Development 2 - Assignments</h1><br/>
        <StudentInfo/><br/>
        <h2 class="text-3xl">Weeks</h2><br/>
        <li class="bg-[#759fbcff] p-4 rounded"><Link href="/week2">Week 2</Link></li>
      </section>
    </main>
  )
}
