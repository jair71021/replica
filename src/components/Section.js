import React from 'react'
import styled from 'styled-components'

export const Section = ({title, description,leftBtnText, rightBtnText, backgroundImg}) => {
    return (
        <Wrap bgImg={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                    { rightBtnText &&
                    <RightButton>{rightBtnText} </RightButton>
                    }
                </ButtonGroup>
                    {/* <DownArrow src="/img/down-arrow.svg" /> */}
            </Buttons>
        </Wrap>
    )
}


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    // background-image:url('img/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${props => `url("/img/${props.bgImg}")` }

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    >p{
        font-size:22px;
    }

`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(max-width:768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width : 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items:  center;
    border-radius:100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled.div`
    background: white;
    height: 40px;
    width : 256px;
    color: black;
    display: flex;
    justify-content: center;
    align-items:  center;
    border-radius:100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
    margin: 8px;
    
`
const Buttons = styled.div`

`

