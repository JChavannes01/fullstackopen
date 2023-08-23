const PersonList = ({ persons, filter }) => (
  <>
    {persons
      .filter(({ name }) => filter === "" || name.search(filter) >= 0)
      .map(({ name, number }) => (
        <div key={name}>
          {name} {number}
        </div>
      ))}
  </>
);

export default PersonList;
