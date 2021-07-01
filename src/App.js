import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Breakfast from './components/Breakfast/Breakfast';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

export const foodDetailContext = createContext();

function App() {
  const [foodDetail,setFoodDetail] = useState({});
  return (
    <foodDetailContext.Provider value={[foodDetail,setFoodDetail]}>
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
    </foodDetailContext.Provider>
  );
}

export default App;
