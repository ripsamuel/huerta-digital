import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const PhotoPlant = () => {
    const [plantPhoto, setPlantPhoto] = useState(null);
    
    const handlePhotoChange = (event) => {
        const photo = event.target.files[0];
        setPlantPhoto(photo);
    };

    const handleUpdatePhoto = () => {      
        console.log('Foto de planta:', plantPhoto);
    };
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200 }}
                image="https://img.freepik.com/vector-premium/icono-vector-camara-fotografica-concepto-contorno_553860-543.jpg?w=2000"
                title="Plant Photo"
            />
            </Card>
            <Stack direction="column">
                <input type="file" 
                onChange={handlePhotoChange}
                />
                <Button 
                    variant="contained" 
                    onClick={handleUpdatePhoto}>
                    Actualizar
                </Button>
               
            </Stack>
            
            
            
        </div>
    );
};

export default PhotoPlant;