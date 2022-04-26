import { connect } from 'react-redux';
import * as optionsActions from './options.actions.js';
import Options from './Options.jsx'; // presentation component
import { availableOptionsSelector } from './options.selectors.js';

const mapState = (state) => ({
  options: availableOptionsSelector(state),
});

const mapDispatch = {
  moveOption: optionsActions.toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
