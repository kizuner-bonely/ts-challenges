type MyOmit<T extends Record<keyof any, any>, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
