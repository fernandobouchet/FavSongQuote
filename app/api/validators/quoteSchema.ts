import { z } from "zod";

const quoteSchema = z.object({
  text: z.string().min(10).max(50),
  song: z.string().min(2),
  band: z.string().min(2),
});

export default quoteSchema;
