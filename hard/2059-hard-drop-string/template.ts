type DropString<
  S extends string,
  R extends string,
  Res extends string = '',
> = S extends `${infer First}${infer Rest}`
  ? First extends StringToUnion<R>
    ? DropString<Rest, R, Res>
    : DropString<Rest, R, `${Res}${First}`>
  : Res
