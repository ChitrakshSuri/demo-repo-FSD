import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Login({ regDataLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function verification(e) {
    e.preventDefault();
    if (regDataLogin.email == email && regDataLogin.password == password) {
      alert("Login Success");
      navigate("/dash");
    } else alert("Login Failed");
  }
  return (
    <div>
      <h2>Welcome to Login</h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email"
          />
          {/* <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button onClick={verification} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
