// BuildingCard.js
import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Buildingcard from '../component/Buildingcard.css'
const BuildingCard = ({ building }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/flats/${building.id}`);
    };

    return (
        <Card sx={{ minWidth: 300, maxWidth: 300, height: 200 }} onClick={handleClick}>
            <CardActionArea>
                <CardContent>
                
                    <Typography gutterBottom variant="h5" component="div">
                        {building.name}
                    </Typography>
                    <br/>
                    <Typography variant="body1" color="text.secondary">
                        Address: {building.line_1}, {building.line_2}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        City: {building.city}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Pincode: {building.pincode}
                    </Typography>
                    <Typography variant="h7" component="div" sx={{ mt: 2 }}>
                        Number of Flats: {building.numberOfFlats}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BuildingCard;
