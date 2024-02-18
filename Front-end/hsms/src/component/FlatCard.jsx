import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const FlatCard = () => {
    const { id } = useParams();
    const [flats, setFlats] = useState([]);
    const [selectedFlat, setSelectedFlat] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchFlats();
    }, []);
    
    const fetchFlats = async () => {
        try {
            const numericId = Number(id);
            console.log("IDDDD:" + numericId);
            // Make a GET request using Axios to retrieve flats from the API
            const response = await axios.get(`http://localhost:8080/flats/buildingFlats/${numericId}`);

            // Set the fetched flats to the state
            setFlats(response.data);
            console.log(flats);
        } catch (error) {
            console.error('Error fetching flats:', error);
        }
    };

    const handleCardClick = (flat) => {
        setSelectedFlat(flat);
    };

    

    return (
        <div>
            <h1>List of Flats</h1>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {flats.map(flat => (
                    <div key={flat.id}>
                        <Card
                            sx={{ minWidth: 300, maxWidth: 300, height: 250 }}
                            onClick={() => handleCardClick(flat)}
                        >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       ID: {flat.id}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                       Area: {flat.area}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                       Floor: {flat.floor}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                       Type: {flat.type}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                    Rent: {flat.rent}
                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>
            {/* {selectedFlat && (
                <FlatDetailsBox flat={selectedFlat} open={Boolean(selectedFlat)} onClose={handleCloseDetails} />
            )} */}
        </div>
    );
};

export default FlatCard;
