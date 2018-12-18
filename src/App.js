import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Landing } from './pages'
import { Contact } from './pages'
import { Signup } from './pages'
import { Fragment } from "react"
import { Navbar } from './components'
import { SigningForm } from './components'
import { SignupForm } from './components'



export default class App extends Component {

    state = {
        app_name: "Ma super appli"
    }
    componentWillMount() {

    }
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/signingform" component={SigningForm} />
                            <Route path="/signupform" component={SignupForm} />
                            <Route path="/signup" component={Signup} />
                        </Switch>

                    </Suspense>






                </Fragment>
            </Router>
        )

    }

}