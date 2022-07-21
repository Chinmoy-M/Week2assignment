import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import First from './components/first';
import Signup from './components/signup';




function App() {

  
  return (
    <Router>
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
    </Router>
  );
}

export default App;