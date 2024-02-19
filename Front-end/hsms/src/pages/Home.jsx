import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/Home.scss";
const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontSize: "18px", // Increased font size
};
function Home() {
  const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showNoResults, setShowNoResults] = useState(false);
    const [filters, setFilters] = useState({
        searchString: '',
        propertyType: '',
        carpetAreaRange: [0, 10000],
        rentRange: [0, 50000],
        isAvailable: false
    });
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [allProperties, setAllProperties] = useState([]);

    useEffect(() => {
        fetchData();
    }, [searchPerformed, filters]);

    const fetchData = async () => {
        try {
            let url = 'http://localhost:8080/home';
            let queryString = '';
            if (filters.searchString) {
                queryString += `?searchString=${encodeURIComponent(filters.searchString)}`;
            }
            if (filters.propertyType) {
                queryString += `${queryString ? '&' : '?'}propertyType=${encodeURIComponent(filters.propertyType)}`;
            }
            url += queryString;
            const response = await axios.get(url);
            let filteredResults = response.data;
            if (searchPerformed) {
                filteredResults = filterResults(filteredResults);
                setSearchResults(filteredResults);
                setShowNoResults(filteredResults.length === 0);
            } else {
                setAllProperties(response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const filterResults = (data) => {
        let filteredResults = data;
        if (searchQuery.trim() !== "") {
            filteredResults = filteredResults.filter(property =>
                property.city.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (filters.propertyType !== "") {
            filteredResults = filteredResults.filter(property => property.type === filters.propertyType);
        }
        filteredResults = filteredResults.filter(property => property.rent >= filters.rentRange[0] && property.rent <= filters.rentRange[1]);
        filteredResults = filteredResults.filter(property => property.area >= filters.carpetAreaRange[0] && property.area <= filters.carpetAreaRange[1]);
        if (filters.isAvailable) {
            filteredResults = filteredResults.filter(property => property.is_available === true);
        }
        return filteredResults;
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        setFilters({ ...filters, searchString: searchQuery });
        setSearchPerformed(true);
    };

    const handleResetFilters = () => {
        setFilters({
            searchString: '',
            propertyType: '',
            carpetAreaRange: [0, 10000],
            rentRange: [0, 50000],
            isAvailable: false
        });
    };

    const formatValue = (value) => {
        return new Intl.NumberFormat().format(value);
    };

  return (
    <div>
      <div className="homepage">
      <div className="container">
      

       
      </div>
    </div>
    <div className="container d-flex">
 <div className="search-filter-section col-md-2">
          <form className="search-box" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search by city"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>

          <div className="filter-section">
            <h2>Filter By</h2>
            <label htmlFor="propertyType">Type of Property:</label>
            <select
              id="propertyType"
              value={filters.propertyType}
              onChange={(e) =>
                setFilters({ ...filters, propertyType: e.target.value })
              }
            >
              <option value="">Any</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="1RK">1RK</option>
            </select>
            <label>
              Carpet Area Range: {formatValue(filters.carpetAreaRange[0])} -{" "}
              {formatValue(filters.carpetAreaRange[1])} sqft
            </label>
            <input
              type="range"
              min="0"
              max="10000"
              value={filters.carpetAreaRange[0]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  carpetAreaRange: [
                    parseInt(e.target.value),
                    filters.carpetAreaRange[1],
                  ],
                })
              }
            />
            <input
              type="range"
              min="0"
              max="10000"
              value={filters.carpetAreaRange[1]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  carpetAreaRange: [
                    filters.carpetAreaRange[0],
                    parseInt(e.target.value),
                  ],
                })
              }
            />
            <label>
              Rent Range: Rs. {formatValue(filters.rentRange[0])} - Rs.{" "}
              {formatValue(filters.rentRange[1])}
            </label>
            <input
              type="range"
              min="0"
              max="100000"
              value={filters.rentRange[0]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  rentRange: [parseInt(e.target.value), filters.rentRange[1]],
                })
              }
            />
            <input
              type="range"
              min="0"
              max="100000"
              value={filters.rentRange[1]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  rentRange: [filters.rentRange[0], parseInt(e.target.value)],
                })
              }
            />
            <label>
              <input
                type="checkbox"
                checked={filters.isAvailable}
                onChange={(e) =>
                  setFilters({ ...filters, isAvailable: e.target.checked })
                }
              />
              is not Available?
            </label>
            <button
              type="button"
              onClick={handleResetFilters}
              className="reset-button"
            >
              Reset Filters
            </button>
          </div>
        </div>
        <div className="col-md-10">
        <div className="right-panel">
          <h2
            style={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "grey",
            }}
          >
            ALL AVAILABLE FLATS :{" "}
          </h2>
          <div className="all-properties">
            {(searchPerformed ? searchResults : allProperties).map(
              (property) => (
                <div
                  key={property.id}
                  className="property-tile"
                  style={{ backgroundColor: "yellow" }}
                >
                  <p><strong>Property Area:</strong>{property.area}</p>
                  {/* <p>
                    <strong>City:</strong> {property.city}
                  </p> */}
                  <p>
                    <strong>Type:</strong> {property.type}
                  </p>
                  <p>
                    <strong>Rent:</strong> Rs. {formatValue(property.rent)}
                  </p>
                  <p>
                    <strong>Availability:</strong>{" "}
                    {property.is_available ? "Not Available" : "Available"}
                  </p>
                  <Link to={`/property/${property.id}`}>View Details</Link>
                </div>
              )
            )}
            {showNoResults && (
              <p className="no-results">
                No properties found. Try different filters!
              </p>
            )}
          </div>
        </div>
        </div>
    </div>
     <div className="container">
     <div className="website-info">
        <h2>Welcome to Our Property Portal</h2>
        <p>
          Explore and find your dream home! Whether you want to put up your
          property for sale or book an apartment, our platform provides a
          seamless experience. Users can search based on location, city,
          localities, pincode, and apply filters like rent range, area, and
          availability. Create an account, login, and discover various property
          options put up by other users.
        </p>
        <h3>On this Webiste You can</h3>
        <div>
          <ul>
            <li>Create Your free account</li>
            <li>Login with your existing account</li>
            <li>Search Properties in India</li>
            <li>View Details of any Property</li>
            <li>
              Filter based on different criterias such as Rent Range, Area, etc.
            </li>
            <li>book properties directly through the website</li>
            <li>
              Contact Real Estate Agents for more information about the property
            </li>
          </ul>
        </div>
        <div>
          <h4>
            First time on the site ??{" "}
            <a href="/signup" style={linkStyle}>
              Get Registered
            </a>
          </h4>

          <ul>
            <li>
              Have some properties to showcase?
              <a href="/signup" style={linkStyle}>
                Register as a Secretary!
              </a>
            </li>
            <li>
              Want to buy/view property?{" "}
              <a href="/signup" style={linkStyle}>
                Click here to register as a User!
              </a>
            </li>
            <li>
              Want to filter as per your budget, area and other criteria?
              <a href="/home" style={linkStyle}>
                Apply Filters
              </a>
            </li>
            <li>
              Want to view All available property?
              <a href="/home/seeAll" style={linkStyle}>
                Go here!
              </a>
            </li>
            <li>
              Already a User ?{" "}
              <a href="/login" style={linkStyle}>
                Welcome Back!
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>  
    </div>
    
  );
}

export default Home;