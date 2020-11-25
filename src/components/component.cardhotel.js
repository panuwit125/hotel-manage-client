import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Numberformat from "react-number-format";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";

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
  console.log(hotel.hotel);
  return (
    <Card
      className={classes.root}
      onClick={() => {
        history.push(`/info/${hotel.hotel.name_hotel}`);
      }}
    >
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
          <Typography variant="body2" color="textSecondary" component="p">
            <LocationOn color="primary" fontSize="small" />{" "}
            {hotel.hotel.province_hotel}, {hotel.hotel.country_hotel}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginTop: 10 }}
          >
            Price per night
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            style={{ color: "rgb(225, 45, 45)" }}
          >
            THB{" "}
            <Numberformat
              value={hotel.hotel.price_hotel}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
            BATH
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
