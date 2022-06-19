type Chunk<
  A extends any[],
  L extends number,
  Selected extends any[] = [],
  Res extends any[] = [],
> = A extends [infer First, ...infer Rest]
  ? Selected['length'] extends L
    ? Chunk<A, L, [], [...Res, Selected]>
    : Chunk<Rest, L, [...Selected, First], Res>
  : Selected['length'] extends 0
  ? Res
  : [...Res, Selected]
