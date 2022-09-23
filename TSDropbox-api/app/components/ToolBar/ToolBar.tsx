import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'

const ToolBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link href={"/"}>DropBox</Link>
        </Navbar.Brand>
        <Navbar.Toggle/>
          <Navbar.Collapse >
            <Nav>
              <Link href={"/"}>Home</Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ToolBar