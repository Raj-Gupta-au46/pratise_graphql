// import Ticket from "../models/tambula.js";
// import User from "../models/user.js";
// import generateTambulaTickets from "../helper/tambula.js";

// const tambulaResolvers = {
//   Query: {
//     fetchTickets: async (_, { userId }) => {
//       try {
//         const tickets = await Ticket.find({ user: userId });
//         return tickets;
//       } catch (error) {
//         throw new Error("Failed to fetch tickets");
//       }
//     },
//   },
//   Mutation: {
//     createTicket: async (_, { userId, numberOfTicketSet }) => {
//       try {
//         if (numberOfTicketSet <= 0) {
//           throw new Error("Number of tickets should be greater than 0");
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//           throw new Error("User not found");
//         }

//         const createdTickets = [];

//         for (let i = 0; i < numberOfTicketSet; i++) {
//           const tickets = await generateTambulaTickets();

//           for (const { ticketId, data } of tickets) {
//             const ticket = new Ticket({
//               ticketId,
//               data,
//               user: user._id,
//             });

//             const savedTicket = await ticket.save();
//             createdTickets.push(savedTicket);
//           }
//         }

//         return createdTickets;
//       } catch (error) {
//         throw new Error("Failed to create ticket");
//       }
//     },
//   },
// };

// export default tambulaResolvers;

import Ticket from "../models/tambula.js";
import User from "../models/user.js";
import generateTambulaTickets from "../helper/tambula.js";

const tambulaResolvers = {
  Query: {
    fetchTickets: async (_, { userId }) => {
      try {
        const tickets = await Ticket.find({ user: userId });
        return tickets;
      } catch (error) {
        throw new Error("Failed to fetch tickets");
      }
    },
  },
  Mutation: {
    createTicket: async (_, { userId, numberOfTicketSet }) => {
      try {
        if (numberOfTicketSet <= 0) {
          throw new Error("Number of tickets should be greater than 0");
        }

        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User not found");
        }

        const createdTickets = [];

        for (let i = 0; i < numberOfTicketSet; i++) {
          const tickets = generateTambulaTickets();
          for (const ticketId in tickets.tickets) {
            const ticketData = tickets.tickets[ticketId];
            const modifiedTicketData = ticketData.map((ticket) =>
              ticket.map((value) => (value === null ? 0 : value))
            );

            // Convert "x" strings to null or valid integers
            // const processedTicketData = modifiedTicketData.map((ticket) =>
            //   ticket.map((value) =>
            //     value === "x" ? null : parseInt(value, 10)
            //   )
            // );

            createdTickets.push({
              ticketId: ticketId,
              data: modifiedTicketData,
            });
          }
        }

        return createdTickets;
      } catch (error) {
        throw error;
      }
    },
  },
};

export default tambulaResolvers;
