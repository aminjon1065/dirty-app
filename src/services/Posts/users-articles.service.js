import axios from "axios";
import {API_URL} from "../../VARIABLE";

class UsersArticlesService {
    async getCountArticles() {
        return await axios.get(`${API_URL}users-articles-count`).then((response) => {
            return response
        })
    }

    async userPosts($token, pageNum=1) {
        return await axios.get(`${API_URL}users-posts?page=${pageNum}`, {
            headers: {Authorization: `Bearer ${$token}`}
        }).then((response) => {
            return response
        })
    }
}

export default new UsersArticlesService();