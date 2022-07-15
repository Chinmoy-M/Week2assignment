import {Link} from 'react-router-dom';

const First = () => {
    return ( 
        <div className='main'>
            <div className="sub-main">
            <Link to="/login"><button className = "btn btn-lg btn-success">Login</button></Link>
            <Link to="/signup"><button className = "btn btn-lg btn-light">Signup</button></Link>
            </div>
        </div>

     );
}
 
export default First;