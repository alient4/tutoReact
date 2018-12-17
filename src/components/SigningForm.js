import React, { Component } from "react"
import styled from 'styled-components'

export default class SigningForm extends Component {

    state = {
    }


    handleChange = (event) => {
        this.setState({ username: event.target.value }) // crée un attribut username dans le state et lui affecte le texte saisi
       
    }


    render() {
        return (

            <Form>
                <input placeholder="rien" onChange={this.handleChange}>

                </input>

            </Form>

        )

    }
}

const Form = styled.div`
   background-color: red;
   `
const Input = styled.div`
padding: 0.5em;
font-size: 0.3em;
border-radius: 0.2em;
border-style: solid;
border: 1 px solid $(props=> props.invalid ? "red" : "black")
`