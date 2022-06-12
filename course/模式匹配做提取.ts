//* 通过 extends 和 infer 做模式匹配
type GetValueType<P> = P extends Promise<infer Value> ? Value : never
type GetValueResult = GetValueType<Promise<'KizunaAI'>> // KizunaAI
type GetValueResult2 = GetValueType<'HH'> // never

//* 数组提取模式匹配
// 提取数组第一项
type GetFirst<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]]
  ? First
  : never
type GetFirstResult = GetFirst<[1, 2, 3]> // 1
type GetFirstResult2 = GetFirst<[]> // never

// 提取数组最后一项
type GetLast<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
  ? Last
  : never
type GetLastResult = GetLast<[1, 2, 3]> // 3
type GetLastResult2 = GetFirst<[]> // never

// 提取数组除最后一项以外的所有元素
type PopArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [...infer Rest, unknown]
  ? Rest
  : never
type PopArrResult = PopArr<[1, 2, 3]> // [1, 2]
type PopArrResult2 = PopArr<[]> // []

// 提取数组除第一项以外的所有元素
type ShiftArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [unknown, ...infer Rest]
  ? Rest
  : never
type ShiftArrResult = ShiftArr<[1, 2, 3]> // [2, 3]
type ShiftArrResult2 = ShiftArr<[]> // []

//* 字符串类型提取
// 判断字符串是否以某字符串开头
type StartsWith<
  Str extends string,
  Prefix extends string,
> = Str extends `${Prefix}${string}` ? true : false
type StartsWithResult = StartsWith<'Kizuna AI', 'Kizuna'> // true
type StartsWithResult2 = StartsWith<'Kizuna AI', 'AI'> // false

// 替换字符串的内容
type ReplaceStr<
  Str extends string,
  sign extends string,
  Replacement extends string,
> = Str extends `${infer Prefix}${sign}${infer Suffix}`
  ? `${Prefix}${Replacement}${Suffix}`
  : Str
type ReplaceResult = ReplaceStr<'My favorite idol is ?', '?', 'Kizuna AI'> // My favorite idol is Kizuna AI
type ReplaceResult2 = ReplaceStr<'Kizuna AI', '?', 'Love'> // Kizuna AI

// 消除字符串两边空格
type TrimLeft<Str extends string> = Str extends `${
  | ' '
  | '\n'
  | '\t'}${infer Rest}`
  ? TrimLeft<Rest>
  : Str
type TrimLeftResult = TrimLeft<'          Kizuna AI'> // Kizuna AI

type TrimRight<Str extends string> = Str extends `${infer Rest}${
  | ' '
  | '\n'
  | '\t'}`
  ? TrimRight<Rest>
  : Str
type TrimRightResult = TrimRight<'Kizuna AI          '> // Kizuna AI

type Trim<Str extends string> = TrimLeft<TrimRight<Str>>
type TrimResult = Trim<'      Kizuna AI       '> // Kizuna AI

//* 函数匹配
// 获取函数参数
type GetParameters<Fn extends Function> = Fn extends (
  ...args: infer Args
) => unknown
  ? Args
  : never
type ParametersResult = GetParameters<(name: string, age: number) => string> // [name: string, age: number]
type ParametersResult2 = GetParameters<() => string> // []

// 获取函数返回值
type GetReturnType<Fn extends Function> = Fn extends (...args: any[]) => infer R
  ? R
  : never
type ReturnTypeResult = GetReturnType<() => 'Kizuna AI'> // Kizuna AI

// 检测对象方法的 this
class KizunaAI {
  name: string

  constructor() {
    this.name = 'Kizuna AI'
  }

  hello(this: KizunaAI) {
    return `hello, I\'m ${this.name}`
  }
}
const kizunaAI = new KizunaAI()
kizunaAI.hello()
// kizunaAI.hello.call({ xxx: 1 }) // error

type GetThisParameterType<Fn extends Function> = Fn extends (
  this: infer ThisType,
  ...args: any[]
) => unknown
  ? ThisType
  : unknown
type GetThisParameterTypeResult = GetThisParameterType<typeof kizunaAI.hello>

// 获取构造函数的实例类型
//! 这里参数和返回值一定要使用 any 而不能使用 unknown
type GetInstanceType<C extends new (...args: any[]) => any> = C extends new (
  ...args: any[]
) => infer InstanceType
  ? InstanceType
  : never

interface Person {
  name: string
}

interface PersonConstructor {
  new (name: string): Person
}

type GetInstanceTypeResult = GetInstanceType<PersonConstructor> // Person

// 获取构造函数的参数
type GetConstructorParameters<C extends new (...args: any[]) => any> =
  C extends new (...args: infer P) => any ? P : never

type GetConstructorParametersResult =
  GetConstructorParameters<PersonConstructor> // [name: string]

//* 索引类型
type GetRefProps<Props> = 'ref' extends keyof Props
  ? Props extends { ref?: infer Value }
    ? Value
    : never
  : never
type GetRefPropsRes = GetRefProps<{ ref?: 1; name: 'KizunaAI' }>
type GetRefPropsRes2 = GetRefProps<{ ref?: undefined; name: 'KizunaAI' }>

export {}
