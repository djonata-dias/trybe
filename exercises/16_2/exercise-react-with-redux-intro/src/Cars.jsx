import React from 'react';
import { connect } from 'react-redux';
import { moveCar } from './redux/actionCreators';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

const Car = (car, src, color, onClick) => {
  return (
    <div>
      <img className={car ? 'car-right' : 'car-left'} src={src} alt={`${color} car`} />
      <button onClick={() => onClick(color, !car)} type="button">move</button>
    </div>
  )
}

function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <div>
      {Car(redCar, carRed, 'red', moveCar)}
      <div>
        {Car(blueCar, carBlue, 'blue', moveCar)}
      </div>
      <div>
        {Car(yellowCar, carYellow, 'yellow', moveCar)}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  redCar: state.cars['red'],
  blueCar: state.cars['blue'],
  yellowCar: state.cars['yellow']
});
const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);