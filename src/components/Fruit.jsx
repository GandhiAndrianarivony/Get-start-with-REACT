export default function Fruit(props){
    const { fruit } = props
    return (
        <>
            {
                // fruit.price > 5 
                // ? (
                //     <li>{fruit.emoji} {fruit.name} | Price: {fruit.price}{fruit.currency}</li>
                // ): ""
                <li> 
                    {fruit.emoji} {fruit.name} | Price: {fruit.price}{fruit.currency} | {fruit.soldout? "Soldout": ""}
                </li>
            }
        </>
    );
}