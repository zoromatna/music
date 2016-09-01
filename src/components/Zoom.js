import React, {Component} from 'react';
import CompSlider from './CompSlider';

class Volume extends Component {
  constructor(props) {
    super(props);
    this.state={
      temp: 1
    };
  }

  changeValue=(va)=>{
    console.log('Testtttttttttttttt',va.currentTarget.value);
    this.setState({
      temp: va.currentTarget.value
    });

  }

  render(){
    return(
      <div>
        <CompSlider
        tempo={this.state.temp}
        changeValue={this.changeValue}
        ten="Zoom x" 
        step={0.1}
        max={2}
        min={0.5}
        iconbtn="./src/components/img/zoom2.png" />
      </div>
    );
  }
}

export default Volume;
