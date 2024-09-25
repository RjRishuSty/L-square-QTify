import React, { useRef, useState } from "react";
import styles from "./Search.module.css";
import SearchItem from "../SearchItem/SearchItem";
import SearchIcon from "../SearchIcon/SearchIcon";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

function Search({ allAlbumsData, placeholder }) {
  // console.log("Search",allAlbumsData)
  const [filterData, setFilterData] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      setFilterData(null);
      return;
    }
    const regEx = new RegExp(`^${e.target.value}`, "i");
    const data = allAlbumsData.filter(
      (item) => item.title.match(regEx) !== null
    );
    setFilterData(data);
  };

  const inputRef = useRef(null);
  const cleanSearchInput = () => {
    console.log("Clicked");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setSearchValue("");
    setFilterData(null);
  };

  const OnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div style={{ position: "relative" }}>
      <form className={styles.wrapper} onSubmit={OnSubmit}>
        <div>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            ref={inputRef}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          {!searchValue ? ( 
            <button className={styles.searchButton} type="submit">
              <SearchIcon />
            </button>
          ) : (
            <button
              className={styles.closebtn}
              type="submit"
              onClick={cleanSearchInput}
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </form>
      <div
        className={
          !filterData
            ? `${styles.searchResults} ${styles.hide}`
            : `${styles.searchResults}`
        }
      >
        {filterData && filterData.length ? (
          filterData.map((item) => {
            return (
              <Link
                to={`/albums/${item.slug}`}
                style={{ textDecoration: "none" }}
              >
                <SearchItem album={item} />
              </Link>
            );
          })
        ) : (
          <Typography className={styles.text}> No Albums Found</Typography>
        )}
      </div>
    </div>
  );
}

export default Search;
