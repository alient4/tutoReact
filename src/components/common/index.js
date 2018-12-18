import React from 'react'
import styled from 'styled-components'




export const Form = styled.form`
   background-color: grey;
   `
export const Input = styled.input`
padding: 0.5em;
border-radius: 0.2em;
border-style: solid;
top: 200px;
border: 1 px solid ${props => props.invalid ? "red" : "black"};

`

export const Button = styled.button`
background-color: white;
border: 1 px solid #dedede;
border-radius: 0.3em;
padding: 1em;
cursor: pointer;
width: 10em;
color: black;

`
export const Link = styled.link`
padding: 0.5 em;
font-weight: $(prop=>props.min ? "900" : ""};

`