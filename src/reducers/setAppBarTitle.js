import {SET_APP_BAR_TITLE} from '../constants'

export default (state = {name: 'Главная', color: '#6A1B9A'}, action) => {
    const {type, data} = action;
    return state = (type === SET_APP_BAR_TITLE)?data:state;
}