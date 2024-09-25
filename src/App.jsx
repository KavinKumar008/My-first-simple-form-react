import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [pincode, setPincode] = useState("");
  const [dob, setDob] = useState("");
  const [show,setShow] =useState(false);


  const emailSubmit =()=>{

  }


  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(show)
    setShow(true)
  }

  const handleDelete = ()=>{
       setFname("");
       setLname("");
       setEmail("");
       setDob("");
       setGender("");
       setPincode("");
  }
  return (
        
    <div className="main-container">
      <h1>Form</h1>
      <form className="container">
        <label htmlFor="fname">
          First Name
          <input
            type="text"
            id="fname"
            placeholder="Enter your first name"
            required
            autoFocus
            value={fname}
            onChange={(e)=>{setFname(e.target.value)}}
          />
        </label>

        <label htmlFor="lname">
          Last Name
          <input
            type="text"
            id="lname"
            placeholder="Enter your last name"
            required
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </label>
        <div className="mail-input">
          <label htmlFor="email" className="left-side">
            Email
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </label>
          <button type="button" onClick={emailSubmit}>Button</button>
        </div>
        <label htmlFor="dob">
          DOB
          <input
            type="date"
            id="dob"
            placeholder="Select your DOB"
            required
            value={dob}
            onChange={(e)=> setDob(e.target.value)}
          />
        </label>

        <label htmlFor="gender">
          Gender
          <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="female">Others</option>
          </select>
        </label>

        <label htmlFor="pin">
          Pincode
          <input
            type="number"
            id="pin"
            placeholder="Select your Pincode"
            required
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </label>

        <button className="sbtn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="sbtn" type="submit" onClick={handleDelete}>
          Delete
        </button>
      </form>
    { show ? <>
    <h1>{fname}</h1>
    <h1>{lname}</h1>
    <h1>{email}</h1>
    <h1>{dob}</h1>
    <h1>{gender}</h1>
    <h1>{pincode}</h1>
    </> : <span> {show}</span>}
      
     
      
    </div>
  );
};

export default App;
