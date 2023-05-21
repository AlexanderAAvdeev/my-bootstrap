import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import{Link} from 'react-router-dom'
import { Button } from "bootstrap";
import "../App.css"


const Header = () =>{
  return(
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> <Link to={'/'}></Link>A&B</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
              <Link to={'/'}>
                Home
                </Link>
                </Nav.Link>
              <Nav.Link>
              <Link to={'/favorites'}>
                Favorites
                </Link>
              </Nav.Link>
              <Nav.Link>
              <Link to={'/cart'}>
                Cart
                </Link>
                </Nav.Link>
                <Nav.Link>
              <Link to={'/description'}>
                Description
                </Link>
                </Nav.Link>
            </Nav>
        </Container>
      </Navbar>


    </div>
  )
}
export default Header