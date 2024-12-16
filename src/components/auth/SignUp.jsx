import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useUserSignUp } from "../../hooks/react-query/user.query";
import AuthHeader from "./AuthHeader";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [image, setImage] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useUserSignUp();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("first_name", data?.first_name);
    formData.append("last_name", data?.last_name);
    formData.append("email", data?.email);
    formData.append("password", data?.password);
    formData.append("profile_pic", image);
    mutate(formData);
  };

  return (
    <>
      <AuthHeader />
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "600px",
          margin: "0 auto",
          padding: 3,
          mt: 5,
          mb: 5,
          boxShadow: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h2" sx={{ textAlign: "center", my: 3 ,fontFamily:'Abril fatface',color:'#1976d2'}}>
          Sign Up
        </Typography>

        <Box sx={{ width: "100%" }}>
          <div className="contact-row">
            <div className="form-col1">
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                id="first_name"
                {...register("first_name", {
                  required: "First Name is required",
                })}
                sx={{
                  '& .MuiInputBase-input': {
                    fontSize: '1.5rem',
                    padding: '20px',
                  },
                }}
              />
            </div>
            <div className="form-col1">
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                id="last_name"
                {...register("last_name", {
                  required: "Last Name is required",
                })}
                sx={{
                  '& .MuiInputBase-input': {
                    fontSize: '1.5rem',
                    padding: '20px',
                  },
                }}
              />
            </div>
          </div>

          <div className="form-row">
            <TextField
              fullWidth
              label="Email"
              type="text"
              id="email"
              margin="normal"
              {...register("email", { required: "Email is required" })}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '1.5rem',
                  padding: '20px',
                },
              }}
            />
          </div>

          <div className="form-row">
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              type="password"
              autoComplete="current-password"
              id="outlined-password-input"
              {...register("password", { required: true })}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '1.5rem',
                  padding: '12px',
                },
              }}
            />
          </div>

          <div className="form-row">
            <TextField
              type="file"
              label="Profile Picture"
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setImage(e.target.files[0])}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '1.5rem',
                  padding: '20px',
                },
              }}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit(onSubmit)}
            sx={{ width: "50%",mt:3,mb:3 ,mx:'25%'}}
          >
            Submit
          </Button>
        </Box>

        <Typography sx={{ fontSize: 15 }}>
          Already have an account?{" "}
          <Link to="/signin" style={{textDecoration:'none',color:'#1976d2'}}>Sign In</Link>
        </Typography>
      </Box>
    </>
  );
}
