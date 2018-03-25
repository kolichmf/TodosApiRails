import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const mapState = (state) => {
  return {
    currentView: state.currentView
  }
};

class CurrentView extends React.Component {
  render() {
    return this.props.currentView;
  }
}

CurrentView.propTypes = {
  currentView: PropTypes.object
};

export default connect(mapState)(CurrentView);