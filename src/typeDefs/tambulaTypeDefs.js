// import gql from "graphql-tag";

// const tambulaTypeDefs = gql`
//   scalar Date
//   type Ticket {
//     ticketId: ID!
//     data: Int!
//   }

//   type User {
//     userId: ID!
//     name: String!
//   }

//   type Query {
//     fetchTickets(userId: ID!): [Ticket]!
//   }

//   type Mutation {
//     createTicket(userId: ID!, numberOfTicketSet: Int!): [Ticket]!
//   }
// `;

// export default tambulaTypeDefs;

// typeDefs/tambula.js
import { gql } from "graphql-tag";

const tambulaTypeDefs = gql`
  scalar Date

  type Ticket {
    ticketId: ID!
    data: [[Int]]!
    user: User!
  }

  type User {
    userId: ID!
    name: String!
  }

  type Query {
    fetchTickets(userId: ID!): [Ticket]!
  }

  type Mutation {
    createTicket(userId: ID!, numberOfTicketSet: Int!): [Ticket]!
  }
`;

export default tambulaTypeDefs;
