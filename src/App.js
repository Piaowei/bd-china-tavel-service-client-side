import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/addService/AddService';
import Services from './Pages/Home/Services/Services';
import Service from './Pages/Home/Service/Service';
import ManageServices from './Pages/ManageServices/ManageServices';
import Myorders from './Pages/MyOrders/Myorders';
import MyorderDetails from './Pages/MyorderDetails/MyorderDetails';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/myorders">
              <Myorders></Myorders>
            </PrivateRoute>

            <Route path="/myorderDetails" >
              <MyorderDetails></MyorderDetails>
            </Route>

            <Route path="/addservice" >
              <AddService></AddService>
            </Route>
            <Route path="/services" >
              <Services></Services>
            </Route>
            <Route path="/service" >
              <Service></Service>
            </Route>
            <Route path="/manageServices" >
              <ManageServices></ManageServices>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
