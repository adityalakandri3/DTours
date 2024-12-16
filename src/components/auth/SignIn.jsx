import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useUserSignIn } from "../../hooks/react-query/user.query";
import AuthHeader from "./AuthHeader";
import { Link } from "react-router-dom";

export default function SignIn() {
  const { mutate } = useUserSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => mutate(data);
  return (
    <>
      <AuthHeader />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
          backgroundColor: "#f0f4f8",
          padding: "100px",
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "0 auto",
          mt: 6,
          mb: 6,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h3" sx={{ mb: 3, textAlign: "center" ,fontFamily:'Abril fatface',color:'#1976d2'}}>
          Sign In
        </Typography>
        <TextField
          id="outlined-required"
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          {...register("email", { required: true })}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "1.5rem",
              padding: "12px",
            },
          }}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          fullWidth
          margin="normal"
          {...register("password", { required: true })}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "1.5rem",
              padding: "12px",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit(onSubmit)}
          sx={{ width: "80%", mx: 5, mt: 3 }}
        >
          Submit
        </Button>
        <Typography
  sx={{
    fontSize: { xs: 12, sm: 14, md: 15 }, 
    mt: { xs: 2, sm: 3 }, 
    mx: { xs: 2, sm: 8, md: 12 }, 
    textAlign: { xs: 'center', sm: 'left' } // 
  }}
>
  New User? <Link to="/signup" style={{textDecoration:'none',color:'#1976d2'}}>Sign Up Here</Link>
</Typography>
        ;
      </Box>
    </>
  );
}
