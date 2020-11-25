import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/component.navbar";
import Signin from "./screens/Signinpage";
import Homepage from "./screens/Homepage";
import Infopage from "./screens/InfoHotelpage";
import ListHotelpage from "./screens/ListHotelpage";
import Signinpage from "./screens/Paymentpage";
import SearchPage from "./screens/Searchpage";
import BookingListpage from "./screens/Bookinglistpage";
import GooglemapComponent from "./components/component.googlemap"
import ManageHotel from "./screens/ManageHotel"

const RouterAuth = () => {
  useEffect(()=>{
    // check Authetication
  },[])
  return (
    <>
      <Route path="/mybooking" exact component={BookingListpage} />
    </>
  );
};

const RouterList = () => {
  return (
    <NavbarComponent>
      <Route path="/" exact component={Homepage} />
      <Route path="/info" exact component={ListHotelpage} />
      <Route path="/info/:hotelId" exact component={Infopage} />
      <Route path="/info/:hotelId/payment" component={Signinpage} />
      <Route path="/testmap" component={GooglemapComponent} />
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
