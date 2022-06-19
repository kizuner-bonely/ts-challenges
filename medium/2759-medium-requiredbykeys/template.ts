type RequiredByKeys<
  T extends Record<keyof any, any>,
  K extends keyof any = keyof T,
> = Copy<Required<Pick<T, K & keyof T>> & Omit<T, K & keyof T>>
