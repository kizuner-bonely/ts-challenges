export type TrimRight<S extends string> = Reverse<TrimLeft<Reverse<S>>>

type Reverse<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Reverse<Rest>}${First}`
  : S
