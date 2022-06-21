type LengthOfString<
  S extends string,
  Res extends number[] = [],
> = S extends `${infer _First}${infer Rest}`
  ? LengthOfString<Rest, [...Res, 0]>
  : Res['length']
