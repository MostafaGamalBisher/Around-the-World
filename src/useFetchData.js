import { useEffect, useState } from 'react';

export const useFetchData = (country) => {
  const [result, setResult] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
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
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    result,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    isError,
  };
};
