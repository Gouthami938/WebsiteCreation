import React, { useState } from 'react'
import axios from 'axios';
export default function Register() {

    
    const [users, setuser] = useState([{
           
            "firstName":"",
            "lastName":"",
            "email":"",
            "password":""
            
    }]);
    
    function changeDetails(e){

      let value = e.target.value;
      setuser({...Register,[e.target.name]:value});

    };

    const insertAction= async(e)=>{    

           await axios.post('http://localhost:8080/api/save_user',users)     
            };
       
   return (
    <>
    
    <div className='container'>
        
        <h1>Register</h1>
        <p>please fill the form to create account</p>
        
        <label for='FirstName'>
            <b><pre>FirstName</pre></b>
        </label>
        <input type="text" name="firstName" id="firstName" value={users.firstName} onChange={(e)=>changeDetails(e)} />
        <br/><br/>
        <label for='lastName'>
            <b><pre>LastName</pre></b>
        </label>
        <input type="text" name="lastName" id="lastName" value={users.lastName} onChange={(e)=>changeDetails(e)} />
        <br/><br/>
        <label for='Email'>
            <b><pre>Email</pre> </b>
        </label>
        <input type="text" name="email" id="email" value={users.email} onChange={(e)=>changeDetails(e)} />
        <br/><br/>
        <label for='Password'>
            <b><pre>Password</pre></b>
        </label>
        <input type="text" name="password" id="password" value={users.password} onChange={(e)=>changeDetails(e)} />
        <br/><br/>
        
        <input type="Submit" name="Insert" value="Register" onClick={(e)=>(insertAction(e))}/>
       
        </div>

    </>
   )
}
    





