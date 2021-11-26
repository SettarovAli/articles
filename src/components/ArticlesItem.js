import {
  StyledGridCol,
  StyledArticleCard,
  StyledArticleDetails,
  StyledArticleHeading,
  StyledArticleSummary,
} from "./ArticlesListStyles";

const ArticlesItem = ({ article }) => {
  return (
    <StyledGridCol>
      <StyledArticleCard>
        <img
          style={{ display: "block" }}
          src={article.imageUrl}
          width="100%"
          height="217px"
          alt={article.title}
        />
        <StyledArticleDetails>
          <StyledArticleHeading>{article.title}</StyledArticleHeading>
          <StyledArticleSummary>{article.summary}</StyledArticleSummary>
        </StyledArticleDetails>
      </StyledArticleCard>
    </StyledGridCol>
  );
};

export default ArticlesItem;
