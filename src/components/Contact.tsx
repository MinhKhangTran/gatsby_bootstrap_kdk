import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ContactQuery } from "../types.generated";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Button,
} from "react-bootstrap";

import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact = () => {
  const data: ContactQuery = useStaticQuery(query);
  const contact = data.allGraphCmsContact.nodes[0];
  let isPageWide = useMediaQuery("(min-width: 768px)");

  // For toast
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(true);

  // useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    console.log(data);
    const response = await fetch(`/api/form`, {
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        "content-type": `application/json`,
      },
    });

    const daten = await response.json();

    console.log(`Response from api:`, daten);
    setMessage(daten);
    reset();
  };

  if (isPageWide) {
    return (
      <section id="contact" className="section">
        <Container fluid>
          <Row>
            <Col
              lg={6}
              className="contact_large_column justify-content-center d-flex flex-column"
            >
              <h2 className="mt-4 mb-3 text-center text-capitalize text-decoration-underline">
                {contact.title}
              </h2>
              <p className="lead text-secondary">{contact.desc}</p>
              <Row>
                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                  <Row className="contact_form">
                    <Col lg={6}>
                      <FloatingLabel
                        className="mb-4"
                        controlId="floatingFirstName"
                        label="First Name"
                      >
                        <Form.Control
                          {...register("firstName", {
                            required: true,
                            maxLength: 80,
                          })}
                          required
                          type="text"
                          placeholder="First Name"
                          isInvalid={!!errors.firstName}
                        />

                        <Form.Control.Feedback type="invalid">
                          Please provide your first name
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col lg={6}>
                      <FloatingLabel
                        className="mb-4"
                        controlId="floatingLastName"
                        label="Last Name"
                      >
                        <Form.Control
                          {...register("lastName", {
                            required: true,
                            maxLength: 80,
                          })}
                          isInvalid={!!errors.lastName}
                          required
                          type="text"
                          placeholder="Last Name"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your last name
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col lg={12} className="mx-auto">
                      <FloatingLabel
                        controlId="floatingEmail"
                        label="E-mail Address"
                        className="mb-4"
                      >
                        <Form.Control
                          required
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                          type="email"
                          placeholder="name@beispiel.de"
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your e-mail address
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col lg={12} className="mx-auto">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Message"
                      >
                        <Form.Control
                          required
                          as="textarea"
                          placeholder="Leave us a mesage"
                          style={{ height: "150px" }}
                          {...register("message", {
                            required: true,
                          })}
                          isInvalid={!!errors.message}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a message
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Col>
                    <Col lg={12} className="mx-auto">
                      <Button
                        type="submit"
                        variant="primary"
                        className="mt-4 mb-4 mb-lg-0"
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Row>{" "}
            </Col>
            <Col lg={6}>
              <GatsbyImage
                image={getImage(contact.image as any)!}
                alt="contact image"
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
  return (
    <section id="contact" className="section">
      <GatsbyImage
        image={getImage(contact.imageHoritzontal as any)!}
        alt="contact image"
      />
      <Container>
        <h2 className="mt-4 mb-3 text-center text-capitalize text-decoration-underline">
          {contact.title}
        </h2>
        <p className="lead text-secondary">{contact.desc}</p>
        <Row>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Row className="contact_form">
              <Col lg={6}>
                <FloatingLabel
                  className="mb-4"
                  controlId="floatingFirstName"
                  label="First Name"
                >
                  <Form.Control
                    {...register("firstName", {
                      required: true,
                      maxLength: 80,
                    })}
                    required
                    type="text"
                    placeholder="First Name"
                    isInvalid={!!errors.firstName}
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide your first name
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={6}>
                <FloatingLabel
                  className="mb-4"
                  controlId="floatingLastName"
                  label="Last Name"
                >
                  <Form.Control
                    {...register("lastName", {
                      required: true,
                      maxLength: 80,
                    })}
                    isInvalid={!!errors.lastName}
                    required
                    type="text"
                    placeholder="Last Name"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your last name
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <FloatingLabel
                  controlId="floatingEmail"
                  label="E-mail Address"
                  className="mb-4"
                >
                  <Form.Control
                    required
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    type="email"
                    placeholder="name@beispiel.de"
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your e-mail address
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <FloatingLabel controlId="floatingTextarea" label="Message">
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Leave us a mesage"
                    style={{ height: "150px" }}
                    {...register("message", {
                      required: true,
                    })}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col lg={12} className="mx-auto">
                <Button
                  type="submit"
                  variant="primary"
                  className="mt-4 mb-4 mb-lg-0"
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </Container>
    </section>
  );
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
