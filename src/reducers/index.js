import isDrawerOpen from './toggleDrawer'
import isDialogOpen from './toggleDialog'
import appBarTitle from './setAppBarTitle'
import sertContDDMenuValue from './сhangeSertControlDDMenu'
import sertControlDataValue from './sertControlChangeData'
import {combineReducers} from 'redux'

export default combineReducers({
    isDrawerOpen,
    isDialogOpen,
    appBarTitle,
    sertContDDMenuValue,
    sertControlDataValue,
})