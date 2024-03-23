// Name the component as the jsx file
function Hello(props) {
    const { name, age, emoji } = props
    return (
        <div>
            <h1>Hello {name} {emoji}! You are {age} </h1>
        </div>
    );
    }

export default Hello;
