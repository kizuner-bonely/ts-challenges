// ? 下面这个结果在第3个 case 结果为 boolean
// type IsRequiredKey<T, K extends keyof T> = K extends keyof GetRequired<T>
//   ? true
//   : false

type IsRequiredKey<T, K extends keyof T> = IsSame<
  Pick<T, K>,
  { [Key in K]-?: T[Key] } //* 原来为必选的去掉，可选的变成必选的
>
