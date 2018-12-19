import React, { Component, Fragment } from "react"
import styled from 'styled-components'
import ReactDOM from "react-dom"


const Portal = (props) => {

    return ReactDOM.createPortal(props.children, document.getElementById('portal'))
}

export default Portal