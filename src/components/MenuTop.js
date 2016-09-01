import React, {Component} from 'react';
import './MenuTop.css';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import MenuLeft from './MenuLeft';
import {Navbar, FormGroup, FormControl, Button, Glyphicon} from 'react-bootstrap';
import Sidebar from 'react-sidebar';

class MenuTop extends Component {
  constructor(){
    super();
    this.state ={
      sidebarOpen: false
    }
  }

  onSetSidebarOpen(){
    this.setState({
      sidebarOpen: open
    });
  }
  showLeft(){
    this.refs.left.show();
  }

  render(){
     var sidebarContent = <b>Sidebar content</b>;
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><Glyphicon glyph="align-justify" /></a>
            asdfasd
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">Search</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
      
    );
  }
}

export default MenuTop;
