function handleClick(){
    console.log("Button clicked");
}

export default function Message() {
    return <div>
        <button onClick={handleClick}>Get Message</button>
    </div>
}