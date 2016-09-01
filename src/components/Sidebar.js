import React,{Component} from 'react';
import Sidebar from 'react-sidebar';

class Sidebar extends Component {
  constructor(){
    super();
    this.state={
      sidebarOpen: false,
      sidebarDocked: false
    };
  }

  onSetSidebarOpen=(open)=>{
    this.setState({
      sidebarOpen: open
    });
  }


}
