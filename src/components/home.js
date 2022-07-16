import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      
      
      <div className="mb-4">
        <div className="p-3 bg-info bg-opacity-70 border border-info border-start-0 rounded-end">
        Welcome to UDB!
        </div>

        <pre>


        UDB Solutions is a promising startup looking to change the scenario of healthcare
        applications. Our aim is to make accessibility, availability and affordability to
        healthcare facilities, life changingly easy. At UDB, we are always looking to solve
        challenging, real-world problems leveraging today’s new technologies and also
        learning along the way.

        As part of our endeavour, we are looking to build a team of young talents with
        technical aptitude and interest in gaining practical knowledge of building an industry
        level application.

        We are aware of the lack of opportunities and industry exposure for young
        engineering students. To cater for this issue, we are coming up with a remote
        Internship programme for tech enthusiast undergrad students. Interested students
        can apply for the below roles.

        </pre>
      </div>
        {/* <!-- ...............Grid Starts............ --> */}
      <div className="mb-4">
        <div className="p-3 bg-info bg-opacity-70 border border-info border-start-0 rounded-end">
          Available Roles
        </div>
        <br/>
        <br/>
        <div className="container">
          <div className="row">
            <div className="col">
              {/* <!-- ........card 1 starts.... --> */}
              <div className="card" >
                <img src="download (1).png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"> UI / UX Designer </h5>
                  <p className="card-text">UI/UX Designer would be responsible for creating the wireframes for an application
                    with provided requirements and translating these wireframes to UI Mockups.
                  </p>
                </div>
              </div>
                {/* <!-- ........card 1 ends.... --> */}
            </div>
            <div className="col">
              {/* <!-- ............Card 2 Starts............. --> */}
              <div className="card" >
                <img src="anddddd.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Android Developer</h5>
                  <p className="card-text">Android Developer is responsible for the following tasks: Translating UI Mockups to Android XML templates. Building responsive
                    templates for different screen sizes and orientations.
                  </p>
                </div>
            </div>
              {/* <!-- ............Card 2 Ends............. --> */}
            </div>
            <div className="col">
              {/* <!-- ...............Card 3 Starts...................... --> */}
              <div className="card" >
                <img src="web developper.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">. Web Developer</h5>
                  <p className="card-text">Web Developer is responsible for the following tasks:
                    Building Web Portal using modern web development frameworks like
                    ReactJS, NextJs, NodeJS, Django, Flask, etc.
                  </p>
                </div>
              </div>
              {/* <!-- ...............Card 3 Ends................. --> */}
            </div>
          </div>
        </div>
      </div>
      




      <div classNameName="container-fluid">
        <Link to="/"><button classNameName="btn btn-primary">Sign Out </button></Link>
        </div>
      
    </>

    
   );
}
 
export default Home;