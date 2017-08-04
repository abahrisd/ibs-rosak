import isDrawerOpen from './toggleDrawer'
import isDialogOpen from './toggleDialog'
import appBarTitle from './setAppBarTitle'
import {combineReducers} from 'redux'

export default combineReducers({
    isDrawerOpen,
    isDialogOpen,
    appBarTitle,
})