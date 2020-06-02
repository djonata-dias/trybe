import React from 'react';

class Card extends React.Component {
    render() {
      return (
      <div className="card">
          <div>
      <p>{this.props.name}</p>
      <p>{this.props.element}</p>
      <p>Average weight: {this.props.weight}kg</p>
          </div>
          <div>
          <img className="foto-pokemon" src={this.props.src} alt={this.props.alt} />
          </div>
      </div>
      )}
  }

  export default Card;