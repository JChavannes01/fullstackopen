import { useState, useEffect, useMemo } from "react";
import countryService from "./services/countries";
import SearchBar from "./components/SearchBar";
import CountryDetails from "./components/CountryDetails";

const CountryList = ({ countries, filter, selectCountry }) => {
  if (filter === "") return <div>Enter (partial) country name to search.</div>;

  if (countries.length === 0) {
    return <div>No match found, try a different filter.</div>;
  } else if (countries.length > 10) {
    return <div>Too many matches, refine your search term.</div>;
  } else {
    return (
      <div>
        {countries.map((country) => (
          <div key={country}>
            {country}{" "}
            <button onClick={() => selectCountry(country)}>show</button>
          </div>
        ))}
      </div>
    );
  }
};

function App() {
  const [filter, setFilter] = useState("");
  const [allCountries, setAllCountries] = useState(null);
  const [countryDetails, setCountryDetails] = useState(null);

  const matchingCountries = useMemo(() => {
    if (allCountries === null) return [];
    return allCountries.filter((country) =>
      country.toLowerCase().includes(filter.toLowerCase())
    );
  }, [allCountries, filter]);

  useEffect(() => {
    console.log("Fetching all countries...");
    countryService.getAllCountries().then((countries) => {
      console.log(`Total of ${countries.length} countries loaded`);
      setAllCountries(countries.map((c) => c.name.common));
    });
  }, []);

  useEffect(() => {
    console.log(matchingCountries);
    if (matchingCountries.length === 1) {
      const countryToLoad = matchingCountries[0];

      console.log(`Loading details for ${countryToLoad}`);
      countryService.getCountryDetails(countryToLoad).then((country) => {
        console.log("Loading details complete", country);
        setCountryDetails(country);
      });
    } else {
      setCountryDetails(null);
    }
  }, [matchingCountries]);

  const handleFilterChange = (event) => setFilter(event.target.value);

  return (
    <>
      <SearchBar value={filter} handleChange={handleFilterChange} />
      {countryDetails ? (
        <CountryDetails country={countryDetails} />
      ) : (
        <CountryList
          countries={matchingCountries}
          filter={filter}
          selectCountry={setFilter}
        />
      )}
    </>
  );
}

export default App;
