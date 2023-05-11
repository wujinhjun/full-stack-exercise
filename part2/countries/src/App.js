import { useEffect, useMemo, useState, useRef } from "react";
// import axios from "axios";
import Search from "./components/Search";
import Display from "./components/Display";
import networkService from "./service";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await networkService.getAll();
      setCountries(data);
    };

    fetchData();
  }, []);

  const handleQuery = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const changeShow = (name) => {
    setQuery(name);
  };

  return (
    <div>
      <Search query={query} handleQuery={handleQuery} />
      <Display
        countries={countries.filter((item) =>
          item.name.common.toLowerCase().includes(query.toLowerCase())
        )}
        changeShow={changeShow}
      />
    </div>
  );
};

export default App;
