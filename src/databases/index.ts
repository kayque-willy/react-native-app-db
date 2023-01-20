import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import { schemas } from "./schemes";
import { SkillModel } from "./models/skillModel";

const adapter = new SQLiteAdapter({
    schema: schemas
});

export const database = new Database({
    adapter,
    modelClasses: [SkillModel]
});