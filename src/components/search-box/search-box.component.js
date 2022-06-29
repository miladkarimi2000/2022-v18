import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    const { className, onChangeHandler, ...restProps } = this.props;
    return (
      <input
        className={`search-box {className}`}
        {...restProps}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
