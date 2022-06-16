type MyReadonly2<
  T extends Record<keyof any, any>,
  K extends keyof T = keyof T, //! 如果没传入类型或传入错误类型使用 keyof T
> = Readonly<Pick<T, K>> & Omit<T, K>
