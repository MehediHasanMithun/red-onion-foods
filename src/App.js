import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
