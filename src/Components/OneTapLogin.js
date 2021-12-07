import React from "react";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
const OneTapLogin = () => {
  useGoogleOneTapLogin({
    onSuccess: (response) => console.log(response),
    onError: (error) => console.log(error),
    googleAccountConfigs: {
      client_id:
        "694193033975-ruk06tqgaek3jqp3ck5tdgt2geff6o0e.apps.googleusercontent.com",
    },
  });
  return (
    <>
      <h1>Google one tap login</h1>
    </>
  );
};

export default OneTapLogin;
