import { z } from "zod";

export const userSchema = z.object({
  userId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
});

// Conversation Schema
export const ConversationSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string(),
});

export const InsertConversationSchema = z.array(ConversationSchema);
export type ConversationSchemaType = z.infer<typeof ConversationSchema>;

// Code Schema
export const CodeSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string(),
});

export const InsertCodeSchema = z.array(CodeSchema);
export type CodeSchemaType = z.infer<typeof CodeSchema>;
