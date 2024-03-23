import { useState } from "react";

export default function Form(){
    const [name, setName] = useState("")
    function handleInput(e){
        setName(e.target.value);
    }
    return (
        <div>
            <form action="">
                <input onChange={(e)=> handleInput(e)} type="text" value={name}/>
            </form>
        </div>
    )
}