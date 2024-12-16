import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { blogCreate } from "../../api/functions/blogCreate";
import { BLOG } from "../query-key/query.key";
import getBlogList from "../../api/functions/getBlogList";
import getBlogDetailById  from "../../api/functions/getBlogDetailById";
import blogDelete from "../../api/functions/blogDelete";
import blogUpdate from "../../api/functions/blogUpdate";

export const useBlogQuery = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn:blogCreate,
        onSuccess:(data)=>{
            if(data?.status === 200){
                queryClient.invalidateQueries({queryKey:[BLOG]})
                toast.success("Blog created successfully")
                navigate("/blog")
            }
        }
    })
}

export const useBlogListQuery = (page = 1) => {
    return useQuery({
        queryKey: [BLOG, page],
        queryFn: () => getBlogList(page),
        keepPreviousData: true,
        staleTime: 5000,
    });
};

export const useBlogDeleteQuery = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn:({id})=>blogDelete(id),
        onSuccess:(data)=>{
            if(data?.status === 200){   
                queryClient.invalidateQueries({queryKey:[BLOG]})
                toast.success("Blog deleted successfully")
                navigate("/blog")
            }
        }
    })
}

export const useBlogDetailQuery = (id) => {
    return useQuery({
      queryKey: [BLOG, id],
      queryFn: () => getBlogDetailById(id),
    });
  };


 export const useBlogUpdateQuery = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn:blogUpdate,
        onSuccess:(data)=>{
            if(data?.status === 200){
                queryClient.invalidateQueries({queryKey:[BLOG]})
                toast.success("Blog updated successfully")
                navigate("/blog")
            }
        }
    })
  }
