import React from "react";
import Blog_Header from "./Blog_Header";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Container,
  Paper,
  CircularProgress,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogDeleteQuery, useBlogDetailQuery } from "../../../hooks/react-query/blog.query";
import { image } from "../../../api/endPoints/endPoints";

const Blog_Details = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useBlogDetailQuery(id);
  const navigate = useNavigate();
  const { mutate } = useBlogDeleteQuery();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDelete = (id) => {
    mutate({ id });
    console.log(id);
  };

  const handleEdit = (id) => {
    navigate(`/blog/update/${id}`);
    console.log(id);
  };

  if (isLoading) {
    return (
      <>
        <Blog_Header />
        <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Container>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Blog_Header />
        <Container sx={{ mt: 4 }}>
          <Typography color="error">Error loading blog details</Typography>
        </Container>
      </>
    );
  }

  return (
    <>
      <Blog_Header />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
        <Typography
          component="h1"
          sx={{
            mb: 7,
            mt: 7,
            fontWeight: "200",
            color: "#2866d6",
            textAlign: "center",
            fontFamily: "Abril Fatface",
            fontSize: isSmallScreen ? "2.5rem" : "4rem",
          }}
        >
          Blog Details
        </Typography>
        <Paper elevation={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
              minHeight: "400px",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: isSmallScreen ? "100%" : "50%",
                height: isSmallScreen ? "200px" : "400px",
                objectFit:'cover',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center'

              }}
              image={image(data?.data?.image)}
              alt={data?.data?.title}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 4,
                width: isSmallScreen ? "100%" : "50%",
                position: "relative",
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  mb: 3,
                  fontWeight: "bold",
                  color: "#2865c7",
                  textAlign: "center",
                  fontFamily: "Abril Fatface",
                  fontSize: isSmallScreen ? "2rem" : "3rem",
                }}
              >
                {data?.data?.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: "#505359",
                  flex: 1,
                  fontSize: "1.2rem",
                  borderBottom: "1px solid #505359",
                }}
              >
                {data?.data?.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: isSmallScreen ? "column" : "row",
                  alignItems: isSmallScreen ? "stretch" : "center",
                  justifyContent: isSmallScreen ? "center" : "flex-end",
                  gap: 2,
                  mt: 3,
                }}
              >
                <Typography
                  variant="overline"
                  color="text.secondary"
                  sx={{ mb: 1, mt: 1, fontSize: "0.9rem", textAlign: "center" }}
                >
                  Created At: {new Date(data?.data?.createdAt).toLocaleDateString()}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEdit(data?.data?._id)}
                  fullWidth={isSmallScreen}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(data?.data?._id)}
                  fullWidth={isSmallScreen}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Card>
        </Paper>
      </Container>
    </>
  );
};

export default Blog_Details;
