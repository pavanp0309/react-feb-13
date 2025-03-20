import React from "react";
// step:2 : import all the components
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import BookMovieCard from "./components/BookMovieCard";
import BookTableCard from "./components/BookTableCard";
// step3: import Routes and Route compmonents from react-router library
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";


const App = () => {
  return (
    <>
      <Navbar />
      {/* step4: create the Routing setup(url-path creation) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<Movies />} />
        {/* nested routing */}
        <Route path="/services" element={<Services />}>{/* parent Route */}
          {/* children routes -http://localhost:5173/services/movie/*/}
          {/* index: helps in rendering one component by default */}
          <Route index element={<BookMovieCard />} />{/* child Route */}
          <Route path="movie" element={<BookMovieCard />} />{/* child Route */}
          <Route path="table" element={<BookTableCard />} />{/* child Route */}
        </Route>
        {/* error handling  */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
