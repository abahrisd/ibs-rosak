import isDrawerOpen from './toggleDrawer'
import appBarTitle from './setAppBarTitle'
import {combineReducers} from 'redux'

export default combineReducers({
    isDrawerOpen,
    appBarTitle,
})