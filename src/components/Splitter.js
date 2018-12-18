
import React, { Component } from "react"
import styled from 'styled-components'
import { concat } from "rxjs";


export default class Splitter extends Component {

    state = {}


    render() {
        return(
            <MainContainer>
                <LeftPart {... this.props} ><Title>LEFT</Title></LeftPart>
                <RightPart {...this.props} >RIGHT</RightPart>


            </MainContainer>
        )
    }



}


const MainContainer = styled.div`
width: 100%;
display: flex;
min-height: 200vh;
background-color: none;

`

const LeftPart = styled.div`
background-color: ${props => props.backgroundLeft};
background-image: url(${props => props.imageLeft});

height: 100%;
flex-grow: 1;
background-position: center;
background-size: 100%;
background-repeat: none;
display: flex;
justify-content: 

`
const RightPart = styled.div`
background-color: ${props => props.backgroundRight};
background-image: url(${props => props.imageRight});
background-position: center;
height: 100%;
flex-grow: 1;

`
const Title = styled.title`
font-size: ${props => props.Title ? "7em" : "5em"};
`
const ContentLeft = styled.body`

font-size: ${props => props.leftContent ? "2em" : "1em"};

`