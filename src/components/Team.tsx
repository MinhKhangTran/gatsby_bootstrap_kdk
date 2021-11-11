import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { TeamQuery } from "../types.generated";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Team = () => {
  const data: TeamQuery = useStaticQuery(query);
  const team = data.allGraphCmsTeam.nodes[0];
  return (
    <section id="team" className="section">
      <Container>
        <Title title={team.title!} />
        <Row className="gap-3 gap-lg-0">
          {team.teamMembers.map((member) => {
            return (
              <Col key={member.id} lg={6} className="py-lg-3">
                <Row>
                  <Col xs={6}>
                    <GatsbyImage
                      image={getImage(member.image as any)!}
                      alt={member.name!}
                    />
                  </Col>
                  <Col xs={6}>
                    <h3>{member.name}</h3>
                    <p className="text-primary">{member.job}</p>
                    <p className="text-muted">{member.desc}</p>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export const query = graphql`
  query Team {
    allGraphCmsTeam {
      nodes {
        title
        teamMembers {
          id
          desc
          job
          name
          image {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export default Team;
