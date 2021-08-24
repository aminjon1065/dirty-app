import {combineReducers} from "redux";
import authReducer from './auth.reducer'
import onlineReducer from "./online.reducer";
import newMessage from "./newMessage.reducer";

export default combineReducers({
    auth: authReducer,
    online: onlineReducer,
    newMsg: newMessage
})