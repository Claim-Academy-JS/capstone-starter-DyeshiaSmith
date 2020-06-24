import PropTypes from "prop-types";
import React from "react";

import { Selected } from "./Selected";

export class ProductRow extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    equipmentType: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };

  handleClick = async (isFaved) => {
    const endpoint = isFaved ? "add" : "remove";

    const results = await fetch(
      `http://localhost:3000/api/users/user/faves/${endpoint}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: { username: "username" },
          fave: this.props.id,
        }),
      }
    );

    console.log(results);
  };

  render() {
    return (
      <tr>
        <td>{this.props.equipment}</td>
        <td>{this.props.price}</td>
        <td>{this.props.equipmentType}</td>
        <td>
          <Selected onClick={this.handleClick} />
        </td>
      </tr>
    );
  }
}
