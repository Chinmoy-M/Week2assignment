import {Link} from 'react-router-dom';
import { useState } from 'react';

// function handleSubmit(event) {
        
        
    //     <Link to ="\home"></Link>
       

    // }

    // if(user === 'User' && pass === 'Pass') {
        //     setError('No error')
        // }
        // else {
        //     setError('Invalid credentials')
        // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if(pass.length === 0){
    //         setError("Password field required");
    //     }
    //     else{
    //         validatePassword(pass);
    //     }
    // }

const Login = () => {
  const [user, setUser] = useState('');
    const [pass, setPass] = useState('');



    function handleChangeUsername(event) {
       setUser(event.target.value)
    }

    function handleChangePassword(event) {
        setPass(event.target.value)

     }

  return ( 
    <div className="main">
    <div className = "sub-main">
    
    <div className = "container-fluid">
      <h1>Log in</h1>
      <div><label htmlFor = "u">User name:</label>
      <input type = "text" 
      name = "user"
      value = {user}
      className = "user" 
      id = "u"
      required
      onChange = {handleChangeUsername} />
      </div>
      <div>

      <label htmlFor = "p">Password: </label>
      <input type = "password"
      name = "pass"
      value = {pass}
      placeholder = "password" 
      className = "pass" 
      id = "p" 
      onChange = {handleChangePassword}
      required/>
      </div>
      
      <Link to = "/"><button className='btn btn-outline-warning btn-lg m-4'>Go back</button></Link>
      <Link to="/home"><button className = "btn btn-lg btn-success">Log </button></Link>
      
    </div>
    </div>
  </div>
   );
}
 
export default Login;