import Item from "./item"

export default function ItemList(){
    const item1 = {
        name: "Milk, 4L 🥛",
        quantity: 1,
        category: "Dairy",
      };
       
      const item2 = {
        name: "Bread 🍞",
        quantity: 2,
        category: "Bakery",
      };
       
      const item3 = {
        name: "Eggs, Dozen 🥚",
        quantity: 2,
        category: "Dairy",
      };
       
      const item4 = {
        name: "Bananas 🍌",
        quantity: 6,
        category: "Produce",
      };
       
      const item5 = {
        name: "Broccoli 🥦",
        quantity: 3,
        category: "Produce",
      };
       
      const item6 = {
        name: "Chicken Breasts, 1kg 🍗",
        quantity: 1,
        category: "Meat",
      };
       
      const item7 = {
        name: "Pasta Sauce 🍝",
        quantity: 3,
        category: "Canned Goods",
      };
       
      const item8 = {
        name: "Spaghetti, 454g 🍝",
        quantity: 2,
        category: "Dry Goods",
      };
       
      const item9 = {
        name: "Toilet Paper, 12 Pack 🧻",
        quantity: 1,
        category: "Household",
      };
       
      const item10 = {
        name: "Paper Towels, 6 Pack",
        quantity: 1,
        category: "Household",
      };
       
      const item11 = {
        name: "Dish Soap 🍽️",
        quantity: 1,
        category: "Household",
      };
       
      const item12 = {
        name: "Hand Soap 🧼",
        quantity: 4,
        category: "Household",
      };

      const itemsArray = new Array(item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12);
      const displayItemsArray = new Array();

      let displayItem = "";
      for (let x of itemsArray){
        displayItem = <Item name={x.name} quantity={x.quantity} category={x.category}/>;
        displayItemsArray.push(displayItem);
      }

      return(
        <section>
            <ul>
                {displayItemsArray.map((item) => (<li>{item}</li>))}
            </ul>
        </section>
      )
}