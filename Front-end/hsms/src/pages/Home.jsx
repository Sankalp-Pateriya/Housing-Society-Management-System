import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/Home.scss";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [carpetAreaRange, setCarpetAreaRange] = useState([0, 10000]);
  const [rentRange, setRentRange] = useState([0, 50000]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false); // State to track if search is performed

  useEffect(() => {
    if (searchPerformed) {
      fetchData();
    }
  }, [searchPerformed]);

  const fetchData = async () => {
    try {
      // Check if searchQuery is empty
      if (searchQuery.trim() === "") {
        setShowNoResults(false);
        setSearchResults([]);
        return;
      }

      const response = await axios.get("http://localhost:8080/home", {
        params: {
          searchElement: searchQuery,
          propertyType,
          minCarpetArea: carpetAreaRange[0],
          maxCarpetArea: carpetAreaRange[1],
          minRent: rentRange[0],
          maxRent: rentRange[1],
          isAvailable,
        },
      });

      setSearchResults(response.data);
      setShowNoResults(response.data.length === 0);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setSearchPerformed(true); // Set searchPerformed to true when search is submitted
  };

  const formatValue = (value) => {
    return new Intl.NumberFormat().format(value);
  };

  return (
    <div className="homepage">
      <div className="container">
        <div className="search-filter-section">
          <form className="search-box" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search by area, city, or pincode"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
          </form>

          <div className="filter-section">
            <h2>Filter By</h2>
            <label htmlFor="propertyType">Type of Property:</label>
            <select
              id="propertyType"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Any</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="1RK">1RK</option>
            </select>
            <label>
              Carpet Area Range: {formatValue(carpetAreaRange[0])} -{" "}
              {formatValue(carpetAreaRange[1])} sqft
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              value={carpetAreaRange[0]}
              onChange={(e) =>
                setCarpetAreaRange([
                  parseInt(e.target.value),
                  carpetAreaRange[1],
                ])
              }
            />
            <input
              type="range"
              min="0"
              max="10000"
              value={carpetAreaRange[1]}
              onChange={(e) =>
                setCarpetAreaRange([
                  carpetAreaRange[0],
                  parseInt(e.target.value),
                ])
              }
            />
            <label>
              Rent Range: Rs. {formatValue(rentRange[0])} - Rs.{" "}
              {formatValue(rentRange[1])}
            </label>
            <input
              type="range"
              min="0"
              max="50000"
              value={rentRange[0]}
              onChange={(e) =>
                setRentRange([parseInt(e.target.value), rentRange[1]])
              }
            />
            <input
              type="range"
              min="0"
              max="50000"
              value={rentRange[1]}
              onChange={(e) =>
                setRentRange([rentRange[0], parseInt(e.target.value)])
              }
            />
            <label>
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={(e) => setIsAvailable(e.target.checked)}
              />
              is Available?
            </label>
          </div>
        </div>

        {/* Only show search results if search is performed */}
        {searchPerformed && searchQuery.trim() !== "" && (
          <div className="search-results-section">
            <h2>Search Results</h2>
            {showNoResults && <p className="no-results">No results matched.</p>}
            <div className="search-results">
              <ul>
                {searchResults.map((property) => (
                  <li key={property.id} className="search-result-item">
                    <Link
                      to={`/property/${property.id}`}
                      className="search-result-link"
                    >
                      <div className="search-result-content">
                        <h3>{property.area}</h3>
                        <p>
                          {property.city}, {property.pincode}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <Link to="/viewproperty">
          {/* <img src={house} alt="House" width="40%" height="40%" /> */}
        </Link>
      </div>
    </div>
  );
}

export default Home;
