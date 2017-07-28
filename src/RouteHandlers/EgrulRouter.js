import React, { Component } from 'react';
import {Provider} from 'react-redux'
import Egrul from '../components/Egrul'
import store from '../store'

class EgrulRoute extends Component {
    render() {
        return (
            <Egrul/>
        );
    }
}

export default EgrulRoute;
