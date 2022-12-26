import './PlantItem.css';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function PlantItem(props) {
  return (
    <li className="PlantItem">
         <Card sx={{
         maxWidth: 345,
         background: 'whitesmoke',
         width : '345px',
         height : '345px',
        }}>
        <CardMedia className="TopName"
          component="img"
          alt="Nombre planta "
          height="60px"
          image="/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent sx ={{
        background: 'whitesmoke',
        width : '340px',
        height : '180px',
       
        }}>
          <Typography gutterBottom variant="h5" component="div">
          </Typography>
          
        </CardContent>
        <CardActions sx ={{
        background: 'white',
        width : '340px',
        height : '60px',
        marginBottom : '0px',
        }}>
          <Button size="small">Actualizar</Button>
        
        </CardActions>
      </Card>


    </li>
  );
}

export { PlantItem };

