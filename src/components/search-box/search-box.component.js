import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, ...restProps } = this.props;
    return (
      <input
        {...restProps}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
