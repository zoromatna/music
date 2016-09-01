import React, {Component} from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Swit from 'react-flexible-switch';
import Col from 'react-bootstrap/lib/Col';

class Showkeyboard extends Component {
  constructor() {
    super();
    this.state={
      active: true,
    };
  }

  abcs=()=>{
    this.setState({
      active: !this.state.active,
    });
  }

  render(){

    const popoverFocus = (
      <Popover id="Tempo">
        <div>
          <Col md={6}>
            <text>
              Show keyboard
            </text>
          </Col>
          <Col md={6}>
            <Swit className="swithMetro" onActive={this.abcs} onInactive={this.abcs} active={this.state.active}/>
          </Col>
          NOTE NAMING
          
        </div>
      </Popover>
    );
    return(
      <div>
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverFocus}>
          <img className="imgMetro" src="./src/components/img/KeyboardOption.png" />
        </OverlayTrigger>
      </div>
    );
  }
}

export default Showkeyboard;
