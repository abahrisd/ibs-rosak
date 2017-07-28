import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react'
//import history from './history'
//import AppRoute from './RouteHandlers/AppRoute'
import App from './components/AppBarMain'
import Main from './components/Main'
import Egrul from './components/Egrul'
import Control from './components/Control'
import Checks from './components/Checks'
import Histroy from './components/Histroy'

import {menuItems} from './fixtures'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux'
import store from './store'

/*
 <App>
 <Switch>
 <Route exact path="/" component={Main} />
 <Route path="/about" component={About} />
 <Route path="/teachers" component={Teachers} />
 <Courses>
 <Route path="/courses/html" component={HTML} />
 <Route path="/courses/css" component={CSS} />
 <Route path="/courses/javascript" component={JavaScript} />
 </Courses>
 </Switch>
 </App>
 */

let getInitPropsForComp = (name) => {
    return menuItems.filter((el)=> el.code === name).map((el)=> {
        return {
            name: el.name,
            color: el.color
        }
    })[0];
}

const mainProps = getInitPropsForComp('main');
const egrulProps = getInitPropsForComp('egrul');
const controlProps = getInitPropsForComp('control');
const checksProps = getInitPropsForComp('checks');
const histroyProps = getInitPropsForComp('histroy');

export default (
    <Router>
        <MuiThemeProvider>
            <Provider store={store}>
                <Switch>

                    <Route exact path='/' render={(props) => (
                        <App {...props} appBarTitle={mainProps}>
                            <Main {...props} />
                        </App>
                    )}/>

                    <Route exact path='/main' render={(props) => (
                        <App {...props} appBarTitle={mainProps}>
                            <Main {...props} />
                        </App>
                    )}/>

                    <Route exact path='/egrul' render={(props) => (
                        <App {...props} appBarTitle={egrulProps}>
                            <Egrul {...props} />
                        </App>
                    )}/>

                    <Route exact path='/control' render={(props) => (
                        <App {...props} appBarTitle={controlProps}>
                            <Control {...props} />
                        </App>
                    )}/>

                    <Route exact path='/checks' render={(props) => (
                        <App {...props} appBarTitle={checksProps}>
                            <Checks {...props} />
                        </App>
                    )}/>

                    <Route exact path='/histroy' render={(props) => (
                        <App {...props} appBarTitle={histroyProps}>
                            <Histroy {...props} />
                        </App>
                    )}/>
                </Switch>
            </Provider>
        </MuiThemeProvider>
    </Router>
)