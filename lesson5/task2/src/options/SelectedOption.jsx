import { connect } from 'react-redux';
import * as optionsActions from './options.actions.js';
import Options from './Options.jsx'; // presentation component
import { selectedOptionsSelector } from './options.selectors.js';

const mapState = (state) => ({
  options: selectedOptionsSelector(state),
});

const mapDispatch = {
  moveOption: optionsActions.toggleOption,
};

export default connect(mapState, mapDispatch)(Options);
