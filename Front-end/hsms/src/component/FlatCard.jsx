import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FlatCard = () => {
    const { id } = useParams();
    const [flats, setFlats] = useState([]);

    useEffect(() => {
        const fetchFlats = async () => {
            try {
                const numericId = Number(id);
                const response = await axios.get(`http://localhost:8080/flats/buildingFlats/${numericId}`);
                setFlats(response.data);
            } catch (error) {
                console.error('Error fetching flats:', error);
            }
        };

        fetchFlats();
    }, [id]); // Include id in the dependency array to fetch flats whenever the id changes

    const handleBookFlat = async (flatId) => {
        try {
            await axios.put(`http://localhost:8080/flats/${flatId}`);
            console.log("Flat booked successfully!");
            // Optionally, you can show a confirmation message or update the UI
        } catch (error) {
            console.error("Error booking flat:", error);
        }
    };

    return (
        <div>
            <h1>List of Flats</h1>
            <div className="flat-tiles-container">
                {flats.map(flat => (
                    <div key={flat.id} className="flat-tile" onClick={() => handleBookFlat(flat.id)}>
                        <div>ID: {flat.id}</div>
                        <div>Type: {flat.type}</div>
                        <div>Area: {flat.area} sqft</div>
                        <div>Floor: {flat.floor}</div>
                        <div>Rent: Rs. {flat.rent}</div>
                        <div>Availability: {flat.isAvailable ? 'Yes' : 'No'}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlatCard;
