import React , {Component} from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import './Transpose.css';
import Col from 'react-bootstrap/lib/Col';

class Transpose extends Component {
  constructor() {
    super();
    this.state={
      transpos:0,
      hovered: false
    }
  }

  btnPlus(){
    this.setState({
      transpos: this.state.transpos+1
    });
  }

  btnMinus(){
    console.log('asdfasf');
    this.setState({
      transpos:this.state.transpos-1
    });
  }

  style(a){
    if (a) {
        return { backgroundColor: "red" }
      } else {
        return { backgroundColor: "grey" }
      }
  }

  Onhover(){
    this.setState({hovered: true});
  }

  Outhover(){
    this.state({hovered: false});
  }

  render(){
    var colStyle={
      padding:0,
      margin: 0
    };
      const styleLink = {
        ':hover':{
          background:'blue'
        }
      }
      const popoverFocus = (
        <Popover id="Transpose">
          <div className="transContent">

            <div>
              Transpose
            </div>

            <div>
              <Col style={colStyle} xs={12} md={3}>
                <img onClick={()=>this.btnMinus()} className="btnTran" src="./src/components/img/btnMinus.png" />
              </Col>
              <Col className="textTrans" xs={12} md={6}>
                <text>{this.state.transpos}</text>
              </Col>
              <Col style={colStyle} xs={12} md={3}>
                <img onClick={()=>this.btnPlus()} className="btnTran" src="./src/components/img/btnPlus.png" />
              </Col>
            </div>

            <div>
              KEY SIGNATURE
            </div>

            <div style={styleLink} className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
            <div className="choiceTran">C# Major</div>
          </div>
        </Popover>
      );
      return(
        <div>
          <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverFocus}>
            <img src="./src/components/img/transpose.png" className="imghand" />
          </OverlayTrigger>
        </div>
      );
    }
  }

export default Transpose;
