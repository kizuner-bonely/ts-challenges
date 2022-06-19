type AllCombinations<S extends string> = [S] extends ['']
  ? ''
  : AllCombinationsLoop<TransStrToUnion<S>>

type AllCombinationsLoop<A extends string, B extends string = A> = B extends B
  ? Combine<B, AllCombinations<Exclude<A, B>>>
  : never

type TransStrToUnion<S extends string> = S extends `${infer First}${infer Rest}`
  ? First | TransStrToUnion<Rest>
  : never

type Combine<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`
