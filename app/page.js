import Link from 'next/link'
import StudentInfo from './studentinfo'

export default function Home(){
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1><br/>
        <StudentInfo/><br/>
        <h2 className="text-3xl">Weeks</h2><br/>
        <ul className="bg-[#5ebce4] p-4 rounded">
          <li><Link href="/week2">Week 2</Link></li>
          <li><Link href="/week3">Week 3</Link></li>
          <li><Link href="/week4">Week 4</Link></li>
          <li><Link href="/week5">Week 5</Link></li>
		  <li><Link href="/week6">Week 6</Link></li>
        </ul>
      </section>
    </main>
  )
}
