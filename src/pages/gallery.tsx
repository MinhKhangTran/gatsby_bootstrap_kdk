import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GalleryQuery } from "../types.generated";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GalleryPage = ({ data }: { data: GalleryQuery }) => {
  return (
    <Layout>
      <Container className="mb-5">
        <h1 className="display-3">Gallery</h1>
        <Row>
          {data.allGraphCmsGallery.nodes[0].galleryImages.map((pic) => {
            return (
              <Col lg={4} md={6} className="py-3">
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
  }
`;

export default GalleryPage;
