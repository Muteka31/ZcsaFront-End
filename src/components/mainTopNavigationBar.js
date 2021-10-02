import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
  
      <MDBNavbar color="cyan darken-4" dark expand="md" fixed="top" className="mb-5">
        <MDBNavbarBrand>
          <strong className="white-text">ZCSA System</strong>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/inspector-dashboard">Inspections</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink  to="/batch-inspection-sample-request-d-table">Sample Requests</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  Patiwa Danny Mhango <MDBIcon icon="user" /> 
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropleft">
                  <MDBDropdownItem href="#!">Account Settings</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    
    );
  }
}

export default NavbarPage;