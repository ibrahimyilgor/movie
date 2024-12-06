import { useEffect } from "react";

import { Box } from "@mui/material";

import Table from "../components/Table";
import Filters from "../components/Filters";

import { useAppContext } from "../AppContext";

const styles = {
  root: {
    margin: 15,
  },
};

function Main() {
  document.title = `Movies`;

  const {
    setLoading,
    setRows,
    setTotalRows,
    debouncedPage,
    debouncedSearchText,
    year,
    type,
  } = useAppContext();

  useEffect(() => {
    const fetchRows = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}` +
            (debouncedSearchText?.length > 0
              ? `&s=${debouncedSearchText}`
              : "") +
            (type ? `&type=${type}` : "") +
            (year ? `&y=${year}` : "") +
            `&page=${debouncedPage}`
        );
        const result = await response.json();
        setRows(result?.Search || []);
        setTotalRows(result?.totalResults || 0);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchRows();
  }, [
    debouncedPage,
    debouncedSearchText,
    type,
    year,
    setLoading,
    setRows,
    setTotalRows,
  ]);

  return (
    <Box style={styles.root}>
      <Filters />
      <Table />
    </Box>
  );
}

export default Main;
