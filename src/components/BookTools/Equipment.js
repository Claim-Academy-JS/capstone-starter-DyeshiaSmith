import React from "react";
import getAllProducts from "../../api/index";

export default class Equipment extends React.Component {
  render() {
    return (
      <div>
        {getAllProducts().then((data) => (
          <div>{data}</div>
        ))}
      </div>
    );
  }
}
