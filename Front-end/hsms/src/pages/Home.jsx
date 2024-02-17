// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "../assets/Home.scss";

// function Home() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [showNoResults, setShowNoResults] = useState(false);
//   const [propertyType, setPropertyType] = useState("");
//   const [carpetAreaRange, setCarpetAreaRange] = useState([0, 10000]);
//   const [rentRange, setRentRange] = useState([0, 50000]);
//   const [isAvailable, setIsAvailable] = useState(false);
//   const [searchPerformed, setSearchPerformed] = useState(false); // State to track if search is performed

//   useEffect(() => {
//     if (searchPerformed) {
//       fetchData();
//     }
//   }, [searchPerformed]);

//   const fetchData = async () => {
//     try {
//       // Check if searchQuery is empty
//       if (searchQuery.trim() === "") {
//         setShowNoResults(false);
//         setSearchResults([]);
//         return;
//       }

//       const response = await axios.get("http://localhost:8080/home", {
//         params: {
//           searchElement: searchQuery,
//           propertyType,
//           minCarpetArea: carpetAreaRange[0],
//           maxCarpetArea: carpetAreaRange[1],
//           minRent: rentRange[0],
//           maxRent: rentRange[1],
//           isAvailable,
//         },
//       });

//       setSearchResults(response.data);
//       setShowNoResults(response.data.length === 0);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = async (e) => {
//     e.preventDefault();
//     setSearchPerformed(true); // Set searchPerformed to true when search is submitted
//   };

//   const formatValue = (value) => {
//     return new Intl.NumberFormat().format(value);
//   };

//   return (
//     <div className="homepage">
//       <div className="container">
//         <div className="search-filter-section">
//           <form className="search-box" onSubmit={handleSearchSubmit}>
//             <input
//               type="text"
//               placeholder="Search by area, city, or pincode"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//             <button type="submit">Search</button>
//           </form>

//           <div className="filter-section">
//             <h2>Filter By</h2>
//             <label htmlFor="propertyType">Type of Property:</label>
//             <select
//               id="propertyType"
//               value={propertyType}
//               onChange={(e) => setPropertyType(e.target.value)}
//             >
//               <option value="">Any</option>
//               <option value="1BHK">1BHK</option>
//               <option value="2BHK">2BHK</option>
//               <option value="3BHK">3BHK</option>
//               <option value="1RK">1RK</option>
//             </select>
//             <label>
//               Carpet Area Range: {formatValue(carpetAreaRange[0])} -{" "}
//               {formatValue(carpetAreaRange[1])} sqft
//             </label>
//             <input
//               type="range"
//               min="0"
//               max="10000"
//               value={carpetAreaRange[0]}
//               onChange={(e) =>
//                 setCarpetAreaRange([
//                   parseInt(e.target.value),
//                   carpetAreaRange[1],
//                 ])
//               }
//             />
//             <input
//               type="range"
//               min="0"
//               max="10000"
//               value={carpetAreaRange[1]}
//               onChange={(e) =>
//                 setCarpetAreaRange([
//                   carpetAreaRange[0],
//                   parseInt(e.target.value),
//                 ])
//               }
//             />
//             <label>
//               Rent Range: Rs. {formatValue(rentRange[0])} - Rs.{" "}
//               {formatValue(rentRange[1])}
//             </label>
//             <input
//               type="range"
//               min="0"
//               max="50000"
//               value={rentRange[0]}
//               onChange={(e) =>
//                 setRentRange([parseInt(e.target.value), rentRange[1]])
//               }
//             />
//             <input
//               type="range"
//               min="0"
//               max="50000"
//               value={rentRange[1]}
//               onChange={(e) =>
//                 setRentRange([rentRange[0], parseInt(e.target.value)])
//               }
//             />
//             <label>
//               <input
//                 type="checkbox"
//                 checked={isAvailable}
//                 onChange={(e) => setIsAvailable(e.target.checked)}
//               />
//               is Available?
//             </label>
//           </div>
//         </div>

//         {/* Only show search results if search is performed */}
//         {searchPerformed && searchQuery.trim() !== "" && (
//           <div className="search-results-section">
//             <h2>Search Results</h2>
//             {showNoResults && <p className="no-results">No results matched.</p>}
//             <div className="search-results">
//               <ul>
//                 {searchResults.map((property) => (
//                   <li key={property.id} className="search-result-item">
//                     <Link
//                       to={`/property/${property.id}`}
//                       className="search-result-link"
//                     >
//                       <div className="search-result-content">
//                         <h3>{property.area}</h3>
//                         <p>
//                           {property.city}, {property.pincode}
//                         </p>
//                       </div>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}

//         <Link to="/viewproperty">
//           {/* <img src={house} alt="House" width="40%" height="40%" /> */}
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import '../assets/Home.scss';

// function Home() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [showNoResults, setShowNoResults] = useState(false);
//     const [propertyType, setPropertyType] = useState('');
//     const [carpetAreaRange, setCarpetAreaRange] = useState([0, 10000]);
//     const [rentRange, setRentRange] = useState([0, 50000]);
//     const [isAvailable, setIsAvailable] = useState(false);
//     const [searchPerformed, setSearchPerformed] = useState(false); // State to track if search is performed

//     useEffect(() => {
//         if (searchPerformed) {
//             fetchData();
//         }
//     }, [searchPerformed]);

//     const fetchData = async () => {
//         try {
//             // Check if searchQuery is empty
//             if (searchQuery.trim() === "") {
//                 setShowNoResults(false);
//                 setSearchResults([]);
//                 return;
//             }

//             const response = await axios.get('http://localhost:8080/home', {
//                 params: {
//                     searchElement: searchQuery,
//                     propertyType,
//                     minCarpetArea: carpetAreaRange[0],
//                     maxCarpetArea: carpetAreaRange[1],
//                     minRent: rentRange[0],
//                     maxRent: rentRange[1],
//                     isAvailable
//                 }
//             });

//             setSearchResults(response.data);
//             setShowNoResults(response.data.length === 0);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleSearchSubmit = async (e) => {
//         e.preventDefault();
//         setSearchPerformed(true); // Set searchPerformed to true when search is submitted
//     };

//     const formatValue = (value) => {
//         return new Intl.NumberFormat().format(value);
//     };

//     return (
//         <div className='homepage'>
//             <div className='container'>
//                 <div className="search-filter-section">
//                     <form className="search-box" onSubmit={handleSearchSubmit}>
//                         <input
//                             type="text"
//                             placeholder="Search by area, city, or pincode"
//                             value={searchQuery}
//                             onChange={handleSearchChange}
//                         />
//                         <button type="submit">Search</button>
//                     </form>

//                     <div className="filter-section">
//                         <h2>Filter By</h2>
//                         <label htmlFor="propertyType">Type of Property:</label>
//                         <select id="propertyType" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
//                             <option value="">Any</option>
//                             <option value="1BHK">1BHK</option>
//                             <option value="2BHK">2BHK</option>
//                             <option value="3BHK">3BHK</option>
//                             <option value="1RK">1RK</option>
//                         </select>
//                         <label>Carpet Area Range: {formatValue(carpetAreaRange[0])} - {formatValue(carpetAreaRange[1])} sqft</label>
//                         <input type="range" min="0" max="10000" value={carpetAreaRange[0]} onChange={(e) => setCarpetAreaRange([parseInt(e.target.value), carpetAreaRange[1]])} />
//                         <input type="range" min="0" max="10000" value={carpetAreaRange[1]} onChange={(e) => setCarpetAreaRange([carpetAreaRange[0], parseInt(e.target.value)])} />
//                         <label>Rent Range: Rs. {formatValue(rentRange[0])} - Rs. {formatValue(rentRange[1])}</label>
//                         <input type="range" min="0" max="50000" value={rentRange[0]} onChange={(e) => setRentRange([parseInt(e.target.value), rentRange[1]])} />
//                         <input type="range" min="0" max="50000" value={rentRange[1]} onChange={(e) => setRentRange([rentRange[0], parseInt(e.target.value)])} />
//                         <label>
//                             <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
//                             is Available?
//                         </label>
//                     </div>
//                 </div>

//                 {/* Only show search results if search is performed */}
//                 {searchPerformed && searchQuery.trim() !== "" && (
//                     <div className="search-results-section">
//                         <h2>Search Results</h2>
//                         {showNoResults && <p className="no-results">No results matched.</p>}
//                         <div className="search-results">
//                             <ul>
//                                 {searchResults.map(property => (
//                                     <li key={property.id} className="search-result-item">
//                                         <Link to={`/property/${property.id}`} className="search-result-link">
//                                             <div className="search-result-content">
//                                                 <h3>{property.area}</h3>
//                                                 <p>{property.city}, {property.pincode}</p>
//                                             </div>
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 )}

//                 <Link to='/viewproperty'>
//                     {/* <img src={house} alt="House" width="40%" height="40%" /> */}
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Home;





//2:


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import '../assets/Home.scss';

// function Home() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
//     const [showNoResults, setShowNoResults] = useState(false);
//     const [filters, setFilters] = useState({
//         propertyType: '',
//         carpetAreaRange: [0, 10000],
//         rentRange: [0, 50000],
//         isAvailable: false
//     });
//     const [searchPerformed, setSearchPerformed] = useState(false); // State to track if search is performed
//     const [allProperties, setAllProperties] = useState([]); // State to store all properties

//     useEffect(() => {
//         fetchData();
//     }, []);

//     useEffect(() => {
//         if (searchPerformed) {
//             fetchData();
//         }
//     }, [searchPerformed]);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/home');

//             if (searchPerformed) {
//                 let filteredResults = response.data;
//                 if (searchQuery.trim() !== "") {
//                     filteredResults = filteredResults.filter(property => property.area.toLowerCase().includes(searchQuery.toLowerCase()));
//                 }
//                 setSearchResults(filteredResults);
//                 setShowNoResults(filteredResults.length === 0);
//             } else {
//                 setAllProperties(response.data);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const handleSearchChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleSearchSubmit = async (e) => {
//         e.preventDefault();
//         setSearchPerformed(true); // Set searchPerformed to true when search is submitted
//     };

//     const handleResetFilters = () => {
//         setFilters({
//             propertyType: '',
//             carpetAreaRange: [0, 10000],
//             rentRange: [0, 50000],
//             isAvailable: false
//         });
//     };

//     const formatValue = (value) => {
//         return new Intl.NumberFormat().format(value);
//     };

//     return (
//         <div className='homepage'>
//             <div className='container'>
//                 <div className="search-filter-section">
//                     <form className="search-box" onSubmit={handleSearchSubmit}>
//                         <input
//                             type="text"
//                             placeholder="Search by area, city, or pincode"
//                             value={searchQuery}
//                             onChange={handleSearchChange}
//                         />
//                         <button type="submit" className="search-button">Search</button>
//                     </form>

//                     <div className="filter-section">
//                         <h2>Filter By</h2>
//                         <label htmlFor="propertyType">Type of Property:</label>
//                         <select id="propertyType" value={filters.propertyType} onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}>
//                             <option value="">Any</option>
//                             <option value="1BHK">1BHK</option>
//                             <option value="2BHK">2BHK</option>
//                             <option value="3BHK">3BHK</option>
//                             <option value="1RK">1RK</option>
//                         </select>
//                         <label>Carpet Area Range: {formatValue(filters.carpetAreaRange[0])} - {formatValue(filters.carpetAreaRange[1])} sqft</label>
//                         <input type="range" min="0" max="10000" value={filters.carpetAreaRange[0]} onChange={(e) => setFilters({ ...filters, carpetAreaRange: [parseInt(e.target.value), filters.carpetAreaRange[1]] })} />
//                         <input type="range" min="0" max="10000" value={filters.carpetAreaRange[1]} onChange={(e) => setFilters({ ...filters, carpetAreaRange: [filters.carpetAreaRange[0], parseInt(e.target.value)] })} />
//                         <label>Rent Range: Rs. {formatValue(filters.rentRange[0])} - Rs. {formatValue(filters.rentRange[1])}</label>
//                         <input type="range" min="0" max="50000" value={filters.rentRange[0]} onChange={(e) => setFilters({ ...filters, rentRange: [parseInt(e.target.value), filters.rentRange[1]] })} />
//                         <input type="range" min="0" max="50000" value={filters.rentRange[1]} onChange={(e) => setFilters({ ...filters, rentRange: [filters.rentRange[0], parseInt(e.target.value)] })} />
//                         <label>
//                             <input type="checkbox" checked={filters.isAvailable} onChange={(e) => setFilters({ ...filters, isAvailable: e.target.checked })} />
//                             is Available?
//                         </label>
//                         <button type="button" onClick={handleResetFilters} className="reset-button">Reset Filters</button>
//                     </div>
//                 </div>

//                 {/* Display all flats and buildings */}
//                 <div className="right-panel">
//                     <h2>All Flats and Buildings</h2>
//                     <div className="all-properties">
//                         {allProperties.map(property => (
//                             <div key={property.id} className="property-tile">
//                                 <Link to={`/property/${property.id}`} className="property-link">
//                                     <h3>{property.area}</h3>
//                                     <p>{property.city}, {property.pincode}</p>
//                                     <p>Floor: {property.floor}</p>
//                                     <p>Rent: Rs. {formatValue(property.rent)}</p>
//                                     <p>Type: {property.type}</p>
//                                     <p>Availability: {property.is_available ? "Available" : "Not Available"}</p>
//                                 </Link>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;





//3:
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/Home.scss';

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
        <div className='homepage'>
            <div className='container'>
                <div className="search-filter-section">
                    <form className="search-box" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search by city"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button type="submit" className="search-button">Search</button>
                    </form>

                    <div className="filter-section">
                        <h2>Filter By</h2>
                        <label htmlFor="propertyType">Type of Property:</label>
                        <select id="propertyType" value={filters.propertyType} onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}>
                            <option value="">Any</option>
                            <option value="1BHK">1BHK</option>
                            <option value="2BHK">2BHK</option>
                            <option value="3BHK">3BHK</option>
                            <option value="1RK">1RK</option>
                        </select>
                        <label>Carpet Area Range: {formatValue(filters.carpetAreaRange[0])} - {formatValue(filters.carpetAreaRange[1])} sqft</label>
                        <input type="range" min="0" max="10000" value={filters.carpetAreaRange[0]} onChange={(e) => setFilters({ ...filters, carpetAreaRange: [parseInt(e.target.value), filters.carpetAreaRange[1]] })} />
                        <input type="range" min="0" max="10000" value={filters.carpetAreaRange[1]} onChange={(e) => setFilters({ ...filters, carpetAreaRange: [filters.carpetAreaRange[0], parseInt(e.target.value)] })} />
                        <label>Rent Range: Rs. {formatValue(filters.rentRange[0])} - Rs. {formatValue(filters.rentRange[1])}</label>
                        <input type="range" min="0" max="50000" value={filters.rentRange[0]} onChange={(e) => setFilters({ ...filters, rentRange: [parseInt(e.target.value), filters.rentRange[1]] })} />
                        <input type="range" min="0" max="50000" value={filters.rentRange[1]} onChange={(e) => setFilters({ ...filters, rentRange: [filters.rentRange[0], parseInt(e.target.value)] })} />
                        <label>
                            <input type="checkbox" checked={filters.isAvailable} onChange={(e) => setFilters({ ...filters, isAvailable: e.target.checked })} />
                            is not Available?
                        </label>
                        <button type="button" onClick={handleResetFilters} className="reset-button">Reset Filters</button>
                    </div>
                </div>

                <div className="right-panel">
                    <h2 style={{ color: 'black', fontWeight: 'bold', backgroundColor: 'grey' }}>ALL AVAILABLE FLATS : </h2>
                    <div className="all-properties">
                        {(searchPerformed ? searchResults : allProperties).map(property => (
                            <div key={property.id} className="property-tile" style={{ backgroundColor: 'yellow' }}>
                                <h3>{property.area}</h3>
                                <p><strong>City:</strong> {property.city}</p>
                                <p>{property.pincode}</p>
                                <p>Floor: {property.floor}</p>
                                <p>Rent: Rs. {formatValue(property.rent)}</p>
                                <p>Type: {property.type}</p>
                                <p>Availability: {property.is_available ? "Not Available" : "Available"}</p>
                                <Link to={`/viewflat/${property.id}`} className="property-link">View Details</Link>
                            </div>
                        ))}
                        {showNoResults && <p className="no-results">No results found.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
