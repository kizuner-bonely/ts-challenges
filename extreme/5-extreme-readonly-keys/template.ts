type GetReadonlyKeys<T extends Record<keyof any, any>> = keyof {
  [K in keyof T as IsSame<Pick<T, K>, Readonly<{ [P in K]: T[K] }>> extends true
    ? K
    : never]: T[K]
}
