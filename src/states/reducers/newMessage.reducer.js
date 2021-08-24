import {NEW_MESSAGE} from "../../VARIABLE";

const initialState = {
    message: false
}


function newMessage(state = initialState, action) {
    switch (action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                message: !state.message
            };
        default:
            return state;
    }
}

export default newMessage;