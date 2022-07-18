import React from "react";
import glogo from "../../images/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
import { useLocation, useNavigate } from "react-router";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div className="container">
      <div className="d-flex align-items-center ">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="container border-0 bg-white "
      >
        <span className="bg-success p-2 text-dark bg-opacity-25 rounded-pill px-3">
          <img
            className="me-4 mb-2 mt-1"
            height="30px"
            width="30px"
            src={glogo}
            alt=""
          />{" "}
          Google signin
        </span>
      </button>
    </div>
  );
};

export default SocialLogin;
