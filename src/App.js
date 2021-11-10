import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Pages/Context/AuthProvider";
import Home from "./Pages/Home/Home/Home";
import Order from "./Pages/Home/Order/Order";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Registration from "./Pages/Login/Registration/Registration";
import Navigation from "./Pages/Shared/Navigation/Navigation";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
