import React, { Component } from "react"
import styled from 'styled-components'
import { Form, Button, Input } from './common'
import { isValid } from "ipaddr.js"




export default class SignupForm extends Component {

    state = {
       
    }
        
    // destructure l'objet reçu de l'event (name et value reçus)
    handleChange = ({ target: { name, value } }) => {
        // setState => attribut : valeur balise htmls: name = value
        this.setState({ [name]: value }) // crée un attribut username dans le state et lui affecte le texte saisi
        console.log(this.state)

    }

    submitForm = (event) => {
        event.preventDefault()
     
       
        if (this.props.onFormSubmit) {
            this.props.onFormSubmit(this.state)

        } else {
            alert("Vos données ne sont pas valides")
        }
        console.log(this.state)
        this.setState({ [event.target.name]: event.target.value }) // crée un attribut correspondant au name de l'input dans le state et lui affecte le texte saisi (variable dans value)

    }


    render() {
        const { username, email, password, passwordconfirm } = this.state
        const isInvalid = (password != passwordconfirm)
        const isValid = username && email && password && !isInvalid
        return (
         
            <Form onSubmit={this.submitForm}>
                <Input name="username" value={username} invalid={!username} placeholder="Username" onChange={this.handleChange} />
                <Input name="email" value={email} type="email" placeholder="email" onChange={this.handleChange} />
                <Input name="password" value={password} type="password" placeholder="password" onChange={this.handleChange} />
                <Input name="passwordconfirm" value={passwordconfirm} type="password" placeholder="password" onChange={this.handleChange} />
                {isInvalid &&<label>Le mot de passe et la confirmation sont différents</label>}
                {isValid &&<Button>S'inscrire</Button>}
            </Form>
             
        )

    }
}
