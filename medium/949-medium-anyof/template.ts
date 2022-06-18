type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? First extends false | 0 | undefined | null | never | ''
    ? AnyOf<Rest>
    : First extends any[]
    ? First['length'] extends 0
      ? AnyOf<Rest>
      : true
    : First extends Record<keyof any, any>
    ? [keyof First] extends [never]
      ? AnyOf<Rest>
      : true
    : true
  : false
