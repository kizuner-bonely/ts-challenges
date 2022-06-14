type BuildArr<
  Len extends number,
  Ele,
  Arr extends unknown[] = [],
> = Arr['length'] extends Len ? Arr : BuildArr<Len, Ele, [...Arr, Ele]>

//* 加法
type Add<A extends number, B extends number> = [
  ...BuildArr<A, unknown>,
  ...BuildArr<B, unknown>,
]['length']

type AddResult = Add<32, 25> // 57

//* 减法
type Subtract<A extends number, B extends number> = BuildArr<
  A,
  unknown
> extends [...BuildArr<B, unknown>, ...infer Rest]
  ? Rest['length']
  : never

type SubtractResult = Subtract<33, 12> // 45

//* 乘法
type Multiply<
  A extends number,
  B extends number,
  Res extends unknown[] = [],
> = B extends 0
  ? Res['length']
  : Multiply<A, Subtract<B, 1>, [...Res, ...BuildArr<A, unknown>]>

type MultiplyResult = Multiply<3, 222> // 666

//* 除法
type Divide<
  A extends number,
  B extends number,
  Res extends unknown[] = [],
> = A extends 0 ? Res['length'] : Divide<Subtract<A, B>, B, [...Res, unknown]>

type DivideResult = Divide<30, 5> // 6

//* 字符串长度计数
type StrLen<
  S extends string,
  Res extends unknown[] = [],
> = S extends `${infer First}${infer Rest}`
  ? StrLen<Rest, [...Res, unknown]>
  : Res['length']

type StrLenResult = StrLen<'Kizuna AI'> // 9

//* A 大于 B
type GreaterThan<
  A extends number,
  B extends number,
  Count extends unknown[] = [],
> = Count['length'] extends A
  ? false
  : Count['length'] extends B
  ? true
  : GreaterThan<A, B, [...Count, unknown]>

type GreaterThanResult1 = GreaterThan<3, 4> // false
type GreaterThanResult2 = GreaterThan<4, 3> // true

//* 斐波那契数列
type FibonacciLoop<
  Pre extends unknown[],
  Cur extends unknown[],
  Ind extends unknown[],
  Num extends number,
> = Ind['length'] extends Num
  ? Cur['length']
  : FibonacciLoop<Cur, [...Cur, ...Pre], [...Ind, unknown], Num>

type Fibonacci<Num extends number> = FibonacciLoop<[unknown], [], [], Num>

type FibonacciResult = Fibonacci<8> // 21
// num = 1
// [unknown] [] [] 1
// [] [unknown] 1 1

// num = 2
// [unknown] [] [] 0
// [] [unknown] [unknown] 1
// [unknown] [unknown] [unknown, unknown] 2

export {}
