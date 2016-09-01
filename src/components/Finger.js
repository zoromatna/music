import React, {Component} from 'react';
import CompSwitch from './CompSwitch';
import Swit from 'react-flexible-switch';
import Col from 'react-bootstrap/lib/Col';

class Finger extends Component {
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
    return(
      <div>
        <CompSwitch title="Finger" abcs={this.abcs} active={this.state.active} icon="./src/components/img/FingerIndex.png"/>
      </div>
    );
  }
}

export default Finger;
