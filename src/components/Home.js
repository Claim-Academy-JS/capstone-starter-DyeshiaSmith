import React from "react";
//Home Page- one picture as main background, list of pages at top of page, footer, contact form,Home Page- one picture as main background, list of pages at top of page, footer, contact form,

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick;
  }
  render() {
    return (
      <div className="main">
        <form className="Home">
          <input
            type="button"
            title="Book Tools"
            placeholder="Book Tools"
            onClick={this.handleClick}
          />
          <input
            type="button"
            title="Near Me"
            placeholder="Near Me"
            onClick={this.handleClick}
          />
          <input
            type="button"
            title="Equipment"
            placeholder="Near Me"
            onClick={this.handleClick}
          />
          <input
            type="button"
            title="Return Tool"
            placeholder="Return Tool"
            onClick={this.handleClick}
          />
        </form>
      </div>
    );
  }
}
