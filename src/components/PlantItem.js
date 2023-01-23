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
          
         maxWidth: '345px',
         maxHeight : '345px',
         background: 'whitesmoke',
         width : '343px',
         height : '343px',
         boxShadow : '10px 15px 25px rgba(0, 0, 0, 0.1)',
        

        
        }}>
        <CardMedia 
          className="TopName"
          component="img"
          alt="Nombre planta "
          
          image="/static/images/cards/contemplative-reptile.jpg"

          sx = {{

            width : '340px',
            height : '60px',
            
            borderStyle : 'solid',
            borderWidth : '1px',
            BorderColor : '#ddd'
    
   
          }}
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
        width : '325px',
        height : '50px',

        borderStyle : 'solid',
        borderWidth : '1px',
        BorderColor : '#ddd'


        

        }}>
          <Button size="small">Actualizar</Button>
        
        </CardActions>
      </Card>


    </li>
  );
}

export { PlantItem };

