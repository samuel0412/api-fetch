import React, { useState } from "react";
import { GoogleLogin, GoogleLogout, useGoogleLogin } from "react-google-login";
//import { useNavigate } from "react-router";

const clientId =
  "694193033975-ruk06tqgaek3jqp3ck5tdgt2geff6o0e.apps.googleusercontent.com";

function Login() {
  //  const navigate = useNavigate();
  const [showloginButton, setShowloginButton] = useState(true);
  //  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    localStorage.setItem("user", JSON.stringify(res.profileObj));
    //navigate("dashboard");
    setShowloginButton(false);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);

    setShowloginButton(true);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
  };

  return (
    <div className="g-signin ">
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        />
      )}
    </div>
  );
}
export default Login;
