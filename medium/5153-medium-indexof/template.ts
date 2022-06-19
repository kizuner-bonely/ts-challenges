type IndexOf<
  T extends any[],
  U extends number,
  Ind extends number[] = [],
> = T extends [infer First, ...infer Rest]
  ? First extends U
    ? Ind['length']
    : IndexOf<Rest, U, [...Ind, 0]>
  : -1
