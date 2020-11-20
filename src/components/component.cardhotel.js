import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 345,
    margin: 10,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://img1.10bestmedia.com/Images/Photos/298458/HotIbis2_55_660x440.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ibis Hotel
          </Typography>
          <Rating name="read-only" value={4} readOnly />
          <Typography variant="body2" color="textSecondary" component="p">
            <LocationOnIcon color="primary" fontSize="small" /> Bangkok, Thailand
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:10}}>
            Price per night as low as
          </Typography>
          <Typography gutterBottom variant="h6" component="h3" style={{color:"rgb(225, 45, 45)"}}>
            THB 500 BATH
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
