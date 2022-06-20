type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<
  S extends string,
  T extends boolean = false,
  Res extends string[] = [],
> = S extends `${infer First}${infer Rest}`
  ? T extends true
    ? First extends keyof ControlsMap
      ? ParsePrintFormat<Rest, false, [...Res, ControlsMap[First]]>
      : ParsePrintFormat<Rest, false, Res>
    : First extends '%'
    ? ParsePrintFormat<Rest, true, Res>
    : ParsePrintFormat<Rest, false, Res>
  : Res
