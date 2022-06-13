//* Promise 的递归复用
type DeepPromiseValueType<P extends Promise<unknown>> = P extends Promise<
  infer V
>
  ? V extends Promise<unknown>
    ? DeepPromiseValueType<V>
    : V
  : never

/**
 * {
 *   [x: string]: any
 * }
 */
type DeepPromiseResult = DeepPromiseValueType<
  Promise<Promise<Record<string, any>>>
>

type DeepPromiseValueType2<P> = P extends Promise<infer V>
  ? DeepPromiseValueType2<V>
  : P

/**
 * {
 *   [x: string]: any
 * }
 */
type DeepPromiseResult2 = DeepPromiseValueType2<
  Promise<Promise<Record<string, any>>>
>

//* 数组类型递归
// 翻转数组
type ReverseArr<Arr extends unknown[]> = Arr extends [
  infer First,
  ...infer Rest,
]
  ? [...ReverseArr<Rest>, First]
  : Arr

type ReverseArrResult = ReverseArr<[1, 2, 3, 4, 5]> // [5, 4, 3, 2, 1]

// 判断数组是否包含某元素
type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)

type Include<Arr extends unknown[], Ele> = Arr extends [
  infer First,
  ...infer Rest,
]
  ? IsEqual<First, Ele> extends true
    ? true
    : Include<Rest, Ele>
  : false

type IncludesResult = Include<[1, 2, 3], 4> // false
type IncludesResult2 = Include<[1, 2, 3], 3> // true

// 删除数组中的元素
type RemoveItem<Arr extends unknown[], Ele> = Arr extends [
  infer First,
  ...infer Rest,
]
  ? IsEqual<First, Ele> extends true
    ? RemoveItem<Rest, Ele>
    : [First, ...RemoveItem<Rest, Ele>]
  : Arr

type RemoveItemResult = RemoveItem<[1, 2, 2, 3], 2> // [1, 3]

type RemoveItem2<
  Arr extends unknown[],
  Ele,
  Result extends unknown[] = [],
> = Arr extends [infer First, ...infer Rest]
  ? IsEqual<First, Ele> extends true
    ? RemoveItem2<Rest, Ele, Result>
    : RemoveItem2<Rest, Ele, [...Result, First]>
  : Result

type RemoveItemResult2 = RemoveItem2<[1, 2, 2, 3], 2> // [1, 3]

// 创建数组
type BuildArr<
  Len extends number,
  Result extends unknown[] = [],
> = Result['length'] extends Len ? Result : BuildArr<Len, [...Result, unknown]>

type BuildArrResult = BuildArr<5> // [unknown, unknown, unknown, unknown, unknown]

//* 字符串类型递归
// 字符串全部替换
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
> = S extends `${infer Left}${From}${infer Right}`
  ? ReplaceAll<`${Left}${To}${Right}`, From, To>
  : S

type ReplaceAllResult = ReplaceAll<'Kizuna Kizuna Kizuna', 'Kizuna', 'AI'> // AI AI AI

// 字符串转联合
type StringToUnion<S extends string> = S extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : never

type StringToUnionResult = StringToUnion<'hello'> // 'h' | 'e' | 'l' | 'o'

// 翻转字符串
type ReverseStr<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${ReverseStr<Rest>}${First}`
  : S

type ReverseStrResult = ReverseStr<'hello'> // 'olleh'

//* 对象类型递归
type DeepReadonly<O extends Record<string, any>> = {
  readonly [Key in keyof O]: O[Key] extends object
    ? O[Key] extends Function
      ? O[Key]
      : DeepReadonly<O[Key]>
    : O[Key]
}

type obj = {
  a: {
    b: {
      c: {
        f: () => 'love'
        d: {
          e: {
            Kizuna: string
          }
        }
      }
    }
  }
}

type DeepReadonlyResult = DeepReadonly<obj>['a']
type DeepReadonlyResult2 = DeepReadonly<obj>['a']['b']['c']

export {}
