import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions.js';

class SearchField extends Component {
  state = {
    userInput: '',
  };

  onInputChange = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userInput);
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userInput}
          onChange={this.onInputChange}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
