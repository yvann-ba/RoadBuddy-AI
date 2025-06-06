import { z } from "zod";

export enum ConversationState {
  MAIN_MENU = "MAIN_MENU",
  FLOW = "FLOW",
}

export enum Countries {
    FRANCE = "FRANCE",
    ERROR = "ERROR",
}

export enum City {
    PARIS = "Paris",
    ERROR = "ERROR",
}

export const InputTelegramMessageSchema = z.object({
  message_id: z.number().optional(),
  from: z.object({
    id: z.number(),
    first_name: z.string().optional(),
    username: z.string().optional(),
  }),
  chat: z.object({
    id: z.number(),
    type: z.enum(['private', 'group', 'supergroup', 'channel']),
  }),
  date: z.number(),
  text: z.string().optional(),
});

export type inputTelegramMessage = z.infer<typeof InputTelegramMessageSchema>;

const InlineKeyboardButtonSchema = z.object({
  text: z.string(),
  callback_data: z.string(),
});

const InlineKeyboardMarkupSchema = z.object({
  inline_keyboard: z.array(z.array(InlineKeyboardButtonSchema)),
});

const SendMessageWithInlineSchema = z.object({
  chat_id: z.number(),
  text: z.string(),
  parse_mode: z.string().optional(),
  reply_markup: InlineKeyboardMarkupSchema.optional(),
});

export type resultTelegramMessage = z.infer<typeof SendMessageWithInlineSchema>;

const UserSchema = z.object({
  id: z.number(),
  is_bot: z.boolean(),
  first_name: z.string(),
  username: z.string().optional(),
  language_code: z.string().optional(),
});

const MessageSchema = z.object({
  message_id: z.number(),
  from: UserSchema,
  chat: z.object({
    id: z.number(),
    first_name: z.string(),
    username: z.string().optional(),
    type: z.enum(['private', 'group', 'supergroup', 'channel']),
  }),
  date: z.number(),
  text: z.string(),
  reply_markup: InlineKeyboardMarkupSchema,
});

export const CallbackQuerySchema = z.object({
  id: z.string(),
  from: UserSchema,
  message: MessageSchema,
  chat_instance: z.string(),
  data: z.string(),
});

export type inputButtonMessage = z.infer<typeof CallbackQuerySchema>;

export enum CallbackAnswer {
  FRANCE = "FRANCE",
  PARIS = "Paris",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  ERROR = "ERROR",
}

export const ChoiceSchema = z.object({
  id: z.string(),
  text: z.string(),
});

export const QuestionSchema = z.object({
  question_text: z.string(),
  correct_answer_id: z.string(),
  choices: z.array(ChoiceSchema),
  explanation: z.string(),
  chat_id: z.string(),
});

export type Question = z.infer<typeof QuestionSchema>;