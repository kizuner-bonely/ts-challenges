enum Comparison {
  Greater,
  Equal,
  Lower,
}

type Comparator<
  A extends number,
  B extends number,
  SA extends string = `${A}`,
  SB extends string = `${B}`,
> = SA extends `-${infer AbA}`
  ? SB extends `-${infer AbB}`
    ? ComparatorRunner<AbB, AbA>
    : Comparison.Lower
  : SB extends `-${infer _AbB}`
  ? Comparison.Greater
  : ComparatorRunner<SA, SB>

type ComparatorRunner<
  A extends string,
  B extends string,
  C extends number[] = [],
> = A extends `${C['length']}`
  ? B extends `${C['length']}`
    ? Comparison.Equal
    : Comparison.Lower
  : B extends `${C['length']}`
  ? Comparison.Greater
  : ComparatorRunner<A, B, [...C, 0]>
