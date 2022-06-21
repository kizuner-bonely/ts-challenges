type Format<T extends string> = T extends `${string}%${infer A}${infer B}`
  ? A extends keyof NewControlsMap
    ? (x: NewControlsMap[A]) => Format<B>
    : Format<B>
  : string

type NewControlsMap = {
  s: string
  d: number
}
