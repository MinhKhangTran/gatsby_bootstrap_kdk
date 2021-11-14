import React, { useState } from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { Col, Container, Row, Button, ButtonGroup } from "react-bootstrap";
import { GalleryQuery } from "../types.generated";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import SEO from "../components/Seo";

const GalleryPage = ({ data }: { data: GalleryQuery }) => {
  const [images, setImages] = useState(
    data.allGraphCmsGallery.nodes[0].galleryImages
  );
  let imageCategory;
  const showGallery = (title: string) => {
    if (title === "all") {
      setImages(data.allGraphCmsGallery.nodes[0].galleryImages);
      console.log(data.allGraphCmsGallery.nodes[0].galleryImages);
    } else {
      const tempImages = data.allGraphCmsGallery.nodes[0].galleryImages.filter(
        (category, index) => {
          return category.category.find((cat) => {
            return cat === title;
          });
        }
      );

      // const tempImages = data.allGraphCmsGallery.nodes[0].galleryImages
      //   .map((img) => {
      //     return img.category.filter((category) => {
      //       return category === title;
      //     });
      //   })
      //   .filter((arrayElem) => {
      //     return arrayElem.length !== 0;
      //   });
      console.log(tempImages);
      setImages(tempImages);
    }
  };

  return (
    <Layout>
      <SEO title="Gallery" />
      <Container className="mb-5">
        <h1 className="display-3">{data.allGraphCmsGallery.nodes[0].title}</h1>
        <ButtonGroup aria-label="Category button group">
          {data.allGraphCmsCategory.distinct.map((category, index) => {
            return (
              <Button
                key={index}
                variant="primary"
                className="text-capitalize"
                onClick={() => showGallery(category)}
              >
                {category}
              </Button>
            );
          })}
        </ButtonGroup>

        <Row className="mt-3">
          {images.length === 0 && (
            <h2 className="display-3">No pics for this category yet 🥲</h2>
          )}
          {images.map((pic) => {
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
