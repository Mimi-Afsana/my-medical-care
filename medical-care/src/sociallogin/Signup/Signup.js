import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../Social Login/SocialLogin";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "@firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  const [user1, loading1] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    console.log("user", user);
    navigate("/home");
  }

  const emailBlur = (event) => {
    setEmail(event.target.value);
  };
  const passwordBlur = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrors(" Passwords did't match");
      return;
    }
    if (password.length < 6) {
      setErrors("Password must be 6 characters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <Form
        onSubmit={handleRegister}
        className="w-50 mx-auto p-5 rounded mt-5 bg-success p-2 text-dark bg-opacity-10 "
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={emailBlur}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={passwordBlur}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onBlur={confirmPasswordBlur}
            type="password"
            name="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p className="text-danger">{errors}</p>
        {user ? (
          <button
            className="bg-warning  fw-bold border-0 rounded-pill px-3"
            onClick={logout}
          >
            Sign out
          </button>
        ) : (
          <button
            className="bg-primary text-white  fw-bold border-0 rounded-pill px-4 py-2"
            eventKey={2}
            as={Link}
            to="/home"
          >
            signup
          </button>
        )}
        <p className="mt-4">
          If sign up already?{" "}
          <Link
            to="/login"
            className="text-primary pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>{" "}
        </p>
      </Form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
