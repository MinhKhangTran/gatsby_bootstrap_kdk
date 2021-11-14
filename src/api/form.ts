import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  console.log(`submitted form`, req.body);
  const graphQLClient = new GraphQLClient(graphqlAPI!, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });
  const query = gql`
    mutation CreateNewsletter(
      $firstName: String!
      $lastName: String!
      $email: String!
      $message: String!
    ) {
      createNewsletter(
        data: {
          firstName: $firstName
          lastName: $lastName
          email: $email
          message: $message
        }
      ) {
        id
      }
    }
  `;

  const result = await graphQLClient.request(query, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.message,
  });
  return res.status(200).send(result);
}
