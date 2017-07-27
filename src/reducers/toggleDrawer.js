import {TOGGLE_DRAWER} from '../constants'

export default (state = false, action) => {
    const {type, data} = action;
    return state = (type === TOGGLE_DRAWER)?data.isOpen:state;
}