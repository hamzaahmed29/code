//Importing React
import React from "react";

//Importing NavLink and Link

//Importing Aux Functional Component
import Aux from "../../../Hoc/Auxialary";

//Importing styles UserLogin.css File
import './UserLogin.css';

//Creating UserLogin Functional Component
const UserLogin = (props) => {
  //Returning JSX
  return (
    <Aux>
      
      <div className="Container">
        
        <form method="POST">
          <div className="form">
            <p className="Label"><strong>User Login</strong></p>
            <input
             className="Inp"
              value={props.user.email}
              onChange={props.handleInput}
              type="email"
              placeholder="Email"
              name="email"
            />

            <br />
            <br />

            <input
              className="Inp"
              value={props.user.password}
              onChange={props.handleInput}
              type="password"
              placeholder="Password"
              name="password"
            />

            <p style={{color: "red"}}>
              {props.err}
            </p>
            <p style={{color: "red"}}>
              {props.error}
            </p>


            <button
              className="Sub"
              to="#"
              type="submit"
              onClick={props.PostData}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Aux>
  );
};

//Exporting UserLogin Functional Component
export default UserLogin;
