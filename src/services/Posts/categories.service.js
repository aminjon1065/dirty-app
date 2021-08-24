import axios from "axios";
import {API_URL} from "../../VARIABLE";

class CategoriesService {
    async fetchCategoryCount() {
        return await axios.get(`${API_URL}category-count`).then((response) => {
            return response
        })
    }
}

export default new CategoriesService();