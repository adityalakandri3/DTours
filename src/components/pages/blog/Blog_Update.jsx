import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Blog_Header from "./Blog_Header";
import { useBlogDetailQuery, useBlogUpdateQuery } from "../../../hooks/react-query/blog.query";
import { useParams } from "react-router-dom";

const Blog_Update = () => {
  const {id} = useParams();
  const [blogImage, setBlogImage] = useState(null)
  const { control, handleSubmit,setValue } = useForm({
    defaultValues: {
      title: '',
      description: '',
      image: '',
    },
  })
  const {data,isLoading,isError} = useBlogDetailQuery(id);

  const { mutate } = useBlogUpdateQuery();

  useEffect(()=>{
    if(data){
      setValue('title',data?.data?.title)
      setValue('description',data?.data?.description)
      setValue('image',data?.data?.image)
    }
  },[]);
  const onSubmit = (data) => {
    console.log(data)
    const formData = new FormData()
    formData.append('title', data?.title)
    formData.append('description', data?.description)
    formData.append('image', blogImage);
    formData.append('id',id)
    mutate(formData)
  }

  if(isLoading){
    return <p>Loading...</p>
  }
  if(isError){
    return <p>Error...</p>
  }
  return (
    <>
      <Blog_Header />
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ 
          maxWidth: 800,
          margin: "auto", 
          mt: 4,
          padding: "40px"
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{fontSize:'3rem',textAlign:'center'}}>
        Update Blog
        </Typography>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Blog Title"
              margin="normal"
              required
              sx={{ 
                '& .MuiInputBase-input': {
                  fontSize: '4 rem',
                  padding: '20px'
                }
              }}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Description"
              margin="normal"
              multiline
              rows={8}
              required
              sx={{ 
                '& .MuiInputBase-input': {
                  fontSize: '2rem',
                  lineHeight: '1.5'
                }
              }}
            />
          )}
        />
        <TextField
          type="file"
          label="Blog Image"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setBlogImage(e.target.files[0])}
          sx={{ 
            '& .MuiInputBase-input': {
              padding: '15px'
            }
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ 
            mt: 3,
            py: 1.5,
            fontSize: '1.1rem'
          }}
          fullWidth
        >
          Update Blog
        </Button>
      </Box>
    </>
  );
};

export default Blog_Update;
