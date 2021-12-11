//Importing React and useState
import React, { useState } from "react";

//Importing Aux Functional Component
import Aux from "../../../Hoc/Auxialary";

//Import UserLogin Functional Component
import UserLogin from "../Pages/UserLogin";

import { useHistory } from "react-router";

//Creating UserLoginComponent
const UserLoginComponent = () => {
  const history = useHistory();
  //Creating useState
  const [user, setUser] = useState({
    //Initialzing email equal to Empty String
    email: "",

    //Initialzing password equal to Empty String
    password: "",
  });
  const [err, setErr] = useState("");
  const [error, setError] = useState("");

  //Creating Variable named name and value
  let name, value;

  //Creating handleInput Function
  const handleInput = (event) => {
    console.log("Change handler working");

    //Getting name from Form and saving it into name variable
    name = event.target.name;

    //Getting value from Form and saving it into value variable
    value = event.target.value;

    //Changing State
    setUser({
      //Creating Copy of the state and giving value to each name
      ...user,
      [name]: value,
    });
  };

  //Creating PostData function which will send requests to Node.js
  const PostData = async (event) => {
    //Cancelling default Events
    event.preventDefault();

    //Initializing user state value to email and passowrd
    const { email, password } = user;

    console.log(email, password);
    //Sending Request to Node.js using Fetch API
    const res = await fetch("/Userlogin", {
      //Setting Method
      method: "POST",

      //Setting Headers
      headers: {
        //Setting Content-Type
        "Content-Type": "application/json",
      },

      //Stringifying the email and password and storing it into body
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });

    if (res.status === 200) {
      history.push("/Home");
    }
    if (res.status === 404) {
      setErr("invalid Email");
    }
    if(res.status === 401) {
        setError("Invalid Password")
    }
  };

  //Returning JSX
  return (
    <Aux>
      <UserLogin
        user={user}
        handleInput={handleInput}
        PostData={PostData}
        err={err}
        error={error}
      />
    </Aux>
  );
};

// Exporting UserLoginComponent Functional Component
export default UserLoginComponent;
