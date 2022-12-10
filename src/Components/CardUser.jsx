import React from 'react'
import { Card, CardMedia, CardHeader, CardActions, IconButton, Typography, Button } from "@mui/material"
import { Link } from 'react-router-dom';

const CardUser = ({id, name, username}) => {

  const agregarFavorito = () => {

    let datos = {
      id: id,
      name: name,
      username: username
    }

    if (localStorage.getItem('favs') == null) {
      localStorage.setItem('favs', '[]');
    }

    let data = JSON.parse(localStorage.getItem('favs'))
    data.push(datos)

    localStorage.setItem('favs', JSON.stringify(data))

  }


  return (
      <Card sx={{ width:300, height: 400 }}>
        <Link to={`/dentist/${id}`} >
          <CardHeader title={name} subheader={username} />
        </Link>
        <CardMedia component = "img" height = "200" image = {"https://gme.browardhealth.org/-/media/broward-health/placeholder/doctor-placeholder-female.jpg"} />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Button onClick={agregarFavorito} className="favButton" > Add Fav </Button>
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            ID: {id}
          </Typography>
        </CardActions>
      </Card>
  )
};

export default CardUser