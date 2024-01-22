import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavHead() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow space-between">
      <Container fluid>
        <Navbar.Brand href="/home">Knowledge Express</Navbar.Brand>
        <Nav className="pe-2">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/catalogue">View Catalogue</Nav.Link>
          <Nav.Link href="/add">Add New</Nav.Link>
          <NavDropdown title="Update" id="collapsible-nav-dropdown" align="end">
            <NavDropdown.Item href="/update">Update Records</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Delete Records</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavHead;
