import React, {Component} from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import {ButtonGroup, Button} from 'react-bootstrap'
import Swit from 'react-flexible-switch';
import Col from 'react-bootstrap/lib/Col';
import './InputKeyboard.css';
import SliderReact from 'react-bootstrap-native-slider';
import Drag from './Drag';

class InputKeyboard extends Component {
  constructor() {
    super();
    this.state={
      active: false,
      isDigital: false,
      isSound: false,
      isFooter: true,
      sensitive: 0.05
    };
  }

  changeValue=(va)=>{
    // console.log('Testtttttttttttttt',va.currentTarget.value);
    this.setState({
      sensitive: va.currentTarget.value
    });
  }

  inputDigital=()=>{
    this.setState({
      isSound: false,
    });
    document.inputSound = false;
    if (document.connect===false) {
      this.setState({
        isDigital: false,
        isFooter: true,
      });
    }else {
      this.setState({
        isDigital: true,
        isFooter: false
      });
    }
  }

  inputSound=()=>{
    this.setState({
      isDigital: false,
      isSound: true,
      isFooter: false,
    });
    document.inpputSound = true;
    console.log(document.inpputSound);
  }



  abcs=()=>{
    console.log(document.connect, this.state.active);
    this.setState({
      active: !this.state.active,
    });
    console.log('document.connect', this.state.active);
    if (this.state.active === true) {
      this.setState({
        isDigital: false,
        isFooter: true,
        isSound: false,
      });
      document.inputSound = false;
    }else {
      if (document.connect===false) {
        this.setState({
          isDigital: false,
          isFooter: true,
        });
      }else {
        this.setState({
          isDigital: true,
          isFooter: false
        });
      }
    }

  }

  render(){
    var divStyle = {
        width:"300px",
        alignItems: "center"
    }
    const popoverFocus = (
      <Popover id="Tempo">
        <div>
          <Col md={6}>
            Keyboard Input
          </Col>
          <Col md={6}>
            <Swit className="swithMetro" onActive={this.abcs} onInactive={this.abcs} active={this.state.active}/>
          </Col>
          <ContentInput name={this.state.active} inputDigital={this.inputDigital} inputSound={this.inputSound}/>
          <div className={this.state.isFooter ? 'showFooter' : 'hideFooter'}>
            Connect a Digital Piano or Midi ketboard to your PC
          </div>

            <div className={this.state.isDigital ? 'showFooter' : 'hideFooter'}>
              Midi
            </div>

            <div className={this.state.isSound ? 'showFooter' : 'hideFooter'}>
              <Col md={6}>
                Sensitive
              </Col>
              <Col md={6}>
                {this.state.sensitive}
              </Col>
              <Col>
              <SliderReact style={divStyle}
                  value={this.state.sensitive}
                  handleChange={this.changeValue}
                  step={0.01}
                  max={0.5}
                  min={0.01}
                  disabled="disabled"
                  />
              </Col>
            </div>

        </div>
      </Popover>
    );

    return(
      <div>
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverFocus}>
          <img src="./src/components/img/keyboard_Input.png" className="IconTempo" />
        </OverlayTrigger>
        <Drag DragActive = {this.state.isSound}/>
      </div>
    );
  }
}

class ContentInput extends Component {

  render(){
    return(
      <div className="content_choice_keyboard">
        <Button disabled={!this.props.name}  onClick={this.props.inputDigital} className="digital">
          Digital
        </Button>
        <Button disabled={!this.props.name} onClick={this.props.inputSound} className="sound" >
          Sound
        </Button>
      </div>
    );
  }
}

export default InputKeyboard;
