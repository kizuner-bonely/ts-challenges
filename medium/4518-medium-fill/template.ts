type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Ind extends number[] = [],
  Res extends unknown[] = [],
> = T extends [infer First, ...infer Rest]
  ? InRange<Start, End, Ind['length']> extends true
    ? Fill<Rest, N, Start, End, [...Ind, 0], [...Res, N]>
    : Fill<Rest, N, Start, End, [...Ind, 0], [...Res, First]>
  : Res

type LessThan<
  A extends number,
  B extends number,
  C extends number = 0,
> = C extends A ? false : C extends B ? true : Add<C, 1>

type Minus<A extends number, B extends number> = BuildArr<A> extends [
  ...BuildArr<B>,
  ...infer Res,
]
  ? Res['length'] & number
  : never

type InRange<Start extends number, End extends number, Ind extends number> = [
  Minus<Ind, Start>,
] extends [never]
  ? false
  : [Minus<Ind, End>] extends [never]
  ? true
  : false
