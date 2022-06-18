type RemoveIndexSignature<T extends Record<keyof any, any>> = {
  [K in keyof T as K extends `${infer Key}` ? Key : never]: T[K]
}
