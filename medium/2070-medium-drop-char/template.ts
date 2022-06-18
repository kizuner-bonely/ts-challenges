type DropChar<
  S extends string,
  C extends string,
  Res extends string = '',
> = C extends ''
  ? never
  : S extends `${infer First}${infer Rest}`
  ? First extends C
    ? DropChar<Rest, C, Res>
    : DropChar<Rest, C, `${Res}${First}`>
  : Res
