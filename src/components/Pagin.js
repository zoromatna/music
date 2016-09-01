import React, { Component } from "react";

// require("bootstrap/less/bootstrap.less");

class Pagin extends Component {
  constructor(props) {
    super();
    this.state = {
      activePage: 1
    };
  }
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
    console.log(`active page is ${pageNumber}`);
  }

  render() {
    var data=['one','two','three',4,5,6,7,8,9];
    return (

      <div>
      <div>
        {data[this.state.activePage-1]}
        </div>
        {/*}
        <Pagination
          activePage={this.state.activePage}
          totalItemsCount={45}
          onChange={this.handlePageChange.bind(this)}
        />
        */}

      </div>
    );
  }
}

export default Pagin;
