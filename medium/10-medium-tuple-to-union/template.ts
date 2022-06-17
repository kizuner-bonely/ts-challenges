type TupleToUnion<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? First | TupleToUnion<Rest>
  : never
