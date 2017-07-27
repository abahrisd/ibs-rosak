import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import AppBarMain from './components/AppBarMain'
import {Provider} from 'react-redux'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <div className="App">
                        <AppBarMain/>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
