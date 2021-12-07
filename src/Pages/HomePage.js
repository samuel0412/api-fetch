import React from "react";
import MenuBar from "../Components/AppBar";
import Login from "../Components/GoogleLogin";
import OneTapLogin from "../Components/OneTapLogin";

const HomePage = () => {
  return (
    <div>
      <MenuBar />
      <Login />
      {/*<OneTapLogin />*/}
    </div>
  );
};

export default HomePage;
