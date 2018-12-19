import React, { Component, Fragment } from "react"
import styled from 'styled-components'
import Portal from "./Portal";

export default class Modal extends Component {


    
    state = {}
    closeModale = ()=>{
        if(this.props.onClose){
        this.props.onClose();
        }
    }
        
        

    render() {
        return (
            <Portal>
                <MainContainer>
                    <Container>
                        {this.props.children}
                    </Container>
                </MainContainer>
            </Portal>
        )

    }

}

const MainContainer = styled.div`

`

const Container = styled.div`

`

const CloseIcon = styled.img`
position: 


`