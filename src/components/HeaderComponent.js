import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Collapse, Nav, NavItem, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor() {
    super();

    this.toggleNav = this.toggleNav.bind(this)
    this.state = {
      isOpen : false
    };

  }
  toggleNav() {
    this.setState({
      isOpen : !this.state.isOpen
    })
  }

  render() {
    return(
    <>
      <Navbar dark expand='md'>
        <div className="container">
          <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className='mr-auto' href="/">
              <img src='/assets/images/logo.png' height='30' width='41' alt='Ristorante Con Fusion' />
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className='nav-link' to='/Home'>
                    <span className='fa fa-home'></span>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/Aboutus'>
                    <span className='fa fa-info'></span>
                    About Us
                  </NavLink>
                  </NavItem>
                  <NavItem>
                  <NavLink className='nav-link' to='/Menu'>
                    <span className='fa fa-list'></span>
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link' to='/Contactus'>
                    <span className='fa fa-address-card'></span>
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </div>
      </Navbar>
      <Jumbotron style={{background: '#9575CD'}}>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </>
    );
  }
}

export default Header;