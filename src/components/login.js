import {Link} from 'react-router-dom';

const Login = () => {
  return ( 
    <div className="main">
    <div className = "sub-main">
    
    <div className = "container-fluid">
      <h1>Login</h1>
      <div>
      <input type = "text" placeholder = "user name" className = "user"/>
      </div>
      <div>

      <input type = "text" placeholder = "password" className = "pass"/>
      </div>
      
      <Link to = "/"><button className='btn btn-outline-warning btn-lg m-4'>Go back</button></Link>
      <Link to="/home"><button className = "btn btn-lg btn-success">Log </button></Link>
      
    </div>
    </div>
  </div>
   );
}
 
export default Login;