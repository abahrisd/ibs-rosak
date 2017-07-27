import {SET_APP_BAR_TITLE} from '../constants'

export default (state = {name: 'Главная', color: '#5E35B1'}, action) => {
    const {type, data} = action;
    return state = (type === SET_APP_BAR_TITLE)?data:state;
}