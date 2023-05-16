import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const Register = () => {
  const [errorR, setErrorR] = useState("");

  const submitButtonClick = (event) => {
    event.preventDefault();
    setErrorR("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    if (!/(?=.*[A-Z])/.test(password)) {
      setErrorR("Password should be at least have one uppercase letter");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggeduser = result.user;
        emailVerification(loggeduser);
        console.log(loggeduser);
        event.target.reset();
      })
      .catch((error) => {
        console.error(error.message);
        setErrorR(error.message);
      });
  };

  const emailVerification = (user) => {
    sendEmailVerification(user).then(() => {
      alert("Check your email");
    });
  };

  return (
    <div>
      <Form onSubmit={submitButtonClick}>
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
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p className="text-danger">{errorR}</p>
      </Form>
    </div>
  );
};

export default Register;
