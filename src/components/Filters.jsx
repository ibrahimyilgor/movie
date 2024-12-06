import * as React from "react";

import { Box, TextField } from "@mui/material";

import SelectYear from "./SelectYear";
import SelectType from "./SelectType";

import { useAppContext } from "../AppContext";

const styles = {
  root: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 1,
  },
  textField: {
    marginRight: 1,
  },
};

export default function Filters() {
  const { title, setTitle } = useAppContext();

  return (
    <Box sx={styles.root}>
      <TextField
        id="title"
        label="Name"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        sx={styles.textField}
      />
      <SelectYear />
      <SelectType />
    </Box>
  );
}
