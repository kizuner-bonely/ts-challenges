type LookUp<U extends LookUpType, T extends string> = U extends U
  ? T extends U['type']
    ? U
    : never
  : never

type LookUpType = { type: string }
