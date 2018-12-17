import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"




export default class App extends Component {

    state = {
        app_name:  "Ma super appli"
    }
    componentWillMount() {
        
    }
    render() {
        
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={()=><h1>LANDING</h1>}/>
                    <Route path="/contact" component={()=><h1>CONTACT</h1>}/>
                </Switch>
            </Router>
           
          
        )
       
    }
   
}