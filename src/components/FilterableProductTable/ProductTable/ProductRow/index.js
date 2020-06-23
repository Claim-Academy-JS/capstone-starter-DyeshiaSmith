import PropTypes from "prop-types";
import React from "react";

export class ProductRow extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    // location: PropTypes.string.isRequired,
  };

  handleClick = async (book) => {
    const endpoint = book ? "add" : "remove";

    const results = await fetch(
      `http://localhost:3000/api/users/user/faves/${endpoint}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: { username: "dye" },
        }),
      }
    );

    console.log(results);
  };

  render() {
    return (
      <table>
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.price}</td>
          {/* <td {this.props.location}</td> */}
          <submit onClick={this.handleClick} />
        </tr>
      </table>
    );
  }
}
