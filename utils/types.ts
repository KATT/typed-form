/**
 * Courtesey of a guy called Craig
 * @link https://dev.to/phenomnominal/i-need-to-learn-about-typescript-template-literal-types-51po
 */

export type Path<T, Key extends keyof T = keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ?
        | `${Key}.${Path<T[Key], Exclude<keyof T[Key], keyof Array<any>>> &
            string}`
        | `${Key}.${Exclude<keyof T[Key], keyof Array<any>> & string}`
        | Key
    : Key
  : never;

export type PathValue<
  T,
  P extends Path<T>
> = P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;

/**
 * Like `Path` but a bit more restrictive and only allows you to access leafs
 */
export type LeafPath<T, Key extends keyof T = keyof T> = Key extends string
  ? T[Key] extends Record<string, any>
    ?
        | `${Key}.${Path<T[Key], Exclude<keyof T[Key], keyof Array<any>>> &
            string}`
        | `${Key}.${Exclude<keyof T[Key], keyof Array<any>> & string}`
        | never
    : Key
  : never;
