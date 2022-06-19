type Fibonacci<
  T extends number,
  Pre extends any[] = [0],
  Cur extends any[] = [],
  Ind extends any[] = [],
> = Ind['length'] extends T
  ? Cur['length']
  : Fibonacci<T, Cur, [...Pre, ...Cur], [...Ind, 0]>
