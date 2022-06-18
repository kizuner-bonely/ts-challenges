export type CamelCase<S extends string> =
  S extends `${infer Left}-${infer Right}`
    ? Right extends Capitalize<Right>
      ? `${Left}-${CamelCase<Right>}`
      : `${Left}${CamelCase<Capitalize<Right>>}`
    : S
