import gql from "graphql-tag";

const userTypeDefs = gql`
  scalar Date
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    token: String!
    password: String!
    createdAt: Date!
  }

  type Query {
    getAllUser: [User!]!
    getUser(id: ID!): User!
    me: User!
  }

  type Mutation {
    createUser(input: createUserInput!): User!
    loginUser(input: loginUserInput): User!
  }

  input createUserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input loginUserInput {
    username: String!
    password: String!
  }
`;

export default userTypeDefs;
