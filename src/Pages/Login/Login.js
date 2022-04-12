import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const SignInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto">
          <Form onSubmit={SignInUser}>
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
            <div class="d-flex align-items-end">
              <Link className="me-2" to="/register">
                <span className="text-red">Create an account</span>
              </Link>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
          <div>
            <h2>Or</h2>
            <div>
              <button className="btn">
                <FcGoogle />
              </button>
              <button className="btn">
                <AiFillGithub />
              </button>
              <button className="btn">
                <BsFacebook />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
