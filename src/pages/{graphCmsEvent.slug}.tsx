import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { graphql, Link, navigate } from "gatsby";
import { SinglePageQuery } from "../types.generated";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { captitalizeFirstLetter } from "../helpers/capitalizeFirstLetter";
import Moment from "react-moment";

const SingleEventPage = ({ data }: { data: SinglePageQuery }) => {
  return (
    <Layout>
      <SEO title={captitalizeFirstLetter(data.graphCmsEvent?.name!)} />
      <Container>
        <Link to="/event">
          <Button variant="outline-primary" className="my-4">
            All Events
          </Button>
        </Link>
        <GatsbyImage
          image={getImage(data.graphCmsEvent?.image as any)!}
          alt={data.graphCmsEvent?.name!}
        />
        <h1 className="display-3 text-capitalize">
          {data.graphCmsEvent?.name}
        </h1>
        <Row>
          <Col md={7}>
            <p className="lead text-secondary">{data.graphCmsEvent?.desc}</p>
          </Col>
          <Col md={5}>
            <div className="box mt-3 mt-md-0 mb-5 mt-lg-0 border border-primary">
              <h3 className="text-center bg-blue-100 pb-1">Details</h3>
              <Container>
                <p className="fs-5 mb-0">Date</p>
                <Moment className="text-secondary" format="DD.MMMM.YYYY">
                  {data.graphCmsEvent?.date as any}
                </Moment>
                <Row>
                  <Col xs={6} className="mt-3">
                    <p className="fs-5 mb-0">Location</p>
                    <p className=" text-secondary mb-0">
                      {data.graphCmsEvent?.location}
                    </p>
                  </Col>
                  <Col xs={6} className="mt-3">
                    <p className="fs-5 mb-0">Cost</p>
                    <p className="mb-0 text-secondary">
                      {data.graphCmsEvent?.cost}
                    </p>
                  </Col>
                  <Col xs={6} className="mt-3">
                    <p className="fs-5 mb-0">E-Mail</p>
                    <p className=" text-secondary mb-0">
                      {data.graphCmsEvent?.email}
                    </p>
                  </Col>
                  <Col xs={6} className="mt-3">
                    <p className="fs-5 mb-0">Phone</p>
                    <p className="mb-0 text-secondary">
                      {data.graphCmsEvent?.phone}
                    </p>
                  </Col>
                  <Col xs={6} className="mt-3 ">
                    <p className="fs-5 mb-0">Official Website</p>
                    <p className="mb-0 text-secondary mb-3">
                      {data.graphCmsEvent?.website}
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query SinglePage($slug: String!) {
    graphCmsEvent(slug: { eq: $slug }) {
      cost
      date
      desc
      email
      id
      location
      name
      phone
      slug
      website
      image {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;

export default SingleEventPage;
