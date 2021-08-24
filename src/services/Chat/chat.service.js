import axios from "axios";
import {API_URL} from "../../VARIABLE";

class ChatService {
    getRooms() {
        return axios.get(`${API_URL}chat/rooms`).then((response) => {
            return response
        }).catch((error) => {
            console.log(error)
        })
    }

    getMessages(roomId) {
        return axios.get(`${API_URL}chat/room/${roomId}/messages`).then((response) => {
            return response
        }).catch((error) => {
            console.log(error)
        })
    }

    newMessage(roomId, message, token) {
        return axios.post(`${API_URL}chat/room/${roomId}/message`, {newMessage:message}, {
            headers: {Authorization: `Bearer ${token}`}
        }).then((response) => {
            return response
        }).catch((error) => {
            // console.log(error)
        })
    }
}

export default new ChatService();