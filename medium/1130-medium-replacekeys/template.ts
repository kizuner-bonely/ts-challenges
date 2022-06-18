type ReplaceKeys<
  U extends Record<keyof any, any>,
  T extends string,
  Y extends Record<keyof any, any>,
> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K]
}
