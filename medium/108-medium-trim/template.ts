type Trim<S extends string> = TrimLeft<STrimRight<S>>

type ReverseStr<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${ReverseStr<Rest>}${First}`
  : S

type STrimRight<S extends string> = ReverseStr<TrimLeft<ReverseStr<S>>>
