import axios from "axios";
import { useState, useEffect } from "react";
import CoachNavbar from "./CoachNavbar";

const CoachHome = () => {
  const win = window.sessionStorage;
  const [coachSchedules, setcoachSchedules] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:4000/bookings?coachId=" + win.getItem("coachID"))
      .then((res) => {
        setcoachSchedules(res.data);
      })
      .catch((error) => {
        console.log("Something went wrong");
      });
  }, []);

  return (
    <>
      <CoachNavbar />
      
      <ul>
        { coachSchedules.length>=1 && coachSchedules.map((data) => (
            <li>
                Appointment Date: {data.appointmentDate }
                Slot:{data.slot }
                Booking id:{data.id}
                User id:{data.userId}
            </li>
        ))}
        {
          coachSchedules.length===0 &&
          <h1>No Planned Schedules Yet</h1>
        }
      </ul>
    </>
  );
};

export default CoachHome;
