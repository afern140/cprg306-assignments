export default function Item({name, quantity, category}){
    return(
        <ul className="bg-[#30a143fd] p-4 rounded">
            <li>{name}</li>
            <li>Buy {quantity} in the {category} department</li>
        </ul>
    )
}