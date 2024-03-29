import './PlantItem.css';

import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ImageComponent from './ImageComponent';


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
         borderRadius: '16px',
        }}>

        <CardMedia
          className="TopName"
          sx = {{
            width : 'auto',
            height : '60px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '15px',
          }}
        >{props.text}</CardMedia>

        <CardContent sx ={{
        background: 'whitesmoke',
        width : '340px',
        height : '180px',
        }}>
          {props.imageSrc && <ImageComponent src={props.imageSrc} alt="imagen renderizada" />}
        </CardContent>

        <CardActions sx ={{
        background: 'white',
        width : '325px',
        height : '50px',
        }}>
          <Button onClick={props.plantUpdate} size="small">Actualizar</Button>

        </CardActions>

          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
          </p>
        <span
          className="Icon Icon-delete"
          onClick={props.onDelete}
        >
          X
        </span>
      </Card>
    </li>
  );
}

export { PlantItem };

