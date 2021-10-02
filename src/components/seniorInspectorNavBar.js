import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import UserService from "../redux/services/UserService";


class SeniorInspectorNavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
  
      <MDBNavbar color="special-color" dark expand="md" fixed="top" className="mb-5">
        <MDBNavbarBrand>
          <strong className="white-text">ZCSA System</strong>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/inspector-dashboard">ASYCUDA Applications</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  {UserService.getUsername()}
                <MDBIcon className="ml-2" icon="user" />
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

export default SeniorInspectorNavBar;