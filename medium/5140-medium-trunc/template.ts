type Trunc<
  T extends number | string,
  Res extends string = '',
> = `${T}` extends `${infer S}`
  ? S extends `${infer First}${infer Rest}`
    ? First extends '.'
      ? Res
      : Trunc<Rest, `${Res}${First}`>
    : Res
  : never
