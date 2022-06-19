type OmitByType<T extends Record<keyof any, any>, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K]
}
