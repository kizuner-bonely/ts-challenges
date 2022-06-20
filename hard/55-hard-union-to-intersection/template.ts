type UnionToIntersection<U> = (U extends U ? (x: U) => any : never) extends (
  x: infer R,
) => any
  ? R
  : never
