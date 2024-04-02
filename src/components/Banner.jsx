import React, { useState } from "react";
import Select from "react-select";
import "./Banner.css";
import Catalog from "../data/catalog.json";
import FragranceModal from "./FragranceModal";

function Banner() {
  const [selectedFragrance, setSelectedFragrance] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const arr = [];
  const options = [];
  const frag_names = [];
  let frag_count = 0;

  const w23 = "Womens2023Winners";
  for (let i = 0; i < Catalog[w23].length; i++) {
    const currFragName = Catalog[w23][i]["name"];
    if (!frag_names.includes(currFragName) && currFragName != null) {
      options.push({ value: currFragName.toLowerCase(), label: currFragName });
      frag_count++;
    }
  }
  const m23 = "Mens2023Winners";
  for (let i = 0; i < Catalog[m23].length; i++) {
    const currFragName = Catalog[m23][i]["name"];
    if (!frag_names.includes(currFragName) && currFragName != null) {
      options.push({
        value: currFragName.toLowerCase(),
        label: currFragName,
      });
      frag_count++;
    }
  }

  const WGOAT = "Womens Best of All Time";
  for (let i = 0; i < Catalog[WGOAT].length; i++) {
    const currFragName = Catalog[WGOAT][i]["name"];
    if (!frag_names.includes(currFragName) && currFragName != null) {
      options.push({
        value: currFragName.toLowerCase(),
        label: currFragName,
      });
      frag_count++;
    }
  }

  const MGOAT = "Mens Best of All Time";
  for (let i = 0; i < Catalog[MGOAT].length; i++) {
    const currFragName = Catalog[MGOAT][i]["name"];
    if (!frag_names.includes(currFragName) && currFragName != null) {
      options.push({
        value: currFragName.toLowerCase(),
        label: currFragName,
      });
      frag_count++;
    }
  }

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid #ccc",
      borderRadius: "10px",
    }),
    option: (provided, state) => ({
      ...provided,
      color: "black",
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <div className="search-button-div">
        <button type="button" className="search-logo" onClick={props.handleSearch}>
          🔎
        </button>
      </div>
    );
  };

  const Placeholder = (props) => {
    return <div>{props.children || props.placeholder}</div>;
  };

  const customComponents = {
    DropdownIndicator,
    Placeholder,
  };

  const handleFragranceSelect = (selectedOption) => {
    const fragrance = Object.values(Catalog)
      .flat()
      .find((frag) => frag.name.toLowerCase() === selectedOption.value);
    if (fragrance) {
      const fragranceWithRating = {
        ...fragrance,
        rating: fragrance.rating || 0,
      };
      setSelectedFragrance(fragranceWithRating);
    }
  };

  const handleModalClose = () => {
    setSelectedFragrance(null);
  };

  const handleSearch = () => {};

  return (
    <div className="banner">
      <h1 className="welcome">Welcome to Our Website</h1>
      <p className="discover">Discover the latest fragrances and more.</p>

      <div>
        <Select
          className="search-container"
          options={options}
          components={customComponents}
          styles={customStyles}
          placeholder="Find fragrances..."
          onChange={handleFragranceSelect}
        />
      </div>

      <FragranceModal fragrance={selectedFragrance} onClose={handleModalClose} />
    </div>
  );
}

export default Banner;
