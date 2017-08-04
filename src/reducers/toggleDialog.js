import {TOGGLE_DIALOG} from '../constants'

export default (state = false, action) => {
    const {type, data} = action;
    return state = (type === TOGGLE_DIALOG)?data.isDialogOpen:state;
}