import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

export const StyledContainer = styled.div`
  max-width: 144rem;
  margin: 0 auto;
`;

export const StyledGridContainer = styled(Container)`
  padding-left: 7.5rem;
  padding-right: 7.5rem;

  @media screen and (max-width: 1440px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const StyledGridRow = styled(Row)`
  justify-content: space-between;
`;

export const StyledGridCol = styled(Col)`
  max-width: 41.5rem;
`;

export const StyledArticleCard = styled.div`
  width: 400px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  overflow: hidden;
`;

export const StyledArticleDetails = styled.div`
  padding: 2.5rem;
`;

export const StyledArticleHeading = styled.h2`
  font-size: 2.4rem;
  line-height: 1.2;
  margin-bottom: 2rem;
`;

export const StyledArticleSummary = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;
