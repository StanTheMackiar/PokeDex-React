import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({children}) => {

    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    const handleChange = (e) => {
        setPage(1);
        setSearch(e.target.value);
      };

    const data = {search, setSearch, page, setPage, handleChange};

    return (
        <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
    )
}

export { SearchProvider }
export default SearchContext