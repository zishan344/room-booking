import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [myError, setMyError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  let navigate = useNavigate();

  const [users] = useAuthState(auth);
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  if (users) {
    navigate("/home");
  }
  const register = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMyError("do not match two password");
      return;
    } else if (password === confirmPassword) {
      setMyError("");
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto">
          <Form onSubmit={register}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmailBlur}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePasswordBlur}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="current-password">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onBlur={handleConfirmPasswordBlur}
                type="password"
                placeholder="Confirm Password"
              />
              <p className="text-danger">{myError}</p>
            </Form.Group>
            <div className="d-flex align-items-end">
              <Link className="me-2" to="/login">
                <span className="text-primary">Already have an account</span>
              </Link>
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
