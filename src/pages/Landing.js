import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { SigningForm } from "../components"
import { Splitter } from "../components"
import { white } from "ansi-colors";



export default class Landing extends Component {
    state = {}



    render() {
        return (
            <Fragment>
                <Splitter
                    leftContent={<span>Ma super page</span>}
                    backgroundLeft='red' backgroundRight='white'
                    imageRight="https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg"
                />
            </Fragment>
        )
       

    }
}