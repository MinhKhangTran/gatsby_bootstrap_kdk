import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CtaQuery } from "../types.generated";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Button } from "react-bootstrap";

const CTA = () => {
  const data: CtaQuery = useStaticQuery(query);
  const cta = data.allGraphCmsCta.nodes[0];
  return (
    <section id="cta" className="section d-flex">
      <div className="cta_wrapper">
        <GatsbyImage
          className="cta_image"
          image={getImage(cta.image as any)!}
          alt="Cta image"
        />
      </div>
      <div className="cta_box bg-blue-200 container py-4">
        <h2>{cta.title}</h2>
        <p className="lead">{cta.desc}</p>
        <div className="cta_button_wrapper">
          <Button size="lg" className="mt-4 mt-md-3 text-capitalize">
            {cta.ctaBtn}
          </Button>
        </div>
      </div>
    </section>
  );
};

export const query = graphql`
  query CTA {
    allGraphCmsCta {
      nodes {
        ctaBtn
        desc
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default CTA;
