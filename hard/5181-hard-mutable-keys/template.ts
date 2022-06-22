type MutableKeys<T extends Record<keyof any, any>> = keyof {
  [K in keyof T as IsSame<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? never
    : K]: T[K]
}
