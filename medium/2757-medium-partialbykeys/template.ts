type PartialByKeys<
  T extends Record<string, any>,
  K extends string = keyof T & string,
> = Copy<
  Partial<Pick<T, K & keyof T>> & {
    [Key in keyof T as Key extends K ? never : Key]: T[Key]
  }
>

type Copy<T> = {
  [K in keyof T]: T[K]
}
