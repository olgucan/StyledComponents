import React from 'react'
import { Container } from '../components/styles/Container.styled'
import Header from '../components/Header'
import {ThemeProvider} from 'styled-components'
import GlobalStyles from '../components/Global'
import content from '../Content'
import Card from '../components/Card'
import Footer from '../components/Footer'
const Notes = () => {
  const theme = {
    colors: {header: '#ebfbff',
    body:'#fff',
    footer:'#003333'},
    mobile:'768px',
    
  }
  return (
    <ThemeProvider theme={theme}>
     <>
     <GlobalStyles/>
     <Header/>
    <Container>
          {content.map((a,i)=>(<Card key={i} a={a}>
           
          </Card>))}
    </Container>
    <Footer/>
    </>
    </ThemeProvider>
  )
}

export default Notes
