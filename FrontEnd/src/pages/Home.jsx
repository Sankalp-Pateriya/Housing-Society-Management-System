import React, { useEffect, useState } from 'react';

import axios from 'axios';
import '../assets/Home.scss';

import BuildingCard from '../component/BuildingCard'; // Import BuildingCard component




function Home() {
    const [buildings, setBuildings] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(() => {
        fetchBuildings();
    }, []);

    const fetchBuildings = async () => {
        try {
            const response = await axios.get("http://localhost:8080/buildings");
            setBuildings(response.data);
        } catch (error) {
            console.error('Error fetching buildings:', error);
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    

    const filteredBuildings = buildings.filter(building => {
        return building.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className='homepage'>
            <div className='container'>
                {/* Search Bar */}
                <div className="search-bar">
                <input
    type="text"
    placeholder="Search by building name"
    value={searchQuery}
    onChange={handleSearchChange}
    style={{ width: "75%", borderRadius: "20px",border: "1px solid rgba(0, 0, 0, 0.5)" }} // Added borderRadius
/>

                </div>
                <br/><br/>
                {/* Display Building Cards */}
                <div className="building-cards-container">
                    {filteredBuildings.map(building => (
                        <BuildingCard key={building.id} building={building} />
                    ))}
                </div>
   
            </div>
        </div>
    );
}

export default Home;
