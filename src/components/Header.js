import React from 'react'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

import { StyledHeader,Nav,Logo,Image } from './styles/Header.styled'
const Header = () => {
  return (
    <StyledHeader >
      <Container>
          <Nav>
              <Logo src='./images/logo.svg' />
              <Button>Try it Free</Button>
          </Nav>
          <Flex>
            <div>
              <h1>Build The Community</h1>
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, distinctio. Beatae deserunt, maiores laboriosam delectus eligendi rem sequi architecto ipsam voluptatem distinctio. Rem, omnis?
               </p>
              <Button bg='#ff0099' color='#fff'>
                Get Started For Free
              </Button>
            </div>
            <Image src='./images/illustration-mockups.svg'></Image>
          </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
