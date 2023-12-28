import Person from "./Person";

const List = ({ people }) => {
  return (
    <ul>
      <Person people={people} />
    </ul>
  );
};

export default List;
