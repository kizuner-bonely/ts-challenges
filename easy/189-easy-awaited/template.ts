type MyAwaited<P extends null | undefined | Record<keyof any, any>> = P extends
  | null
  | undefined
  ? P
  : P extends object & {
      then(fulfilled: infer F): any
    }
  ? F extends (v: infer V, ...args: any[]) => any
    ? MyAwaited<V>
    : never
  : P
