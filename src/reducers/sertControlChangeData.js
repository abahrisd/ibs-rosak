import {_DATA, SERT_CONTROL} from '../constants'

export default (state = false, action) => {
    const {type, data} = action;
    return state = (type === (SERT_CONTROL + _DATA))?data:state;
}