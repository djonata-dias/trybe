import React, { Component } from 'react';
import { addAssignment } from '../actions';
import { connect } from 'react-redux';

class InputList extends Component {
    constructor(props) {
        super(props);
        this.state = { textValue: '' };
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Digite a tarefa"
                    onChange={event => this.setState({ textValue: event.target.value })}
                />
                <button onClick={() => this.props.add(this.state.textValue)}>
                    Adicionar tarefa
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    add: e => dispatch(addAssignment(e))
});
export default connect(null, mapDispatchToProps)(InputList);