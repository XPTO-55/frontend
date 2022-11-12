import Head from "next/head";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import * as S from "./styles";
import { createClient } from "../../../prismicio";
import { Layout } from "../../components/blog/Layout";
import { Bounded } from "../../components/blog/Bounded";
import { Heading } from "../../components/blog/Heading";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const findFirstImage = (slices) => {
  const imageSlice = slices.find((slice) => slice.slice_type === "image");

  if (imageSlice && prismicH.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
};

const getExcerpt = (slices) => {
  const text = slices
    .filter((slice) => slice.slice_type === "text")
    .map((slice) => prismicH.asText(slice.primary.text))
    .join(" ");

  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};

const Article = ({ article }) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);

  return (
    <S.listItemStyled>
      <PrismicLink document={article} tabIndex="-1">
        <S.Div2>
          {prismicH.isFilled.image(featuredImage) && (
            <PrismicNextImage
              field={featuredImage}
              layout="fill"
              className="object-cover"
            />
          )}
        </S.Div2>
      </PrismicLink>
      <S.Div1>
        <Heading as="h2">
          <PrismicLink document={article}>
            <PrismicText field={article.data.title} />

          </PrismicLink>
        </Heading>

        <S.Paragrafo>
          {dateFormatter.format(date)}
        </S.Paragrafo>
        {excerpt && (
          <S.Paragrafo2>
            {excerpt}
          </S.Paragrafo2>
        )}
      </S.Div1>
    </S.listItemStyled>
  );
};

const Index = ({ articles }) => {
  return (
    <>
      <Bounded size="widest">
        <S.ListaNaoOrdenada>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </S.ListaNaoOrdenada>
      </Bounded>
    </>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });


  return {
    props: {
      articles
    },
  };
}
