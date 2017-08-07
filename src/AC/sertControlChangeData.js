import {_DATA, SERT_CONTROL} from '../constants'

export function sertControlChangeData(data){
    return {
        type: SERT_CONTROL + _DATA,
        data
    }
}