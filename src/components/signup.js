import { useState } from 'react';
import {Link} from 'react-router-dom';


const Signup = () => {
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
                <form action = "/home">
                <div className = "container-fluid">
                    <h1 className='mb-5'>Sign Up</h1>
                        <div className = "mb-4"><label className='field' htmlFor='u'>User name: </label>
                        <input type = "text"
                        name = "user" 
                        value={user}
                        className = "user"
                        id = "u"
                        onChange = {handleChangeUsername}
                        required/>

                        </div>

                        <div className = "mb-4"><label className='field' htmlFor='p'>Password: </label>
                        <input type = "password"
                        required
                        name = "pass"
                        value = {pass}
                        onChange = {handleChangePassword}
                        minLength = "4"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 4 or more characters"
                        className = "pass"
                        id = "p"/>
                        </div>
                        <Link to = "/"><button className='btn btn-outline-warning btn-lg m-4'>Go back</button></Link>
                        <button className = "btn btn-lg btn-success" >Sign up</button>
      
                </div>
                </form>
            </div>
        </div>
     );
}
 
export default Signup;