type RequiredKeys<T extends Record<keyof any, any>> = keyof {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K]
}
