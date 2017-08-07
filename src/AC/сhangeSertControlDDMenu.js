import {_DDMENU, SERT_CONTROL} from '../constants'

export function сhangeSertControlDDMenu(data){
    return {
        type: SERT_CONTROL + _DDMENU,
        data
    }
}