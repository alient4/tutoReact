import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { SigningForm } from "../components"
import { Splitter } from "../components"



export default class Landing extends Component {
    state = {}



    render() {
        return (
            <Fragment>
                <Splitter />
            </Fragment>
        )
       

    }
}