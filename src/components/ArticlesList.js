import { useSelector } from "react-redux";

import ArticlesItem from "./ArticlesItem";

import {
  StyledContainer,
  StyledGridContainer,
  StyledGridRow,
} from "./ArticlesListStyles";

const ArticlesList = () => {
  const articles = useSelector((state) => state.articles);

  console.log(articles);

  return (
    <StyledContainer>
      <StyledGridContainer fluid>
        <StyledGridRow>
          {articles.map((article) => (
            <ArticlesItem key={article.id} article={article} />
          ))}
        </StyledGridRow>
      </StyledGridContainer>
    </StyledContainer>
  );
};

export default ArticlesList;
