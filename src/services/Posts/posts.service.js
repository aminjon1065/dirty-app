import axios from "axios";
import {API_URL} from "../../VARIABLE";

class PostsService {
    async store(title, body, categoryId, token) {
        return await axios.post(`${API_URL}article-store`, {title, body, categoryId}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            return response
        })
    }

    async fetchPostsFormMain(pageNumber = 1) {
        return await axios.get(`${API_URL}articles?page=${pageNumber}`).then((response) => {
            return response
        })
    }

    async searchPost(search, category) {
        return await axios.post(`${API_URL}search`, {search: search, category: category}).then((response) => {
            return response
        })
    }

    async showPost(id) {
        return await axios.get(`${API_URL}article/${id}`).then((response) => {
            return response
        })
    }
}

export default new PostsService();