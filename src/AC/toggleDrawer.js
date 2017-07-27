import {TOGGLE_DRAWER} from '../constants'

export function toggleDrawer(isOpen){
    return {
        type: TOGGLE_DRAWER,
        data: isOpen
    }
}