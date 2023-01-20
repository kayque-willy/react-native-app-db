import { appSchema } from "@nozbe/watermelondb";

import { skillSchema } from "./skillSchema";

export const schemas = appSchema({
    tables: [skillSchema],
    version: 1
});