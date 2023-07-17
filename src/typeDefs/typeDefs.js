import gql from "graphql-tag";
import userTypeDefs from "./userTypeDefs.js";
const typeDefs = gql`
  ${userTypeDefs}
`;

export default typeDefs;
