const Person = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <li className="person" key={id}>
            <h4>{name}</h4>
            <h4>{age} years</h4>
            <img src={image} alt={name} className="img" />
          </li>
        );
      })}
    </>
  );
};

export default Person;
