import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Col, Container, Row, Button } from "react-bootstrap";
import { EventsQuery } from "../types.generated";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Moment from "react-moment";

const EventPage = ({ data }: { data: EventsQuery }) => {
  return (
    <Layout>
      <Container className="mb-5">
        <h1 className="display-3">Events</h1>
        <h2>Upcoming Events</h2>
        {data.allGraphCmsEvent.nodes.map((event) => {
          return (
            <Row key={event.id} className="py-5">
              <Col lg={5} md={4}>
                <GatsbyImage
                  image={getImage(event.thumbnail as any)!}
                  alt={event.name!}
                />
              </Col>
              <Col lg={7} md={8}>
                <h3 className="text-capitalize display-5 mt-2 mt-md-0 mt-lg-0">
                  {event.name}
                </h3>
                <Moment className="text-secondary" format="DD.MMMM.YYYY">
                  {event.date as any}
                </Moment>
                <p>{event.location}</p>
                <p className="text-secondary lead">{event.excerpt}</p>
                <Button>
                  Read more{" "}
                  <span className="visually-hidden">about {event.name}</span>
                </Button>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query Events {
    allGraphCmsEvent {
      nodes {
        date
        id
        slug
        name
        location
        excerpt
        thumbnail {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default EventPage;
