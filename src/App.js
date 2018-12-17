import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Landing } from './pages'
import { Contact } from './pages'
import { Fragment } from "react"
import { Navbar } from './components'
import { SigningForm } from './components'



export default class App extends Component {

    state = {
        app_name: "Ma super appli"
    }
    componentWillMount() {

    }
    render() {
        return (
            <Router>
            <fragment>
               
                    <Navbar/>
                    
              
             
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/signingform" component={SigningForm} />
                    </Switch>
                
                </fragment>
            </Router>
        )

    }

}