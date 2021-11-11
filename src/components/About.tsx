import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { AboutQuery } from "../types.generated";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Moment from "react-moment";

const About = () => {
  const data: AboutQuery = useStaticQuery(query);
  const about = data.allGraphCmsAbout.nodes[0];

  return (
    <section id="about" className="section">
      <Container>
        <Title title={about.title!} />
        <Row>
          <Col lg={4} md={12} className="order-md-last order-lg-first">
            <GatsbyImage
              // @ts-expect-errory
              image={getImage(about.image)!}
              alt="about image"
            />
          </Col>
          <Col lg={5} md={7} className="order-first">
            <p className="lead text-secondary">{about.desc}</p>
          </Col>
          <Col
            lg={3}
            md={5}
            className="order-last order-md-first order-lg-last"
          >
            <div className="box mt-3 border border-primary">
              <h3 className="text-center bg-blue-100 py-1">Events</h3>

              {about.events.map((event) => {
                return (
                  <article
                    key={event.id}
                    className="d-flex flex-column justify-content-center px-3 py-2"
                  >
                    <Moment format="DD.MM.YYYY">{event.date as any}</Moment>
                    <Link className="text-capitalize" to={`/${event.slug}`}>
                      {event.name}
                    </Link>
                    <p className="text-muted">{event.location}</p>
                  </article>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const query = graphql`
  query About {
    allGraphCmsAbout {
      nodes {
        title
        desc
        events {
          id
          date
          slug
          name
          location
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default About;
