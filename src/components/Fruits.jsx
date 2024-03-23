import Fruit from "./Fruit";

export default function Fruits() {
    // const fruits = ["Apple", "Banana", "Orange", "Pineapple",]
    const fruits = [
        {name:"Apple", price: 10, currency: "$", emoji: "🍏", soldout: false},
        {name:"Banana", price: 5, currency: "$", emoji: "🍌", soldout: true},
        {name:"Orange", price: 7, currency: "$", emoji: "🍊", soldout: false},
        {name:"Pineapple", price: 11, currency: "$", emoji: "🍍", soldout: true},
    ]
    return (
        <div>
            <ul>
                {
                    fruits.map(
                        fruit => (
                            <Fruit key={fruit.name} fruit={fruit}/>
                        )
                    )
                }
            </ul>
        </div>
    );
}