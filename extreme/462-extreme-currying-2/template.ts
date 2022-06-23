declare function DynamicParamsCurrying<F extends (...args: any) => any>(
  fn: F,
): CurriedType<ReturnType<F>, Parameters<F>>

type CurriedType<Ret, Params, Current = []> = Params extends [
  ...infer Rest,
  infer Last,
]
  ? Rest extends []
    ? Func<Params, Current extends [] ? Ret : CurriedType<Ret, Current>>
    : Func<Params, Current extends [] ? Ret : CurriedType<Ret, Current>> &
        CurriedType<
          Ret,
          Rest,
          [Last, ...(Current extends any[] ? Current : never)]
        >
  : never

type Func<Params, Ret> = (
  ...params: Params extends any[] ? Params : never
) => Ret
