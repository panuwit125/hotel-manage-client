import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import NavbarComponent from "./components/component.navbar";
import Signin from "./screens/Signinpage";
import Homepage from "./screens/Homepage";
import Infopage from "./screens/InfoHotelpage";
import SearchPage from "./screens/Searchpage";
import BookingListpage from "./screens/Bookinglistpage";
import ManageHotel from "./screens/ManageHotel";

const RouterAuth = () => {
  let history = useHistory();
  const [isAuth, setisAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setisAuth(true);
    }
  }, []);

  if (!isAuth) {
    history.push("/");
    return null;
  } else {
    return (
      <>
        <Route path="/mybooking" exact component={BookingListpage} />
      </>
    );
  }
};

const RouterList = () => {
  return (
    <NavbarComponent>
      <Route path="/" exact component={Homepage} />
      <Route path="/info/:hotelId" exact component={Infopage} />
      <Route path="/manage/info" exact component={ManageHotel} />
      <Route path="/search/:searchid" exact component={SearchPage} />
      <RouterAuth />
    </NavbarComponent>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <RouterList />
      </Switch>
    </Router>
  );
}

export default App;
