import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to="/inventory">Inventory</Link>{" "}
            </Nav.Link>
            {user ? (
              <Button onClick={() => signOut(auth)} variant="primary">
                Sign Out
              </Button>
            ) : (
              <Nav.Link>
                <Link to="/login">Login</Link>{" "}
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
