import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useHistory} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: 10,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard(hotel) {
  const classes = useStyles();
  let history = useHistory();
  console.log(hotel.hotel)
  return (
    <Card className={classes.root} onClick={()=>{history.push(`/info/${hotel.hotel.name_hotel}`)}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={hotel.hotel.image1_hotel}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {hotel.hotel.name_hotel}
          </Typography>
          <Rating name="read-only" value={4} readOnly />
          <Typography variant="body2" color="textSecondary" component="p">
            <LocationOnIcon color="primary" fontSize="small" /> {hotel.hotel.province_hotel}, {hotel.hotel.country_hotel}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:10}}>
            Price per night as low as
          </Typography>
          <Typography gutterBottom variant="h6" component="h3" style={{color:"rgb(225, 45, 45)"}}>
            THB {hotel.hotel.price_hotel} BATH
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
