import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Registeration({ regData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function getData(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
    };
    regData(data);
  }
  return (
    <div>
      <h2>Welcome to Registeration</h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your Name"
          />
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
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
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
        <button onClick={getData} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registeration;
