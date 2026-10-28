import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return <>
    <Header /><Banner /><About /><Projects />
    <FeaturedArticles /><FeaturedTutorials />
    <Gallery /><Newsletter /><Footer />
  </>;
}
export default App;
