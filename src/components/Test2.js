import React, {Component} from 'react';
import Test from './Test';

class Test2 extends Component {
  constructor() {
    super();
    this.state={
      tempo: 80
    };
  }

  changeValue=(va)=>{
    console.log('Testtttttttttttttt',va.currentTarget.value);
    this.setState({
      tempo: va.currentTarget.value
    });

  }

  render(){
    return(
      <div>
        <Test tempo={this.state.tempo} changeValue={this.changeValue} ten="Speed" />
      </div>
    );
  }
}

export default Test2;
