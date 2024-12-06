import * as React from "react";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import moment from "moment";

import { useAppContext } from "../AppContext";

const styles = {
  root: {
    minWidth: 120,
    marginRight: 1,
  },
  menuTitle: {
    fontStyle: "italic",
    fontWeight: "bold",
  },
};

export default function SelectYear() {
  const { year, setYear } = useAppContext();

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Box sx={styles.root}>
      <FormControl fullWidth>
        <InputLabel id="year-select-label">Year</InputLabel>
        <Select
          labelId="year-label-id"
          id="year-id"
          value={year || ""}
          label="Year"
          onChange={handleChange}
        >
          <MenuItem
            key={`select-year-null`}
            value={""}
            style={styles.menuTitle}
          >
            {"Clear"}
          </MenuItem>
          {Array.from({ length: moment().year() - 1800 + 1 }, (_, index) => {
            const year = moment().year() - index;
            return year;
          }).map((y) => {
            return (
              <MenuItem key={`select-year-${y}`} value={y}>
                {y}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
