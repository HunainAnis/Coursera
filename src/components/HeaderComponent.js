import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Collapse, Nav, NavItem, NavbarToggler, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor() {
    super();

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isOpen : false,
      isModalOpen : false
    };

  }
  toggleNav() {
    this.setState({
      isOpen : !this.state.isOpen
    })
  }

  toggleModal() {
    this.setState({
      isModalOpen : !this.state.isModalOpen
    })
  }
  
  handleLogin(e) {
    this.toggleModal();
    alert('Username: ' + this.username.value + 'Password: ' + this.password.value + 'Remember: ' + this.remember.checked);
    e.preventDefault();
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
              <Nav navbar className='ml-auto'>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-sign-in fa fa-lg'></span> Login
                  </Button>
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
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
         <ModalHeader>Login</ModalHeader>
         <ModalBody>
           <Form onSubmit={e=>this.handleLogin(e)}>
            <FormGroup>
              <Label htmlFor='username'>Username</Label>
              <Input type='text' name='username' id='username' innerRef={input=>this.username = input} /> 
            </FormGroup>
            <FormGroup>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' name='password' id='password' innerRef={input=>this.password = input} /> 
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='checkbox' name='remember' innerRef={input=>this.remember = input} />
                Remember me
              </Label>
            </FormGroup>
            <Button type='submit' value='submit' color='primary'>Login</Button>
           </Form>
         </ModalBody>
       </Modal>
    </>
    );
  }
}

export default Header;