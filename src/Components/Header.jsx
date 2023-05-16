import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Context } from "./Providers";

const Header = () => {
  const { user, logOut } = useContext(Context);

  const signOut1 = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/login">Login</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/register">Register</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/orders">Orders</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/json">JSON File</Link>
        </Nav.Item>
      </Nav>
      {user ? (
        <div>
          {" "}
          <span>{user.email}</span> <button onClick={signOut1}>Sign Out</button>{" "}
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
