const PersonList = ({ persons, filter, handleDelete }) => (
  <>
    {persons
      .filter(({ name }) => filter === "" || name.search(filter) >= 0)
      .map(({ id, name, number }) => (
        <div key={name}>
          {name} {number}{" "}
          <button onClick={() => handleDelete(id)}>delete</button>
        </div>
      ))}
  </>
);

export default PersonList;
