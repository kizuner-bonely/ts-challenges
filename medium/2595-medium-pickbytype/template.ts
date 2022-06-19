type PickByType<T extends Record<keyof any, any>, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K]
}
