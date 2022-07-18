import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SocialLogin from "../Social Login/SocialLogin";
import { useLocation, useNavigate } from "react-router";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, erroring] =
    useSendPasswordResetEmail(auth);
  const resetpass = async (event) => {
    setEmail(event.target.value);
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    console.log("user", user);
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const emailBlur = (event) => {
    setEmail(event.target.value);
  };
  const passwordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleRegister = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="container w-50 mx-auto col-12">
      <Form
        onSubmit={handleRegister}
        className="p-5 rounded mt-5 bg-success p-2 text-dark bg-opacity-10"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={emailBlur}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={passwordBlur}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorElement}
        <Button variant="primary" type="submit">
          Login
        </Button>{" "}
      </Form>
      <p className="mt-4 ">
        New to Come here?{" "}
        <Link to="/signup" className="text-primary  text-decoration-none ">
          Please SignUp
        </Link>{" "}
      </p>
      <p>
        Forget Password?
        <button
          onClick={resetpass}
          className="btn btn-link text-primary text-decoration-none"
        >
          {" "}
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
