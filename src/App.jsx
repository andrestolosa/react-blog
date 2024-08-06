import React from "react";
import Header from "./components/Header.jsx";
import Article from "./components/Article.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
import { articulos } from "./utils/utils.js";
import { runningNews } from "./utils/runningNews.js";
import { news } from './utils/news.js';
import { useState } from 'react';
import SortButtons from './ui/SortButtons';
import NewsDetail from './components/NewsDetail.jsx';

function App() {
  const [newsFeed, setNewsFeed] = useState(news);
  const [newsDetail, setNewsDetail] = useState(-1); 

  const deleteNewsItem = indice => {
    setNewsFeed(newsFeed.filter((_, i) => i !== indice));
  }

  const showNewsDetail = indice => {
    setNewsDetail(indice);
  }

  let content;
  if (newsDetail < 0) {
    content = 
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-end">
          <h4>Sort news:</h4>
          <SortButtons />
        </div>
      </div>
      <hr />
      {newsFeed.map((elemento, indice) => (
        <Article key={indice} indice={indice} article={elemento} delFunction={deleteNewsItem} readMore={showNewsDetail}/>
      ))}
    </div>;
  } else {
    content =
    <NewsDetail 
      indice={newsDetail}
      newsFeed={newsFeed}
      goBack={showNewsDetail}
    />;
  }

  return (
    <>
      <div>
        <Header />
        {content}
        <Footer />
      </div>
    </>
  );
}

export default App;


