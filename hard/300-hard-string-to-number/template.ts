type ToNumber<
  S extends string,
  Res extends number[] = [],
> = S extends `${Res['length']}` ? Res['length'] : ToNumber<S, [...Res, 0]>
