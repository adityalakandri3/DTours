import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { USER } from "../query-key/query.key";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../../api/functions/userSignin";
import { userSignUp } from "../../api/functions/userSignup";
import toast from "react-hot-toast";
import { profileDetails } from "../../api/functions/profileDetails";

export const useUserSignUp =()=>{
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn :userSignUp,
        onSuccess : (data)=>{
            if(data?.status===200){
                queryClient.invalidateQueries({queryKey:USER})
                toast.success("SignUp Successful!")
                navigate('/signin')
            }
        }
    })
}

export const useUserSignIn = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    return useMutation({
      mutationFn: userSignIn,
      onSuccess: (data) => {
        if (data?.status === 200) {
          localStorage.setItem('token', data?.token)
          localStorage.setItem('user', data?.data?.first_name)
          localStorage.setItem('profile', data?.data?.profile_pic)
          queryClient.invalidateQueries({ queryKey: [USER] })
          navigate('/')
          toast.success("SignIn Successful!")
        }
        else if (data?.status === 201) {
          toast.error('Invalid email or password. Please check and try again.');
        } else {
          toast.error('An unexpected error occurred. Please try again.');
        }
      }
    })
  }


  export const useProfileDetails = ()=>{
    return useQuery({
        queryKey:[USER],
        queryFn:profileDetails
    })
  }


  export const useLogout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return () => {
        
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('profile');
    
        queryClient.invalidateQueries({ queryKey: [USER] });
        toast.success("Logout Successful!"); 
        navigate('/signin');
    };
};
