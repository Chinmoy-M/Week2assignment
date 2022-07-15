import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Page
      <div className="container-fluid">
        <Link to="/"><button className="btn btn-primary">Sign Out </button></Link>
        </div>
      
    </div>

    
   );
}
 
export default Home;