import { createClient } from "@fal-ai/client";

const key = process.env.FAL_KEY;
export const falClient = key ? createClient({ apiKey: key }) : null;
