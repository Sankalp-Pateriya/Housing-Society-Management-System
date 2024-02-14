import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import '../assets/Home.scss';
import house from '../images/house.png';
import banner from '../images/ds.jpg';

// Hardcoded property data 
const propertyData = [
    { id: 1, area: 'Area A', city: 'City X', pincode: '123456' },
    { id: 2, area: 'Area B', city: 'City Y', pincode: '234567' },
    { id: 3, area: 'Area C', city: 'City Z', pincode: '345678' },
    { id: 4, area: 'Area D', city: 'City W', pincode: '345609' },
];

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [recentSearches, setRecentSearches] = useState([]);
    const [showNoResults, setShowNoResults] = useState(false); // State to control showing "No results matched" message
    const [showMore, setShowMore] = useState(false); // State to control showing more search results

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a GET request to the Spring Boot backend endpoint
            const response = await axios.get(`http://localhost:8080/home`, {
                params: {
                    searchElement: searchQuery
                }
            });
            // Handle response data
            setSearchResults(response.data);
            // Add the search query to recent searches
            setRecentSearches(prevSearches => [searchQuery, ...prevSearches.slice(0, 2)]);
            // Show "No results matched" message if no results found
            setShowNoResults(response.data.length === 0);
            // Reset showMore state
            setShowMore(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const handleClearRecentSearches = () => {
        setRecentSearches([]);
        // Hide "No results matched" message when clearing recent searches
        setShowNoResults(false);
    };

    const handleShowMoreResults = () => {
        setShowMore(true);
    };

    return (
        <div className='homepage'>
            <div className='container'>
                {/* Search Box */}
                <form className="search-box" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search by area, city, or pincode"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button type="submit">Search</button>
                </form>

                {/* Display Recent Searches */}
                {recentSearches.length > 0 && (
                    <div className="recent-searches">
                        <h2>Recent Searches:</h2>
                        {recentSearches.map((query, index) => (
                            <p key={index}>{query}</p>
                        ))}
                        <button onClick={handleClearRecentSearches}>Clear Recent Searches</button>
                    </div>
                )}

                {/* Display "No results matched" message */}
                {showNoResults && <p>No results matched.</p>}

                {/* Display Search Results as Tiles */}
                {searchResults.length > 0 ? (
                    <div className="search-results">
                        {showMore
                            ? searchResults.map(property => (
                                <Link key={property.id} to={`/property/${property.id}`} className="search-result-tile">
                                    <div className="search-result-content">
                                        <h3>{property.area}</h3>
                                        <p>{property.city}, {property.pincode}</p>
                                    </div>
                                </Link>
                            ))
                            : searchResults.slice(0, 3).map(property => (
                                <Link key={property.id} to={`/property/${property.id}`} className="search-result-tile">
                                    <div className="search-result-content">
                                        <h3>{property.area}</h3>
                                        <p>{property.city}, {property.pincode}</p>
                                    </div>
                                </Link>
                            ))
                        }
                        {searchResults.length > 3 && !showMore && (
                            <button onClick={handleShowMoreResults}>More</button>
                        )}
                    </div>
                ) : null}

                {/* Banner */}
                <div className='banner-section'>
                    <img src={banner} alt="Banner" />
                </div>

                {/* Link to View Property Page */}
                <Link to='/viewproperty'>
                    <img src={house} alt="House" width="40%" height="40%" />
                </Link>

                {/* Display Current Time */}
                <h1 className='col-md-6 offset-md-3'>{new Date().toLocaleTimeString()}</h1>
            </div>
        </div>
    );
}

export default Home;
