import { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/ProfileManager/Profile';
import ProfileAccount from './components/ProfileManager/ProfileAccount';
import SignUp from './components/SignUp/SignUp';

export const foodDetailContext = createContext();
export const userInfoContext = createContext();
function App() {
  const [foodDetail,setFoodDetail] = useState({});
  const [userInfo,setUserInfo] = useState({
    isSignIn:false,
    name:"",
    email:"",
    photo:"",
    emailVerified:"",
    errorMessage:""
  });
  return (
    <userInfoContext.Provider value={[userInfo,setUserInfo]}>
    <foodDetailContext.Provider value={[foodDetail,setFoodDetail]}>
    <Router>
      <Switch>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="/myaccount">
          <ProfileAccount></ProfileAccount>
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
    </userInfoContext.Provider>
  );
}

export default App;
