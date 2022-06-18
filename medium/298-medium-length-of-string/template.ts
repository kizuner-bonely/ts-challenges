export type LengthOfString<
  S extends string,
  Count extends number = 0,
> = S extends `${infer _First}${infer Rest}`
  ? LengthOfString<Rest, Add<Count, 1> & number>
  : Count

type BuildArr<
  Len extends number,
  Res extends unknown[] = [],
> = Res['length'] extends Len ? Res : BuildArr<Len, [...Res, unknown]>

type Add<A extends number, B extends number> = [
  ...BuildArr<A>,
  ...BuildArr<B>,
]['length']
