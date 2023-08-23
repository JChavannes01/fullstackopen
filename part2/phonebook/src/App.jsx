import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/persons")
      .then((resp) => resp.json())
      .then((newPersons) => {
        console.log(newPersons);
        setPersons(newPersons);
      });
  }, []);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const addContact = (event) => {
    event.preventDefault();

    if (persons.find((v) => v.name === newName) !== undefined) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handleChange={handleFilterChange} />

      <h2>Add new</h2>
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        name={newName}
        number={newNumber}
        handleSubmit={addContact}
      />

      <h2>Numbers</h2>
      <PersonList persons={persons} filter={filter} />
    </div>
  );
};

export default App;
