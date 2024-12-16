import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

const getBlogDetailById = async (id) => {
    try {
        const { data } = await axiosInstance.get(`${endPoints?.blog?.detail}/${id}`);
        return data;
    } catch (error) {
        console.log("Error fetching blog list:", error);
        throw error; 
    }
};

export default getBlogDetailById;
