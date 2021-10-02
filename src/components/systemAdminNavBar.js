import React, { Component } from "react";
import UserService from "../redux/services/UserService";
import {
  MDBNavbar,MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBFormInline, MDBNavbarToggler
} from "mdbreact";


class adminNavBar extends Component {
  state = {
    isOpen: false
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
        <MDBNavbar style={{padding:"0.9rem", marginTop:"-1.9rem", marginLeft:"-1.1rem", marginRight:"-1.1rem"}}
                   color="special-color" dark expand="md" className="mb-4">
          <MDBNavbarToggler onClick={this.toggleCollapse}></MDBNavbarToggler>

          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left style={{display: this.state.isOpen ? 'block' : 'none' }}>
              <MDBNavItem active>
                <MDBNavLink to="#!">Products</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Categories</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Stations</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Provinces</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Standards</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav left>
              <MDBNavItem style={{marginLeft:"2rem"}}>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem style={{marginRight:"2rem"}}>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                  {UserService.getUserId()} <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropleft">
                    <MDBDropdownItem href="#!">Account Settings</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => UserService.doLogout()}>Logout</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
    );
  }
}

export default adminNavBar;