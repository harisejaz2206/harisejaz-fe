import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutMe from "./pages/AboutMe";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
