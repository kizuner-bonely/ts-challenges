type GetOptional<T extends Record<keyof any, any>> = {
  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K]
}
