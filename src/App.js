import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Register from './pages/Login/Register/Register';
import Login from './pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route exact path="/home">
              <Home></Home>
          </Route>
          <Route exact path="/login">
              <Login></Login>
          </Route>
          <Route exact path="/register">
              <Register></Register>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
