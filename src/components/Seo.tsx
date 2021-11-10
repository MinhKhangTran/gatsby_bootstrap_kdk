import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { SeoQuery } from "../types.generated";

function SEO({
  description,
  lang = "en",

  title,
  pathname,
}: {
  description?: string;
  lang?: string;

  title: string;
  pathname?: string;
}) {
  const { site } = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site?.siteMetadata?.description;
  const canonical = pathname
    ? `${site?.siteMetadata?.siteUrl}${pathname}`
    : null;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site?.siteMetadata?.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site?.siteMetadata?.keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
}

export default SEO;
