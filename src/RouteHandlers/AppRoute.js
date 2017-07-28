import React, { Component } from 'react';
import AppMain from '../components/App'
import {Provider} from 'react-redux'
import store from '../store'

class AppRoute extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppMain/>
            </Provider>
        );
    }
}

export default AppRoute;
