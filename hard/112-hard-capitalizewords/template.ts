type CapitalizeWords<
  S extends string,
  T extends boolean = true,
  Res extends string = '',
> = S extends `${infer First}${infer Rest}`
  ? T extends true
    ? CapitalizeWords<Rest, false, `${Res}${Uppercase<First>}`>
    : First extends ' ' | '.' | ','
    ? CapitalizeWords<Rest, true, `${Res}${First}`>
    : CapitalizeWords<Rest, false, `${Res}${First}`>
  : Res
