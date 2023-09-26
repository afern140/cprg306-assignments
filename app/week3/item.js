export default function Item({name, quantity, category}){
    return(
        <section>
            <ul className="bg-[#589765] p-4 rounded">
                <li>{name}</li>
                <li>Buy {quantity} in the {category} department</li>
            </ul><br/>
        </section>
    )
}