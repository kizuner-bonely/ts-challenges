type TrimLeft<S extends string> = S extends `${infer First}${infer Rest}`
  ? First extends ' ' | '\t' | '\n'
    ? `${TrimLeft<Rest>}`
    : S
  : never
