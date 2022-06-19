type Without<
  T extends any[],
  U extends number | number[],
  Res extends any[] = [],
> = T extends [infer First, ...infer Rest]
  ? U extends number[]
    ? ArrIncludes<U, First & number> extends true
      ? Without<Rest, U, Res>
      : Without<Rest, U, [...Res, First]>
    : First extends U
    ? Without<Rest, U, Res>
    : Without<Rest, U, [...Res, First]>
  : Res

type ArrIncludes<Arr extends any[], Ele extends number> = Arr extends [
  infer First,
  ...infer Rest,
]
  ? First extends Ele
    ? true
    : ArrIncludes<Rest, Ele>
  : false
