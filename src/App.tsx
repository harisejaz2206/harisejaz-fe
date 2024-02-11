import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Login />
          }
        />
        <Route
          path="/aboutme"
          element={
            <Layout>
              <AboutMe />
            </Layout>
          }
        />
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/blog-listing/:blogId"
          element={
            <Layout>
              <BlogPost />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
