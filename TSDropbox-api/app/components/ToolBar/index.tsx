import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";

const ToolBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link href={"/"}>DropBox</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Stack direction="horizontal" gap={2}>
            <Nav>
              <Link href={"/"}>Token</Link>
            </Nav>
            <Nav>
              <Link href={"/dropbox/_"}>Files</Link>
            </Nav>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ToolBar;
