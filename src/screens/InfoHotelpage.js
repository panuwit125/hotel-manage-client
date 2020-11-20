import React from "react";
import { useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

function InfoHotel() {
  let { hotelId } = useParams();
  return (
    <div className="ht-if-container">
      <div className="ht-if-ctn-1">
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
            <div>
              <h3 className="ht-if-dt">Detail Hotel</h3>
              <h3>
                My nearest bts is Punnawithi station(E11) exit (URL HIDDEN)
                close to Udomsuk station just 1 stop, they have free shuttle bus
                to "Mega Bangna" , huge department store that have a lot of
                shopping , dining restaurant, sporting etc.
              </h3>
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
