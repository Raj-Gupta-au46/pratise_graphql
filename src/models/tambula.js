// import mongoose from "mongoose";

// const ticketSchema = new mongoose.Schema({
//   ticketId: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   data: {
//     type: [[Number]],
//     required: true,
//   },
// });

// const Ticket = mongoose.model("Ticket", ticketSchema);

// export default Ticket;

import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    required: true,
    unique: true,
  },
  data: {
    type: [[Number]],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;
