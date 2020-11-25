import React, { useEffect, useState } from "react";
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
import { getDataFunc } from "../functions/getdatahotelFunc";
import moment from "moment";

function InfoHotel() {
  let { hotelId } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [dateBefore, setDateBefore] = useState();
  const [dateAfter, setDateAfter] = useState();
  const [adult, setAdult] = useState(1);
  const [data, setData] = useState();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("1198"));

  const loadData = async () => {
    const result = await getDataFunc(hotelId);
    if (result.status === 200) {
      let newDate = new Date();
      console.log(moment().format("YYYY-MM-DD"));
      await setDateBefore(moment().format("YYYY-MM-DD"));
      await setDateAfter(moment().add(1, "days").format("YYYY-MM-DD"));
      await console.log(result);
      await setData(result.data);
      await setisLoading(true);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ChangeBefore = (time) => {
    console.log(time);
    var arr = time.split("-");
    console.log(arr);
    if (
      moment().format("YYYY") <= arr[0] &&
      moment().format("MM") <= arr[1] &&
      moment().format("DD") <= arr[2]
    ) {
      setDateBefore(time);
      console.log("YES");
    } else {
      console.log("NO");
    }
  };

  const ChangeAfter = (time) => {
    console.log(time);
    var arr = time.split("-");
    var arrbefore = dateBefore.split("-");
    console.log(arr);
    console.log(arrbefore);
    if (
      arrbefore[0] <= arr[0] &&
      arrbefore[1] <= arr[1] &&
      arrbefore[2] < arr[2]
    ) {
      setDateAfter(time);
      console.log("YES");
    } else {
      console.log("NO");
    }
  };

  if (!isLoading) {
    return null;
  } else {
    return (
      <div className="ht-if-container">
        <div
          className="ht-if-ctn-1"
          style={fullScreen ? { maxWidth: "540px" } : null}
        >
          <div className="ht-if-ctn-img">
            <img src={data.image1_hotel} className="ht-if-img" />
          </div>
          <div className="ht-if-ctn-detail">
            <div className="ht-if-ctn-detail-up">
              <h1>{data.name_hotel}</h1>
              <Rating name="read-only" value={3} readOnly />
              <h3 className="ht-if-dt">Detail Hotel</h3>
              <div className="ht-if-dt-1" style={{marginBottom:10}}>
                <h3>{data.detail_hotel}</h3>
              </div>
              <h3 className="ht-if-dt">Price per night</h3>
              <div className="ht-if-dt-1" >
                <h3>{data.price_hotel}</h3>
              </div>
              <div style={{ display: "flex" }}>
                <DialogsComponent point={data} />
              </div>
            </div>
            <div className="ht-if-ctn-detail-down">
              <div className="ht-if-ctn-detail-down-1">
                <div className="ht-if-ctn-detail-down-1-1">
                  <TextField
                    id="date"
                    label="Check-in"
                    type="date"
                    defaultValue={dateBefore}
                    value={dateBefore}
                    className="ht-if-ip"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => ChangeBefore(e.target.value)}
                  />
                </div>
                <div className="ht-if-ctn-detail-down-1-1">
                  <TextField
                    id="date"
                    label="Check-out"
                    type="date"
                    defaultValue={dateAfter}
                    value={dateAfter}
                    className="ht-if-ip"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => ChangeAfter(e.target.value)}
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
                      value={adult}
                      onChange={(e)=>setAdult(e.target.value)}
                      displayEmpty
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div>
                {localStorage.getItem("jwt") ? (
                  <Button
                    variant="contained"
                    color="primary"
                    className="ht-if-btn"
                  >
                    Booking
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    className="ht-if-btn"
                  >
                    Login Please
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoHotel;
