import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { AuthContext, useAuth } from "./Auth/useAuth";

function App() {
    // figure out how to pass auth to the provider
    return (
        <div className="App" style={{height: "100%"}}>
            <AuthContext.Provider value={false}>
                <Router>
                    <Switch>
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <PublicRoute restricted={true} path="/login" component={Login} />
                        <PublicRoute restricted={true} path="/signup" component={SignUp} />
                        <PublicRoute restricted={false} path="/" component={Home} />
                    </Switch>
                </Router>
            </AuthContext.Provider>
        </div>
    )
}

export default App;