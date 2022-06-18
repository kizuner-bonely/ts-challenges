type PercentageParser<
  A extends string,
  Sign extends string = '',
  Num extends string = '',
  Percent extends string = '',
> = A extends `${infer First}${infer Rest}`
  ? First extends '+' | '-'
    ? PercentageParser<Rest, `${Sign}${First}`, Num, Percent>
    : First extends '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    ? PercentageParser<Rest, Sign, `${Num}${First}`, Percent>
    : First extends '%'
    ? PercentageParser<Rest, Sign, Num, `${Percent}${First}`>
    : never
  : [Sign, Num, Percent]
