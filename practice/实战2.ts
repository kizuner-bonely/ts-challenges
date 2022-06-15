//* Promise
interface PromiseConstructor {
  all<T extends unknown[] | []>(
    values: T,
  ): Promise<{
    -readonly [P in keyof T]: Awaited<T[P]>
  }>

  race<T extends unknown[] | []>(values: T): Promise<Awaited<T[number]>>
}

declare const promise: PromiseConstructor

// Promise<[number, number, string]>
const allRes = promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve('3'),
])

// Promise<string | number>
const raceRes = promise.race([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve('3'),
])

type Test = [Promise<1>, Promise<2>][number]

//* 约束为 unknown[] | [] 就是 as const 的意思，数组会变成元组
declare function ttt<T extends readonly unknown[]>(values: T): T
const res = ttt([1, 2, 3]) // number[]

declare function ttt2<T extends readonly unknown[] | []>(values: T): T
const res2 = ttt2([1, 2, 3]) // [number, number, number]

//* 柯里化
type CurryFn<Params, Return> = Params extends [
  infer FirstParam,
  ...infer RestParams,
]
  ? (Arg: FirstParam) => CurryFn<RestParams, Return>
  : Return

declare function currying<F>(
  fn: F,
): F extends (...params: infer Params) => infer Return
  ? CurryFn<Params, Return>
  : never

const func = (_a: string, _b: number, _c: boolean) => {}
const curryingRes = currying(func)

export {}
