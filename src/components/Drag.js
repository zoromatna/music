import React, {Component} from 'react';
import Draggable from 'react-draggable';
import './Drag.css';
class Drag extends Component {
  // constructor() {
  //
  // }
  handleStart = (event, ui)=> {
    console.log('Event: ', event);
    console.log('Position: ', ui.position);
  }

  handleDrag =(event, ui) => {
    console.log('Event: ', event);
        console.log('Position: ', ui.position);
  }

  handleStop= (event, ui) => {
    console.log('Event: ', event);
        console.log('Position: ', ui.position);
  }

  render(){
    return(
      <Draggable
        handle=".handle"
        grid={[1, 1]}
        start={{x: 100, y: 125}}
        bound={{left: 10, top: 20, bottom: 80, right: 80 }}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className={this.props.DragActive ? 'DragDeac' : 'DragAct'}>
          <div className="handle" >Drag from here
            <div>
              <div>Lorem ipsum...</div>
            </div>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Drag;
