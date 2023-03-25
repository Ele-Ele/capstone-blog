//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNav() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-danger fs-3 fw-bold" href="#">
          Crime&Crime
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="border border-danger bg-danger"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-danger fw-semibold" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="text-danger fw-semibold" href="#action2">
              Link
            </Nav.Link>
            <NavDropdown
              className="bg-danger ms-1 fw-bold"
              title="Link"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item className="text-danger bg-dark" href="#action3">
                Action
              </NavDropdown.Item>
              <NavDropdown.Item className="text-danger bg-dark" href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-danger bg-dark" href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
