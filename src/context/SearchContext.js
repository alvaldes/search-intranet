import { createContext, useState } from 'react';

const SearchContext = createContext({
  isSearching: false,
  searchResults: [],
  currentPage: 1,
  saveData: (dataArray) => {},
  startSearch: () => {},
  setCurrentPage: (pageNumber) => {},
});

export const SearchContextProvider = (props) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const saveDataHandler = (dataArray) => {
    setSearchResults(dataArray);
    setIsSearching(false);
  };

  const startSearchHandler = () => {
    setIsSearching(true);
    setCurrentPage(1);
  };

  const setCurrentPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const context = {
    isSearching: isSearching,
    searchResults: searchResults,
    currentPage: currentPage,
    saveData: saveDataHandler,
    startSearch: startSearchHandler,
    setCurrentPage: setCurrentPageHandler,
  };

  return (
    <SearchContext.Provider value={context}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
