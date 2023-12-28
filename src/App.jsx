import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [people, setPeople] = useState(data);

  const resetList = () => {
    setPeople([]);
  };

  return (
    <section className="container" style={{ margin: "30px auto" }}>
      <h3>There are {people.length} persons in the list</h3>
      <List people={people} />
      <button type="button" className="btn btn-block" onClick={resetList}>
        clear list
      </button>
    </section>
  );
};
export default App;
