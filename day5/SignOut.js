import { useNavigate } from "react-router-dom";



function SignOut() {

    let navigate = useNavigate();
    
    sessionStorage.removeItem('user-token');
    navigate("/");
  }

export default SignOut