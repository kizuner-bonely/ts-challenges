type Shift<T extends any[]> = T extends [infer _First, ...infer Rest]
  ? Rest
  : never
