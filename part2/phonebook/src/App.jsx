import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then((newPersons) => {
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

    const existingPerson = persons.find((v) => v.name === newName);
    if (existingPerson !== undefined) {
      const shouldUpdate = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (shouldUpdate) {
        personService
          .update(existingPerson.id, {
            ...existingPerson,
            number: newNumber,
          })
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) =>
                p.id === existingPerson.id ? returnedPerson : p
              )
            );
          });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      personService
        .create(newPerson)
        .then((returnedPerson) => setPersons([...persons, returnedPerson]));

      setNewName("");
      setNewNumber("");
    }
  };

  const deleteContact = (id) => {
    console.log("deleteContact with id", id);
    const personToDelete = persons.find((person) => person.id === id);

    const shouldDelete = window.confirm(`Delete ${personToDelete.name} ?`);
    if (shouldDelete) {
      personService.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
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
      <PersonList
        persons={persons}
        filter={filter}
        handleDelete={deleteContact}
      />
    </div>
  );
};

export default App;
