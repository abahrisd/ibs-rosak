import counter from './counter'
import isDrawerOpen from './toggleDrawer'
import appBarTitle from './setAppBarTitle'
import {combineReducers} from 'redux'

export default combineReducers({
    counter,
    isDrawerOpen,
    appBarTitle,
})