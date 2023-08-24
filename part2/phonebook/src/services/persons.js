const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return fetch(baseUrl).then((resp) => resp.json());
};

const create = (personObject) => {
  return fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(personObject),
    headers: { "content-type": "application/json" },
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }
    return resp.json();
  });
};

const update = (id, personObject) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(personObject),
    headers: { "content-type": "application/json" },
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }
    return resp.json();
  });
};

const remove = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }
    return resp.json();
  });
};

export default { getAll, create, update, remove };
