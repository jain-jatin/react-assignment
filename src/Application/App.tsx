import React from "react";
import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";
import { MainApp } from "./style";
import Home from "../pages/home/index";
import Login from "../pages/login/index";
import {
    AuthorizationContext,
    useProvideAuthorization,
} from "./authorization-context";

const App: React.FC = () => {
    const authorization = useProvideAuthorization();
    const isAuthenticated = authorization.isAuthenticated;
    const redirectPath = isAuthenticated ? "/home" : "/login";
    return (
        <MainApp>
            <AuthorizationContext.Provider value={authorization}>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to={redirectPath} />}
                        />
                        <Route
                            exact
                            path="/home"
                            render={() =>
                                isAuthenticated ? (
                                    <Home />
                                ) : (
                                    <Redirect to={"/login"} />
                                )
                            }
                        />
                        <Route
                            exact
                            path={"/login"}
                            render={() =>
                                !isAuthenticated ? (
                                    <Login />
                                ) : (
                                    <Redirect to={"/home"} />
                                )
                            }
                        />
                    </Switch>
                </Router>
            </AuthorizationContext.Provider>
        </MainApp>
    );
};

export default App;
