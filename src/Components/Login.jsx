import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Context } from "./Providers";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [errorR, setErrorR] = useState("");

  const from = location.state?.from?.pathname || "/";

  const loginButtonClick = (event) => {
    event.preventDefault();
    setErrorR("");
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggeduser = result.user;
        alert("Login Successfully");
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setErrorR(error.message);
      });
  };

  return (
    <div>
      <Form onSubmit={loginButtonClick}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p onClick={() => setShow(!show)}>
          <small>
            {show ? <span>Hide Password</span> : <span>Show Password</span>}
          </small>
        </p>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p className="text-danger">{errorR}</p>
      </Form>
    </div>
  );
};

export default Login;
