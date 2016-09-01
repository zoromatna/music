import React, {Component} from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import './Tempo.css';
import SliderReact from 'react-bootstrap-native-slider';

class Tempo extends Component {

  render(){
    var divStyle = {
        width:"300px",
        alignItems: "center"
    }
    const popoverFocus = (
      <Popover id="Tempo">
        <div className="value">{this.props.ten}: {this.props.tempo}</div>
        <div>
        <SliderReact style={divStyle}
            value={this.props.tempo}
            handleChange={this.props.changeValue}
            step={this.props.step}
            max={this.props.max}
            min={this.props.min}
            disabled="disabled"
            />
        </div>
      </Popover>
    );
    return(
      <div>
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverFocus}>
          <img src={this.props.iconbtn} className="IconTempo" />
        </OverlayTrigger>
      </div>
    );
  }
}

export default Tempo;
