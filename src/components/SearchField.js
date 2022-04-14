import React, { useRef } from "react";
import { Button } from "react-bootstrap";

const SearchField = ({ onSearch, cid }) => {
  const searchRef = useRef();
  return (
    <div className="col-md-6 col-lg-6 col-11 mx-auto my-auto search-box p-2">
      <div className="input-group form-container">
        <input
          type="text"
          value={cid}
          onChange={() => onSearch(searchRef.current.value)}
          name="search"
          className="form-control search-input"
          placeholder="Search"
          autoFocus="autofocus"
          autoComplete="off"
          ref={searchRef}
        ></input>

        <div className="px-3">
          <Button
            onClick={() => onSearch(searchRef.current.value)}
            variant="outline-success"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
