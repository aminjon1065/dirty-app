import axios from "axios";
import {API_URL} from "../../VARIABLE";

class UsersService {
    async fetchUsers(){
        return await axios.get(`${API_URL}users-list`).then((response) => {
            return response
        })
    }
    async usersPosts() {
        return await axios.get(`${API_URL}users-posts`).then((response) => {
            return response
        })
    }

    async usersOnline(){
        return  await axios.get(`${API_URL}online-users`).then((response)=>{
            return response
        })
    }
}

export default new UsersService();