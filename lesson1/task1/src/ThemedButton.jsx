import React, { Component } from 'react';
import { ThemeContext } from './theme-context.js';

class ThemedButton extends Component {
  render() {
    const { fontColor, background } = this.context;

    const styles = {
      color: fontColor,
      background,
    };

    return <button {...this.props} style={styles} className="btn" />;
  }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;
