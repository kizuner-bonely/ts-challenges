// 如果只是处理字符串的第一个字符，可以把这一步提取出来，其他的需要用递归的放在递归的类型方法中

type KebabCase<S extends string> = CoverKebabCase<Uncapitalize<S>>

type CoverKebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? First extends Lowercase<First> | '-'
    ? `${First}${CoverKebabCase<Rest>}`
    : `-${Lowercase<First>}${CoverKebabCase<Rest>}`
  : S
