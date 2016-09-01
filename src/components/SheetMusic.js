import React, {Component} from 'react';
import CompSwitch from './CompSwitch';

class SheetMusic extends Component {
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
        <CompSwitch title="Sheet Music" abcs={this.abcs} active={this.state.active} icon="./src/components/img/SheetOption.png"/>
      </div>
    );
  }
}

export default SheetMusic;
