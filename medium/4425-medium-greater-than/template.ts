type GreaterThan<
  T extends number,
  U extends number,
  Count extends number = 0,
> = Count extends T
  ? false
  : Count extends U
  ? true
  : GreaterThan<T, U, Add<Count, 1> & number>

type BuildArr<
  Len extends number,
  Res extends any[] = [],
> = Res['length'] extends Len ? Res : BuildArr<Len, [...Res, 0]>

type Add<A extends number, B extends number> = [
  ...BuildArr<A>,
  ...BuildArr<B>,
]['length']
