import { Link, Navigate } from "react-router-dom"
import React from 'react';
import './Home.component.css'
// import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";

const Home=()=>{


    const navigate = useNavigate();
    const logInCoach=() =>{ Navigate("/coachlogin")};
    const joinInCoach=() =>{ Navigate("/coachsignup")};

    const logInUser=() =>{ Navigate("/userlogin")};

    const joinInUser=() =>{ Navigate("/usersignup")};






    return (


        
        
      <>  

      <div className="header">
        WeCare                                                                     <h6>Call Us:0802233447</h6> 
      </div>
        
        <div  className = "heading">
        <h1 >We are at the heart of Appropriate Care</h1>
    </div>
                
                
                
                
            <div className="float-container">

            <div className="float-child">
               <img  src="Images/Life Coach Login.jpg" className ="coach-img" alt="A coach image"></img>


            <button onClick={()=>logInCoach}  className = "btn btn-primary">Login as a coach</button>
            <button onClick={()=>joinInCoach} className = "btn btn-primary">Join as a Coach</button>

                
                    
                    
                   
            </div>

            <div className="float-child">
                <div className="blue">
                <img  src="Images/User LogIn.jpg" className ="coach-img" alt="A user Image"></img>
                

                <button onClick={()=>logInUser} className = "btn btn-primary">Login as a User</button>
               <button onClick={()=>joinInUser} className = "btn btn-primary">Join as a User</button>

                

        
                </div>
            </div>

        </div><div>
              

    

            </div>
            </>
    )
}
    

export default Home