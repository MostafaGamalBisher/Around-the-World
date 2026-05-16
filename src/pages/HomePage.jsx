import ShowMessage from './../components/ShowMessage';
import SearchInput from '../components/SearchInput';
import RegionMenu from './../components/RegionMenu';
import CountryList from './../components/CountryList';
import { useFetchData } from '../useFetchData';

const HomePage = () => {
  const {
    result,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    isError,
  } = useFetchData();

  return (
    <>
      {isError && <ShowMessage message="Something Went Wrong" />}
      {isLoading && <ShowMessage message="Loading Countries Data..." />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
};

export default HomePage;
