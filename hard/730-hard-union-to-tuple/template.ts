export type UnionToTuple<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer R
  ? [...UnionToTuple<Exclude<T, R>>, R]
  : []

type UnionToIntersection<U> = (U extends U ? (x: U) => any : never) extends (
  x: infer R,
) => any
  ? R
  : never
