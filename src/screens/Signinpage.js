import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Signin() {
  const [status, setStatus] = useState(true);

  return (
    <div className="ht-si-container">
      <h4>
        <ArrowBackIosIcon fontSize="small" />
        Back
      </h4>
      <div className="ht-si-box">
        <h2>Hotel Manage</h2>
        {status ? (
          <>
            <div className="ht-si-textfield">
              <TextField id="standard-basic" className="ht-si-ip" label="Username" />
            </div>
            <div className="ht-si-textfield">
              <TextField id="standard-basic" className="ht-si-ip" label="Password" type="password" />
            </div>
            <Button variant="contained" color="primary" className="ht-si-btn">
              Signin
            </Button>
            <h6 className="ht-si-txt-cya" onClick={() => setStatus(false)}>
              Create your Account
            </h6>
          </>
        ) : (
          <>
            <div className="ht-si-textfield">
              <TextField id="standard-basic" className="ht-si-ip" label="Username" />
            </div>
            <div className="ht-si-textfield">
              <TextField id="standard-basic" className="ht-si-ip" label="Password" type="password" />
            </div>
            <div className="ht-si-textfield">
              <TextField id="standard-basic" className="ht-si-ip" label="Firstname" />
            </div>
            <div className="ht-si-textfield">
              <TextField id="standard-basic" className="ht-si-ip" label="Lastname" />
            </div>
            <div className="ht-si-textfield">
              <TextField id="standard-basic" className="ht-si-ip" label="Email" />
            </div>
            <div className="ht-si-textfield">
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className="ht-si-ip"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <Button variant="contained" color="primary" className="ht-si-btn">
              Signup
            </Button>
            <h6 className="ht-si-txt-cya" onClick={() => setStatus(true)}>
              Back to Signin
            </h6>
          </>
        )}
      </div>
    </div>
  );
}

export default Signin;
