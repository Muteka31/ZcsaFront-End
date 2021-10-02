import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBNavbarToggler, MDBFormInline
} from "mdbreact";
import UserService from "../redux/services/UserService";

class InspectorNavBar extends Component {
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
            <MDBNavItem>
              <MDBNavLink to="/inspector-dashboard/batch-inspection-datatable">Inspections</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink  to="/inspector-dashboard/sample-form">Sample Requests</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/inspector-dashboard/sample-submission">Sample Submission</MDBNavLink>
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
                 {UserService.getUsername()} {UserService.station}<MDBIcon icon="user" />
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

export default InspectorNavBar;