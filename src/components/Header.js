import React from 'react'
import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai'
export const Header = () => {
    return (
        <Container>
            <a>
                <img src="/img/logo.svg" alt="..."/>
            </a>
            <Menu>
                <p><a href='#'> Modelo S</a></p>
                <p><a href='#'> Modelo 3</a></p>
                <p><a href='#'> Modelo X</a></p>
                <p><a href='#'> Modelo Y</a></p>
            </Menu>
            <RightMenu>
                <a href='#'>Tienda </a>
                <a href='#'>Cuenta</a>
                <CustMenu />
            </RightMenu>
            
        </Container>
    )
}
const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between ;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;

`
const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex:1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
    @media(max-width:768px){
        display: none;
    }

`
const RightMenu =styled.div`
    display:flex;
    align-items: center;
    
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

`
const CustMenu=styled(AiOutlineMenu)`
    cursor: pointer;
`
const prueba;