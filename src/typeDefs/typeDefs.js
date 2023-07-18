import gql from "graphql-tag";
import userTypeDefs from "./userTypeDefs.js";
import tambulaTypeDefs from "./tambulaTypeDefs.js";
const typeDefs = gql`
  ${userTypeDefs}
  ${tambulaTypeDefs}
`;

export default typeDefs;
