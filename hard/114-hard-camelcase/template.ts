type CamelCase<
  S extends string,
  T extends boolean = false,
  Res extends string = '',
> = S extends `${infer First}${infer Rest}`
  ? T extends true
    ? CamelCase<Rest, false, `${Res}${Uppercase<First>}`>
    : First extends '_'
    ? CamelCase<Rest, true, `${Res}`>
    : CamelCase<Rest, false, `${Res}${Lowercase<First>}`>
  : Res
