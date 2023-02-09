import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "../../api";
import Geoweather from "../geo-weather/geo-weather";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [searchTerm, setSearchTerm] = useState(true);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode} `,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
    setSearchTerm(false);
  };
  return (
    <div>
      <div>
        <div>
          <AsyncPaginate
            placeholder="Search for City ..."
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
          />
        </div>
        <div>
          {searchTerm && (
            <div>
              <Geoweather />
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default Search;
