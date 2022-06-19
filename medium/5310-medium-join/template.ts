type Join<
  T extends any[],
  U extends number | string,
  Res extends string = '',
> = T extends [infer First, ...infer Rest]
  ? Join<Rest, U, `${Res}${First & string}${U}`>
  : RemoveLastEle<Res>

type RemoveLastEle<S extends string> =
  ReverseStr<S> extends `${infer _First}${infer Str}` ? ReverseStr<Str> : S
