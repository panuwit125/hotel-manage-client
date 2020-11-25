import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useMediaQuery,
  Button,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  TextField,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import DialogsComponent from "../components/component.dialogs";
import { getDataFunc } from "../functions/getdatahotelFunc";
import moment from "moment";
import Numberformat from "react-number-format";
import { useHistory } from "react-router-dom";
import { message } from "antd";
import { validateAvailableHotel } from "../functions/bookingFunc";
import DialogPaymentComponent from "../components/component.dialogspayment";
import DialogAlertComponent from "../components/component.dialogsaleart";

function InfoHotel() {
  let { hotelId } = useParams();
  const [isLoading, setisLoading] = useState(false);
  const [dateBefore, setDateBefore] = useState();
  const [dateAfter, setDateAfter] = useState();
  const [adult, setAdult] = useState(1);
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [priceAll, setPriceAll] = useState(0);
  const theme = useTheme();
  const [openAlert, setOpenAlert] = useState(false);
  const [dateUnavailable, setDateUnavailable] = useState([]);
  const fullScreen = useMediaQuery(theme.breakpoints.down("1198"));
  let history = useHistory();

  useEffect(() => {
    const loadData = async (hotelId) => {
      const result = await getDataFunc(hotelId);
      if (result.status === 200) {
        console.log(moment().format("YYYY-MM-DD"));
        await setDateBefore(moment().format("YYYY-MM-DD"));
        await setDateAfter(moment().add(1, "days").format("YYYY-MM-DD"));
        await console.log(result);
        await setData(result.data);
        await setisLoading(true);
      }
    };
    loadData(hotelId);
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
    } else {
      error("กรุณาเลือกวันในปัจจุบันหรืออนาคต");
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
    } else {
      error("กรุณาเลือกวันที่อยู่หลังวันเข้าพัก");
    }
  };

  const ClickBooking = async () => {
    console.log("Check-in", dateBefore);
    console.log("Check-out", dateAfter);
    console.log("Adult", adult);
    const result = await validateAvailableHotel(
      dateBefore,
      dateAfter,
      data._id,
      data.numberofroom_hotel
    );
    await console.log(result);
    if (result.status === 200 && result.data.avalible) {
      setPriceAll(result.data.day_number * data.price_hotel);
      console.log(result.data.day_number * data.price_hotel);
      setOpen(true);
    } else {
      setDateUnavailable(result.data.hotel_unavalible);
      console.log(result.data.hotel_unavalible);
      error("โรงแรมเต็ม");
      setOpenAlert(true);
    }
  };

  const error = (text) => {
    message.error({
      content: text,
      className: "custom-class",
      style: {
        marginTop: "10vh",
      },
    });
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
              <h3 className="ht-if-dt">Detail Hotel</h3>
              <div className="ht-if-dt-1" style={{ marginBottom: 10 }}>
                <h3>{data.detail_hotel}</h3>
              </div>

              <div
                className="ht-if-dt-1"
                style={{ display: "flex", minHeight: 30 }}
              >
                <h3 className="ht-if-dt" style={{ marginRight: 5 }}>
                  Price per night
                </h3>{" "}
                {"  : "}
                <h3>
                  <Numberformat
                    value={data.price_hotel}
                    displayType={"text"}
                    thousandSeparator={true}
                    style={{ marginLeft: 5, color: "red" }}
                  />{" "}
                  BATH
                </h3>
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
                      onChange={(e) => setAdult(e.target.value)}
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
                    onClick={ClickBooking}
                  >
                    Booking
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    className="ht-if-btn"
                    onClick={() => history.push("/signin")}
                  >
                    Login Please
                  </Button>
                )}
              </div>
              <DialogPaymentComponent
                open={open}
                setOpen={setOpen}
                dateBefore={dateBefore}
                dateAfter={dateAfter}
                adult={adult}
                price={priceAll}
                hotel_id={data._id}
                numberroom={data.numberofroom_hotel}
              />
              <DialogAlertComponent
                open={openAlert}
                setOpen={setOpenAlert}
                date={dateUnavailable}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoHotel;
