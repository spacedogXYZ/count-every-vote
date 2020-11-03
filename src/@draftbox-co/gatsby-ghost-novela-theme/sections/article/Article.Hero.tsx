import React from "react";
import styled from "@emotion/styled";

import Headings from "@components/Headings";
import Image, { ImagePlaceholder } from "@components/Image";

import mediaqueries from "@styles/media";
import { IArticle, IAuthor } from "@types";

import ArticleAuthors from "./Article.Authors";
import { graphql, useStaticQuery } from "gatsby";

interface ArticleHeroProps {
  article: IArticle;
  authors: IAuthor[];
}

const ArticleHero: React.FC<ArticleHeroProps> = ({ article, authors }) => {
  const hasCoAUthors = article.authors && article.authors.length > 1;
  const hasHeroImage =
    article.hero &&
    Object.keys(article.hero.full).length !== 0 &&
    article.hero.full.constructor === Object;
  const heroImageClass = !hasHeroImage ? "no-hero" : "";

  return (
    <Hero>
      <Header className={heroImageClass}>
        <HeroHeading>{article.title}</HeroHeading>
        <HeroSubtitle hasCoAUthors={hasCoAUthors}>
          <ArticleAuthors authors={authors} />
          <ArticleMeta hasCoAUthors={hasCoAUthors}>
            Last Updated: {article.date}
          </ArticleMeta>
        </HeroSubtitle>
      </Header>
      <HeroImage
        id="ArticleImage__Hero"
        className={hasHeroImage ? "" : "no-hero"}
      >
        {hasHeroImage ? (
          <Image src={article.hero.full} />
        ) : // <ImagePlaceholder />
        null}
      </HeroImage>
    </Hero>
  );
};

export default ArticleHero;

const Hero = styled.div`
  ${(p) => mediaqueries.phablet`
    // &::before {
    //   content: "";
    //   width: 100%;
    //   height: 20px;
    //   background: ${p.theme.colors.primary};
    //   position: absolute;
    //   left: 0;
    //   top: 0;
    //   transition: ${p.theme.colorModeTransition};
    // }

    // &::after {
    //   content: "";
    //   width: 100%;
    //   height: 10px;
    //   background: ${p.theme.colors.background};
    //   position: absolute;
    //   left: 0;
    //   top: 10px;
    //   border-top-left-radius: 25px;
    //   border-top-right-radius: 25px;
    //   transition: ${p.theme.colorModeTransition};
    // }
  `}
`;

const ArticleMeta = styled.div<{ hasCoAUthors: boolean }>`
  margin-left: ${(p) => (p.hasCoAUthors ? "10px" : "0")};

  ${mediaqueries.phablet`
    margin-left: 0;
  `}
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  margin:100px auto 120px;
  // padding-left: 68px;
  max-width: 680px;

  ${mediaqueries.desktop`
    // padding-left: 53px;
    max-width: 680px;
    margin: 100px auto 70px;
  `}

  ${mediaqueries.tablet`
    padding-left: 0;
    margin: 100px auto 70px;
    max-width: 480px;
  `}

  ${mediaqueries.phablet`
    margin: 80px auto;
    padding: 0 20px;
  `}

  @media screen and (max-height: 700px) {
    margin: 80px auto;
  }
`;

const HeroHeading = styled(Headings.h1)`
  font-size: 48px;
  font-family: ${(p) => p.theme.fonts.serif};
  margin-bottom: 25px;
  font-weight: var(--merriweather-font-bold);
  line-height: 1.32;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;

const HeroSubtitle = styled.div<{ hasCoAUthors: boolean }>`
  position: relative;
  display: flex;
  font-size: 18px;
  color: ${(p) => p.theme.colors.grey};

  ${(p) => mediaqueries.phablet`
    font-size: 14px;
    flex-direction: column;
    padding-left: ${(p) => p.hasCoAUthors ? "20px" : "0"};

    ${p.hasCoAUthors &&
      `
        &::before {
          content: '';
          position: absolute;
          left: -20px;
          right: -20px;
          top: -10px;
          bottom: -10px;
          border: 1px solid ${p.theme.colors.horizontalRule};
          opacity: 0.5;
        }
    `}


    strong {
      display: block;
      font-weight: var(--system-font-semibold);
      margin-bottom: 5px;
    }
  `}
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 944px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);

  ${mediaqueries.tablet`
    max-width: 100%;
  `}

  ${mediaqueries.phablet`
    margin: 0 auto;
    width: 100vw;
    height: auto;
    &.no-hero {
      display: none;
    }

    & > div {
      height: 100%;
    }
`}
`;
