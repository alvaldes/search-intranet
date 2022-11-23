import { createContext, useState } from 'react';

const SearchContext = createContext({
  isSearching: false,
  searchResults: [],
  saveData: (dataArray) => {},
  startSearch: () => {},
});

export const SearchContextProvider = (props) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const saveDataHandler = (dataArray) => {
    setSearchResults(dataArray);
    setIsSearching(false);
  };

  const startSearchHandler = () => {
    setIsSearching(true);
  };

  const context = {
    isSearching: isSearching,
    searchResults: searchResults,
    saveData: saveDataHandler,
    startSearch: startSearchHandler,
  };

  return (
    <SearchContext.Provider value={context}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
