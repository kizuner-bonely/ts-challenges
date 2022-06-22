type IsPalindrome<T extends string | number> = `${T}` extends `${infer S}`
  ? S extends ReverseStr<S>
    ? true
    : false
  : never
