type Unique<T extends any[], Res extends any[] = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? Includes<Res, First> extends true
    ? Unique<Rest, Res>
    : Unique<Rest, [...Res, First]>
  : Res
