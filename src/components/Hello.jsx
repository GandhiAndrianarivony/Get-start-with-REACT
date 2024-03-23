// Name the component as the jsx file
function Hello(props) {
    let { name, age } = props
    return (
        <div>
            <h1>Hello {name}! You are {age} </h1>
        </div>
    );
    }

export default Hello;
