import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MapTwoToneIcon from "@material-ui/icons/MapTwoTone";
import DialogsComponent from "../components/component.dialogs";

function InfoHotel() {
  let { hotelId } = useParams();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("1198"));

  useEffect(() => {
    console.log(fullScreen);
  }, [fullScreen]);

  return (
    <div className="ht-if-container">
      <div
        className="ht-if-ctn-1"
        style={fullScreen ? { maxWidth: "540px" } : null}
      >
        <div className="ht-if-ctn-img">
          <img
            src="https://img1.10bestmedia.com/Images/Photos/298458/HotIbis2_55_660x440.jpg"
            className="ht-if-img"
          />
        </div>
        <div className="ht-if-ctn-detail">
          <div className="ht-if-ctn-detail-up">
            <h1>ibis Hotel</h1>
            <Rating name="read-only" value={3} readOnly />
            <h3 className="ht-if-dt">Detail Hotel</h3>
            <div className="ht-if-dt-1">
              <h3>
                My nearest bts is Punnawithi station(E11) exit (URL HIDDEN)
                close to Udomsuk station just 1 stop, they have free shuttle bus
                to "Mega Bangna" , huge department store that have a lot of
                shopping , dining restaurant, sporting etc.
              </h3>
            </div>
            <div style={{ display: "flex" }}>
              <DialogsComponent />
            </div>
          </div>
          <div className="ht-if-ctn-detail-down">
            <div className="ht-if-ctn-detail-down-1">
              <div className="ht-if-ctn-detail-down-1-1">
                <TextField
                  id="date"
                  label="Check-in"
                  type="date"
                  defaultValue="2017-05-24"
                  className="ht-if-ip"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="ht-if-ctn-detail-down-1-1">
                <TextField
                  id="date"
                  label="Check-out"
                  type="date"
                  defaultValue="2017-05-24"
                  className="ht-if-ip"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="ht-if-ctn-detail-down-1-1">
                <FormControl className="ht-if-ip">
                  <InputLabel
                    shrink
                    id="demo-simple-select-placeholder-label-label"
                  >
                    Adults
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={1}
                    //onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <Button variant="contained" color="primary" className="ht-if-btn">
                Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoHotel;
