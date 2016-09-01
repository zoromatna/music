import React from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import './components/MenuTop.css';
import './index.css';
import {Navbar, FormGroup, FormControl, Button, Glyphicon} from 'react-bootstrap';
import LeftMenu from './components/LeftMenu';
import Sensitive from './components/Sensitive';
// import LoginFace from './components/LoginFace';
import MenuAction from './components/MenuAction';
// import MenuTest from './components/MenuTest'
import Drag from './components/Drag';
import Pagin from './components/Pagin';
import Search from './components/Search';

let MenuWrap = React.createClass({

  getInitialState() {
    return {
      hidden : false,
      isActive: true
    };
  },

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({hidden : true});

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  },

  show() {
    this.setState({hidden : false});
  },

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
});

let Demo = React.createClass({

  changeMenu(menu) {
    this.setState({
      currentMenu: menu,
      // isActive: !this.state.isActive
    });
  },

  changeSide(side) {
    this.setState({side});
  },

  getItems() {
    let items;

    switch (this.props.menus[this.state.currentMenu].items) {
      case 1:
        items = [
          <a key="0" href=""><i className="fa fa-fw fa-star-o"></i><span>Favorites</span></a>,
          <a key="1" href=""><i className="fa fa-fw fa-bell-o"></i><span>Alerts</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-envelope-o"></i><span>Messages</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-comment-o"></i><span>Comments</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o"></i><span>Analytics</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-newspaper-o"></i><span>Reading List</span></a>
        ];
        break;
      case 2:
        items = [
          <h2 key="0"><i className="fa fa-fw fa-inbox fa-2x"></i><span>Sidebar</span></h2>,
          <a key="1" href=""><i className="fa fa-fw fa-database"></i><span>Data Management</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-map-marker"></i><span>Location</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-mortar-board"></i><span>Study</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-picture-o"></i><span>Collections</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-money"></i><span>Credits</span></a>
        ];
        break;
      default:
        items = [
          <a key="0" href=""><i className="fa fa-fw fa-star-o"></i><span>Favorites</span></a>,
          <a key="1" href=""><i className="fa fa-fw fa-bell-o"></i><span>Alerts</span></a>,
          <a key="2" href=""><i className="fa fa-fw fa-envelope-o"></i><span>Messages</span></a>,
          <a key="3" href=""><i className="fa fa-fw fa-comment-o"></i><span>Comments</span></a>,
          <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o"></i><span>Analytics</span></a>,
          <a key="5" href=""><i className="fa fa-fw fa-newspaper-o"></i><span>Reading List</span></a>
        ];
    }

    return items;
  },

  changs(){
    this.setState({
      isActive: !this.state.isActive
    });
  },

  dissmissMenu(){
    // console.log('-------------------',this.state.isActive);
    if (this.state.isActive) {
      this.setState({
          isActive: false
      });
  }

  },

  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();
    let jsx;

    if (this.state.side === 'right') {
      jsx = (
        <MenuWrap wait={20} side={this.state.side}>
          <Menu id={this.state.currentMenu} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} right>
            {items}
          </Menu>
        </MenuWrap>
      );
    } else {
      jsx = (
        <MenuWrap wait={20}>
          <Menu id={this.state.currentMenu} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
            {items}
            <div >
              asdfdsf
            </div>
          </Menu>


        </MenuWrap>
      );
    }

    return jsx;
  },

  getInitialState() {
    return {
      currentMenu: 'slide',
      side: 'left'
    };
  },

  render() {
    const buttons = Object.keys(this.props.menus).map((menu) => {
      return (
        <div className="menuTop">
          <a key={menu}
            className={classNames({'current-demo': menu === this.state.currentMenu})}
            onClick={this.changeMenu.bind(this, menu)}>
            {this.props.menus[menu].buttonText}
          </a>
        </div>
      );
    });

    return (
      <div onClick={this.dissmissMenu} id="outer-container" style={{height: '100%'}}>

        {this.getMenu()}
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#"><Glyphicon glyph="align-justify" /></a>

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
              {' '}
              <Button type="submit">Search</Button>
              <Button className={this.state.isActive ? 'acti' : 'album'} onClick={this.changs}>Abc</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
        <div className={this.state.isActive ? 'two' : 'one'}>
          <LeftMenu />
        </div>
        <main id="page-wrap">
          <div className="menuAction">
            <MenuAction />
          </div>

          <div className="musicInfo">
            River Flow
          </div>

          <div className="musicBar">
          </div>

          <div className="musicPlay">
            <Sensitive />
            <Drag DragActive = {document.inputSound}/>
            </div>
          <div id="Search">
            <Search />
          </div>

        </main>
      </div>
    );
  }
});

const menus = {
  slide: {buttonText: 'Slide', items: 1},
  // stack: {buttonText: 'Stack', items: 1},
  // elastic: {buttonText: 'Elastic', items: 1},
  // bubble: {buttonText: 'Bubble', items: 1},
  // push: {buttonText: 'Push', items: 1},
  // pushRotate: {buttonText: 'Push Rotate', items: 2},
  // scaleDown: {buttonText: 'Scale Down', items: 2},
  // scaleRotate: {buttonText: 'Scale Rotate', items: 2},
  // fallDown: {buttonText: 'Fall Down', items: 2}
};

ReactDOM.render(<Demo menus={menus} />, document.getElementById('root'));
