import React from "react";
import "./AddProduct.css";

const AddProduct = (props) => {
  return (
    <div style={{paddingLeft: "37%" }}>
      <div className='PForm'>
        <label className="Plabel">
          {" "}
        <strong>AddProduct</strong>
        </label>
        <label>
          <span className="Plabel">ProductName</span>
          <input
            className="PInput"
            type="text"
            name="name"
            value={props.Product.name}
            placeholder="Enter Product Name"
            onChange={props.handleInputs}
            
          />
        </label>
        <label>
          <span className="Plabel">Price</span>
          <input
            className="PInput"
            type="text"
            name="price"
            value={props.Product.price}
            placeholder="Enter Product-Price"
            onChange={props.handleInputs}
           
          />
        </label>
        <label>
          <span className="Plabel">Img</span>
          <input
           type="file"
           value={props.Product.img}
           name="img"
           accept="image/*"
           onChange={props.fileUpload}
          
          />
        </label>
     
        <button className="PSubmit" onClick={props.postData}  type="submit">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
