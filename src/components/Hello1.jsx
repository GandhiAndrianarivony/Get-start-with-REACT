function Hello1(props) {
    const { person } = props;
    return (
        <div>
            <h2>{person.message} {person.name} {person.emoji}! You're {person.age} </h2>
            <h1>Seat Numbers:  {person.seatNumbers}</h1>
        </div>
    );
}

export default Hello1;