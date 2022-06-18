// ? 这个没通过
// type AppendToObject<
//   T extends Record<keyof any, any>,
//   U extends keyof any,
//   V,
// > = { [K in U]: V } & T

type AppendToObject<
  T extends Record<keyof any, any>,
  U extends keyof any,
  V,
> = {
  [K in keyof T | U]: K extends U ? V : T[K]
}
