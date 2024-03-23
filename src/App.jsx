import Hello1 from "./components/Hello1";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";


function App() {
  const person = {
    name: "Rob",
    message: "Hi",
    emoji: "🖐️",
    age: "31",
    seatNumbers: [1, 4, 7]
  }
  return (
    <div className="App">
      {/* <Hello 
        name="Solen" 
        age="31" 
        emoji="😘"
      />
      <Hello1
        person={person}
      />
      <Fruits/>
      <ConditionalComponent/> */}

      {/* EVENT HANDLING */}
      {/* <Message/> */}

      {/* STATE IN REACT */}
      {/* <Counter/> */}
      {/* HANDLE FORM INPUT */}
      <Form/>
    </div>
  )
}

export default App
