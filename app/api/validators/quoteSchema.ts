import { z } from "zod";

const quoteSchema = z.object({
  text: z.string().min(10).max(100),
  song: z.string().min(2),
  band: z.string().min(2),
  videoUrl: z.string().min(1).url(),
});

export default quoteSchema;
