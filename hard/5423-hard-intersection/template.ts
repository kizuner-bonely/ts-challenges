type Intersection<T extends Array<number | number[]>> = T extends [
  infer First,
  ...infer Rest extends Array<number | number[]>,
]
  ? First extends unknown[]
    ? First[number] & Intersection<Rest>
    : First & Intersection<Rest>
  : unknown

type A = [1, 2]
type B = [1, 2, 3]
type Test = A[number] & B[number] & unknown
