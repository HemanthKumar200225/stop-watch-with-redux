import { connect } from 'react-redux';
import { Component } from './component';
import * as actions from '../Actions/ActionTypes'

const mapStateToProps = state => {
  return {
    count: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleStartClick: () => dispatch({ type: actions.START }),
    handleStopClick: () => dispatch({ type: actions.STOP }),
    handleLapClick: () => dispatch({ type: actions.LAP }),
    handleRestClick: () => dispatch({ type: actions.RESET }),
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);