import React,{Component} from 'react';
import './content.css';
import Menu from'./Menu';

class Content extends Component {
  render(){
    return(
      <div className="name">
        <div className="name2">
          <p>Hanhbn@gmail.com</p>
          <Menu />
        </div>
      </div>
    );
  }
}

export default Content;
