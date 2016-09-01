import React, {Component} from 'react';
import './Tempo.css';
import CompSlider from './CompSlider';


class Tempo extends Component {
  constructor(props) {
    super(props);
    this.state={
      temp: 80
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
        <CompSlider tempo={this.state.temp} changeValue={this.changeValue} ten="Tempo" step={1} max={200} min={30} iconbtn="./src/components/img/tempo.png" />
      </div>
    );
  }
}

export default Tempo;
