type FlipArguments<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => infer R
  ? (...args: Reverse<A>) => R
  : never
