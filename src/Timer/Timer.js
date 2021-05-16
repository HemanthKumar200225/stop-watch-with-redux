import { connect } from 'react-redux';
import { Component } from './component';
import * as actions from '../Actions/ActionTypes'

const mapStateToProps = state => {
  return {
    time: state
    // lap: [...state.lap],
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleStartClick: () => dispatch({ type: actions.START }),
    handleStopClick: () => dispatch({ type: actions.STOP }),
    handleLapClick: () => dispatch({ type: actions.LAP }),
    handleResetClick: () => dispatch({ type: actions.RESET }),
  }
};
export const Timer = connect(mapStateToProps, mapDispatchToProps)(Component);