import { useState } from "react";
import axios from "axios";

const CoachSignUp = () => {
  const [coachData, setCoachData] = useState({
    name: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    mobileNumber: 0,
    speciality: "",
  });

  const updateName = (event) => {
    setCoachData({
      ...coachData,
      name: event.target.value,
    });
  };
  const updatePassword = (event) => {
    setCoachData({
      ...coachData,
      password: event.target.value,
    });
  };

  const updateDob = (event) => {
    setCoachData({
      ...coachData,
      dateOfBirth: event.target.value,
    });
  };

  const updateGender = (event) => {
    setCoachData({
      ...coachData,
      gender: event.target.value,
    });
  };

  const updateMobileNumber = (event) => {
    setCoachData({
      ...coachData,
      mobileNumber: event.target.value,
    });
  };

  const updateSpeciality = (event) => {
    setCoachData({
      ...coachData,
      speciality: event.target.value,
    });
  };

  const addCoach = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/coaches", coachData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Errorrr");
      });

      setCoachData({
        name: "",
        password: "",
        gender: "",
        dateOfBirth: "",
        mobileNumber: 0,
        speciality: "",
      })
  };

  return (
    <>
      <form onSubmit={addCoach}>
        <label>Name</label>
        <input type="text" value={coachData.name} onChange={updateName} />

        <label>password</label>
        <input type="password" value={coachData.password} onChange={updatePassword} />

        <label>Date of Birth</label>
        <input type="Date" value={coachData.dateOfBirth} onChange={updateDob} />

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

        <label>Mobile Number</label>
        <input type="number" value={coachData.mobileNumber} onChange={updateMobileNumber} />

        <label>speciality</label>
        <input type="text" value={coachData.speciality} onChange={updateSpeciality} />

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default CoachSignUp;
