type ParseEquals<S extends string> = S extends `${infer Left}=${infer Right}`
  ? { [K in Left]: Right }
  : never

type ParseEqualsResult = ParseEquals<'a=1'> // { a: "1" }

type MergeValues<One, Other> = One extends Other
  ? One
  : Other extends unknown[]
  ? [One, ...Other]
  : [One, Other]

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

type ParseQueryString<S extends string> =
  S extends `${infer Equal}&${infer Rest}`
    ? MergeParams<ParseEquals<Equal>, ParseQueryString<Rest>>
    : ParseEquals<S>

type res = ParseQueryString<'a=1&b=2&c=3&b=4'>

export {}
