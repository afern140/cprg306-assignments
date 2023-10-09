import Link from "next/link";

export default function StudentInfo(){
    return(
        <section className="bg-[#1B5299] p-4 rounded">
            <p>Name: Angelo Fernando</p>
            <p>Course Section: CPRG-306B</p>
            <p>GitHub Link: <Link href="https://github.com/afern140">afern140</Link></p>
        </section>
    )
}