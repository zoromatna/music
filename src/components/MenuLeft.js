import React,{Component} from 'react';

class MenuLeft extends Component{
  constructor(){
    super();
    this.state={
      visible: false
    };
  }

  show(){
    this.setState({
      visible: true
    });
  }

  hide(){
    this.setState({
      visible: false
    });
  }

  render(){
    return(
      <div className="MenuL">
        <div className={(this.state.visible ? "visible" : "") + this.props.alignment}>{this.props.children}</div>
      </div>
    );
  }
}

export default MenuLeft;
