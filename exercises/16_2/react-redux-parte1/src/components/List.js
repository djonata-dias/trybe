import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer
});

export default connect(mapStateToProps)(List);