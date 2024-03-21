import React, {useState} from 'react';
import { useLocation, useNavigate} from "react-router-dom";

function Login() {   

    const [uid, setUserId]  = useState("admin");
    const [pwd, setPassword]  = useState("admin123");
    const [result, setResult]  = useState(""); 

    let navigate = useNavigate(); // for navigation using code
    let location = useLocation(); // for reading query string params

    function loginButton_click()
    { 
      const queryString = location.search; // returns the query string from the current url      
      let strReturnUrl  =  new URLSearchParams(queryString).get('returnUrl');

      if(strReturnUrl == null)
      {
        strReturnUrl = "/AjaxDemo3";
      }
        
        if(uid == "admin" && pwd == "admin123")
        {   
          // In real-time apps, we will get the token from the server
          // JWT token is the popular token generation library          
           let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
           sessionStorage.setItem('user-token', token);
          // navigate("/Depts");
          navigate(strReturnUrl);
        }
        else
        {
            setResult("Invalid User Id or Password");
        }
    }

    function logoutButton_click() {
      sessionStorage.removeItem('user-token');
      navigate("/");
    }


  return (
    <>   
      <fieldset>
                <legend>User Login</legend>

                <label>User Id  : </label>
                <input type="text" value={uid} onChange={(event) => setUserId(event.target.value)} />
                <br/><br/>

                <label>Password  : </label>
                <input type="password"  value={pwd}  onChange={(args) => setPassword(args.target.value)} />
                <br/><br/>

                <input type="button"  onClick={loginButton_click}  value="Login"    />
                <input type="button"  onClick={logoutButton_click}  value="Logout"    />
                <p  style={{color : "red"}}>{result}</p>   
       </fieldset>  
    </>
  );

}

export default Login;



















// import React, {useState} from 'react'

// function Login() {

//     const [uid, setUid] = useState("");
//     const [pwd, setPwd] = useState("");
//     const [result, setResult] = useState("");

//     function buttonClick()
//     {
//         if(uid === "admin" && pwd === "password")
//         {
//             setResult("Welcome to admin");
//         }
//         else{
//             setResult("Invalid userid or password!");
//         }
//     }

//   return (
//     <>

//     <h3>Working with states in ReactJS</h3>
//     <fieldset>
//     <legend>User Login</legend>
//     UserId: <input type='text' value={uid} onChange={(e) => setUid(e.target.value)} />
//     <br />
//     <br />
//     Password: <input type='text' value={pwd} onChange={(e) => setPwd(e.target.value)} />

//     <input type='button' value={'Submit'} onClick={buttonClick} />
//     {result}
//     </fieldset>
    
    
//     </>
//   )
// }

// export default Login