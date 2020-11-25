import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import { searchFunc } from "../functions/searchFunc";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  search: {
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function SearchComponent() {
  const classes = useStyles();
  const [textSearch, setTextSearch] = useState("");
  let history = useHistory();

  const ClickSearch = async () => {
    console.log(textSearch);
    history.push(`/search/${textSearch}`);
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <IconButton
          aria-label="toggle password visibility"
          style={{ color: "white" }}
          size="small"
          onClick={() => history.push(`/search/${textSearch}`)}
        >
          <SearchIcon />
        </IconButton>
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          setTextSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchComponent;
