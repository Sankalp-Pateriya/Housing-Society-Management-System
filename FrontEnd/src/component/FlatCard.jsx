import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FlatCard = ({ flat }) => {
    return (
        <Card sx={{ minWidth: 300, maxWidth: 300, height: 200 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Flat Number: {flat.flatNumber}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Description: {flat.description}
                    </Typography>
                    {/* Add more details as needed */}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

const FlatList = () => {
    const [flats, setFlats] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchFlats();
    }, []);

    const fetchFlats = async () => {
        try {
            const response = await axios.get("http://localhost:8080/flats/flat.buildingid");
            setFlats(response.data);
        } catch (error) {
            console.error('Error fetching flats:', error);
        }
    };

    const handleClick = () => {
        // Handle navigation to individual flat details page if needed
    };

    return (
        <div>
            <h1>List of Flats</h1>
            {flats.map(flat => (
                <FlatCard key={flat.id} flat={flat} onClick={handleClick} />
            ))}
        </div>
    );
};

export default FlatList;
