import React, { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/layout/Root";
import About from "./components/pages/about/About";
import "./App.css";
import Contact from "./components/pages/contact/Contact";
const Home = lazy(() => import("./components/pages/home/Home"));
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import CircularProgress from "@mui/material/CircularProgress";
import { motion, useScroll, useSpring } from "framer-motion";
import Gallery from "./components/pages/gallery/Gallery";
import Gallery_Details from "./components/pages/gallery/Gallery_Details";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import AuthRouter from "./middleware/AuthRouter";
import { Toaster } from "react-hot-toast";
import Blog from "./components/pages/blog/Blog";
import Blog_Form from "./components/pages/blog/Blog_Form";
import Blog_Details from "./components/pages/blog/Blog_Details";
import Blog_Update from "./components/pages/blog/Blog_Update";
import ProfileDetails from "./components/pages/profile/ProfileDetails";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    Fancybox.bind('[data-fancybox="video"]', {
      video: {
        autoStart: true,
      },
    });
    Fancybox.bind('[data-fancybox="gallery"]');
  }, []);

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        children: [
          { 
            path: "/signup", 
            element: <SignUp />
           },
          { 
            path: "/signin",
            element: <SignIn />
          },
          {
            path: "/",
            element: (
              <Suspense fallback={<CircularProgress />}>
                <Home />
              </Suspense>
            ),
          },
          {
            path: "/about", 
            element: <About /> 
          },
          {
            path: "/contact",
            element: <Contact /> 
          },
          {
            element: <AuthRouter />,
            children: [
              {
                path: "/gallery",
                element: <Gallery />
              },
              { 
                path: "/details", 
                element: <Gallery_Details />
              },
              { 
                path: "/blog", 
                element: <Blog /> 
              },
              { 
                path: "/blog/form", 
                element: <Blog_Form /> 
              },
              { 
                path: "/blog/detail/:id", 
                element: <Blog_Details /> 
              },
              { 
                path: "/blog/update/:id", 
                element: <Blog_Update /> 
              },
              { 
                path: "/profile", 
                element: <ProfileDetails /> 
              },
            ],
          },
        ],
      },
    ],
    {
      future: {
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
