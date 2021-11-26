import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyles } from "./GlobalStyles";

import ArticlesList from "./components/ArticlesList";

import { fetchArticles } from "./store/articlesSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <React.Fragment>
      <GlobalStyles />
      <ArticlesList />
    </React.Fragment>
  );
};

export default App;
