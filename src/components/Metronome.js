import React, {Component} from 'react';
import Swit from 'react-flexible-switch';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import './Metronome.css';
import Col from 'react-bootstrap/lib/Col';

class Metronome extends Component {
  constructor() {
    super();
    this.state={
      active: false,
    };
  }

  abcs=()=>{
    this.setState({
      active: !this.state.active,
    });
  }

  render(){
    const popoverFocus = (
      <Popover id="IdMetronome">
        <div>
          <Col md={6}>
            <text>
              Metronome
            </text>
          </Col>
          <Col md={6}>
            <Swit className="swithMetro" onActive={this.abcs} onInactive={this.abcs} active={this.state.active}/>
          </Col>

          <Col md={9}>
            Time signature
          </Col>
          <Col md={3}>
            4/4
          </Col>


        </div>
      </Popover>
    );
    return(
      <div>
      <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverFocus}>
        <img className="imgMetro" src="./src/components/img/metronome.png" />
      </OverlayTrigger>
      </div>
    );
  }
}

export default Metronome;
