import { NavbarBrand, Form , Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function WeatherNavbar() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <NavbarBrand href="/">Weather App</NavbarBrand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Popular Cities" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/cities/Tehran">Tehran</NavDropdown.Item>
              <NavDropdown.Item href="/cities/Shiraz">Shiraz</NavDropdown.Item>
              <NavDropdown.Item href="/cities/Isfahan">Isfahan</NavDropdown.Item>
              <NavDropdown.Item href="/cities/Bushehr">Bushehr</NavDropdown.Item>
              <NavDropdown.Item href="/cities/Yazd">Yazd</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Another Cities</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Popular States" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/states/Tehran">Tehran</NavDropdown.Item>
              <NavDropdown.Item href="/states/Fars">Fars</NavDropdown.Item>
              <NavDropdown.Item href="/states/Isfahan">Isfahan</NavDropdown.Item>
              <NavDropdown.Item href="/states/Bushehr">Bushehr</NavDropdown.Item>
              <NavDropdown.Item href="/states/Yazd">Yazd</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Another States</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
