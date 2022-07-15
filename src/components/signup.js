import { useState } from 'react';
import {Link} from 'react-router-dom';


const Signup = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    function handleChange(event) {
        setError("");
        let reValue = event.target.name;
        let value = event.target.value;
        if (reValue === "user")
            setUser(value)
        else if (reValue === "pass")
            setPass(value)
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if(pass.length === 0){
    //         setError("Password field required");
    //     }
    //     else{
    //         validatePassword(pass);
    //     }
    // }

    // function validatePassword(value) {
        
    //     const symbl = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,15}$/;
    //     if (symbl.test(value) === false)
    //         return [true, "Password must contain minimum 4 letters and one special character"]
    //     else
    //         return [false, ""]
    // }


    return ( 
        <div className="main">
            <div className = "sub-main">
    
                <div className = "container-fluid">
                    <h1>Sign Up</h1>
                        <div><label>User name: </label>
                        <input type = "text"
                        required
                        name = "user" 
                        value={user}
                        onChange = {handleChange}
                        className = "user"/>
                        </div>
                        <div><label>Password: </label>
                        <input type = "password"
                        required
                        name = "pass"
                        value = {pass}
                        onChange = {handleChange}
                        className = "pass"/>
                        </div>
                        <div>{error}</div>
      
                    <Link to="/home"><button className = "btn btn-lg btn-success"
                    >Sign up</button></Link>
      
                </div>
            </div>
        </div>
     );
}
 
export default Signup;