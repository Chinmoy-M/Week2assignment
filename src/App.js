import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';




function App() {

  
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <Login/>
          </Route>
          <Route path = "/home">
            <Home/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;