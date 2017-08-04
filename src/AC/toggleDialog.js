import {TOGGLE_DIALOG} from '../constants'

export function toggleDialog(isOpen){
    return {
        type: TOGGLE_DIALOG,
        data: isOpen
    }
}