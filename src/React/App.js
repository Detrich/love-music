import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound"

class App extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Profiles/:username" component={Profile} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        )
    }
}  
