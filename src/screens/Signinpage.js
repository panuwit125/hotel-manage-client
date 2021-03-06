import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { loginFunc } from "../functions/loginFunc";
import { regisFunc } from "../functions/regisFunc";
import { message } from "antd";
import { useHistory } from "react-router-dom";

function Signin() {
  const [status, setStatus] = useState(true);
  const [userlogin, setUserlogin] = useState("");
  const [passlogin, setPasslogin] = useState("");

  const [userregis, setUserregis] = useState("");
  const [passregis, setPassregis] = useState("");
  const [passcomfirmregis, setPasscomfirmregis] = useState("");
  const [firstregis, setFirstregis] = useState("");
  const [lastregis, setLastregis] = useState("");
  const [emailregis, setEmailregis] = useState("");
  const [birdregis, setBirdregis] = useState("");

  let history = useHistory();

  const ClickLogin = async () => {
    const result = await loginFunc(userlogin, passlogin);
    if (result.status === 200) {
      await success(result.data.message);
      await localStorage.setItem("jwt", result.data.AccessToken);
      await localStorage.setItem("jwt-refresh", result.data.RefreshToken);
      await localStorage.setItem("user", result.data.user_name);
      await history.push("/");
    } else {
      await error(result.data.error);
    }
  };

  const ClickRegis = async () => {
    if (passcomfirmregis === passregis) {
      const result = await regisFunc(
        userregis,
        passregis,
        firstregis,
        lastregis,
        emailregis,
        birdregis
      );
      if (result.status === 200) {
        await success(result.data.message);
        await window.location.reload(false);
      } else {
        await error(result.data.error);
      }
    } else {
      error("รหัสผ่านไม่ตรงกัน")
    }
  };

  const success = (text) => {
    message.success(text);
  };

  const error = (text) => {
    message.error(text);
  };

  return (
    <div className="ht-si-container">
      <div className="ht-si-box-back">
        <div className="ht-si-box-back-1" onClick={()=>history.push("/")}>
          <ArrowBackIosIcon fontSize="small" />
          <h4>BACK</h4>
        </div>
        <div className="ht-si-box">
          <h1 style={{ textAlign: "center" }}>Hotel Booking</h1>
          {status ? (
            <>
              <div className="ht-si-textfield">
                <TextField
                  id="standard-basic"
                  className="ht-si-ip"
                  label="Username"
                  value={userlogin}
                  onChange={(e) => setUserlogin(e.target.value)}
                />
              </div>
              <div className="ht-si-textfield">
                <TextField
                  id="standard-basic"
                  className="ht-si-ip"
                  label="Password"
                  type="password"
                  value={passlogin}
                  onChange={(e) => setPasslogin(e.target.value)}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                className="ht-si-btn"
                onClick={ClickLogin}
              >
                Signin
              </Button>
              <h6 className="ht-si-txt-cya" onClick={() => setStatus(false)}>
                Create your Account
              </h6>
            </>
          ) : (
            <>
              <div className="ht-si-textfield">
                <TextField
                  id="standard-basic"
                  className="ht-si-ip"
                  label="Username"
                  value={userregis}
                  onChange={(e) => setUserregis(e.target.value)}
                />
              </div>
              <div className="ht-si-textfield">
                <TextField
                  id="standard-basic"
                  className="ht-si-ip"
                  label="Password"
                  type="password"
                  value={passregis}
                  onChange={(e) => setPassregis(e.target.value)}
                />
              </div>
              <div className="ht-si-textfield">
                <TextField
                  id="standard-basic"
                  className="ht-si-ip"
                  label="Comfirm Password"
                  type="password"
                  value={passcomfirmregis}
                  onChange={(e) => setPasscomfirmregis(e.target.value)}
                />
              </div>
              <div className="ht-si-textfield">
                <TextField
                  id="standard-basic"
                  className="ht-si-ip"
                  label="Firstname"
                  value={firstregis}
                  onChange={(e) => setFirstregis(e.target.value)}
                />
              </div>
              <div className="ht-si-textfield">
                <TextField
                  id="standard-basic"
                  className="ht-si-ip"
                  label="Lastname"
                  value={lastregis}
                  onChange={(e) => setLastregis(e.target.value)}
                />
              </div>
              <div className="ht-si-textfield">
                <TextField
                  id="standard-basic"
                  className="ht-si-ip"
                  label="Email"
                  value={emailregis}
                  onChange={(e) => setEmailregis(e.target.value)}
                />
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
                  value={birdregis}
                  onChange={(e) => setBirdregis(e.target.value)}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                className="ht-si-btn"
                onClick={ClickRegis}
              >
                Signup
              </Button>
              <h6 className="ht-si-txt-cya" onClick={() => setStatus(true)}>
                Back to Signin
              </h6>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signin;
