import React from 'react';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators'
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};
const Button = (value, text, onClick) => {
  return (
    <button onClick={(e) => onClick(e.target.value)} value={value} type="button">{text}</button>
  )
}
const TrafficSignal = ({ signalColor, changeSignal }) => {
  return (
    <div>
      <div className="button-container">
        {Button('red', 'Red', changeSignal)}
        {Button('yellow', 'Yellow', changeSignal)}
        {Button('green', 'Green', changeSignal)}
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
}

const mapStateToProps = (state) => ({
  signalColor: state.signal.color
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: e => dispatch(changeSignal(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
