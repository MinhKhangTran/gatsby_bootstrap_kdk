import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FaqQuery } from "../types.generated";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

const FAQ = () => {
  const data: FaqQuery = useStaticQuery(query);
  const faq = data.allGraphCmsFaq.nodes[0];
  const [number, setNumber] = useState(0);
  return (
    <section id="faq" className="section">
      <Container>
        <Title title={faq.title!} />
        <Row>
          <Col lg={6}>
            <GatsbyImage
              image={getImage(faq.images[number] as any)!}
              alt={`faq image ${number + 1}`}
            />
            <Row className="mt-3">
              {faq.images.map((image, index) => {
                return (
                  <Col xs={4} key={image.id}>
                    <div
                      onClick={() => {
                        setNumber(index);
                      }}
                    >
                      <GatsbyImage
                        className={`${
                          index === number ? "active" : ""
                        } faq_wrapper`}
                        image={getImage(image as any)!}
                        alt={`faq thumbimages ${index + 1}`}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col lg={6} className="mt-3 mt-lg-0">
            <Accordion defaultActiveKey="0">
              {faq.faqAccordions.map((acc, index) => {
                return (
                  <Accordion.Item key={acc.id} eventKey={index + ""}>
                    <Accordion.Header as="h3">{acc.question}</Accordion.Header>
                    <AccordionBody className="text-muted">
                      {acc.accordionText}
                    </AccordionBody>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const query = graphql`
  query FAQ {
    allGraphCmsFaq {
      nodes {
        title
        faqAccordions {
          id
          accordionText
          question
        }
        images {
          gatsbyImageData(placeholder: TRACED_SVG)
          id
        }
      }
    }
  }
`;

export default FAQ;
