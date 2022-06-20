type FilterOut<T extends any[], F, Res extends any[] = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? [First] extends [F]
    ? FilterOut<Rest, F, Res>
    : FilterOut<Rest, F, [...Res, First]>
  : Res
