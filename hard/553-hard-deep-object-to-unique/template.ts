type DeepObjectToUniq<O extends object> = {
  [K in keyof O]: O[K] extends Record<keyof any, any>
    ? DeepObjectToUniq<O[K] & { _?: [O, K] }>
    : O[K]
}
