import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { SigningForm } from "../components"


export default class Landing extends Component {

    render() {
        return (
            <Fragment>
                <h1>LANDING PAGE</h1>
                <SigningForm />
            </Fragment>
          
        )

    }
}