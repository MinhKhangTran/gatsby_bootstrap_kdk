import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import { SingleCategoryQuery } from "../../types.generated";
import { ButtonGroup, Container, Button, Col, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { captitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";

const SingeGalleryCategory = ({ data }: { data: SingleCategoryQuery }) => {
  const titleCapital = captitalizeFirstLetter(data.graphCmsCategory?.name!);
  return (
    <Layout>
      <SEO title={`Gallery | ${titleCapital}`} />
      <Container className="mb-5">
        <h1 className="display-3">Gallery</h1>
        <ButtonGroup aria-label="Category button group">
          {data.allGraphCmsCategory.distinct.map((category, index) => {
            return (
              <Button key={index} variant="primary" className="text-capitalize">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={`/gallery/${category}`}
                  activeStyle={{ textDecoration: "underline" }}
                >
                  {category}
                </Link>
              </Button>
            );
          })}
        </ButtonGroup>

        <Row>
          {data.graphCmsCategory?.galleryImages.map((pic) => {
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
  query SingleCategory($name: String!) {
    graphCmsCategory(name: { eq: $name }) {
      name
      galleryImages {
        id
        alt
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
    allGraphCmsCategory {
      distinct(field: name)
    }
  }
`;

export default SingeGalleryCategory;
