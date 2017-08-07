import {_DDMENU, SERT_CONTROL} from '../constants'

export default (state = false, action) => {
    const {type, data} = action;
    return state = (type === (SERT_CONTROL + _DDMENU))?data:state;
}