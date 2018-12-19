
import React, { Component } from "react"
import styled from 'styled-components'


export default class Splitter extends Component {

    state = {}


    render() {
        const { leftContent, rightContent, leftDetails, rightDetails, rightAlign, leftAlign, detailsLabel } = this.props
        return (
            <MainContainer>
                <LeftPart {... this.props} >
                    <Title>
                        {leftContent}
                    </Title>
                    {leftDetails &&
                        <Details>
                            <DetailsLabel>{detailsLabel ? detailsLabel : "Sorti le :"}</DetailsLabel>
                            <DetailsText>{leftDetails}</DetailsText>
                        </Details>}
                </LeftPart>
                <RightPart {...this.props} >
                    <Title>
                        {rightContent}
                    </Title>
                    {rightDetails &&
                        <Details>RIGHT</Details>}
                </RightPart>

            </MainContainer>
        )
    }



}


const MainContainer = styled.div`
width: 100%;
display: flex;
min-height: 100vh;
background-color: none;

`

const LeftPart = styled.div`
background-color: ${props => props.backgroundLeft};
background-image: url(${props => props.imageLeft});                                                                        
 height: 100%;
 flex: 1;
 background-position: center;
 background-size: 100%;
 background-repeat: none;
 display: flex;
position: relative;
 `

const RightPart = styled.div`
background-color: ${props => props.backgroundRight};
background-image: url(${props => props.imageRight});
background-position: center;
background-repeat: none;
height: 100%;
flex: 1;
display: flex;
position: relative;
`


const Title = styled.title`
font-size: ${props => props.Title ? "7em" : "5em"};
display: flex;
text-align: center;
padding-top: 1em;
padding-left: 1em;
font-weight: bold;
color: black;

 `
const Details = styled.div`
    position:absolute;
    background-color: red;
    height: 8em;
    width: 25em;
    padding: 1em;
    bottom: 7em;
    right: ${props => props.rightAlign && "7em"};
    left: ${props => props.leftAlign && "7em"};

`
const DetailsLabel = styled.label`


`
const DetailsText = styled.label`
font-weight: bold;
`