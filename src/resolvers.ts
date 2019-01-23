import { User } from "./entity/User";
import { getConnection, getRepository } from "typeorm";
import * as bcrypt from "bcryptjs";
import {
  HelloQueryArgs,
  SignupUserMutationArgs,
  LoginUserMutationArgs,
  QueryResolvers
} from "./generated/graphql";
import { Resolver } from "dns";
import { IResolvers } from "graphql-middleware/dist/types";
import { Task } from "./entity2/tasks";

export const resolvers: IResolvers = {
  Query: {
    hello: (_, { name }: HelloQueryArgs) => `Hello ${name || "World"}`,
    users: async () => {
      const users = await User.find();
      return users.map(user => ({ ...user, password: "*****" }));
    },
    tasks: async (_, args, ctx) => {
      //console.log(ctx.connections);
      const connection = getConnection("app");
      const appRepo = connection.getRepository(Task);
      // await connection.connect();
      const tasks = await appRepo.find();
      console.log(tasks);
      return tasks;
    }
  },
  Mutation: {
    createTask: async (_, { input }, ctx) => {
      const { body } = input;
      // console.log("Context", ctx.db.app, "*");
      const connection = ctx.db.app;
      const appRepo = connection.getRepository(Task);
      //console.log(appRepo);
      const task = appRepo.save({ body });
      console.log(task);
      // await task.save();
      return task;
    },
    signupUser: async (_, { input }: SignupUserMutationArgs, ctx, info) => {
      const { name, email, password } = input;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("a user with this email already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = User.create({
        name,
        email,
        password: hashedPassword
      });
      await user.save();
      return { ...user, password: "*****" };
    },
    loginUser: async (_, { input }: LoginUserMutationArgs, ctx, info) => {
      const { email, password } = input;
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        throw new Error("Invalid username/password");
      }
      const result = await bcrypt.compare(password, existingUser.password);
      if (!result) {
        throw new Error("Invalid username/password");
      }
      return existingUser;
    }
  }
};
