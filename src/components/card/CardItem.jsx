import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const CardItem = ({title,content,url}) => {
  return (
    <div>
    <Card sx={{padding:'0px 0px',margin:'0 auto', minWidth: 300,maxwidth:450,display:'inline-flex' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={url}
          alt="image"
        />
        <CardContent>
          <h3>{title}</h3>
          <p>{content}</p>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default CardItem