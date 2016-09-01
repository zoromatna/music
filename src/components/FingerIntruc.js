import React, {Component} from 'react';
import CompSwitch from './CompSwitch';

class FingerIntruc extends Component {
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
        <CompSwitch title="Finger Intruction" abcs={this.abcs} active={this.state.active} icon="./src/components/img/FingerIndex.png"/>
      </div>
    );
  }
}

export default FingerIntruc;
