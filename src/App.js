import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import First from './components/first';
import Signup from './components/signup';




function App() {

  
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <First/>
          </Route>
          <Route path = "/login">
            <Login/>
          </Route>
          <Route path = "/signup">
            <Signup/>
          </Route>
          <Route path = "/home">
            <Home/>
          </Route>
          <Redirect to = "/" />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;