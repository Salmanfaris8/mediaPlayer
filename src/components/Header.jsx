import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar style={{zIndex:1}} className="bg-dark position-fixed w-100">
        <Container>
          <Navbar.Brand >
            <Link style={{textDecoration:'none',color:'white',fontFamily:"Bebas Neue system-ui",fontWeight:'600'}} to={'/'}>
              <i className='fa-solid fa-music me-2'></i>{' '}
              Media Player 
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header