import logo from './logo.svg';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import HiredProfile from './Components/HiredProfile/HiredProfile';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';

function App() {
  return (
    <div className="App">
     <AuthProvider>
       <Router>
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route path="/register">
             <Register></Register>
           </Route>
           <Route path="/login">
             <Login></Login>
           </Route>
           <Route path="/hiredProfile">
             <HiredProfile></HiredProfile>
           </Route>
           <Route path="/updateProfile/:profileId">
             <UpdateProfile></UpdateProfile>
           </Route>
         </Switch>
       </Router>

     </AuthProvider>
    </div>
  );
}

export default App;
