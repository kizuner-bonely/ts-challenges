type ParseQueryString<S extends string> = S extends ''
  ? {}
  : S extends `${infer Param}&${infer Rest}`
  ? MergeParams<ParseEquals<Param>, ParseQueryString<Rest>>
  : ParseEquals<S>

type MergeParams<
  A extends Record<string, any>,
  B extends Record<string, any>,
> = {
  [K in keyof A | keyof B]: K extends keyof A
    ? K extends keyof B
      ? MergeValues<A[K], B[K]>
      : A[K]
    : K extends keyof B
    ? B[K]
    : never
}

type MergeValues<A, B> = A extends B
  ? A
  : B extends unknown[]
  ? [A, ...B]
  : [A, B]

type ParseEquals<S extends string> = S extends `${infer Left}=${infer Right}`
  ? { [K in Left]: Right }
  : { [K in S]: true }
