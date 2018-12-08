import React from "react";
import FilterLink from "../containers/FilterLink";

class Footer extends React.Component {
  render() {
    return (
      <div>
          <FilterLink filter="all">Show All</FilterLink>
          <FilterLink filter="complete">Complete</FilterLink>
          <FilterLink filter="active">Active</FilterLink>
      </div>
    );
  }
}

export default Footer;
