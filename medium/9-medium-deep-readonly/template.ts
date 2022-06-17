type DeepReadonly<T extends Record<keyof any, any>> = {
  readonly [K in keyof T]: T[K] extends Record<keyof any, any>
    ? T[K] extends Function
      ? T[K]
      : DeepReadonly<T[K]>
    : T[K]
}
