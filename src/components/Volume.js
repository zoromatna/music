import React, {Component} from 'react';
import CompSlider from './CompSlider';

class Volume extends Component {
  constructor(props) {
    super(props);
    this.state={
      temp: 100
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
        <CompSlider tempo={this.state.temp} changeValue={this.changeValue} ten="Volume" step={1} max={127} min={0} iconbtn="./src/components/img/Volume.png" />
      </div>
    );
  }
}

export default Volume;
