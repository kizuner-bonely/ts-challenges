type Merge<
  F extends Record<keyof any, any>,
  S extends Record<keyof any, any>,
> = {
  [K in keyof F | keyof S]: K extends keyof F
    ? K extends keyof S
      ? S[K]
      : F[K]
    : S[K]
}
