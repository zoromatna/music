import React, {Component} from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import './HandsChoice.css';

class Handschoice extends Component {

  constructor(){
    super();
    this.state={
      hand: "./src/components/img/right_hand.png"
    }
  }

  selectHands(e){

    switch (e) {
      case 1:
        this.setState({hand:"./src/components/img/left_hand.png"});
          console.log('asdfasdf',e);
        break;
      case 2:
      this.setState({hand:"./src/components/img/both_hand.png"});
        console.log('asdfasdf',e);
      break;
      case 3:
      this.setState({hand:"./src/components/img/right_hand.png"});
        console.log('asdfasdf',e);
      break;
      default:
      this.setState({hand:"./src/components/img/left_hand.png"});
        console.log('asdfasdf',e);
      break;
    }
  }

  render(){

    const popoverFocus = (
      <Popover id="HandsChoice">
        <div>
          <img src="./src/components/img/left_hand.png" onClick={()=>this.selectHands(1)}/>
          <img src="./src/components/img/both_hand.png" onClick={()=>this.selectHands(2)} />
          <img src="./src/components/img/right_hand.png" onClick={()=>this.selectHands(3)} />
        </div>
      </Popover>
    );
    return(
      <div>
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverFocus}>
          <img src={this.state.hand} className="imghand" />
        </OverlayTrigger>
      </div>
    );
  }
}

export default Handschoice;
