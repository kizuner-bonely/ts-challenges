type GetRequired<T extends Record<keyof any, any>> = {
  [K in keyof T as {} extends Pick<T, K> ? never : K]: T[K]
}
