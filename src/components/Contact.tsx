import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ContactQuery } from "../types.generated";

const Contact = () => {
  const data: ContactQuery = useStaticQuery(query);
  const contact = data.allGraphCmsContact.nodes[0];
  return <section id="contact">Contact</section>;
};

export const query = graphql`
  query Contact {
    allGraphCmsContact {
      nodes {
        desc
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        imageHoritzontal {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default Contact;
