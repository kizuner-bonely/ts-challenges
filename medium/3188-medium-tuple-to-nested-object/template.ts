type TupleToNestedObject<T extends any[], U> = T extends [
  infer First,
  ...infer Rest,
]
  ? { [K in First & keyof any]: TupleToNestedObject<Rest, U> }
  : U
