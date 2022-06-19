export type BEM<
  B extends string,
  E extends string[],
  M extends string[],
> = HasEle<E> extends true
  ? HasEle<M> extends true
    ? `${B}__${E[number]}--${M[number]}`
    : `${B}__${E[number]}`
  : HasEle<M> extends true
  ? `${B}--${M[number]}`
  : B

type HasEle<A extends any[]> = A['length'] extends 0 ? false : true
