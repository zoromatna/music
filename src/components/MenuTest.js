import React from 'react';
// import ReactDOM from 'react-dom';
import {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Swit from 'react-flexible-switch';
import Slider from 'react-rangeslider';
import SliderReact from 'react-bootstrap-native-slider';
import Griddata from './Griddata';


class Menu extends Component {

  constructor(props,context){
    super(props,context);
    this.state={
      name:0,
      number: 1,
      hor: 10,
      active: true,
      slideRange: 80
    };
  }

  handleClick=()=>{
    console.log('vaf');
    this.setState ({
      name: this.state.name +1,
      number: this.state.number +1,
    });

    console.log(this.state.name);
  }

  handleChangeHor=(value)=>{
    this.setState({
      hor: value
    });
  }

  changeValue=(va)=>{
    console.log('Testtttttttttttttt',va.currentTarget.value);
    this.setState({
      slideRange: va.currentTarget.value
    });
  }
  abcs=()=>{

    this.setState({
      active: !this.state.active,
    });
  }

slideChange=(value)=>{
  console.log('aaaaaa',value);
  this.setState({
    slideRange:value
  });
}
  // onActive = () => { console.log('active!') }
  // onInactive = () => { console.log('inactive!') }
  render(){
    let {name, number, hor, active, slideRange} = this.state;
    const popoverFocus = (
      <Popover id="popover-trigger-focus" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
         <Button bsStyle="danger" onClick={this.handleClick}>{this.state.name}</Button>
         <Swit onActive={this.abcs} onInactive={this.abcs} active={this.state.active}/>
         <SliderReact style={divStyle}
             value={this.state.slideRange}
             handleChange={this.changeValue}
             step={1}
             max={100}
             min={10}
             disabled="disabled"
             />
          <Swit/>
      </Popover>
    );

    var divStyle = {
        width:"300px",
        alignItems: "center"
    }
    return(
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
      </Navbar>
      <Button bsStyle="success" onClick={this.handleClick}>{this.state.name}</Button>

      <OverlayTrigger trigger="click" placement="bottom" overlay={popoverFocus}>
        <Button>Focus</Button>
      </OverlayTrigger>
      <div>

        <Slider
            className="default"
            min={5}
            max={100}
            value={hor}
            onChange={this.handleChangeHor} />

        <Volume />
        <Slider min={30} max={200} value={this.state.slideRange} onChange={this.slideChange}/>
        <div style={divStyle}>
            <SliderReact style={divStyle}
                value={this.state.slideRange}
                handleChange={this.changeValue}
                step={1}
                max={100}
                min={10}
                // disabled="disabled"
                />
        </div>
            <div className="value">Value: {this.state.slideRange}</div>
            <Griddata />
       </div>

    </div>
    );
  }
}


class Volume extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10 /** Start value **/
    };
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <Slider
        min={0}
        max={100}
        value={this.state.value}
        orientation="vertical"
        onChange={this.handleChange} />
    );
  }
}

export default Menu;
