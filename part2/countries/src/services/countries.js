const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = () => {
  return fetch(`${baseUrl}/all`).then((resp) => resp.json());
};

const getCountryDetails = (countryName) => {
  return fetch(`${baseUrl}/name/${countryName}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(`HTTP error! Status: ${resp.status}`);
    }
    return resp.json();
  });
};

export default { getAllCountries, getCountryDetails };
