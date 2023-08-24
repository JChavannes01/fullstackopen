const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return fetch(baseUrl).then((resp) => resp.json());
};

const create = (personObject) => {
  return fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(personObject),
    headers: { "content-type": "application/json" },
  }).then((resp) => resp.json());
};

const update = (id, personObject) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(personObject),
    headers: { "content-type": "application/json" },
  }).then((resp) => resp.json());
};

const remove = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};

export default { getAll, create, update, remove };
