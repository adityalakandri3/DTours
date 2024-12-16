import { axiosInstance } from '../axiosInstance/axiosInstance'
import { endPoints } from '../endPoints/endPoints'

export const blogCreate = async (newBlog) => {
  try {
    const { data } = await axiosInstance.post(
      `${endPoints?.blog?.create}`,
      newBlog
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
