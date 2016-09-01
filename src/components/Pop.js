import React from 'react';
import {Component} from 'react';

class Pop extends components {
  constructor() {
    super();
    this.state ={
      name: 'asd'
    };
  }

  render(){
    return(

    );
  }
}

class PopFocus extends components {
  render(){
    return(
        <Popover id="popover-trigger-focus" title="Popover bottom">
          <strong>Holy guacamole!</strong> Check this info.
           <Button bsStyle="danger">dzfbdfb</Button>
        </Popover>
    );
  }
}
