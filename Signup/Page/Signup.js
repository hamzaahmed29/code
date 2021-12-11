import React from "react";
import { NavLink } from "react-router-dom";

import Aux from "../../Hoc/Auxialary";
import  "./Signup.css";

const Signup = (props) => {
  return (
    <Aux>
      <div className="container">
        <div className="Form">
          <form>
            <label className="label"><strong>Signup</strong></label>
            <label>
              <span className="label">Name</span>
              <input
                className="Input"
                type="text"
                name="name"
                value={props.user.name}
                placeholder="Enter Name"
                onChange={props.handleInputs}
              />
            </label>
            <label >
              <span className="label">Email</span>
              <input
                className="Input"
                type="email"
                name="email"
                value={props.user.email}
                placeholder="Enter Email"
                onChange={props.handleInputs}
              />
            </label>
            <label>
              <span className="label">Number</span>
              <input
              className="Input"
                type="number"
                name="number"
                value={props.user.number}
                placeholder="Enter Phone Number"
                onChange={props.handleInputs}
              />
            </label>
            <label>
              <span className="label">Password</span>
              <input
                className="Input"
                type="password"
                name="password"
                value={props.user.password}
                placeholder="Enter Password"
                onChange={props.handleInputs}
              />
            </label>
            <p style={{color: "red"}}>
              {props.massage}
            </p>
            <button className="Submit" onClick={props.postData} type="submit">
              Sign Up
            </button>
            <p className="label">
              Already registered <NavLink to="/Userlogin" >log in?</NavLink>
            </p>
          </form>
        </div>
      </div>     
    </Aux>
  );
};

export default Signup;
