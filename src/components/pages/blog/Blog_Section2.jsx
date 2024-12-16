import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useBlogListQuery } from "../../../hooks/react-query/blog.query";
import { Box, Grid, Pagination } from "@mui/material";
import { image } from "../../../api/endPoints/endPoints";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../../hooks/redux/slice/blogSlice";

export default function Blog_Section2() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  // Fetch blog data with pagination
  const { data, isLoading, isError } = useBlogListQuery(page);
  console.log(data);

const searchTerm =useSelector((state)=>state.blog.searchTerm)

const handleSearchChange = (e)=>{
  dispatch(setSearchTerm(e.target.value))
}
  // Handle page change


  const handleChange = (event, value) => {
    setPage(value);
  };
  const filteredBlogs = data?.data?.filter((blog) =>
    blog?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Loading state
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  // Error handling
  if (isError) {
    return <Typography>Error fetching data.</Typography>;
  }
  const handleBlogDetail = (id) => {
    navigate(`/blog/detail/${id}`);
  };
  return (
    <>
     <section className="blog-section">
     <div className="blog-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Link to="/blog/form" className="create-blog-link">
          Create Blog
        </Link>
      </div>
     </section>
      <div className="blog-list">
        <div className="list-container">
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              fontFamily: "Abril Fatface",
              fontSize: "3rem",
              fontWeight: "100",
              margin: "30px 0",
            }}
          >
            Blog List
          </Typography>

          {/* Blog Grid */}
          <Box>   
            <Grid container spacing={3}>
              {filteredBlogs?.map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item._id}>
                  <Card sx={{ maxWidth: 345, mx: "20px" }}>
                    <CardMedia
                      sx={{ height: 150 }}
                      image={image(item?.image)}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontSize: "2.5rem" }}
                      >
                        {item.title.slice(0,30)}...
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontSize: "1.6rem" }}
                      >
                        {item.description.slice(0, 20)}...
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="large"
                        variant="contained"
                        onClick={() => handleBlogDetail(item._id)}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Pagination */}
          <Box mt={5} mb={4} display="flex" justifyContent="center">
            <Pagination
              count={data?.totalPages || 1} // Total pages from API response
              page={page} // Current page state
              onChange={handleChange} // Page change handler
              color="primary"
            />
          </Box>
        </div>
      </div>
    </>
  );
}
