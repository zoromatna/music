import React, {Component} from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Swit from 'react-flexible-switch';
import Col from 'react-bootstrap/lib/Col';

class Finger extends Component {
  // constructor() {
  //   super();
  //   this.state={
  //     active: true,
  //   };
  // }
  //
  // abcs=()=>{
  //   this.setState({
  //     active: !this.state.active,
  //   });
  // }

  render(){

    const popoverFocus = (
      <Popover id="Tempo">
        <div>
          <Col md={6}>
            <text>
              {this.props.title}
            </text>
          </Col>
          <Col md={6}>
            <Swit className="swithMetro" onActive={this.props.abcs} onInactive={this.props.abcs} active={this.props.active}/>
          </Col>

        </div>
      </Popover>
    );
    return(
      <div>
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverFocus}>
          <img className="imgMetro" src={this.props.icon} />
        </OverlayTrigger>
      </div>
    );
  }
}

export default Finger;
