import { useState } from "react";
import axios from "axios";

const UserSignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    mobileNumber: 0,
    email:"",
    dateOfBirth: "",
    gender: "",
    pincode:0,
    city:"",
    state:"",
    country: "",
  });

  const updateName = (event) => {
    setUserData({
      ...userData,
      name: event.target.value,
    });
  };
  const updatePassword = (event) => {
    setUserData({
      ...userData,
      password: event.target.value,
    });
  };

  const updateMobileNumber = (event) => {
    setUserData({
      ...userData,
      mobileNumber: event.target.value,
    });
  };

  const updateEmail = (event) => {
    setUserData({
      ...userData,
      email: event.target.value,
    });
  };

  const updateDob = (event) => {
    setUserData({
      ...userData,
      dateOfBirth: event.target.value,
    });
  };

  const updateGender = (event) => {
    setUserData({
      ...userData,
      gender: event.target.value,
    });
  };

  const updatepincode = (event) => {
    setUserData({
      ...userData,
      pincode: event.target.value,
    });
  };

  const updateCity = (event) => {
    setUserData({
      ...userData,
      city: event.target.value,
    });
  };

  const updateState = (event) => {
    setUserData({
      ...userData,
      state: event.target.value,
    });
  };

  const updateCountry = (event) => {
    setUserData({
      ...userData,
      country: event.target.value,
    });
  };
  

  const addUser = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/users", userData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Errorrr");
      });

      setUserData({
        name: "",
        password: "",
        mobileNumber: 0,
        email:"",
        dateOfBirth: "",
        gender: "",
        pincode:0,
        city:"",
        state:"",
        country: "",
      })
  };

  return (
    <>
      <form onSubmit={addUser}>
        <label>Name</label>
        <input type="text" value={userData.name} onChange={updateName} />

        <label>password</label>
        <input type="password" value={userData.password} onChange={updatePassword} />

        <label>Gender</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={updateGender}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={updateGender}
        />
        Female  

        <label>Date of Birth</label>
        <input type="Date" value={userData.dateOfBirth} onChange={updateDob} />

        <label>email</label>
        <input type="email" value={userData.email} onChange={updateEmail}/>

        <label>Mobile Number</label>
        <input type="number" value={userData.mobileNumber} onChange={updateMobileNumber} />

        <label>Pin Code</label>
        <input type="number" value={userData.pincode} onChange={updatepincode} />

        <label>City</label>
        <input type="text" value={userData.city} onChange={updateCity} />

        <label>State</label>
        <input type="text" value={userData.state} onChange={updateState} />

        <label>country</label>
        <input type="text" value={userData.country} onChange={updateCountry} />


        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UserSignUp;
