import {ONLINE, OFFLINE} from "../../VARIABLE";

const actionsOnline = {
    online() {
        return {
            type: ONLINE
        }
    },
    offline() {
        return {
            type: OFFLINE
        }
    }
}

export default actionsOnline;