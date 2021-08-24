import {OFFLINE, ONLINE} from "../../VARIABLE";

function onlineReducer(state = false, action) {
    switch (action.type) {
        case ONLINE:
            return {
                ...state,
                online: true
            };
        case OFFLINE:
            return {
                ...state,
                online: false
            }
        default:
            return state;

    }
}

export default onlineReducer;