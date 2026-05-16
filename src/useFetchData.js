import { useEffect, useState } from 'react';

export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const FetchDataFromAPI = () => {
    let url =
      'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags';

    setIsLoading(true);

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (country) {
          setResult(data[0]);
        } else {
          setResult(data);
          setFilteredCountries(data);
          localStorage.setItem('countries', JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('countries'));

    if (data) {
      setResult(data);
      setFilteredCountries(data);
    } else {
      FetchDataFromAPI();
    }
  };

  useEffect(() => {
    if (country) {
      FetchDataFromAPI();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);

  return {
    result,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    isError,
  };
};
