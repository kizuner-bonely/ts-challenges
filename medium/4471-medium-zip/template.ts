type Zip<A extends any[], B extends any[], Res extends any[] = []> = A extends [
  infer FirstA,
  ...infer RestA,
]
  ? B extends [infer FirstB, ...infer RestB]
    ? Zip<RestA, RestB, [...Res, [FirstA, FirstB]]>
    : Res
  : Res
