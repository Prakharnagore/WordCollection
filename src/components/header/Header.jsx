import React from "react";
import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";

import "./Header.css";
import categories from "../../data/category";

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
  };

  const handleTextChange = (e) => {
    setWord(e.target.value);
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Collection"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="select"
            select
            label="Language"
            variant="standard"
            value={category}
            onChange={handleChange}
          >
            {categories.map((category) => {
              const { value, label } = category;
              return (
                <MenuItem key={label} value={label} label={label}>
                  {value}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            value={word}
            onChange={handleTextChange}
            label="Search Word"
            className="search"
            id="standard-basic"
            variant="standard"
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
