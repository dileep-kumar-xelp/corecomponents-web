import React from "react";
export default class ControlledInput extends React.Component {
  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }
  handleFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }
  handleBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }
  handleKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }
  handleKeyUp(event) {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }
  render() {
    return (
      <input
        value={this.props.value}
        onChange={event => this.handleChange(event)}
        onFocus={event => this.handleFocus(event)}
        onBlur={event => this.handleBlur(event)}
        onKeyDown={event => this.handleKeyDown(event)}
        onKeyUp={event => this.handleKeyUp(event)}
      />
    );
  }
}
