import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import { useState } from "react";
import { useEffect } from "react";
import AuthService from "./services/auth.service";
import { AuthContextProvider } from "./Auth/AuthContext";

function App() {
    return (
        <div className="App" style={{height: "100%"}}>
            <AuthContextProvider>
                <Router>
                    <Switch>
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <PublicRoute restricted={true} path="/login" component={Login} />
                        <PublicRoute restricted={true} path="/signup" component={SignUp} />
                        <PublicRoute restricted={false} path="/" component={Home} />
                    </Switch>
                </Router>
            </AuthContextProvider>
        </div>
    )
}

export default App;