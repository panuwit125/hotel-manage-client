import React, { useState } from "react";
import TableComponent from "../components/component.tableshowhotel";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import TextField from "@material-ui/core/TextField";
import { insertHotel } from "../functions/insertHotel";
import { message } from "antd";

const useStyles = makeStyles({
  fullList: {
    width: 250,
    flexShrink: 0,
    padding: 20,
  },
  drawerPaper: {
    width: 400,
    padding: 20,
  },
  inp: {
    margin: 5,
  },
});

function ManageHotel() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [price, setPrice] = useState("");
  const [mapX, setMapX] = useState("");
  const [mapY, setMapY] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [numberroom, setNumberroom] = useState("");

  const ClickSave = async () => {
    const result = await insertHotel(
      name,
      detail,
      image1,
      image2,
      image3,
      price,
      mapX,
      mapY,
      province,
      country,
      numberroom
    );
    if (result.status === 200) {
      await console.log("200",result);
      await window.location.reload(false);
      await success(result.data.message);
    } else {
      await console.log("Error",result);
      await error(result.data.error)
    }
  };

  const success = (text) => {
    message.success({
      content: text,
      className: 'custom-class',
      style: {
        marginTop: '10vh',
      },
    });
  };

  const error = (text) => {
    message.error({
      content: text,
      className: 'custom-class',
      style: {
        marginTop: '10vh',
      },
    });
  };

  return (
    <div>
      <Drawer
        anchor="right"
        open={state}
        onClose={() => setState(false)}
        className={classes.fullList}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <h2>เพิ่มข้อมูล</h2>
        <TextField
          id="outlined-multiline-flexible"
          label="ชื่อโรงแรม"
          multiline
          rowsMax={4}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={classes.inp}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="รายละเอียด"
          multiline
          rows={4}
          className={classes.inp}
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="รูปที่ 1"
          multiline
          className={classes.inp}
          value={image1}
          onChange={(e) => setImage1(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="รูปที่ 2"
          multiline
          className={classes.inp}
          value={image2}
          onChange={(e) => setImage2(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="รูปที่ 3"
          multiline
          className={classes.inp}
          value={image3}
          onChange={(e) => setImage3(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="ราคาต่อคืน"
          multiline
          rowsMax={4}
          className={classes.inp}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="ค่า X"
          multiline
          rowsMax={4}
          value={mapX}
          onChange={(e) => setMapX(e.target.value)}
          className={classes.inp}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="ค่า Y"
          multiline
          rowsMax={4}
          className={classes.inp}
          value={mapY}
          onChange={(e) => setMapY(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="จังหวัด"
          multiline
          rowsMax={4}
          className={classes.inp}
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="ประเทศ"
          multiline
          rowsMax={4}
          className={classes.inp}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="จำนวนห้อง"
          multiline
          rowsMax={4}
          className={classes.inp}
          value={numberroom}
          onChange={(e) => setNumberroom(e.target.value)}
          variant="outlined"
        />
        <Button
          className={classes.inp}
          onClick={ClickSave}
          variant="contained"
          color="primary"
        >
          บันทึกข้อมูล
        </Button>
      </Drawer>
      <div style={{ marginBottom: 10, textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setState(true)}
        >
          เพิ่มข้อมูล
        </Button>
      </div>
      <TableComponent />
    </div>
  );
}

export default ManageHotel;
