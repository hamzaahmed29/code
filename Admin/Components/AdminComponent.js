import React,{useState} from "react";
import AddProduct from "../Page/AddProduct";
import {useHistory} from "react-router-dom";
const AdminComponent = (props) =>{
    const history = useHistory();

    const [Product, setProduct] = useState({
        name:"",
        price:"",
        img:null
       
    });
 
    let name, value;
    const handleInputs = (e) => {
        console.log("Handling");
        console.log(e);
        name = e.target.name;
        value = e.target.value;
 
        setProduct({...Product, [name]:value});

        console.log(Product)
    };

    const fileUpload = (e) => {
        this.setState({img:e.target.files[0]})

    }

    let fd = new FormData();
    fd.append('name', Product.name);
    fd.append( name, Product.price);
    fd.append( name, Product.img);
 
 
 const PostData = async (e) => {
     e.preventDefault();
     const {name, Price, img} = Product;
 
     const res = await fetch('/AddProduct', {
         method:"POST",
 
         headers:{
             "Content-Type":"application/json"
         },
 
         body:JSON.stringify({
             name, Price, img
         })
     });
 
     if(res.status === 200)
     {
         history.push('/Product')
     }
 }
 

 return (

    
    <AddProduct  Product={Product} postData= {PostData} handleInputs={handleInputs}/>
 )
}

export default AdminComponent;
