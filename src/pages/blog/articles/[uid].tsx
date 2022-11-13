import Head from "next/head";
import { PrismicText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import * as S from "./styles";
import { createClient, linkResolver } from "../../../../prismicio";
import { components } from "../../../../slices";
import { Bounded } from "../../../components/blog/Bounded";
import { Heading } from "../../../components/blog/Heading";
import { HorizontalDivider } from "../../../components/blog/HorizontalDivider";
import { Header } from "../../../components/Layout/Header";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const LatestArticle = ({ article }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <li>
      <S.PrismicLinkStyled document={article}>
        <S.ArticleTitle>
          <PrismicText field={article.data.title} />
        </S.ArticleTitle>
      </S.PrismicLinkStyled>
      <S.Paragrafo>{dateFormatter.format(date)}</S.Paragrafo>
    </li>
  );
};

const Article = ({ article, latestArticles }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <>
      <Header />
      <Head>
        <title>
          {prismicH.asText(article.data.title)}
        </title>
      </Head>
      <Bounded asChild>
        <S.Backlink>
          <S.PrismicLinkStyled href="/blog">
            &larr; Back to articles
          </S.PrismicLinkStyled>
        </S.Backlink>
      </Bounded>
      <article>
        <Bounded asChild style={{ paddingBottom: 0 }}>
          <S.ArticleTitle>
            <PrismicText field={article.data.title} />
          </S.ArticleTitle>
          <S.Paragrafo>
            {dateFormatter.format(date)}
          </S.Paragrafo>
        </Bounded>
        <SliceZone slices={article.data.slices} components={components} />
      </article>
      {latestArticles.length > 0 && (
        <Bounded asChild>
          <S.Conteiner>
            <HorizontalDivider />
            <S.DivConteinerImg>
              <Heading size="2xl" style={{ marginBottom: '5rem' }} >
                Latest articles
              </Heading>
              <S.ListaNaoOrdenada>
                {latestArticles.map((article) => (
                  <LatestArticle key={article.id} article={article} />
                ))}
              </S.ListaNaoOrdenada>
            </S.DivConteinerImg>
          </S.Conteiner>

        </Bounded>
      )}
    </>
  );
};

export default Article;

export async function getStaticProps({ params, previewData }) {
  // @ts-ignore
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  const latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });


  return {
    props: {
      article,
      latestArticles
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismicH.asLink(article, linkResolver)),
    fallback: false,
  };
}
