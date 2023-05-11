import { useEffect, useState } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const CountryCard = ({
  name,
  capital,
  area,
  languages,
  src,
  alt,
  lat,
  lon,
}) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat,
          lon,
          lang: "en",
          appid: api_key,
        },
      })
      .then((res) => {
        setWeather(res.data);
      });
  }, []);
  console.log(weather);
  return (
    <>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>area {area}</p>
      <h3>languages</h3>
      <ul>
        {Reflect.ownKeys(languages).map((item, index) => {
          return <li key={index}>{languages[item]}</li>;
        })}
      </ul>
      <img src={src} alt={alt} />
      <h3>Weather in {capital}</h3>
      <p>temperature {(weather?.main.feels_like - 273).toFixed(2)} Celcius</p>
      <p>Wind {weather?.wind.speed} mph</p>
    </>
  );
};

export default function Display({ countries, changeShow }) {
  //   console.log(countries[0]);
  console.log(api_key);
  return (
    <div>
      {countries.length > 10 && <p>Too many matches, specify another filter</p>}
      {countries.length <= 10 &&
        countries.length > 1 &&
        countries.map((item) => {
          console.log(item);
          return (
            <p key={item.ccn3}>
              {item.name.common}{" "}
              <button
                value={item.name.common}
                onClick={() => changeShow(item.name.common)}
              >
                show
              </button>
            </p>
          );
        })}
      {countries.length === 1 && (
        <CountryCard
          name={countries[0].name.common}
          capital={countries[0].capital}
          area={countries[0].area}
          languages={countries[0].languages}
          src={countries[0].flags.svg ?? countries[0].flags.png}
          alt={countries[0].flags.alt}
          lat={countries[0].capitalInfo.latlng[0]}
          lon={countries[0].capitalInfo.latlng[1]}
        />
      )}
    </div>
  );
}
