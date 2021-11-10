import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { HeroQuery } from "../types.generated";
import { Col, Container, Row, Button } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaWeightHanging, FaDumbbell, FaHippo } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  const data: HeroQuery = useStaticQuery(query);
  const hero = data.allGraphCmsHero.nodes[0];
  console.log(hero);

  return (
    <section id="hero">
      <Container>
        <article className="hero_wrapper">
          <Row>
            <Col lg={6}>
              <div className="hero_text">
                <p className="kasten text-capitalize">{hero.subtitle}</p>
                <h1 className="text-uppercase">{hero.title}</h1>
                <p className="text-muted">{hero.desc}</p>
                <Button className="text-capitalize mt-3" size="lg">
                  {hero.ctaBtn}
                </Button>
                <p className="text-capitalize text-muted mt-5">
                  {hero.socialProof}
                </p>
                <div className="d-flex hero_socials gap-4 align-items-center">
                  <p>
                    <FaDumbbell size="1.5em" className="text-blue-300" />
                    <span className="visually-hidden">Dumbbell</span>
                  </p>
                  <p>
                    <FaWeightHanging size="1.5em" className="text-blue-300" />
                    <span className="visually-hidden">Weight Hanging</span>
                  </p>
                  <p>
                    <FaHippo size="1.5em" className="text-blue-300" />
                    <span className="visually-hidden">Hippo</span>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <Carousel
                showArrows={true}
                autoPlay
                showStatus={false}
                showThumbs={true}
              >
                {Array.from({ length: 3 }, (_, index) => {
                  return (
                    <div
                      key={index}
                      className="hero_image_wrapper mt-5 mt-lg-0"
                    >
                      <GatsbyImage
                        style={{ display: "block", width: "100%" }}
                        // @ts-expect-error
                        image={getImage(hero.images[index])!}
                        alt="First slide"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </article>
      </Container>
    </section>
  );
};

export const query = graphql`
  query Hero {
    allGraphCmsHero {
      nodes {
        title
        subtitle
        desc
        ctaBtn
        socialProof
        images {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default Hero;
