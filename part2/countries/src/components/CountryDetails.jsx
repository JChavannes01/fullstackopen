const KeyFigures = ({ name, capital, area }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>capital {capital}</div>
      <div>area {area}</div>
    </div>
  );
};

const LanguageList = ({ languages }) => {
  return (
    <div>
      <h2>languages:</h2>

      <ul>
        {Object.entries(languages).map(([code, language]) => (
          <li key={code}>{language}</li>
        ))}
      </ul>
    </div>
  );
};

const Flag = ({ alt, url }) => (
  <div>
    <img src={url} alt={alt} />
  </div>
);

const CountryDetails = ({ country }) => {
  return (
    <div>
      <KeyFigures
        area={country.area}
        name={country.name.common}
        capital={country.capital[0]}
      />

      <LanguageList languages={country.languages} />

      <Flag alt={country.flags.alt} url={country.flags.png} />
    </div>
  );
};

export default CountryDetails;
