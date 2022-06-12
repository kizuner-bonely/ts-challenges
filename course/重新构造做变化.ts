//* 重新构造数组
// 在数组后面添加一个元素
type Push<Arr extends unknown[], Ele> = [...Arr, Ele]
type PushResult = Push<[1, 2, 3], 4> // [1, 2, 3, 4]

// 在数组前面添加一个元素
type Unshift<Arr extends unknown[], Ele> = [Ele, ...Arr]
type UnshiftResult = Unshift<[1, 2, 3], 0> // [0, 1, 2, 3]

// 合并数组
type Zip<One extends unknown[], Other extends unknown[]> = One extends [
  infer OneFirst,
  infer OneSecond,
]
  ? Other extends [infer OtherFirst, infer OtherSecond]
    ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]
    : []
  : []
type ZipResult = Zip<[1, 2], ['Kizuna', 'AI']> // [[1, "Kizuna"], [2, "AI"]]

type Zip2<One extends unknown[], Other extends unknown[]> = One extends [
  infer OneFirst,
  ...infer OneRest,
]
  ? Other extends [infer OtherFirst, ...infer OtherRest]
    ? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>]
    : []
  : []
type Zip2Result = Zip2<[1, 2, 3], ['Kizuna', 'AI', 'love']> // [[1, "Kizuna"], [2, "AI"], [3, 'love']]

//* 重新构造字符串类型
// 首字母大写
type Capitalize<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : never
type CapitalizeResult = Capitalize<'kizuna AI'> // Kizuna AI

// 下划线转驼峰
type CamelCase<S extends string> =
  S extends `${infer First}_${infer Second}${infer Rest}`
    ? `${First}${Uppercase<Second>}${CamelCase<Rest>}`
    : S
type CamelCaseResult = CamelCase<'Kizuna_AI_and_love'> // KizunaAIAndLove

// 删除字符串的子串
type DropSubStr<
  S extends string,
  Drop extends string,
> = S extends `${infer Prefix}${Drop}${infer Suffix}`
  ? DropSubStr<`${Prefix}${Suffix}`, Drop>
  : S
type DropSubStrResult = DropSubStr<'Kizuna AI~~~~~', '~'> // KizunaAI

//* 重新构造函数类型
type AppendArgument<Fn extends Function, Arg extends any> = Fn extends (
  ...args: infer Args
) => infer ReturnType
  ? (...args: [...Args, Arg]) => ReturnType
  : never
type AppendArgumentResult = AppendArgument<(name: string) => boolean, number> // (args_0: string, args_1: number) => boolean

//* 构造索引类型
// 自定义对象映射
type Mapping<M extends Object> = {
  [Key in keyof M]: [M[Key], M[Key], M[Key]]
}
/**
 * {
 *   a: [1, 1, 1],
 *   b: [2, 2, 2]
 * }
 */
type MappingResult = Mapping<{ a: 1; b: 2 }>

// 重映射键名
type UppercaseKey<M extends Record<string, any>> = {
  [Key in keyof M as Uppercase<Key & string>]: M[Key]
}
/**
 * {
 *   KIZUNA: 1,
 *   AI: 2
 * }
 */
type UppercaseKeyResult = UppercaseKey<{ Kizuna: 1; ai: 2 }>

// 将索引全变成只读
type ToReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}
/**
 * {
 *   readonly Kizuna: 1,
 *   readonly AI: 2
 * }
 */
type ToReadonlyResult = ToReadonly<{ Kizuna: 1; AI: 2 }>

// 将索引变成可选
type ToPartial<T> = {
  [Key in keyof T]?: T[Key]
}
/**
 * {
 *   kizuna?: 1 | undefined,
 *   AI?: 2 | undefined
 * }
 */
type ToPartialResult = ToPartial<{ Kizuna: 1; AI: 2 }>

// 将只读索引变成可写索引
type ToMutable<T> = {
  -readonly [Key in keyof T]: T[Key]
}
/**
 * {
 *   Kizuna: 1,
 *   AI: 2
 * }
 */
type ToMutableResult = ToMutable<{ readonly Kizuna: 1; readonly AI: 2 }>

// 将可选的索引变成必须的索引
type ToRequired<T> = {
  [Key in keyof T]-?: T[Key]
}
/**
 * {
 *   Kizuna: 1,
 *   AI: 2
 * }
 */
type ToRequiredResult = ToRequired<{ Kizuna?: 1; AI?: 2 }>

// 根据值类型过滤索引类型
type FilterByValueType<O extends Record<string, any>, ValueType> = {
  [Key in keyof O as O[Key] extends ValueType ? Key : never]: O[Key]
}
/**
 * {
 *   Kizuna: 'Kizuna'
 *   AI: string
 * }
 */
type FilterByValueTypeResult = FilterByValueType<
  {
    Kizuna: 'Kizuna'
    AI: string
    aa: number
  },
  string | 'Kizuna'
>

export {}
