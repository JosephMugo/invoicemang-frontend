import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import PublicRoute from "./utils/PublicRoute/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute/PrivateRoute";

const NotFound = () => (<Redirect path="/login" />);

function App() {
    return (
        <div className="App" style={{height: "100%"}}>
            <Router>
                <Switch>
                    <PrivateRoute component={Dashboard} path="/dashboard" exact />
                    <PublicRoute restricted={true} component={Login} path="/login" exact />
                    <PublicRoute restricted={true} component={SignUp} path="/signup" exact />
                    <PublicRoute restricted={false} component={Home} path="/" exact />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;