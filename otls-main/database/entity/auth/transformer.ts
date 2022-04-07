import { ValueTransformer } from "typeorm";

// from https://github.com/nextauthjs/adapters/blob/1237a5372004951eccb37c5f7481e5fcb62415b6/packages/typeorm-legacy/src/entities.ts
export const transformer: Record<"date" | "number", ValueTransformer> = {
  date: {
    from: (date: string | null) => date && new Date(parseInt(date, 10)),
    to: (date?: Date) => date?.valueOf().toString(),
  },
  number: {
    from: (num: string | null) => num && parseInt(num, 10),
    to: (num?: number) => num?.toString(),
  },
};
