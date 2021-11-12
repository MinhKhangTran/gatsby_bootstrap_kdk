import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

export default function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  console.log(`submitted form`, req.body);
  res.json(`ok ${req.body.firstName} is cool. Thank you for your Message`);
}
