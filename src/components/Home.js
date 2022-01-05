import React from 'react'
import styled from 'styled-components'
import { Section } from './Section'

export const Home = () => {
    return (
        <Container>
            <Section
                title=" Modelo S"
                description="Haga su pedido en línea para entrega sin contacto"
                backgroundImg="model-s.jpg"
                leftBtnText="Orden Personalizada"
                rightBtnText="Inventario de autos nuevos"
            />
            <Section
                title="Modelo Y"
                description="Haga su pedido en línea para entrega sin contacto"
                backgroundImg="model-y.jpg"
                leftBtnText="Orden Personalizada"
                rightBtnText="Inventario de autos nuevos"
            />
            <Section
                title="Modelo 3"
                description="Haga su pedido en línea para entrega sin contacto"
                backgroundImg="model-3.jpg"
                leftBtnText="Orden Personalizada"
                rightBtnText="Inventario de autos nuevos"
            />
            <Section
                title="Modelo X"
                description="Haga su pedido en línea para entrega sin contacto"
                backgroundImg="model-x.jpg"
                leftBtnText="Orden Personalizada"
                rightBtnText="Inventario de autos nuevos"
            />
            <Section
                title="Paneles Solares"
                description="Paneles solares de menor costo en Estados Unidos"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Orden Personalizada"
                rightBtnText="Aprende Mas"
            />
            <Section
                title="Techo solar"
                description="Techo solar"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Orden Personalizada"
                rightBtnText="Aprende Mas"
            />
            <Section
                title="Accesorios"
                description=""
                backgroundImg="accessories.jpg"
                leftBtnText="Compra Ahora"
            
            />
            
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;

`