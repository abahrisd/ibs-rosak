import React, { Component } from 'react';
import {connect} from 'react-redux'
import {increment} from '../../AC/counter'

class Counter extends Component {
    render() {
        const count = this.props.count;
        return (
            <div>
                <h1>{count}</h1>
                <a href="#" onClick={this.onItemClick}>increment</a>
            </div>
        );
    }

    onItemClick = (ev) =>{
        ev.preventDefault();
        this.props.increment();
    }
}

export default connect((state)=>{
    const {counter} = state;
    return {count: counter}
}, {
    increment
})(Counter)
