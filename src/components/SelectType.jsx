import * as React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useAppContext } from "../AppContext";

const styles = {
  root: { minWidth: 120 },
  menuTitle: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
};

export default function SelectType() {
  const { type, setType } = useAppContext();

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={styles.root}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="type-label-id"
          id="type-id"
          value={type || ""}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem
            key={`select-type-null`}
            value={""}
            style={styles.menuTitle}
          >
            {"Clear"}
          </MenuItem>
          <MenuItem key={`select-type-movie`} value={"movie"}>
            {"Movie"}
          </MenuItem>
          <MenuItem key={`select-type-series`} value={"series"}>
            {"Series"}
          </MenuItem>
          <MenuItem key={`select-type-episode`} value={"episode"}>
            {"Episode"}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
