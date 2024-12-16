import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Blog_Header from "./Blog_Header";
import { useBlogQuery } from "../../../hooks/react-query/blog.query";

const Blog_Form = () => {
  const [blogImage, setBlogImage] = useState(null)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      description: '',
      image: '',
    },
  })
  const { mutate } = useBlogQuery()
  const onSubmit = (data) => {
    console.log(data)
    const formData = new FormData()
    formData.append('title', data?.title)
    formData.append('description', data?.description)
    formData.append('image', blogImage)
    mutate(formData)
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
          Create Blog
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
          Add Blog
        </Button>
      </Box>
    </>
  );
};

export default Blog_Form;
