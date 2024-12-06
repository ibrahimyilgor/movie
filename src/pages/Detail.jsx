import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { CircularProgress } from "@mui/material";

import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import NotFoundPage from "./NotFound";
import { useAppContext } from "../AppContext";

const styles = {
  root: {
    height: "100vh",
    width: "100vw ",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    padding: 3,
  },
  detailedList: {
    marginBottom: "5px",
    marginLeft: "10%",
    marginRight: "10%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  },
  circularProgress: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  },
  listItemTitle: {
    flexBasis: "33.33%",
  },
  listItemContent: {
    flexBasis: "66.66%",
  },
  row: { display: "flex", flexDirection: "row" },
};

export default function Detail() {
  const { movieId } = useParams();
  const { setTitle, setYear, setType, setPage } = useAppContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setTitle("Pokemon");
    setYear();
    setType();
    setPage(1);
  }, [movieId, setPage, setYear, setTitle, setType]);

  useEffect(() => {
    const fetchRows = async () => {
      try {
        if (movieId) {
          document.title = `Movies - #${movieId}`;
          setLoading(true);
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${movieId}&plot=short`
          );
          const result = await response.json();
          if (result?.Error?.length > 0) {
            setError(true);
          }
          setData(result || {});
          setLoading(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchRows();
  }, [movieId]);

  return error ? (
    <NotFoundPage />
  ) : loading ? (
    <Box sx={styles.circularProgress}>
      <CircularProgress />
    </Box>
  ) : (
    <Box sx={styles.root}>
      <Box sx={styles.card}>
        <MovieCard img={data?.Poster} data={data} />
      </Box>

      <List sx={styles.detailedList} aria-label="movie-detail">
        <ListItem sx={styles.row}>
          <ListItemText primary="Released" sx={styles.listItemTitle} />
          <ListItemText
            primary={data?.Released || ""}
            sx={styles.listItemContent}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={styles.row}>
          <ListItemText primary="Runtime" sx={styles.listItemTitle} />
          <ListItemText
            primary={data?.Runtime || ""}
            sx={styles.listItemContent}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={styles.row}>
          <ListItemText primary="Genre" sx={styles.listItemTitle} />
          <ListItemText
            primary={data?.Genre || ""}
            sx={styles.listItemContent}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={styles.row}>
          <ListItemText primary="Director" sx={styles.listItemTitle} />
          <ListItemText
            primary={data?.Director || ""}
            sx={styles.listItemContent}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={styles.row}>
          <ListItemText primary="Actors" sx={styles.listItemTitle} />
          <ListItemText
            primary={data?.Actors || ""}
            sx={styles.listItemContent}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={styles.row}>
          <ListItemText primary="Director" sx={styles.listItemTitle} />
          <ListItemText
            primary={data?.Director || ""}
            sx={styles.listItemContent}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={styles.row}>
          <ListItemText primary="Language" sx={styles.listItemTitle} />
          <ListItemText
            primary={data?.Language || ""}
            sx={styles.listItemContent}
          />
        </ListItem>
        <Divider component="li" />
        <ListItem sx={styles.row}>
          <ListItemText primary="Country" sx={styles.listItemTitle} />
          <ListItemText
            primary={data?.Country || ""}
            sx={styles.listItemContent}
          />
        </ListItem>
      </List>
    </Box>
  );
}
