import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import  About from "./About";
import  Articlelist from "./ArticleList";
// import  Article from "./Article";
// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogData={blogData} />
      <About blogData={blogData} />
      <Articlelist blogData={blogData.posts} />
    </div>
  );
}

export default App;
