import {SET_APP_BAR_TITLE} from '../constants'

export function setAppBarTitle(data){
    return {
        type: SET_APP_BAR_TITLE,
        data
    }
}