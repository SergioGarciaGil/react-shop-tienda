import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../container/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../container/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AppContext from "../context/AppContext.jsx";
import "../styles/global.css";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/recovery-password"
              component={RecoveryPassword}
            />
            <Route component={NotFound} />;
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
