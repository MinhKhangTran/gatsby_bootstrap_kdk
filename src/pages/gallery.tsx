import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";
import { GalleryQuery } from "../types.generated";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../components/Seo";

const GalleryPage = ({ data }: { data: GalleryQuery }) => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <Container className="mb-5">
        <h1 className="display-3">{data.allGraphCmsGallery.nodes[0].title}</h1>
        <ButtonGroup aria-label="Category button group">
          {data.allGraphCmsCategory.distinct.map((category, index) => {
            return (
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`/gallery/${category}`}
              >
                <Button
                  key={index}
                  variant="primary"
                  className="text-capitalize me-4"
                >
                  {category}
                </Button>
              </Link>
            );
          })}
        </ButtonGroup>

        <Row>
          {data.allGraphCmsGallery.nodes[0].galleryImages.map((pic) => {
            return (
              <Col key={pic.id} lg={4} md={6} className="py-3">
                <GatsbyImage
                  image={getImage(pic.image as any)!}
                  alt={pic.alt!}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query Gallery {
    allGraphCmsGallery {
      nodes {
        title
        galleryImages {
          id
          alt
          category
          image {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
    allGraphCmsCategory {
      distinct(field: name)
    }
  }
`;

export default GalleryPage;
