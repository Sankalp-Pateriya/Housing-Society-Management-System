import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BuildingCard = ({ building }) => {
    const navigate = useNavigate();
    return (
            <Card sx={{minWidth:300, maxWidth: 300, height: 350 }} onClick={()=> navigate(`/buildings/${building.id}`)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        width="300"
                        image={building.imageUrl}
                        alt={building.name}
                    />
                    <CardContent display="flex" flexDirection="column">
                        <Typography gutterBottom variant="h5" component="div">
                            {building.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{fontSize: "17px"}}>
                           Address: {building.address}
                        </Typography>
                        <Typography variant="h7" component="div" sx={{mt: 2, fontSize: "17px"}}>
                        Number of Flats: {building.numberOfFlats}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default BuildingCard