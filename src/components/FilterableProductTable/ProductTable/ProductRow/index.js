import PropTypes from "prop-types";
import React from "react";

export class ProductRow extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  };

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        {/* <td {this.props.location}</td> */}
        <submit onClick={this.handleClick} />
      </tr>
    );
  }
}

{
  /* figure out how to add location as state and render import */
}
