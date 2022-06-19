export type FlattenDepth<
  A extends any[],
  D extends number = 1,
  C extends any[] = [],
> = C['length'] extends D
  ? A
  : HasArr<A> extends false
  ? A
  : FlattenDepth<Flatten<A>, D, [...C, '']>

type HasArr<A extends any[]> = A extends [infer First, ...infer Rest]
  ? First extends any[]
    ? true
    : HasArr<Rest>
  : false

type Flatten<A extends any[]> = A extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...First, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : []
