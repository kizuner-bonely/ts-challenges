type Copy<O extends Record<keyof any, any>> = {
  [K in keyof O]: O[K]
}

//* 函数重载
// 方法1
declare function fn1(name: string): string
declare function fn1(name: number): number

// 方法2
interface Func2 {
  (name: string): string
  (name: number): number
}
declare const fn2: Func2

// 方法3
type Func3 = ((name: string) => string) & ((name: number) => number)
declare const fn3: Func3

//* 联合转元祖
// 联合 -> 交叉 -> 函数交叉 -> 通过递归使用 ReturnType 逐步获取所有元素
type UnionToIntersection<U> = (
  U extends U ? (x: U) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never

type UnionToFunctionIntersection<T> = UnionToIntersection<
  T extends any ? () => T : never
>

type UnionToTuple<T> = UnionToFunctionIntersection<T> extends () => infer R
  ? [...UnionToTuple<Exclude<T, R>>, R]
  : []

type UnionToTupleRes = UnionToTuple<'kizunaAI' | 'love' | 'hh'>

//* 闭包函数
declare function join<Delimiter extends string>(
  d: Delimiter,
): <Words extends string[]>(...words: Words) => JoinType<Words, Delimiter>

type JoinType<
  W extends any[],
  D extends string,
  Res extends string = '',
> = W extends [infer First, ...infer Rest]
  ? JoinType<Rest, D, `${Res}${D}${First & string}`>
  : RemoveFirstDelimiter<Res, D>

type RemoveFirstDelimiter<
  S extends string,
  D extends string,
> = S extends `${D}${infer Rest}` ? Rest : S

const joinRes = join('-')('Kizuna', 'AI')

//* 对象深层驼峰
type Camelize<S extends string> =
  S extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${Camelize<Rest>}`
    : S

type CamelizeArr<Arr extends unknown[]> = Arr extends [
  infer First,
  ...infer Rest,
]
  ? [DeepCamelize<First>, ...CamelizeArr<Rest>]
  : []

type DeepCamelize<O extends Record<keyof any, any>> = O extends unknown[]
  ? CamelizeArr<O>
  : {
      [K in keyof O as Camelize<K & string>]: DeepCamelize<O[K]>
    }

type obj = {
  aaa_bbb: string
  bbb_ccc: [
    { ccc_ddd: string },
    {
      ddd_eee: string
      eee_fff: {
        fff_ggg: string
      }
    },
  ]
}

type DeepCamelizeRes = DeepCamelize<obj>

//* AB对象混合，A独有的属性为必选，B的属性为可选
type Defaultize<
  A extends Record<keyof any, any>,
  B extends Record<keyof any, any>,
> = Pick<A, Exclude<keyof A, keyof B>> & Partial<B>
// Omit<A, keyof B> & Partial<B>

type A = { aaa: 111; bbb: 222; ddd: 444 }
type B = { bbb: 222; ccc: 333 }

type DefaultizeRes = Copy<Defaultize<A, B>>

export {}
