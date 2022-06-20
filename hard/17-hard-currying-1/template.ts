declare function Currying<T>(fn: T): 
  T extends (...args: infer A) => infer R
    ? A extends [infer First, ...infer Rest]
      ? (x: First) => ReturnType<typeof Currying<(...args: Rest) => R>>
      : R
    : never
