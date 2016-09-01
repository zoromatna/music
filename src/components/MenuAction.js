import React, {Component} from 'react';
import HandsChoice from './HandsChoice';
import Col from 'react-bootstrap/lib/Col';
import './MenuAction.css';
import Transpose from './Transpose';
import Metronome from './Metronome';
import Tempo from './Tempo';
import Volume from './Volume';
import Zoom from './Zoom';
import InputKeyboard from './InputKeyboard';
import Showkeyboard from './Showkeyboard';
import SheetMusic from './SheetMusic';
import Finger from './Finger';
import FingerIntruc from './FingerIntruc';

class MenuAction extends Component {
  constructor(){
    super();
    this.state={
      play: false,
      iconPlay: "./src/components/img/play.png"
    }
  }

  playMusic(){
    console.log(document.connect);
    if (!this.state.play) {
      this.setState({
        iconPlay:"./src/components/img/pause.png"
      });
    }else {
      this.setState({
        iconPlay:"./src/components/img/play.png"
      });
    }
    this.setState({
      play: !this.state.play
    });
  }

  render(){
    var divStyle={
      padding: 10,
      flex:0
    };

    var colStyle={
      padding:0,
      margin: 0,
      textalign: 'center'
    };
    return(
      <div style={divStyle}>
        <Col style={colStyle} xs={12} md={5}>
          <Col style={colStyle} xs={12} md={2}>
            <HandsChoice />
          </Col>
          <Col style={colStyle} xs={12} md={2}>
            <Transpose />
          </Col>
          <Col style={colStyle} xs={12} md={2}>
            <Metronome />
          </Col>
          <Col style={colStyle} xs={12} md={2}>
            <Tempo />
          </Col>
          <Col style={colStyle} xs={12} md={2}>
            <Volume />
          </Col>
          <Col style={colStyle} xs={12} md={2}>
            <Zoom />
          </Col>


        </Col>

        <Col xs={12} md={2} className="playIcon">
          <img onClick={()=>this.playMusic()} className="IconTempo" src={this.state.iconPlay} />
        </Col>

        <Col xs={12} md={5}>
          <Col style={colStyle} xs={12} md={2}>
            <InputKeyboard />
          </Col>
          <Col style={colStyle} xs={12} md={2}>
            <Showkeyboard />
          </Col>
          <Col style={colStyle} xs={12} md={2}>
            <SheetMusic />
          </Col>
          <Col style={colStyle} xs={12} md={2}>
            <Finger />
          </Col>
          <Col style={colStyle} xs={12} md={2}>
            <FingerIntruc />
          </Col>
          <Col style={colStyle} xs={12} md={2}>
            <img className="imgMetro" src="./src/components/img/Fullscreen.png" />
          </Col>
        </Col>

      </div>
    );
  }
}

export default MenuAction;
