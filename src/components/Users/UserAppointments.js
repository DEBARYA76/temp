import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserNavbar from "./UserNavbar";

const UserAppointment=()=>{
    const win=window.sessionStorage;
    const [appointment,setAppointment]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/bookings?userId="+win.getItem("UserID"))
        .then((res)=>{
            setAppointment(res.data);
        })
        .catch((err)=>{
            console.log("Something went wroong")
        })
    },[]);

    return(
        <>
        <UserNavbar/>
        {
            appointment.map((data)=>(
                <div>
                   Appointment Date: {data.appointmentDate}
                   Slot: {data.slot}
                   Booking id: {data.id}
                   User Id: {data.userId}
                   Coach Id: {data.coachId}

                   <Link to="/">Reschedule</Link>
                   <Link to="/">Cancel</Link>
                
                </div>
            ))
        }
        </>
    )
}

export default UserAppointment