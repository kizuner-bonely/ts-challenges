type First<T extends any[]> = T extends [infer F, ...infer _Rest] ? F : never
