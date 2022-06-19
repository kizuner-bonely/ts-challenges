type Flip<T extends Record<keyof any, any>> = {
  [K in keyof T as `${T[K]}`]: K
}
