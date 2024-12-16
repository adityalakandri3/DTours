import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

export const profileDetails = async ()=>{
    try {
        const {data} = await axiosInstance.get(`${endPoints.user.profile}`)
        return data;
    } catch (error) {
        throw error;
    }
}   