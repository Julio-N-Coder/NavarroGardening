import { z } from "zod";
const isEmail = z
  .string()
  .min(4, { message: "Email is to small" })
  .max(100, { message: "Email is to big" })
  .email("Email is not valid.");
const messageLength = z
  .string()
  .min(10, { message: "Message is to small" })
  .max(1000, { message: "Message is to big" });

export { isEmail, messageLength };
