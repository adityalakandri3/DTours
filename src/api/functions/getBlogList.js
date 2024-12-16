import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

const getBlogList = async (page = 1) => {
    try {
        const { data } = await axiosInstance.post(`${endPoints?.blog?.list}`, {
            page,
        });
        return data;
    } catch (error) {
        console.log("Error fetching blog list:", error);
        throw error; 
    }
};

export default getBlogList;
