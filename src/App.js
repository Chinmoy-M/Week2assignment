import './App.css';




function App() {
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
        
        <button className = "btn btn-lg btn-success">Login</button>
        
      </div>
      </div>
    </div>
  );
}

export default App;