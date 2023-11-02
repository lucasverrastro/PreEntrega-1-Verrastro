import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent =() => {
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Best Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Products" data-bs-theme="light" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Butcher shop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bakery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Winery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Home Appliances</NavDropdown.Item>
            </NavDropdown>  
          </Nav>
         <CartWidgetComponent/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;