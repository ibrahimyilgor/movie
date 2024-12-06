import React, { useContext, useState } from "react";
import { useDebounce } from "./utils";

const AppContext = React.createContext({});

export default AppContext;

export const AppContextProvider = ({ children }) => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);

  const [page, setPage] = useState(1);
  const debouncedPage = useDebounce(page, 500);

  const [title, setTitle] = useState("Pokemon");
  const debouncedSearchText = useDebounce(title, 500);

  const [type, setType] = useState();
  const [year, setYear] = useState();

  return (
    <AppContext.Provider
      value={{
        rows,
        setRows,
        loading,
        setLoading,
        totalRows,
        setTotalRows,
        page,
        setPage,
        debouncedPage,
        title,
        setTitle,
        debouncedSearchText,
        type,
        setType,
        year,
        setYear,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
