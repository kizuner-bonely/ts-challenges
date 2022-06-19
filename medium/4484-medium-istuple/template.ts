type IsTuple<T> = T extends readonly [...params: infer Eles]
  ? NotEqual<Eles['length'], number>
  : false

type NotEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T,
>() => T extends B ? 1 : 2
  ? false
  : true
