import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

const blogDelete = async (id) => {
    try {
        const { data } = await axiosInstance.post(`${endPoints?.blog?.delete}`,{id});
        return data;
    } catch (error) {
        console.log("Error deleting blog:", error);
        throw error; 
    }
};

export default blogDelete;