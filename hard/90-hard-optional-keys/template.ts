type OptionalKeys<T extends Record<keyof any, any>> = keyof {
  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K]
}
