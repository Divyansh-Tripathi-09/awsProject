import React from "react";
import * as rb from "react-bootstrap";
// import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <rb.Navbar bg="dark" variant="dark" expand="lg">
          <rb.Container fluid>
            <rb.Navbar.Brand href="/">NMIT Previous Year Papers</rb.Navbar.Brand>
            <rb.Navbar.Toggle aria-controls="navbarScroll" />
            <rb.Navbar.Collapse id="navbarScroll">
              <rb.Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
              </rb.Nav>
              <rb.Form className="d-flex">
                <rb.FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <rb.Button variant="outline-success">Search</rb.Button>
              </rb.Form>
            </rb.Navbar.Collapse>
          </rb.Container>
        </rb.Navbar>
      </div>
    );
  }
}

export default NavBar;
