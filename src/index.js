import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import userResolvers from "./resolvers/user.js";
import typeDefs from "./typeDefs/typeDefs.js";
import pkg from "lodash";
import { getUser } from "./utils/context.js";
import dotenv from "dotenv";
import { GraphQLError } from "graphql";

dotenv.config();
const { merge } = pkg;

const resolvers = merge(userResolvers);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
mongoose
  .connect(process.env.MONGODB__URL, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB is connected successfully");
    return startStandaloneServer(server, {
      context: async ({ req, res }) => {
        try {
          const token = req.headers.authorization || " ";

          // Check if the token exists
          if (!token) {
            throw new Error("Missing authentication token");
          }
          const user = await getUser(token);
          //  console.log(user.role);
          const admin = user.role;
          if (!user) {
            throw new GraphQLError("User is not authenicated", {
              extensions: {
                code: "UNAUTHENTICATED",
                http: { status: 401 },
              },
            });
          } else {
            return { user };
          }
        } catch (error) {
          console.log(error);
        }
      },
      listen: {
        port: 4040,
      },
    });
  })
  .then((res) => {
    console.log("Server is running at " + res.url);
  })
  .catch((error) => {
    console.log(error);
  });
