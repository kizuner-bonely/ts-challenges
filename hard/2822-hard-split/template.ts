type Split<
  S extends string,
  SEP extends string,
  Res extends string[] = [],
> = IsSame<S, string> extends true
  ? string[]
  : SEP extends ''
  ? S extends ''
    ? []
    : SplitEverything<S>
  : S extends `${infer First}${SEP}${infer Rest}`
  ? Split<Rest, SEP, [...Res, First]>
  : [...Res, S]

type SplitEverything<
  S extends string,
  Res extends string[] = [],
> = S extends `${infer First}${infer Rest}`
  ? SplitEverything<Rest, [...Res, First]>
  : Res
