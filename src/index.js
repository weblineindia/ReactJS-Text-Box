import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Regex from "./regex";
class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * This method is used for handle input change
   * @param {*} event
   */
  handleInput(event) {
    if (this.props.isnumberonly) {
      let re = Regex.ONLY_NUMBERS_REGEX;
      if (re.test(event.target.value)) {
        this.props.onChange(event);
      }
    } else {
      let regex = this.props.regex;
      if (regex.test(event.target.value)) {
        this.props.onChange(event);
      }
    }
  }
  /**
   * This method is used for handle input focus
   * @param {*} event
   */
  handleFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  }
  /**
   * This method is used for handle input blur
   * @param {*} event
   */
  handleBlur(event) {
    if (this.props.onBlur()) {
      this.props.onBlur(event);
    }
  }
  /**
   * This method is used for handle input key down
   * @param {*} event
   */
  handleKeyDown(event) {
    if (this.props.onKeyDown()) {
      this.props.onKeyDown(event);
    }
  }
  /**
   * This method is used for handle input key up
   * @param {*} event
   */
  handleKeyUp(event) {
    if (this.props.onKeyUp()) {
      this.props.onKeyUp(event);
    }
  }
  /**
   * This method is used for handle input key press
   * @param {*} event
   */
  handleKeyPress(event) {
    if (this.props.onKeyPress()) {
      this.props.onKeyPress(event);
    }
  }
  render() {
    return (
      <div>
        <input
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          tabIndex={this.props.tabIndex}
          placeholder={this.props.placeholder}
          hide={this.props.hide}
          disabled={this.props.disabled}
          type={this.props.type}
          maxLength={this.props.maxLength}
          isnumberonly={this.props.isnumberonly}
          autoComplete={this.props.autoComplete}
          className={this.props.className}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onChange={this.handleInput.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}
        ></input>
      </div>
    );
  }
}
/**
 * Define Props
 */
TextBox.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  tabIndex: PropTypes.number,
  hide: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  isnumberonly: PropTypes.bool,
  autoComplete: PropTypes.string,
  className: PropTypes.object,
  regex: PropTypes.any
}
/**
 * Define default props value
 */
TextBox.defaultProps = {
  onFocus: function () {},
  onBlur: function () {},
  onKeyDown: function () {},
  onKeyPress: function () {},
  onChange: function () {},
  onKeyUp: function () {},
  placeholder: 'Enter value',
  value: '',
  id: '',
  name: '',
  tabIndex: 0,
  hide: false,
  disabled: false,
  type: 'text',
  maxLength: 10,
  isnumberonly: false,
  autoComplete: '',
  className: {},
  regex: Regex.TEXT_REGEX
}
export default TextBox
