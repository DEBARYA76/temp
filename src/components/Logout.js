import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout=()=>{
    const win=window.sessionStorage;
    win.clear();
    const navigator=useNavigate();
    useEffect(()=>{
        navigator("/home");
    },[])
}
export default Logout