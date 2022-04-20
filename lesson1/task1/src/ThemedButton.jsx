import React, { Component } from 'react';
import { ThemeContext } from './theme-context.js';

class ThemedButton extends Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          color: this.context.fontColor,
          background: this.context.background,
        }}
        className="btn"
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
