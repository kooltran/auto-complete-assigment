import React, { useState } from "react";
import { AutoComplete } from "antd";
import JSONP from "jsonp";

const MyAutoComplete = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = searchText => {
    const url = `//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${searchText}`;
    if (searchText.length !== "") {
      JSONP(url, (err, data) => {
        const searchRes = data[1];
        const retrievedSearchTerms = searchRes.map(res => ({ value: res[0] }));
        if (err) return err;
        setOptions(retrievedSearchTerms);
      });
    }
  };

  return (
    <AutoComplete
      style={{ width: 200 }}
      options={options}
      onSearch={handleSearch}
      notFoundContent="Not Found"
      data-testid="auto-complete-input"
      placeholder="Try VietNam"
    />
  );
};

export default MyAutoComplete;
