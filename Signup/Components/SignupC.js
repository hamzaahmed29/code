import React, { useState} from "react";

import {useHistory} from "react-router-dom";
import Aux from "../../Hoc/Auxialary";
import Signup from "../Page/Signup";

const SignupC = () => {

 
    const history = useHistory();

   const [user, setUser] = useState({
       name:"",
       email:"",
       number:"",
       password:""

   });
   
   const [massage, setMessage] = useState("");
   

    let name, value;
   const handleInputs = (e) => {
       console.log("Handling");
       console.log(e);
       name = e.target.name;
       value = e.target.value;

       setUser({...user, [name]:value});

       console.log(user)
   };


const PostData = async (e) => {
    e.preventDefault();
    const {name, email, number, password} = user;

    const res = await fetch('/', {
        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            name, email, number, password
        })
    });

    if(res.status === 200)
    {
        history.push('/Userlogin')

    }

    if(res.status !== 200  ){
        setMessage("Oops something  went wrong")
    }
}


return(
    <Aux>
      <Signup user={user} postData= {PostData} handleInputs={handleInputs} massage = {massage}/>
    </Aux>
);
}

export default SignupC;
