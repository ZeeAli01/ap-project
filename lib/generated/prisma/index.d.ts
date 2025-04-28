
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model apikey
 * 
 */
export type apikey = $Result.DefaultSelection<Prisma.$apikeyPayload>
/**
 * Model auditlog
 * 
 */
export type auditlog = $Result.DefaultSelection<Prisma.$auditlogPayload>
/**
 * Model logo
 * 
 */
export type logo = $Result.DefaultSelection<Prisma.$logoPayload>
/**
 * Model url
 * 
 */
export type url = $Result.DefaultSelection<Prisma.$urlPayload>
/**
 * Model urlclick
 * 
 */
export type urlclick = $Result.DefaultSelection<Prisma.$urlclickPayload>
/**
 * Model urltag
 * 
 */
export type urltag = $Result.DefaultSelection<Prisma.$urltagPayload>
/**
 * Model userrole
 * 
 */
export type userrole = $Result.DefaultSelection<Prisma.$userrolePayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const statusenum: {
  active: 'active',
  inactive: 'inactive'
};

export type statusenum = (typeof statusenum)[keyof typeof statusenum]


export const urltypeenum: {
  store: 'store',
  product: 'product',
  misc: 'misc'
};

export type urltypeenum = (typeof urltypeenum)[keyof typeof urltypeenum]

}

export type statusenum = $Enums.statusenum

export const statusenum: typeof $Enums.statusenum

export type urltypeenum = $Enums.urltypeenum

export const urltypeenum: typeof $Enums.urltypeenum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Apikeys
 * const apikeys = await prisma.apikey.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Apikeys
   * const apikeys = await prisma.apikey.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.apikey`: Exposes CRUD operations for the **apikey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apikeys
    * const apikeys = await prisma.apikey.findMany()
    * ```
    */
  get apikey(): Prisma.apikeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditlog`: Exposes CRUD operations for the **auditlog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auditlogs
    * const auditlogs = await prisma.auditlog.findMany()
    * ```
    */
  get auditlog(): Prisma.auditlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logo`: Exposes CRUD operations for the **logo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logos
    * const logos = await prisma.logo.findMany()
    * ```
    */
  get logo(): Prisma.logoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.url`: Exposes CRUD operations for the **url** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urls
    * const urls = await prisma.url.findMany()
    * ```
    */
  get url(): Prisma.urlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.urlclick`: Exposes CRUD operations for the **urlclick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urlclicks
    * const urlclicks = await prisma.urlclick.findMany()
    * ```
    */
  get urlclick(): Prisma.urlclickDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.urltag`: Exposes CRUD operations for the **urltag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urltags
    * const urltags = await prisma.urltag.findMany()
    * ```
    */
  get urltag(): Prisma.urltagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userrole`: Exposes CRUD operations for the **userrole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Userroles
    * const userroles = await prisma.userrole.findMany()
    * ```
    */
  get userrole(): Prisma.userroleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    apikey: 'apikey',
    auditlog: 'auditlog',
    logo: 'logo',
    url: 'url',
    urlclick: 'urlclick',
    urltag: 'urltag',
    userrole: 'userrole',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "apikey" | "auditlog" | "logo" | "url" | "urlclick" | "urltag" | "userrole" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      apikey: {
        payload: Prisma.$apikeyPayload<ExtArgs>
        fields: Prisma.apikeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.apikeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.apikeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload>
          }
          findFirst: {
            args: Prisma.apikeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.apikeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload>
          }
          findMany: {
            args: Prisma.apikeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload>[]
          }
          create: {
            args: Prisma.apikeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload>
          }
          createMany: {
            args: Prisma.apikeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.apikeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload>[]
          }
          delete: {
            args: Prisma.apikeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload>
          }
          update: {
            args: Prisma.apikeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload>
          }
          deleteMany: {
            args: Prisma.apikeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.apikeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.apikeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload>[]
          }
          upsert: {
            args: Prisma.apikeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$apikeyPayload>
          }
          aggregate: {
            args: Prisma.ApikeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApikey>
          }
          groupBy: {
            args: Prisma.apikeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApikeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.apikeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApikeyCountAggregateOutputType> | number
          }
        }
      }
      auditlog: {
        payload: Prisma.$auditlogPayload<ExtArgs>
        fields: Prisma.auditlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auditlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auditlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload>
          }
          findFirst: {
            args: Prisma.auditlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auditlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload>
          }
          findMany: {
            args: Prisma.auditlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload>[]
          }
          create: {
            args: Prisma.auditlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload>
          }
          createMany: {
            args: Prisma.auditlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auditlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload>[]
          }
          delete: {
            args: Prisma.auditlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload>
          }
          update: {
            args: Prisma.auditlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload>
          }
          deleteMany: {
            args: Prisma.auditlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auditlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auditlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload>[]
          }
          upsert: {
            args: Prisma.auditlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auditlogPayload>
          }
          aggregate: {
            args: Prisma.AuditlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditlog>
          }
          groupBy: {
            args: Prisma.auditlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.auditlogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditlogCountAggregateOutputType> | number
          }
        }
      }
      logo: {
        payload: Prisma.$logoPayload<ExtArgs>
        fields: Prisma.logoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          findFirst: {
            args: Prisma.logoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          findMany: {
            args: Prisma.logoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>[]
          }
          create: {
            args: Prisma.logoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          createMany: {
            args: Prisma.logoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>[]
          }
          delete: {
            args: Prisma.logoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          update: {
            args: Prisma.logoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          deleteMany: {
            args: Prisma.logoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.logoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>[]
          }
          upsert: {
            args: Prisma.logoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logoPayload>
          }
          aggregate: {
            args: Prisma.LogoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogo>
          }
          groupBy: {
            args: Prisma.logoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogoGroupByOutputType>[]
          }
          count: {
            args: Prisma.logoCountArgs<ExtArgs>
            result: $Utils.Optional<LogoCountAggregateOutputType> | number
          }
        }
      }
      url: {
        payload: Prisma.$urlPayload<ExtArgs>
        fields: Prisma.urlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.urlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.urlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          findFirst: {
            args: Prisma.urlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.urlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          findMany: {
            args: Prisma.urlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>[]
          }
          create: {
            args: Prisma.urlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          createMany: {
            args: Prisma.urlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.urlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>[]
          }
          delete: {
            args: Prisma.urlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          update: {
            args: Prisma.urlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          deleteMany: {
            args: Prisma.urlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.urlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.urlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>[]
          }
          upsert: {
            args: Prisma.urlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlPayload>
          }
          aggregate: {
            args: Prisma.UrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrl>
          }
          groupBy: {
            args: Prisma.urlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.urlCountArgs<ExtArgs>
            result: $Utils.Optional<UrlCountAggregateOutputType> | number
          }
        }
      }
      urlclick: {
        payload: Prisma.$urlclickPayload<ExtArgs>
        fields: Prisma.urlclickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.urlclickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.urlclickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload>
          }
          findFirst: {
            args: Prisma.urlclickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.urlclickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload>
          }
          findMany: {
            args: Prisma.urlclickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload>[]
          }
          create: {
            args: Prisma.urlclickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload>
          }
          createMany: {
            args: Prisma.urlclickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.urlclickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload>[]
          }
          delete: {
            args: Prisma.urlclickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload>
          }
          update: {
            args: Prisma.urlclickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload>
          }
          deleteMany: {
            args: Prisma.urlclickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.urlclickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.urlclickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload>[]
          }
          upsert: {
            args: Prisma.urlclickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urlclickPayload>
          }
          aggregate: {
            args: Prisma.UrlclickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrlclick>
          }
          groupBy: {
            args: Prisma.urlclickGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrlclickGroupByOutputType>[]
          }
          count: {
            args: Prisma.urlclickCountArgs<ExtArgs>
            result: $Utils.Optional<UrlclickCountAggregateOutputType> | number
          }
        }
      }
      urltag: {
        payload: Prisma.$urltagPayload<ExtArgs>
        fields: Prisma.urltagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.urltagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.urltagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload>
          }
          findFirst: {
            args: Prisma.urltagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.urltagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload>
          }
          findMany: {
            args: Prisma.urltagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload>[]
          }
          create: {
            args: Prisma.urltagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload>
          }
          createMany: {
            args: Prisma.urltagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.urltagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload>[]
          }
          delete: {
            args: Prisma.urltagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload>
          }
          update: {
            args: Prisma.urltagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload>
          }
          deleteMany: {
            args: Prisma.urltagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.urltagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.urltagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload>[]
          }
          upsert: {
            args: Prisma.urltagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$urltagPayload>
          }
          aggregate: {
            args: Prisma.UrltagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrltag>
          }
          groupBy: {
            args: Prisma.urltagGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrltagGroupByOutputType>[]
          }
          count: {
            args: Prisma.urltagCountArgs<ExtArgs>
            result: $Utils.Optional<UrltagCountAggregateOutputType> | number
          }
        }
      }
      userrole: {
        payload: Prisma.$userrolePayload<ExtArgs>
        fields: Prisma.userroleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userroleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userroleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload>
          }
          findFirst: {
            args: Prisma.userroleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userroleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload>
          }
          findMany: {
            args: Prisma.userroleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload>[]
          }
          create: {
            args: Prisma.userroleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload>
          }
          createMany: {
            args: Prisma.userroleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userroleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload>[]
          }
          delete: {
            args: Prisma.userroleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload>
          }
          update: {
            args: Prisma.userroleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload>
          }
          deleteMany: {
            args: Prisma.userroleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userroleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userroleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload>[]
          }
          upsert: {
            args: Prisma.userroleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userrolePayload>
          }
          aggregate: {
            args: Prisma.UserroleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserrole>
          }
          groupBy: {
            args: Prisma.userroleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserroleGroupByOutputType>[]
          }
          count: {
            args: Prisma.userroleCountArgs<ExtArgs>
            result: $Utils.Optional<UserroleCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    apikey?: apikeyOmit
    auditlog?: auditlogOmit
    logo?: logoOmit
    url?: urlOmit
    urlclick?: urlclickOmit
    urltag?: urltagOmit
    userrole?: userroleOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LogoCountOutputType
   */

  export type LogoCountOutputType = {
    url: number
  }

  export type LogoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | LogoCountOutputTypeCountUrlArgs
  }

  // Custom InputTypes
  /**
   * LogoCountOutputType without action
   */
  export type LogoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogoCountOutputType
     */
    select?: LogoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LogoCountOutputType without action
   */
  export type LogoCountOutputTypeCountUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urlWhereInput
  }


  /**
   * Count Type UrlCountOutputType
   */

  export type UrlCountOutputType = {
    auditlog: number
    urlclick: number
  }

  export type UrlCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditlog?: boolean | UrlCountOutputTypeCountAuditlogArgs
    urlclick?: boolean | UrlCountOutputTypeCountUrlclickArgs
  }

  // Custom InputTypes
  /**
   * UrlCountOutputType without action
   */
  export type UrlCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlCountOutputType
     */
    select?: UrlCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UrlCountOutputType without action
   */
  export type UrlCountOutputTypeCountAuditlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditlogWhereInput
  }

  /**
   * UrlCountOutputType without action
   */
  export type UrlCountOutputTypeCountUrlclickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urlclickWhereInput
  }


  /**
   * Count Type UrltagCountOutputType
   */

  export type UrltagCountOutputType = {
    url: number
  }

  export type UrltagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | UrltagCountOutputTypeCountUrlArgs
  }

  // Custom InputTypes
  /**
   * UrltagCountOutputType without action
   */
  export type UrltagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrltagCountOutputType
     */
    select?: UrltagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UrltagCountOutputType without action
   */
  export type UrltagCountOutputTypeCountUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urlWhereInput
  }


  /**
   * Count Type UserroleCountOutputType
   */

  export type UserroleCountOutputType = {
    users: number
  }

  export type UserroleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserroleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserroleCountOutputType without action
   */
  export type UserroleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserroleCountOutputType
     */
    select?: UserroleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserroleCountOutputType without action
   */
  export type UserroleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    apikey: number
    auditlog: number
    logo: number
    url: number
    urltag: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apikey?: boolean | UsersCountOutputTypeCountApikeyArgs
    auditlog?: boolean | UsersCountOutputTypeCountAuditlogArgs
    logo?: boolean | UsersCountOutputTypeCountLogoArgs
    url?: boolean | UsersCountOutputTypeCountUrlArgs
    urltag?: boolean | UsersCountOutputTypeCountUrltagArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountApikeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apikeyWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAuditlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditlogWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLogoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logoWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUrlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urlWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUrltagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urltagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model apikey
   */

  export type AggregateApikey = {
    _count: ApikeyCountAggregateOutputType | null
    _avg: ApikeyAvgAggregateOutputType | null
    _sum: ApikeySumAggregateOutputType | null
    _min: ApikeyMinAggregateOutputType | null
    _max: ApikeyMaxAggregateOutputType | null
  }

  export type ApikeyAvgAggregateOutputType = {
    api_key_id: number | null
  }

  export type ApikeySumAggregateOutputType = {
    api_key_id: number | null
  }

  export type ApikeyMinAggregateOutputType = {
    api_key_id: number | null
    user_id: string | null
    api_key: string | null
    created_at: Date | null
    expires_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type ApikeyMaxAggregateOutputType = {
    api_key_id: number | null
    user_id: string | null
    api_key: string | null
    created_at: Date | null
    expires_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type ApikeyCountAggregateOutputType = {
    api_key_id: number
    user_id: number
    api_key: number
    created_at: number
    expires_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type ApikeyAvgAggregateInputType = {
    api_key_id?: true
  }

  export type ApikeySumAggregateInputType = {
    api_key_id?: true
  }

  export type ApikeyMinAggregateInputType = {
    api_key_id?: true
    user_id?: true
    api_key?: true
    created_at?: true
    expires_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type ApikeyMaxAggregateInputType = {
    api_key_id?: true
    user_id?: true
    api_key?: true
    created_at?: true
    expires_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type ApikeyCountAggregateInputType = {
    api_key_id?: true
    user_id?: true
    api_key?: true
    created_at?: true
    expires_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type ApikeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apikey to aggregate.
     */
    where?: apikeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apikeys to fetch.
     */
    orderBy?: apikeyOrderByWithRelationInput | apikeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: apikeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apikeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apikeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned apikeys
    **/
    _count?: true | ApikeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApikeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApikeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApikeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApikeyMaxAggregateInputType
  }

  export type GetApikeyAggregateType<T extends ApikeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApikey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApikey[P]>
      : GetScalarType<T[P], AggregateApikey[P]>
  }




  export type apikeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: apikeyWhereInput
    orderBy?: apikeyOrderByWithAggregationInput | apikeyOrderByWithAggregationInput[]
    by: ApikeyScalarFieldEnum[] | ApikeyScalarFieldEnum
    having?: apikeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApikeyCountAggregateInputType | true
    _avg?: ApikeyAvgAggregateInputType
    _sum?: ApikeySumAggregateInputType
    _min?: ApikeyMinAggregateInputType
    _max?: ApikeyMaxAggregateInputType
  }

  export type ApikeyGroupByOutputType = {
    api_key_id: number
    user_id: string
    api_key: string
    created_at: Date
    expires_at: Date | null
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: ApikeyCountAggregateOutputType | null
    _avg: ApikeyAvgAggregateOutputType | null
    _sum: ApikeySumAggregateOutputType | null
    _min: ApikeyMinAggregateOutputType | null
    _max: ApikeyMaxAggregateOutputType | null
  }

  type GetApikeyGroupByPayload<T extends apikeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApikeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApikeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApikeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApikeyGroupByOutputType[P]>
        }
      >
    >


  export type apikeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    api_key_id?: boolean
    user_id?: boolean
    api_key?: boolean
    created_at?: boolean
    expires_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apikey"]>

  export type apikeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    api_key_id?: boolean
    user_id?: boolean
    api_key?: boolean
    created_at?: boolean
    expires_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apikey"]>

  export type apikeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    api_key_id?: boolean
    user_id?: boolean
    api_key?: boolean
    created_at?: boolean
    expires_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apikey"]>

  export type apikeySelectScalar = {
    api_key_id?: boolean
    user_id?: boolean
    api_key?: boolean
    created_at?: boolean
    expires_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type apikeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"api_key_id" | "user_id" | "api_key" | "created_at" | "expires_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["apikey"]>
  export type apikeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type apikeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type apikeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $apikeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "apikey"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      api_key_id: number
      user_id: string
      api_key: string
      created_at: Date
      expires_at: Date | null
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["apikey"]>
    composites: {}
  }

  type apikeyGetPayload<S extends boolean | null | undefined | apikeyDefaultArgs> = $Result.GetResult<Prisma.$apikeyPayload, S>

  type apikeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<apikeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApikeyCountAggregateInputType | true
    }

  export interface apikeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['apikey'], meta: { name: 'apikey' } }
    /**
     * Find zero or one Apikey that matches the filter.
     * @param {apikeyFindUniqueArgs} args - Arguments to find a Apikey
     * @example
     * // Get one Apikey
     * const apikey = await prisma.apikey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends apikeyFindUniqueArgs>(args: SelectSubset<T, apikeyFindUniqueArgs<ExtArgs>>): Prisma__apikeyClient<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Apikey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {apikeyFindUniqueOrThrowArgs} args - Arguments to find a Apikey
     * @example
     * // Get one Apikey
     * const apikey = await prisma.apikey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends apikeyFindUniqueOrThrowArgs>(args: SelectSubset<T, apikeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__apikeyClient<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apikey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apikeyFindFirstArgs} args - Arguments to find a Apikey
     * @example
     * // Get one Apikey
     * const apikey = await prisma.apikey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends apikeyFindFirstArgs>(args?: SelectSubset<T, apikeyFindFirstArgs<ExtArgs>>): Prisma__apikeyClient<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Apikey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apikeyFindFirstOrThrowArgs} args - Arguments to find a Apikey
     * @example
     * // Get one Apikey
     * const apikey = await prisma.apikey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends apikeyFindFirstOrThrowArgs>(args?: SelectSubset<T, apikeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__apikeyClient<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apikeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apikeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apikeys
     * const apikeys = await prisma.apikey.findMany()
     * 
     * // Get first 10 Apikeys
     * const apikeys = await prisma.apikey.findMany({ take: 10 })
     * 
     * // Only select the `api_key_id`
     * const apikeyWithApi_key_idOnly = await prisma.apikey.findMany({ select: { api_key_id: true } })
     * 
     */
    findMany<T extends apikeyFindManyArgs>(args?: SelectSubset<T, apikeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Apikey.
     * @param {apikeyCreateArgs} args - Arguments to create a Apikey.
     * @example
     * // Create one Apikey
     * const Apikey = await prisma.apikey.create({
     *   data: {
     *     // ... data to create a Apikey
     *   }
     * })
     * 
     */
    create<T extends apikeyCreateArgs>(args: SelectSubset<T, apikeyCreateArgs<ExtArgs>>): Prisma__apikeyClient<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apikeys.
     * @param {apikeyCreateManyArgs} args - Arguments to create many Apikeys.
     * @example
     * // Create many Apikeys
     * const apikey = await prisma.apikey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends apikeyCreateManyArgs>(args?: SelectSubset<T, apikeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apikeys and returns the data saved in the database.
     * @param {apikeyCreateManyAndReturnArgs} args - Arguments to create many Apikeys.
     * @example
     * // Create many Apikeys
     * const apikey = await prisma.apikey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apikeys and only return the `api_key_id`
     * const apikeyWithApi_key_idOnly = await prisma.apikey.createManyAndReturn({
     *   select: { api_key_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends apikeyCreateManyAndReturnArgs>(args?: SelectSubset<T, apikeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Apikey.
     * @param {apikeyDeleteArgs} args - Arguments to delete one Apikey.
     * @example
     * // Delete one Apikey
     * const Apikey = await prisma.apikey.delete({
     *   where: {
     *     // ... filter to delete one Apikey
     *   }
     * })
     * 
     */
    delete<T extends apikeyDeleteArgs>(args: SelectSubset<T, apikeyDeleteArgs<ExtArgs>>): Prisma__apikeyClient<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Apikey.
     * @param {apikeyUpdateArgs} args - Arguments to update one Apikey.
     * @example
     * // Update one Apikey
     * const apikey = await prisma.apikey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends apikeyUpdateArgs>(args: SelectSubset<T, apikeyUpdateArgs<ExtArgs>>): Prisma__apikeyClient<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apikeys.
     * @param {apikeyDeleteManyArgs} args - Arguments to filter Apikeys to delete.
     * @example
     * // Delete a few Apikeys
     * const { count } = await prisma.apikey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends apikeyDeleteManyArgs>(args?: SelectSubset<T, apikeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apikeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apikeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apikeys
     * const apikey = await prisma.apikey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends apikeyUpdateManyArgs>(args: SelectSubset<T, apikeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apikeys and returns the data updated in the database.
     * @param {apikeyUpdateManyAndReturnArgs} args - Arguments to update many Apikeys.
     * @example
     * // Update many Apikeys
     * const apikey = await prisma.apikey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apikeys and only return the `api_key_id`
     * const apikeyWithApi_key_idOnly = await prisma.apikey.updateManyAndReturn({
     *   select: { api_key_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends apikeyUpdateManyAndReturnArgs>(args: SelectSubset<T, apikeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Apikey.
     * @param {apikeyUpsertArgs} args - Arguments to update or create a Apikey.
     * @example
     * // Update or create a Apikey
     * const apikey = await prisma.apikey.upsert({
     *   create: {
     *     // ... data to create a Apikey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Apikey we want to update
     *   }
     * })
     */
    upsert<T extends apikeyUpsertArgs>(args: SelectSubset<T, apikeyUpsertArgs<ExtArgs>>): Prisma__apikeyClient<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apikeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apikeyCountArgs} args - Arguments to filter Apikeys to count.
     * @example
     * // Count the number of Apikeys
     * const count = await prisma.apikey.count({
     *   where: {
     *     // ... the filter for the Apikeys we want to count
     *   }
     * })
    **/
    count<T extends apikeyCountArgs>(
      args?: Subset<T, apikeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApikeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Apikey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApikeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApikeyAggregateArgs>(args: Subset<T, ApikeyAggregateArgs>): Prisma.PrismaPromise<GetApikeyAggregateType<T>>

    /**
     * Group by Apikey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {apikeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends apikeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: apikeyGroupByArgs['orderBy'] }
        : { orderBy?: apikeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, apikeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApikeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the apikey model
   */
  readonly fields: apikeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for apikey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__apikeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the apikey model
   */
  interface apikeyFieldRefs {
    readonly api_key_id: FieldRef<"apikey", 'Int'>
    readonly user_id: FieldRef<"apikey", 'String'>
    readonly api_key: FieldRef<"apikey", 'String'>
    readonly created_at: FieldRef<"apikey", 'DateTime'>
    readonly expires_at: FieldRef<"apikey", 'DateTime'>
    readonly updated_at: FieldRef<"apikey", 'DateTime'>
    readonly deleted_at: FieldRef<"apikey", 'DateTime'>
    readonly is_deleted: FieldRef<"apikey", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * apikey findUnique
   */
  export type apikeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
    /**
     * Filter, which apikey to fetch.
     */
    where: apikeyWhereUniqueInput
  }

  /**
   * apikey findUniqueOrThrow
   */
  export type apikeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
    /**
     * Filter, which apikey to fetch.
     */
    where: apikeyWhereUniqueInput
  }

  /**
   * apikey findFirst
   */
  export type apikeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
    /**
     * Filter, which apikey to fetch.
     */
    where?: apikeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apikeys to fetch.
     */
    orderBy?: apikeyOrderByWithRelationInput | apikeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apikeys.
     */
    cursor?: apikeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apikeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apikeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apikeys.
     */
    distinct?: ApikeyScalarFieldEnum | ApikeyScalarFieldEnum[]
  }

  /**
   * apikey findFirstOrThrow
   */
  export type apikeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
    /**
     * Filter, which apikey to fetch.
     */
    where?: apikeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apikeys to fetch.
     */
    orderBy?: apikeyOrderByWithRelationInput | apikeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for apikeys.
     */
    cursor?: apikeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apikeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apikeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of apikeys.
     */
    distinct?: ApikeyScalarFieldEnum | ApikeyScalarFieldEnum[]
  }

  /**
   * apikey findMany
   */
  export type apikeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
    /**
     * Filter, which apikeys to fetch.
     */
    where?: apikeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of apikeys to fetch.
     */
    orderBy?: apikeyOrderByWithRelationInput | apikeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing apikeys.
     */
    cursor?: apikeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` apikeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` apikeys.
     */
    skip?: number
    distinct?: ApikeyScalarFieldEnum | ApikeyScalarFieldEnum[]
  }

  /**
   * apikey create
   */
  export type apikeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
    /**
     * The data needed to create a apikey.
     */
    data: XOR<apikeyCreateInput, apikeyUncheckedCreateInput>
  }

  /**
   * apikey createMany
   */
  export type apikeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many apikeys.
     */
    data: apikeyCreateManyInput | apikeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * apikey createManyAndReturn
   */
  export type apikeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * The data used to create many apikeys.
     */
    data: apikeyCreateManyInput | apikeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * apikey update
   */
  export type apikeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
    /**
     * The data needed to update a apikey.
     */
    data: XOR<apikeyUpdateInput, apikeyUncheckedUpdateInput>
    /**
     * Choose, which apikey to update.
     */
    where: apikeyWhereUniqueInput
  }

  /**
   * apikey updateMany
   */
  export type apikeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update apikeys.
     */
    data: XOR<apikeyUpdateManyMutationInput, apikeyUncheckedUpdateManyInput>
    /**
     * Filter which apikeys to update
     */
    where?: apikeyWhereInput
    /**
     * Limit how many apikeys to update.
     */
    limit?: number
  }

  /**
   * apikey updateManyAndReturn
   */
  export type apikeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * The data used to update apikeys.
     */
    data: XOR<apikeyUpdateManyMutationInput, apikeyUncheckedUpdateManyInput>
    /**
     * Filter which apikeys to update
     */
    where?: apikeyWhereInput
    /**
     * Limit how many apikeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * apikey upsert
   */
  export type apikeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
    /**
     * The filter to search for the apikey to update in case it exists.
     */
    where: apikeyWhereUniqueInput
    /**
     * In case the apikey found by the `where` argument doesn't exist, create a new apikey with this data.
     */
    create: XOR<apikeyCreateInput, apikeyUncheckedCreateInput>
    /**
     * In case the apikey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<apikeyUpdateInput, apikeyUncheckedUpdateInput>
  }

  /**
   * apikey delete
   */
  export type apikeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
    /**
     * Filter which apikey to delete.
     */
    where: apikeyWhereUniqueInput
  }

  /**
   * apikey deleteMany
   */
  export type apikeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which apikeys to delete
     */
    where?: apikeyWhereInput
    /**
     * Limit how many apikeys to delete.
     */
    limit?: number
  }

  /**
   * apikey without action
   */
  export type apikeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
  }


  /**
   * Model auditlog
   */

  export type AggregateAuditlog = {
    _count: AuditlogCountAggregateOutputType | null
    _avg: AuditlogAvgAggregateOutputType | null
    _sum: AuditlogSumAggregateOutputType | null
    _min: AuditlogMinAggregateOutputType | null
    _max: AuditlogMaxAggregateOutputType | null
  }

  export type AuditlogAvgAggregateOutputType = {
    audit_id: number | null
  }

  export type AuditlogSumAggregateOutputType = {
    audit_id: number | null
  }

  export type AuditlogMinAggregateOutputType = {
    audit_id: number | null
    url_id: string | null
    action: string | null
    changed_by: string | null
    change_date: Date | null
    details: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type AuditlogMaxAggregateOutputType = {
    audit_id: number | null
    url_id: string | null
    action: string | null
    changed_by: string | null
    change_date: Date | null
    details: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type AuditlogCountAggregateOutputType = {
    audit_id: number
    url_id: number
    action: number
    changed_by: number
    change_date: number
    details: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type AuditlogAvgAggregateInputType = {
    audit_id?: true
  }

  export type AuditlogSumAggregateInputType = {
    audit_id?: true
  }

  export type AuditlogMinAggregateInputType = {
    audit_id?: true
    url_id?: true
    action?: true
    changed_by?: true
    change_date?: true
    details?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type AuditlogMaxAggregateInputType = {
    audit_id?: true
    url_id?: true
    action?: true
    changed_by?: true
    change_date?: true
    details?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type AuditlogCountAggregateInputType = {
    audit_id?: true
    url_id?: true
    action?: true
    changed_by?: true
    change_date?: true
    details?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type AuditlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auditlog to aggregate.
     */
    where?: auditlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditlogs to fetch.
     */
    orderBy?: auditlogOrderByWithRelationInput | auditlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auditlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auditlogs
    **/
    _count?: true | AuditlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditlogMaxAggregateInputType
  }

  export type GetAuditlogAggregateType<T extends AuditlogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditlog[P]>
      : GetScalarType<T[P], AggregateAuditlog[P]>
  }




  export type auditlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auditlogWhereInput
    orderBy?: auditlogOrderByWithAggregationInput | auditlogOrderByWithAggregationInput[]
    by: AuditlogScalarFieldEnum[] | AuditlogScalarFieldEnum
    having?: auditlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditlogCountAggregateInputType | true
    _avg?: AuditlogAvgAggregateInputType
    _sum?: AuditlogSumAggregateInputType
    _min?: AuditlogMinAggregateInputType
    _max?: AuditlogMaxAggregateInputType
  }

  export type AuditlogGroupByOutputType = {
    audit_id: number
    url_id: string
    action: string
    changed_by: string
    change_date: Date
    details: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: AuditlogCountAggregateOutputType | null
    _avg: AuditlogAvgAggregateOutputType | null
    _sum: AuditlogSumAggregateOutputType | null
    _min: AuditlogMinAggregateOutputType | null
    _max: AuditlogMaxAggregateOutputType | null
  }

  type GetAuditlogGroupByPayload<T extends auditlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditlogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditlogGroupByOutputType[P]>
        }
      >
    >


  export type auditlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    audit_id?: boolean
    url_id?: boolean
    action?: boolean
    changed_by?: boolean
    change_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditlog"]>

  export type auditlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    audit_id?: boolean
    url_id?: boolean
    action?: boolean
    changed_by?: boolean
    change_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditlog"]>

  export type auditlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    audit_id?: boolean
    url_id?: boolean
    action?: boolean
    changed_by?: boolean
    change_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditlog"]>

  export type auditlogSelectScalar = {
    audit_id?: boolean
    url_id?: boolean
    action?: boolean
    changed_by?: boolean
    change_date?: boolean
    details?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type auditlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"audit_id" | "url_id" | "action" | "changed_by" | "change_date" | "details" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["auditlog"]>
  export type auditlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }
  export type auditlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }
  export type auditlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    url?: boolean | urlDefaultArgs<ExtArgs>
  }

  export type $auditlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auditlog"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      url: Prisma.$urlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      audit_id: number
      url_id: string
      action: string
      changed_by: string
      change_date: Date
      details: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["auditlog"]>
    composites: {}
  }

  type auditlogGetPayload<S extends boolean | null | undefined | auditlogDefaultArgs> = $Result.GetResult<Prisma.$auditlogPayload, S>

  type auditlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auditlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditlogCountAggregateInputType | true
    }

  export interface auditlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auditlog'], meta: { name: 'auditlog' } }
    /**
     * Find zero or one Auditlog that matches the filter.
     * @param {auditlogFindUniqueArgs} args - Arguments to find a Auditlog
     * @example
     * // Get one Auditlog
     * const auditlog = await prisma.auditlog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auditlogFindUniqueArgs>(args: SelectSubset<T, auditlogFindUniqueArgs<ExtArgs>>): Prisma__auditlogClient<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auditlog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auditlogFindUniqueOrThrowArgs} args - Arguments to find a Auditlog
     * @example
     * // Get one Auditlog
     * const auditlog = await prisma.auditlog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auditlogFindUniqueOrThrowArgs>(args: SelectSubset<T, auditlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auditlogClient<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditlog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditlogFindFirstArgs} args - Arguments to find a Auditlog
     * @example
     * // Get one Auditlog
     * const auditlog = await prisma.auditlog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auditlogFindFirstArgs>(args?: SelectSubset<T, auditlogFindFirstArgs<ExtArgs>>): Prisma__auditlogClient<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auditlog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditlogFindFirstOrThrowArgs} args - Arguments to find a Auditlog
     * @example
     * // Get one Auditlog
     * const auditlog = await prisma.auditlog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auditlogFindFirstOrThrowArgs>(args?: SelectSubset<T, auditlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__auditlogClient<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auditlogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auditlogs
     * const auditlogs = await prisma.auditlog.findMany()
     * 
     * // Get first 10 Auditlogs
     * const auditlogs = await prisma.auditlog.findMany({ take: 10 })
     * 
     * // Only select the `audit_id`
     * const auditlogWithAudit_idOnly = await prisma.auditlog.findMany({ select: { audit_id: true } })
     * 
     */
    findMany<T extends auditlogFindManyArgs>(args?: SelectSubset<T, auditlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auditlog.
     * @param {auditlogCreateArgs} args - Arguments to create a Auditlog.
     * @example
     * // Create one Auditlog
     * const Auditlog = await prisma.auditlog.create({
     *   data: {
     *     // ... data to create a Auditlog
     *   }
     * })
     * 
     */
    create<T extends auditlogCreateArgs>(args: SelectSubset<T, auditlogCreateArgs<ExtArgs>>): Prisma__auditlogClient<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auditlogs.
     * @param {auditlogCreateManyArgs} args - Arguments to create many Auditlogs.
     * @example
     * // Create many Auditlogs
     * const auditlog = await prisma.auditlog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auditlogCreateManyArgs>(args?: SelectSubset<T, auditlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auditlogs and returns the data saved in the database.
     * @param {auditlogCreateManyAndReturnArgs} args - Arguments to create many Auditlogs.
     * @example
     * // Create many Auditlogs
     * const auditlog = await prisma.auditlog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auditlogs and only return the `audit_id`
     * const auditlogWithAudit_idOnly = await prisma.auditlog.createManyAndReturn({
     *   select: { audit_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auditlogCreateManyAndReturnArgs>(args?: SelectSubset<T, auditlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auditlog.
     * @param {auditlogDeleteArgs} args - Arguments to delete one Auditlog.
     * @example
     * // Delete one Auditlog
     * const Auditlog = await prisma.auditlog.delete({
     *   where: {
     *     // ... filter to delete one Auditlog
     *   }
     * })
     * 
     */
    delete<T extends auditlogDeleteArgs>(args: SelectSubset<T, auditlogDeleteArgs<ExtArgs>>): Prisma__auditlogClient<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auditlog.
     * @param {auditlogUpdateArgs} args - Arguments to update one Auditlog.
     * @example
     * // Update one Auditlog
     * const auditlog = await prisma.auditlog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auditlogUpdateArgs>(args: SelectSubset<T, auditlogUpdateArgs<ExtArgs>>): Prisma__auditlogClient<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auditlogs.
     * @param {auditlogDeleteManyArgs} args - Arguments to filter Auditlogs to delete.
     * @example
     * // Delete a few Auditlogs
     * const { count } = await prisma.auditlog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auditlogDeleteManyArgs>(args?: SelectSubset<T, auditlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auditlogs
     * const auditlog = await prisma.auditlog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auditlogUpdateManyArgs>(args: SelectSubset<T, auditlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auditlogs and returns the data updated in the database.
     * @param {auditlogUpdateManyAndReturnArgs} args - Arguments to update many Auditlogs.
     * @example
     * // Update many Auditlogs
     * const auditlog = await prisma.auditlog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auditlogs and only return the `audit_id`
     * const auditlogWithAudit_idOnly = await prisma.auditlog.updateManyAndReturn({
     *   select: { audit_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends auditlogUpdateManyAndReturnArgs>(args: SelectSubset<T, auditlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auditlog.
     * @param {auditlogUpsertArgs} args - Arguments to update or create a Auditlog.
     * @example
     * // Update or create a Auditlog
     * const auditlog = await prisma.auditlog.upsert({
     *   create: {
     *     // ... data to create a Auditlog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auditlog we want to update
     *   }
     * })
     */
    upsert<T extends auditlogUpsertArgs>(args: SelectSubset<T, auditlogUpsertArgs<ExtArgs>>): Prisma__auditlogClient<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auditlogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditlogCountArgs} args - Arguments to filter Auditlogs to count.
     * @example
     * // Count the number of Auditlogs
     * const count = await prisma.auditlog.count({
     *   where: {
     *     // ... the filter for the Auditlogs we want to count
     *   }
     * })
    **/
    count<T extends auditlogCountArgs>(
      args?: Subset<T, auditlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auditlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditlogAggregateArgs>(args: Subset<T, AuditlogAggregateArgs>): Prisma.PrismaPromise<GetAuditlogAggregateType<T>>

    /**
     * Group by Auditlog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auditlogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auditlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auditlogGroupByArgs['orderBy'] }
        : { orderBy?: auditlogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auditlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auditlog model
   */
  readonly fields: auditlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auditlog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auditlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    url<T extends urlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, urlDefaultArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auditlog model
   */
  interface auditlogFieldRefs {
    readonly audit_id: FieldRef<"auditlog", 'Int'>
    readonly url_id: FieldRef<"auditlog", 'String'>
    readonly action: FieldRef<"auditlog", 'String'>
    readonly changed_by: FieldRef<"auditlog", 'String'>
    readonly change_date: FieldRef<"auditlog", 'DateTime'>
    readonly details: FieldRef<"auditlog", 'String'>
    readonly created_at: FieldRef<"auditlog", 'DateTime'>
    readonly updated_at: FieldRef<"auditlog", 'DateTime'>
    readonly deleted_at: FieldRef<"auditlog", 'DateTime'>
    readonly is_deleted: FieldRef<"auditlog", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * auditlog findUnique
   */
  export type auditlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    /**
     * Filter, which auditlog to fetch.
     */
    where: auditlogWhereUniqueInput
  }

  /**
   * auditlog findUniqueOrThrow
   */
  export type auditlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    /**
     * Filter, which auditlog to fetch.
     */
    where: auditlogWhereUniqueInput
  }

  /**
   * auditlog findFirst
   */
  export type auditlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    /**
     * Filter, which auditlog to fetch.
     */
    where?: auditlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditlogs to fetch.
     */
    orderBy?: auditlogOrderByWithRelationInput | auditlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auditlogs.
     */
    cursor?: auditlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auditlogs.
     */
    distinct?: AuditlogScalarFieldEnum | AuditlogScalarFieldEnum[]
  }

  /**
   * auditlog findFirstOrThrow
   */
  export type auditlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    /**
     * Filter, which auditlog to fetch.
     */
    where?: auditlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditlogs to fetch.
     */
    orderBy?: auditlogOrderByWithRelationInput | auditlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auditlogs.
     */
    cursor?: auditlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditlogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auditlogs.
     */
    distinct?: AuditlogScalarFieldEnum | AuditlogScalarFieldEnum[]
  }

  /**
   * auditlog findMany
   */
  export type auditlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    /**
     * Filter, which auditlogs to fetch.
     */
    where?: auditlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auditlogs to fetch.
     */
    orderBy?: auditlogOrderByWithRelationInput | auditlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auditlogs.
     */
    cursor?: auditlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auditlogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auditlogs.
     */
    skip?: number
    distinct?: AuditlogScalarFieldEnum | AuditlogScalarFieldEnum[]
  }

  /**
   * auditlog create
   */
  export type auditlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    /**
     * The data needed to create a auditlog.
     */
    data: XOR<auditlogCreateInput, auditlogUncheckedCreateInput>
  }

  /**
   * auditlog createMany
   */
  export type auditlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auditlogs.
     */
    data: auditlogCreateManyInput | auditlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * auditlog createManyAndReturn
   */
  export type auditlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * The data used to create many auditlogs.
     */
    data: auditlogCreateManyInput | auditlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * auditlog update
   */
  export type auditlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    /**
     * The data needed to update a auditlog.
     */
    data: XOR<auditlogUpdateInput, auditlogUncheckedUpdateInput>
    /**
     * Choose, which auditlog to update.
     */
    where: auditlogWhereUniqueInput
  }

  /**
   * auditlog updateMany
   */
  export type auditlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auditlogs.
     */
    data: XOR<auditlogUpdateManyMutationInput, auditlogUncheckedUpdateManyInput>
    /**
     * Filter which auditlogs to update
     */
    where?: auditlogWhereInput
    /**
     * Limit how many auditlogs to update.
     */
    limit?: number
  }

  /**
   * auditlog updateManyAndReturn
   */
  export type auditlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * The data used to update auditlogs.
     */
    data: XOR<auditlogUpdateManyMutationInput, auditlogUncheckedUpdateManyInput>
    /**
     * Filter which auditlogs to update
     */
    where?: auditlogWhereInput
    /**
     * Limit how many auditlogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * auditlog upsert
   */
  export type auditlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    /**
     * The filter to search for the auditlog to update in case it exists.
     */
    where: auditlogWhereUniqueInput
    /**
     * In case the auditlog found by the `where` argument doesn't exist, create a new auditlog with this data.
     */
    create: XOR<auditlogCreateInput, auditlogUncheckedCreateInput>
    /**
     * In case the auditlog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auditlogUpdateInput, auditlogUncheckedUpdateInput>
  }

  /**
   * auditlog delete
   */
  export type auditlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    /**
     * Filter which auditlog to delete.
     */
    where: auditlogWhereUniqueInput
  }

  /**
   * auditlog deleteMany
   */
  export type auditlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auditlogs to delete
     */
    where?: auditlogWhereInput
    /**
     * Limit how many auditlogs to delete.
     */
    limit?: number
  }

  /**
   * auditlog without action
   */
  export type auditlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
  }


  /**
   * Model logo
   */

  export type AggregateLogo = {
    _count: LogoCountAggregateOutputType | null
    _avg: LogoAvgAggregateOutputType | null
    _sum: LogoSumAggregateOutputType | null
    _min: LogoMinAggregateOutputType | null
    _max: LogoMaxAggregateOutputType | null
  }

  export type LogoAvgAggregateOutputType = {
    logo_id: number | null
  }

  export type LogoSumAggregateOutputType = {
    logo_id: number | null
  }

  export type LogoMinAggregateOutputType = {
    logo_id: number | null
    user_id: string | null
    logo_path: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type LogoMaxAggregateOutputType = {
    logo_id: number | null
    user_id: string | null
    logo_path: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type LogoCountAggregateOutputType = {
    logo_id: number
    user_id: number
    logo_path: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type LogoAvgAggregateInputType = {
    logo_id?: true
  }

  export type LogoSumAggregateInputType = {
    logo_id?: true
  }

  export type LogoMinAggregateInputType = {
    logo_id?: true
    user_id?: true
    logo_path?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type LogoMaxAggregateInputType = {
    logo_id?: true
    user_id?: true
    logo_path?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type LogoCountAggregateInputType = {
    logo_id?: true
    user_id?: true
    logo_path?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type LogoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logo to aggregate.
     */
    where?: logoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logos to fetch.
     */
    orderBy?: logoOrderByWithRelationInput | logoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logos
    **/
    _count?: true | LogoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogoMaxAggregateInputType
  }

  export type GetLogoAggregateType<T extends LogoAggregateArgs> = {
        [P in keyof T & keyof AggregateLogo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogo[P]>
      : GetScalarType<T[P], AggregateLogo[P]>
  }




  export type logoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logoWhereInput
    orderBy?: logoOrderByWithAggregationInput | logoOrderByWithAggregationInput[]
    by: LogoScalarFieldEnum[] | LogoScalarFieldEnum
    having?: logoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogoCountAggregateInputType | true
    _avg?: LogoAvgAggregateInputType
    _sum?: LogoSumAggregateInputType
    _min?: LogoMinAggregateInputType
    _max?: LogoMaxAggregateInputType
  }

  export type LogoGroupByOutputType = {
    logo_id: number
    user_id: string
    logo_path: string
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean
    _count: LogoCountAggregateOutputType | null
    _avg: LogoAvgAggregateOutputType | null
    _sum: LogoSumAggregateOutputType | null
    _min: LogoMinAggregateOutputType | null
    _max: LogoMaxAggregateOutputType | null
  }

  type GetLogoGroupByPayload<T extends logoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogoGroupByOutputType[P]>
            : GetScalarType<T[P], LogoGroupByOutputType[P]>
        }
      >
    >


  export type logoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logo_id?: boolean
    user_id?: boolean
    logo_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    url?: boolean | logo$urlArgs<ExtArgs>
    _count?: boolean | LogoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logo"]>

  export type logoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logo_id?: boolean
    user_id?: boolean
    logo_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logo"]>

  export type logoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logo_id?: boolean
    user_id?: boolean
    logo_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logo"]>

  export type logoSelectScalar = {
    logo_id?: boolean
    user_id?: boolean
    logo_path?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type logoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"logo_id" | "user_id" | "logo_path" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["logo"]>
  export type logoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    url?: boolean | logo$urlArgs<ExtArgs>
    _count?: boolean | LogoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type logoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type logoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $logoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logo"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      url: Prisma.$urlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      logo_id: number
      user_id: string
      logo_path: string
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["logo"]>
    composites: {}
  }

  type logoGetPayload<S extends boolean | null | undefined | logoDefaultArgs> = $Result.GetResult<Prisma.$logoPayload, S>

  type logoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogoCountAggregateInputType | true
    }

  export interface logoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logo'], meta: { name: 'logo' } }
    /**
     * Find zero or one Logo that matches the filter.
     * @param {logoFindUniqueArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logoFindUniqueArgs>(args: SelectSubset<T, logoFindUniqueArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logoFindUniqueOrThrowArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logoFindUniqueOrThrowArgs>(args: SelectSubset<T, logoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoFindFirstArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logoFindFirstArgs>(args?: SelectSubset<T, logoFindFirstArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoFindFirstOrThrowArgs} args - Arguments to find a Logo
     * @example
     * // Get one Logo
     * const logo = await prisma.logo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logoFindFirstOrThrowArgs>(args?: SelectSubset<T, logoFindFirstOrThrowArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logos
     * const logos = await prisma.logo.findMany()
     * 
     * // Get first 10 Logos
     * const logos = await prisma.logo.findMany({ take: 10 })
     * 
     * // Only select the `logo_id`
     * const logoWithLogo_idOnly = await prisma.logo.findMany({ select: { logo_id: true } })
     * 
     */
    findMany<T extends logoFindManyArgs>(args?: SelectSubset<T, logoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logo.
     * @param {logoCreateArgs} args - Arguments to create a Logo.
     * @example
     * // Create one Logo
     * const Logo = await prisma.logo.create({
     *   data: {
     *     // ... data to create a Logo
     *   }
     * })
     * 
     */
    create<T extends logoCreateArgs>(args: SelectSubset<T, logoCreateArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logos.
     * @param {logoCreateManyArgs} args - Arguments to create many Logos.
     * @example
     * // Create many Logos
     * const logo = await prisma.logo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logoCreateManyArgs>(args?: SelectSubset<T, logoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logos and returns the data saved in the database.
     * @param {logoCreateManyAndReturnArgs} args - Arguments to create many Logos.
     * @example
     * // Create many Logos
     * const logo = await prisma.logo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logos and only return the `logo_id`
     * const logoWithLogo_idOnly = await prisma.logo.createManyAndReturn({
     *   select: { logo_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logoCreateManyAndReturnArgs>(args?: SelectSubset<T, logoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logo.
     * @param {logoDeleteArgs} args - Arguments to delete one Logo.
     * @example
     * // Delete one Logo
     * const Logo = await prisma.logo.delete({
     *   where: {
     *     // ... filter to delete one Logo
     *   }
     * })
     * 
     */
    delete<T extends logoDeleteArgs>(args: SelectSubset<T, logoDeleteArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logo.
     * @param {logoUpdateArgs} args - Arguments to update one Logo.
     * @example
     * // Update one Logo
     * const logo = await prisma.logo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logoUpdateArgs>(args: SelectSubset<T, logoUpdateArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logos.
     * @param {logoDeleteManyArgs} args - Arguments to filter Logos to delete.
     * @example
     * // Delete a few Logos
     * const { count } = await prisma.logo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logoDeleteManyArgs>(args?: SelectSubset<T, logoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logos
     * const logo = await prisma.logo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logoUpdateManyArgs>(args: SelectSubset<T, logoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logos and returns the data updated in the database.
     * @param {logoUpdateManyAndReturnArgs} args - Arguments to update many Logos.
     * @example
     * // Update many Logos
     * const logo = await prisma.logo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logos and only return the `logo_id`
     * const logoWithLogo_idOnly = await prisma.logo.updateManyAndReturn({
     *   select: { logo_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends logoUpdateManyAndReturnArgs>(args: SelectSubset<T, logoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logo.
     * @param {logoUpsertArgs} args - Arguments to update or create a Logo.
     * @example
     * // Update or create a Logo
     * const logo = await prisma.logo.upsert({
     *   create: {
     *     // ... data to create a Logo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logo we want to update
     *   }
     * })
     */
    upsert<T extends logoUpsertArgs>(args: SelectSubset<T, logoUpsertArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoCountArgs} args - Arguments to filter Logos to count.
     * @example
     * // Count the number of Logos
     * const count = await prisma.logo.count({
     *   where: {
     *     // ... the filter for the Logos we want to count
     *   }
     * })
    **/
    count<T extends logoCountArgs>(
      args?: Subset<T, logoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogoAggregateArgs>(args: Subset<T, LogoAggregateArgs>): Prisma.PrismaPromise<GetLogoAggregateType<T>>

    /**
     * Group by Logo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logoGroupByArgs['orderBy'] }
        : { orderBy?: logoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logo model
   */
  readonly fields: logoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    url<T extends logo$urlArgs<ExtArgs> = {}>(args?: Subset<T, logo$urlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the logo model
   */
  interface logoFieldRefs {
    readonly logo_id: FieldRef<"logo", 'Int'>
    readonly user_id: FieldRef<"logo", 'String'>
    readonly logo_path: FieldRef<"logo", 'String'>
    readonly created_at: FieldRef<"logo", 'DateTime'>
    readonly updated_at: FieldRef<"logo", 'DateTime'>
    readonly deleted_at: FieldRef<"logo", 'DateTime'>
    readonly is_deleted: FieldRef<"logo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * logo findUnique
   */
  export type logoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter, which logo to fetch.
     */
    where: logoWhereUniqueInput
  }

  /**
   * logo findUniqueOrThrow
   */
  export type logoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter, which logo to fetch.
     */
    where: logoWhereUniqueInput
  }

  /**
   * logo findFirst
   */
  export type logoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter, which logo to fetch.
     */
    where?: logoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logos to fetch.
     */
    orderBy?: logoOrderByWithRelationInput | logoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logos.
     */
    cursor?: logoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logos.
     */
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * logo findFirstOrThrow
   */
  export type logoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter, which logo to fetch.
     */
    where?: logoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logos to fetch.
     */
    orderBy?: logoOrderByWithRelationInput | logoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logos.
     */
    cursor?: logoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logos.
     */
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * logo findMany
   */
  export type logoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter, which logos to fetch.
     */
    where?: logoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logos to fetch.
     */
    orderBy?: logoOrderByWithRelationInput | logoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logos.
     */
    cursor?: logoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logos.
     */
    skip?: number
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * logo create
   */
  export type logoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * The data needed to create a logo.
     */
    data: XOR<logoCreateInput, logoUncheckedCreateInput>
  }

  /**
   * logo createMany
   */
  export type logoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logos.
     */
    data: logoCreateManyInput | logoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logo createManyAndReturn
   */
  export type logoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * The data used to create many logos.
     */
    data: logoCreateManyInput | logoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * logo update
   */
  export type logoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * The data needed to update a logo.
     */
    data: XOR<logoUpdateInput, logoUncheckedUpdateInput>
    /**
     * Choose, which logo to update.
     */
    where: logoWhereUniqueInput
  }

  /**
   * logo updateMany
   */
  export type logoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logos.
     */
    data: XOR<logoUpdateManyMutationInput, logoUncheckedUpdateManyInput>
    /**
     * Filter which logos to update
     */
    where?: logoWhereInput
    /**
     * Limit how many logos to update.
     */
    limit?: number
  }

  /**
   * logo updateManyAndReturn
   */
  export type logoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * The data used to update logos.
     */
    data: XOR<logoUpdateManyMutationInput, logoUncheckedUpdateManyInput>
    /**
     * Filter which logos to update
     */
    where?: logoWhereInput
    /**
     * Limit how many logos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * logo upsert
   */
  export type logoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * The filter to search for the logo to update in case it exists.
     */
    where: logoWhereUniqueInput
    /**
     * In case the logo found by the `where` argument doesn't exist, create a new logo with this data.
     */
    create: XOR<logoCreateInput, logoUncheckedCreateInput>
    /**
     * In case the logo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logoUpdateInput, logoUncheckedUpdateInput>
  }

  /**
   * logo delete
   */
  export type logoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    /**
     * Filter which logo to delete.
     */
    where: logoWhereUniqueInput
  }

  /**
   * logo deleteMany
   */
  export type logoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logos to delete
     */
    where?: logoWhereInput
    /**
     * Limit how many logos to delete.
     */
    limit?: number
  }

  /**
   * logo.url
   */
  export type logo$urlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    where?: urlWhereInput
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    cursor?: urlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * logo without action
   */
  export type logoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
  }


  /**
   * Model url
   */

  export type AggregateUrl = {
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  export type UrlAvgAggregateOutputType = {
    logo_id: number | null
    tag_id: number | null
  }

  export type UrlSumAggregateOutputType = {
    logo_id: number | null
    tag_id: number | null
  }

  export type UrlMinAggregateOutputType = {
    url_id: string | null
    user_id: string | null
    original_url: string | null
    short_url: string | null
    logo_id: number | null
    tag_id: number | null
    url_type: $Enums.urltypeenum | null
    associated: boolean | null
    expiration_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
    is_pre_generated: boolean | null
    associated_at: Date | null
    status: $Enums.statusenum | null
  }

  export type UrlMaxAggregateOutputType = {
    url_id: string | null
    user_id: string | null
    original_url: string | null
    short_url: string | null
    logo_id: number | null
    tag_id: number | null
    url_type: $Enums.urltypeenum | null
    associated: boolean | null
    expiration_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
    is_pre_generated: boolean | null
    associated_at: Date | null
    status: $Enums.statusenum | null
  }

  export type UrlCountAggregateOutputType = {
    url_id: number
    user_id: number
    original_url: number
    short_url: number
    logo_id: number
    tag_id: number
    url_type: number
    associated: number
    expiration_date: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    is_pre_generated: number
    associated_at: number
    status: number
    _all: number
  }


  export type UrlAvgAggregateInputType = {
    logo_id?: true
    tag_id?: true
  }

  export type UrlSumAggregateInputType = {
    logo_id?: true
    tag_id?: true
  }

  export type UrlMinAggregateInputType = {
    url_id?: true
    user_id?: true
    original_url?: true
    short_url?: true
    logo_id?: true
    tag_id?: true
    url_type?: true
    associated?: true
    expiration_date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    is_pre_generated?: true
    associated_at?: true
    status?: true
  }

  export type UrlMaxAggregateInputType = {
    url_id?: true
    user_id?: true
    original_url?: true
    short_url?: true
    logo_id?: true
    tag_id?: true
    url_type?: true
    associated?: true
    expiration_date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    is_pre_generated?: true
    associated_at?: true
    status?: true
  }

  export type UrlCountAggregateInputType = {
    url_id?: true
    user_id?: true
    original_url?: true
    short_url?: true
    logo_id?: true
    tag_id?: true
    url_type?: true
    associated?: true
    expiration_date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    is_pre_generated?: true
    associated_at?: true
    status?: true
    _all?: true
  }

  export type UrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which url to aggregate.
     */
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     */
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned urls
    **/
    _count?: true | UrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlMaxAggregateInputType
  }

  export type GetUrlAggregateType<T extends UrlAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl[P]>
      : GetScalarType<T[P], AggregateUrl[P]>
  }




  export type urlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urlWhereInput
    orderBy?: urlOrderByWithAggregationInput | urlOrderByWithAggregationInput[]
    by: UrlScalarFieldEnum[] | UrlScalarFieldEnum
    having?: urlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlCountAggregateInputType | true
    _avg?: UrlAvgAggregateInputType
    _sum?: UrlSumAggregateInputType
    _min?: UrlMinAggregateInputType
    _max?: UrlMaxAggregateInputType
  }

  export type UrlGroupByOutputType = {
    url_id: string
    user_id: string | null
    original_url: string | null
    short_url: string
    logo_id: number | null
    tag_id: number | null
    url_type: $Enums.urltypeenum | null
    associated: boolean
    expiration_date: Date | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    is_pre_generated: boolean
    associated_at: Date | null
    status: $Enums.statusenum
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  type GetUrlGroupByPayload<T extends urlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlGroupByOutputType[P]>
            : GetScalarType<T[P], UrlGroupByOutputType[P]>
        }
      >
    >


  export type urlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url_id?: boolean
    user_id?: boolean
    original_url?: boolean
    short_url?: boolean
    logo_id?: boolean
    tag_id?: boolean
    url_type?: boolean
    associated?: boolean
    expiration_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: boolean
    status?: boolean
    auditlog?: boolean | url$auditlogArgs<ExtArgs>
    logo?: boolean | url$logoArgs<ExtArgs>
    urltag?: boolean | url$urltagArgs<ExtArgs>
    users?: boolean | url$usersArgs<ExtArgs>
    urlclick?: boolean | url$urlclickArgs<ExtArgs>
    _count?: boolean | UrlCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type urlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url_id?: boolean
    user_id?: boolean
    original_url?: boolean
    short_url?: boolean
    logo_id?: boolean
    tag_id?: boolean
    url_type?: boolean
    associated?: boolean
    expiration_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: boolean
    status?: boolean
    logo?: boolean | url$logoArgs<ExtArgs>
    urltag?: boolean | url$urltagArgs<ExtArgs>
    users?: boolean | url$usersArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type urlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    url_id?: boolean
    user_id?: boolean
    original_url?: boolean
    short_url?: boolean
    logo_id?: boolean
    tag_id?: boolean
    url_type?: boolean
    associated?: boolean
    expiration_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: boolean
    status?: boolean
    logo?: boolean | url$logoArgs<ExtArgs>
    urltag?: boolean | url$urltagArgs<ExtArgs>
    users?: boolean | url$usersArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type urlSelectScalar = {
    url_id?: boolean
    user_id?: boolean
    original_url?: boolean
    short_url?: boolean
    logo_id?: boolean
    tag_id?: boolean
    url_type?: boolean
    associated?: boolean
    expiration_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: boolean
    status?: boolean
  }

  export type urlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"url_id" | "user_id" | "original_url" | "short_url" | "logo_id" | "tag_id" | "url_type" | "associated" | "expiration_date" | "created_at" | "updated_at" | "deleted_at" | "is_deleted" | "is_pre_generated" | "associated_at" | "status", ExtArgs["result"]["url"]>
  export type urlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditlog?: boolean | url$auditlogArgs<ExtArgs>
    logo?: boolean | url$logoArgs<ExtArgs>
    urltag?: boolean | url$urltagArgs<ExtArgs>
    users?: boolean | url$usersArgs<ExtArgs>
    urlclick?: boolean | url$urlclickArgs<ExtArgs>
    _count?: boolean | UrlCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type urlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logo?: boolean | url$logoArgs<ExtArgs>
    urltag?: boolean | url$urltagArgs<ExtArgs>
    users?: boolean | url$usersArgs<ExtArgs>
  }
  export type urlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logo?: boolean | url$logoArgs<ExtArgs>
    urltag?: boolean | url$urltagArgs<ExtArgs>
    users?: boolean | url$usersArgs<ExtArgs>
  }

  export type $urlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "url"
    objects: {
      auditlog: Prisma.$auditlogPayload<ExtArgs>[]
      logo: Prisma.$logoPayload<ExtArgs> | null
      urltag: Prisma.$urltagPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
      urlclick: Prisma.$urlclickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      url_id: string
      user_id: string | null
      original_url: string | null
      short_url: string
      logo_id: number | null
      tag_id: number | null
      url_type: $Enums.urltypeenum | null
      associated: boolean
      expiration_date: Date | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
      is_pre_generated: boolean
      associated_at: Date | null
      status: $Enums.statusenum
    }, ExtArgs["result"]["url"]>
    composites: {}
  }

  type urlGetPayload<S extends boolean | null | undefined | urlDefaultArgs> = $Result.GetResult<Prisma.$urlPayload, S>

  type urlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<urlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrlCountAggregateInputType | true
    }

  export interface urlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['url'], meta: { name: 'url' } }
    /**
     * Find zero or one Url that matches the filter.
     * @param {urlFindUniqueArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends urlFindUniqueArgs>(args: SelectSubset<T, urlFindUniqueArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Url that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {urlFindUniqueOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends urlFindUniqueOrThrowArgs>(args: SelectSubset<T, urlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlFindFirstArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends urlFindFirstArgs>(args?: SelectSubset<T, urlFindFirstArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlFindFirstOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends urlFindFirstOrThrowArgs>(args?: SelectSubset<T, urlFindFirstOrThrowArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urls
     * const urls = await prisma.url.findMany()
     * 
     * // Get first 10 Urls
     * const urls = await prisma.url.findMany({ take: 10 })
     * 
     * // Only select the `url_id`
     * const urlWithUrl_idOnly = await prisma.url.findMany({ select: { url_id: true } })
     * 
     */
    findMany<T extends urlFindManyArgs>(args?: SelectSubset<T, urlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Url.
     * @param {urlCreateArgs} args - Arguments to create a Url.
     * @example
     * // Create one Url
     * const Url = await prisma.url.create({
     *   data: {
     *     // ... data to create a Url
     *   }
     * })
     * 
     */
    create<T extends urlCreateArgs>(args: SelectSubset<T, urlCreateArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Urls.
     * @param {urlCreateManyArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const url = await prisma.url.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends urlCreateManyArgs>(args?: SelectSubset<T, urlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Urls and returns the data saved in the database.
     * @param {urlCreateManyAndReturnArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const url = await prisma.url.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Urls and only return the `url_id`
     * const urlWithUrl_idOnly = await prisma.url.createManyAndReturn({
     *   select: { url_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends urlCreateManyAndReturnArgs>(args?: SelectSubset<T, urlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Url.
     * @param {urlDeleteArgs} args - Arguments to delete one Url.
     * @example
     * // Delete one Url
     * const Url = await prisma.url.delete({
     *   where: {
     *     // ... filter to delete one Url
     *   }
     * })
     * 
     */
    delete<T extends urlDeleteArgs>(args: SelectSubset<T, urlDeleteArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Url.
     * @param {urlUpdateArgs} args - Arguments to update one Url.
     * @example
     * // Update one Url
     * const url = await prisma.url.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends urlUpdateArgs>(args: SelectSubset<T, urlUpdateArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Urls.
     * @param {urlDeleteManyArgs} args - Arguments to filter Urls to delete.
     * @example
     * // Delete a few Urls
     * const { count } = await prisma.url.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends urlDeleteManyArgs>(args?: SelectSubset<T, urlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends urlUpdateManyArgs>(args: SelectSubset<T, urlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls and returns the data updated in the database.
     * @param {urlUpdateManyAndReturnArgs} args - Arguments to update many Urls.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Urls and only return the `url_id`
     * const urlWithUrl_idOnly = await prisma.url.updateManyAndReturn({
     *   select: { url_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends urlUpdateManyAndReturnArgs>(args: SelectSubset<T, urlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Url.
     * @param {urlUpsertArgs} args - Arguments to update or create a Url.
     * @example
     * // Update or create a Url
     * const url = await prisma.url.upsert({
     *   create: {
     *     // ... data to create a Url
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url we want to update
     *   }
     * })
     */
    upsert<T extends urlUpsertArgs>(args: SelectSubset<T, urlUpsertArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlCountArgs} args - Arguments to filter Urls to count.
     * @example
     * // Count the number of Urls
     * const count = await prisma.url.count({
     *   where: {
     *     // ... the filter for the Urls we want to count
     *   }
     * })
    **/
    count<T extends urlCountArgs>(
      args?: Subset<T, urlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrlAggregateArgs>(args: Subset<T, UrlAggregateArgs>): Prisma.PrismaPromise<GetUrlAggregateType<T>>

    /**
     * Group by Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends urlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: urlGroupByArgs['orderBy'] }
        : { orderBy?: urlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, urlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the url model
   */
  readonly fields: urlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for url.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__urlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditlog<T extends url$auditlogArgs<ExtArgs> = {}>(args?: Subset<T, url$auditlogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logo<T extends url$logoArgs<ExtArgs> = {}>(args?: Subset<T, url$logoArgs<ExtArgs>>): Prisma__logoClient<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    urltag<T extends url$urltagArgs<ExtArgs> = {}>(args?: Subset<T, url$urltagArgs<ExtArgs>>): Prisma__urltagClient<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends url$usersArgs<ExtArgs> = {}>(args?: Subset<T, url$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    urlclick<T extends url$urlclickArgs<ExtArgs> = {}>(args?: Subset<T, url$urlclickArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the url model
   */
  interface urlFieldRefs {
    readonly url_id: FieldRef<"url", 'String'>
    readonly user_id: FieldRef<"url", 'String'>
    readonly original_url: FieldRef<"url", 'String'>
    readonly short_url: FieldRef<"url", 'String'>
    readonly logo_id: FieldRef<"url", 'Int'>
    readonly tag_id: FieldRef<"url", 'Int'>
    readonly url_type: FieldRef<"url", 'urltypeenum'>
    readonly associated: FieldRef<"url", 'Boolean'>
    readonly expiration_date: FieldRef<"url", 'DateTime'>
    readonly created_at: FieldRef<"url", 'DateTime'>
    readonly updated_at: FieldRef<"url", 'DateTime'>
    readonly deleted_at: FieldRef<"url", 'DateTime'>
    readonly is_deleted: FieldRef<"url", 'Boolean'>
    readonly is_pre_generated: FieldRef<"url", 'Boolean'>
    readonly associated_at: FieldRef<"url", 'DateTime'>
    readonly status: FieldRef<"url", 'statusenum'>
  }
    

  // Custom InputTypes
  /**
   * url findUnique
   */
  export type urlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter, which url to fetch.
     */
    where: urlWhereUniqueInput
  }

  /**
   * url findUniqueOrThrow
   */
  export type urlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter, which url to fetch.
     */
    where: urlWhereUniqueInput
  }

  /**
   * url findFirst
   */
  export type urlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter, which url to fetch.
     */
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     */
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for urls.
     */
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * url findFirstOrThrow
   */
  export type urlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter, which url to fetch.
     */
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     */
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for urls.
     */
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * url findMany
   */
  export type urlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter, which urls to fetch.
     */
    where?: urlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urls to fetch.
     */
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing urls.
     */
    cursor?: urlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urls.
     */
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * url create
   */
  export type urlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * The data needed to create a url.
     */
    data: XOR<urlCreateInput, urlUncheckedCreateInput>
  }

  /**
   * url createMany
   */
  export type urlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many urls.
     */
    data: urlCreateManyInput | urlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * url createManyAndReturn
   */
  export type urlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * The data used to create many urls.
     */
    data: urlCreateManyInput | urlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * url update
   */
  export type urlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * The data needed to update a url.
     */
    data: XOR<urlUpdateInput, urlUncheckedUpdateInput>
    /**
     * Choose, which url to update.
     */
    where: urlWhereUniqueInput
  }

  /**
   * url updateMany
   */
  export type urlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update urls.
     */
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyInput>
    /**
     * Filter which urls to update
     */
    where?: urlWhereInput
    /**
     * Limit how many urls to update.
     */
    limit?: number
  }

  /**
   * url updateManyAndReturn
   */
  export type urlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * The data used to update urls.
     */
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyInput>
    /**
     * Filter which urls to update
     */
    where?: urlWhereInput
    /**
     * Limit how many urls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * url upsert
   */
  export type urlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * The filter to search for the url to update in case it exists.
     */
    where: urlWhereUniqueInput
    /**
     * In case the url found by the `where` argument doesn't exist, create a new url with this data.
     */
    create: XOR<urlCreateInput, urlUncheckedCreateInput>
    /**
     * In case the url was found with the provided `where` argument, update it with this data.
     */
    update: XOR<urlUpdateInput, urlUncheckedUpdateInput>
  }

  /**
   * url delete
   */
  export type urlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    /**
     * Filter which url to delete.
     */
    where: urlWhereUniqueInput
  }

  /**
   * url deleteMany
   */
  export type urlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which urls to delete
     */
    where?: urlWhereInput
    /**
     * Limit how many urls to delete.
     */
    limit?: number
  }

  /**
   * url.auditlog
   */
  export type url$auditlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    where?: auditlogWhereInput
    orderBy?: auditlogOrderByWithRelationInput | auditlogOrderByWithRelationInput[]
    cursor?: auditlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditlogScalarFieldEnum | AuditlogScalarFieldEnum[]
  }

  /**
   * url.logo
   */
  export type url$logoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    where?: logoWhereInput
  }

  /**
   * url.urltag
   */
  export type url$urltagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    where?: urltagWhereInput
  }

  /**
   * url.users
   */
  export type url$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * url.urlclick
   */
  export type url$urlclickArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
    where?: urlclickWhereInput
    orderBy?: urlclickOrderByWithRelationInput | urlclickOrderByWithRelationInput[]
    cursor?: urlclickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlclickScalarFieldEnum | UrlclickScalarFieldEnum[]
  }

  /**
   * url without action
   */
  export type urlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
  }


  /**
   * Model urlclick
   */

  export type AggregateUrlclick = {
    _count: UrlclickCountAggregateOutputType | null
    _avg: UrlclickAvgAggregateOutputType | null
    _sum: UrlclickSumAggregateOutputType | null
    _min: UrlclickMinAggregateOutputType | null
    _max: UrlclickMaxAggregateOutputType | null
  }

  export type UrlclickAvgAggregateOutputType = {
    click_id: number | null
  }

  export type UrlclickSumAggregateOutputType = {
    click_id: number | null
  }

  export type UrlclickMinAggregateOutputType = {
    click_id: number | null
    url_id: string | null
    access_date: Date | null
    access_time: Date | null
    ip_address: string | null
    user_agent: string | null
    referrer: string | null
    country: string | null
    city: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type UrlclickMaxAggregateOutputType = {
    click_id: number | null
    url_id: string | null
    access_date: Date | null
    access_time: Date | null
    ip_address: string | null
    user_agent: string | null
    referrer: string | null
    country: string | null
    city: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type UrlclickCountAggregateOutputType = {
    click_id: number
    url_id: number
    access_date: number
    access_time: number
    ip_address: number
    user_agent: number
    referrer: number
    country: number
    city: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type UrlclickAvgAggregateInputType = {
    click_id?: true
  }

  export type UrlclickSumAggregateInputType = {
    click_id?: true
  }

  export type UrlclickMinAggregateInputType = {
    click_id?: true
    url_id?: true
    access_date?: true
    access_time?: true
    ip_address?: true
    user_agent?: true
    referrer?: true
    country?: true
    city?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type UrlclickMaxAggregateInputType = {
    click_id?: true
    url_id?: true
    access_date?: true
    access_time?: true
    ip_address?: true
    user_agent?: true
    referrer?: true
    country?: true
    city?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type UrlclickCountAggregateInputType = {
    click_id?: true
    url_id?: true
    access_date?: true
    access_time?: true
    ip_address?: true
    user_agent?: true
    referrer?: true
    country?: true
    city?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type UrlclickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which urlclick to aggregate.
     */
    where?: urlclickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urlclicks to fetch.
     */
    orderBy?: urlclickOrderByWithRelationInput | urlclickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: urlclickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urlclicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urlclicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned urlclicks
    **/
    _count?: true | UrlclickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrlclickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrlclickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlclickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlclickMaxAggregateInputType
  }

  export type GetUrlclickAggregateType<T extends UrlclickAggregateArgs> = {
        [P in keyof T & keyof AggregateUrlclick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrlclick[P]>
      : GetScalarType<T[P], AggregateUrlclick[P]>
  }




  export type urlclickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urlclickWhereInput
    orderBy?: urlclickOrderByWithAggregationInput | urlclickOrderByWithAggregationInput[]
    by: UrlclickScalarFieldEnum[] | UrlclickScalarFieldEnum
    having?: urlclickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlclickCountAggregateInputType | true
    _avg?: UrlclickAvgAggregateInputType
    _sum?: UrlclickSumAggregateInputType
    _min?: UrlclickMinAggregateInputType
    _max?: UrlclickMaxAggregateInputType
  }

  export type UrlclickGroupByOutputType = {
    click_id: number
    url_id: string
    access_date: Date
    access_time: Date
    ip_address: string
    user_agent: string
    referrer: string | null
    country: string | null
    city: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: UrlclickCountAggregateOutputType | null
    _avg: UrlclickAvgAggregateOutputType | null
    _sum: UrlclickSumAggregateOutputType | null
    _min: UrlclickMinAggregateOutputType | null
    _max: UrlclickMaxAggregateOutputType | null
  }

  type GetUrlclickGroupByPayload<T extends urlclickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlclickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlclickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlclickGroupByOutputType[P]>
            : GetScalarType<T[P], UrlclickGroupByOutputType[P]>
        }
      >
    >


  export type urlclickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    click_id?: boolean
    url_id?: boolean
    access_date?: boolean
    access_time?: boolean
    ip_address?: boolean
    user_agent?: boolean
    referrer?: boolean
    country?: boolean
    city?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urlclick"]>

  export type urlclickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    click_id?: boolean
    url_id?: boolean
    access_date?: boolean
    access_time?: boolean
    ip_address?: boolean
    user_agent?: boolean
    referrer?: boolean
    country?: boolean
    city?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urlclick"]>

  export type urlclickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    click_id?: boolean
    url_id?: boolean
    access_date?: boolean
    access_time?: boolean
    ip_address?: boolean
    user_agent?: boolean
    referrer?: boolean
    country?: boolean
    city?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    url?: boolean | urlDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urlclick"]>

  export type urlclickSelectScalar = {
    click_id?: boolean
    url_id?: boolean
    access_date?: boolean
    access_time?: boolean
    ip_address?: boolean
    user_agent?: boolean
    referrer?: boolean
    country?: boolean
    city?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type urlclickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"click_id" | "url_id" | "access_date" | "access_time" | "ip_address" | "user_agent" | "referrer" | "country" | "city" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["urlclick"]>
  export type urlclickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | urlDefaultArgs<ExtArgs>
  }
  export type urlclickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | urlDefaultArgs<ExtArgs>
  }
  export type urlclickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | urlDefaultArgs<ExtArgs>
  }

  export type $urlclickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "urlclick"
    objects: {
      url: Prisma.$urlPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      click_id: number
      url_id: string
      access_date: Date
      access_time: Date
      ip_address: string
      user_agent: string
      referrer: string | null
      country: string | null
      city: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["urlclick"]>
    composites: {}
  }

  type urlclickGetPayload<S extends boolean | null | undefined | urlclickDefaultArgs> = $Result.GetResult<Prisma.$urlclickPayload, S>

  type urlclickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<urlclickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrlclickCountAggregateInputType | true
    }

  export interface urlclickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['urlclick'], meta: { name: 'urlclick' } }
    /**
     * Find zero or one Urlclick that matches the filter.
     * @param {urlclickFindUniqueArgs} args - Arguments to find a Urlclick
     * @example
     * // Get one Urlclick
     * const urlclick = await prisma.urlclick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends urlclickFindUniqueArgs>(args: SelectSubset<T, urlclickFindUniqueArgs<ExtArgs>>): Prisma__urlclickClient<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Urlclick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {urlclickFindUniqueOrThrowArgs} args - Arguments to find a Urlclick
     * @example
     * // Get one Urlclick
     * const urlclick = await prisma.urlclick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends urlclickFindUniqueOrThrowArgs>(args: SelectSubset<T, urlclickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__urlclickClient<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Urlclick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlclickFindFirstArgs} args - Arguments to find a Urlclick
     * @example
     * // Get one Urlclick
     * const urlclick = await prisma.urlclick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends urlclickFindFirstArgs>(args?: SelectSubset<T, urlclickFindFirstArgs<ExtArgs>>): Prisma__urlclickClient<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Urlclick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlclickFindFirstOrThrowArgs} args - Arguments to find a Urlclick
     * @example
     * // Get one Urlclick
     * const urlclick = await prisma.urlclick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends urlclickFindFirstOrThrowArgs>(args?: SelectSubset<T, urlclickFindFirstOrThrowArgs<ExtArgs>>): Prisma__urlclickClient<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Urlclicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlclickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urlclicks
     * const urlclicks = await prisma.urlclick.findMany()
     * 
     * // Get first 10 Urlclicks
     * const urlclicks = await prisma.urlclick.findMany({ take: 10 })
     * 
     * // Only select the `click_id`
     * const urlclickWithClick_idOnly = await prisma.urlclick.findMany({ select: { click_id: true } })
     * 
     */
    findMany<T extends urlclickFindManyArgs>(args?: SelectSubset<T, urlclickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Urlclick.
     * @param {urlclickCreateArgs} args - Arguments to create a Urlclick.
     * @example
     * // Create one Urlclick
     * const Urlclick = await prisma.urlclick.create({
     *   data: {
     *     // ... data to create a Urlclick
     *   }
     * })
     * 
     */
    create<T extends urlclickCreateArgs>(args: SelectSubset<T, urlclickCreateArgs<ExtArgs>>): Prisma__urlclickClient<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Urlclicks.
     * @param {urlclickCreateManyArgs} args - Arguments to create many Urlclicks.
     * @example
     * // Create many Urlclicks
     * const urlclick = await prisma.urlclick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends urlclickCreateManyArgs>(args?: SelectSubset<T, urlclickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Urlclicks and returns the data saved in the database.
     * @param {urlclickCreateManyAndReturnArgs} args - Arguments to create many Urlclicks.
     * @example
     * // Create many Urlclicks
     * const urlclick = await prisma.urlclick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Urlclicks and only return the `click_id`
     * const urlclickWithClick_idOnly = await prisma.urlclick.createManyAndReturn({
     *   select: { click_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends urlclickCreateManyAndReturnArgs>(args?: SelectSubset<T, urlclickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Urlclick.
     * @param {urlclickDeleteArgs} args - Arguments to delete one Urlclick.
     * @example
     * // Delete one Urlclick
     * const Urlclick = await prisma.urlclick.delete({
     *   where: {
     *     // ... filter to delete one Urlclick
     *   }
     * })
     * 
     */
    delete<T extends urlclickDeleteArgs>(args: SelectSubset<T, urlclickDeleteArgs<ExtArgs>>): Prisma__urlclickClient<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Urlclick.
     * @param {urlclickUpdateArgs} args - Arguments to update one Urlclick.
     * @example
     * // Update one Urlclick
     * const urlclick = await prisma.urlclick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends urlclickUpdateArgs>(args: SelectSubset<T, urlclickUpdateArgs<ExtArgs>>): Prisma__urlclickClient<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Urlclicks.
     * @param {urlclickDeleteManyArgs} args - Arguments to filter Urlclicks to delete.
     * @example
     * // Delete a few Urlclicks
     * const { count } = await prisma.urlclick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends urlclickDeleteManyArgs>(args?: SelectSubset<T, urlclickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urlclicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlclickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urlclicks
     * const urlclick = await prisma.urlclick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends urlclickUpdateManyArgs>(args: SelectSubset<T, urlclickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urlclicks and returns the data updated in the database.
     * @param {urlclickUpdateManyAndReturnArgs} args - Arguments to update many Urlclicks.
     * @example
     * // Update many Urlclicks
     * const urlclick = await prisma.urlclick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Urlclicks and only return the `click_id`
     * const urlclickWithClick_idOnly = await prisma.urlclick.updateManyAndReturn({
     *   select: { click_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends urlclickUpdateManyAndReturnArgs>(args: SelectSubset<T, urlclickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Urlclick.
     * @param {urlclickUpsertArgs} args - Arguments to update or create a Urlclick.
     * @example
     * // Update or create a Urlclick
     * const urlclick = await prisma.urlclick.upsert({
     *   create: {
     *     // ... data to create a Urlclick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Urlclick we want to update
     *   }
     * })
     */
    upsert<T extends urlclickUpsertArgs>(args: SelectSubset<T, urlclickUpsertArgs<ExtArgs>>): Prisma__urlclickClient<$Result.GetResult<Prisma.$urlclickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Urlclicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlclickCountArgs} args - Arguments to filter Urlclicks to count.
     * @example
     * // Count the number of Urlclicks
     * const count = await prisma.urlclick.count({
     *   where: {
     *     // ... the filter for the Urlclicks we want to count
     *   }
     * })
    **/
    count<T extends urlclickCountArgs>(
      args?: Subset<T, urlclickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlclickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Urlclick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlclickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrlclickAggregateArgs>(args: Subset<T, UrlclickAggregateArgs>): Prisma.PrismaPromise<GetUrlclickAggregateType<T>>

    /**
     * Group by Urlclick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urlclickGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends urlclickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: urlclickGroupByArgs['orderBy'] }
        : { orderBy?: urlclickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, urlclickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlclickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the urlclick model
   */
  readonly fields: urlclickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for urlclick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__urlclickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    url<T extends urlDefaultArgs<ExtArgs> = {}>(args?: Subset<T, urlDefaultArgs<ExtArgs>>): Prisma__urlClient<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the urlclick model
   */
  interface urlclickFieldRefs {
    readonly click_id: FieldRef<"urlclick", 'Int'>
    readonly url_id: FieldRef<"urlclick", 'String'>
    readonly access_date: FieldRef<"urlclick", 'DateTime'>
    readonly access_time: FieldRef<"urlclick", 'DateTime'>
    readonly ip_address: FieldRef<"urlclick", 'String'>
    readonly user_agent: FieldRef<"urlclick", 'String'>
    readonly referrer: FieldRef<"urlclick", 'String'>
    readonly country: FieldRef<"urlclick", 'String'>
    readonly city: FieldRef<"urlclick", 'String'>
    readonly created_at: FieldRef<"urlclick", 'DateTime'>
    readonly updated_at: FieldRef<"urlclick", 'DateTime'>
    readonly deleted_at: FieldRef<"urlclick", 'DateTime'>
    readonly is_deleted: FieldRef<"urlclick", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * urlclick findUnique
   */
  export type urlclickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
    /**
     * Filter, which urlclick to fetch.
     */
    where: urlclickWhereUniqueInput
  }

  /**
   * urlclick findUniqueOrThrow
   */
  export type urlclickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
    /**
     * Filter, which urlclick to fetch.
     */
    where: urlclickWhereUniqueInput
  }

  /**
   * urlclick findFirst
   */
  export type urlclickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
    /**
     * Filter, which urlclick to fetch.
     */
    where?: urlclickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urlclicks to fetch.
     */
    orderBy?: urlclickOrderByWithRelationInput | urlclickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for urlclicks.
     */
    cursor?: urlclickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urlclicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urlclicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of urlclicks.
     */
    distinct?: UrlclickScalarFieldEnum | UrlclickScalarFieldEnum[]
  }

  /**
   * urlclick findFirstOrThrow
   */
  export type urlclickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
    /**
     * Filter, which urlclick to fetch.
     */
    where?: urlclickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urlclicks to fetch.
     */
    orderBy?: urlclickOrderByWithRelationInput | urlclickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for urlclicks.
     */
    cursor?: urlclickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urlclicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urlclicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of urlclicks.
     */
    distinct?: UrlclickScalarFieldEnum | UrlclickScalarFieldEnum[]
  }

  /**
   * urlclick findMany
   */
  export type urlclickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
    /**
     * Filter, which urlclicks to fetch.
     */
    where?: urlclickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urlclicks to fetch.
     */
    orderBy?: urlclickOrderByWithRelationInput | urlclickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing urlclicks.
     */
    cursor?: urlclickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urlclicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urlclicks.
     */
    skip?: number
    distinct?: UrlclickScalarFieldEnum | UrlclickScalarFieldEnum[]
  }

  /**
   * urlclick create
   */
  export type urlclickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
    /**
     * The data needed to create a urlclick.
     */
    data: XOR<urlclickCreateInput, urlclickUncheckedCreateInput>
  }

  /**
   * urlclick createMany
   */
  export type urlclickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many urlclicks.
     */
    data: urlclickCreateManyInput | urlclickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * urlclick createManyAndReturn
   */
  export type urlclickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * The data used to create many urlclicks.
     */
    data: urlclickCreateManyInput | urlclickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * urlclick update
   */
  export type urlclickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
    /**
     * The data needed to update a urlclick.
     */
    data: XOR<urlclickUpdateInput, urlclickUncheckedUpdateInput>
    /**
     * Choose, which urlclick to update.
     */
    where: urlclickWhereUniqueInput
  }

  /**
   * urlclick updateMany
   */
  export type urlclickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update urlclicks.
     */
    data: XOR<urlclickUpdateManyMutationInput, urlclickUncheckedUpdateManyInput>
    /**
     * Filter which urlclicks to update
     */
    where?: urlclickWhereInput
    /**
     * Limit how many urlclicks to update.
     */
    limit?: number
  }

  /**
   * urlclick updateManyAndReturn
   */
  export type urlclickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * The data used to update urlclicks.
     */
    data: XOR<urlclickUpdateManyMutationInput, urlclickUncheckedUpdateManyInput>
    /**
     * Filter which urlclicks to update
     */
    where?: urlclickWhereInput
    /**
     * Limit how many urlclicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * urlclick upsert
   */
  export type urlclickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
    /**
     * The filter to search for the urlclick to update in case it exists.
     */
    where: urlclickWhereUniqueInput
    /**
     * In case the urlclick found by the `where` argument doesn't exist, create a new urlclick with this data.
     */
    create: XOR<urlclickCreateInput, urlclickUncheckedCreateInput>
    /**
     * In case the urlclick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<urlclickUpdateInput, urlclickUncheckedUpdateInput>
  }

  /**
   * urlclick delete
   */
  export type urlclickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
    /**
     * Filter which urlclick to delete.
     */
    where: urlclickWhereUniqueInput
  }

  /**
   * urlclick deleteMany
   */
  export type urlclickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which urlclicks to delete
     */
    where?: urlclickWhereInput
    /**
     * Limit how many urlclicks to delete.
     */
    limit?: number
  }

  /**
   * urlclick without action
   */
  export type urlclickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urlclick
     */
    select?: urlclickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urlclick
     */
    omit?: urlclickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlclickInclude<ExtArgs> | null
  }


  /**
   * Model urltag
   */

  export type AggregateUrltag = {
    _count: UrltagCountAggregateOutputType | null
    _avg: UrltagAvgAggregateOutputType | null
    _sum: UrltagSumAggregateOutputType | null
    _min: UrltagMinAggregateOutputType | null
    _max: UrltagMaxAggregateOutputType | null
  }

  export type UrltagAvgAggregateOutputType = {
    tag_id: number | null
  }

  export type UrltagSumAggregateOutputType = {
    tag_id: number | null
  }

  export type UrltagMinAggregateOutputType = {
    tag_id: number | null
    user_id: string | null
    tag_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type UrltagMaxAggregateOutputType = {
    tag_id: number | null
    user_id: string | null
    tag_name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type UrltagCountAggregateOutputType = {
    tag_id: number
    user_id: number
    tag_name: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type UrltagAvgAggregateInputType = {
    tag_id?: true
  }

  export type UrltagSumAggregateInputType = {
    tag_id?: true
  }

  export type UrltagMinAggregateInputType = {
    tag_id?: true
    user_id?: true
    tag_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type UrltagMaxAggregateInputType = {
    tag_id?: true
    user_id?: true
    tag_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type UrltagCountAggregateInputType = {
    tag_id?: true
    user_id?: true
    tag_name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type UrltagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which urltag to aggregate.
     */
    where?: urltagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urltags to fetch.
     */
    orderBy?: urltagOrderByWithRelationInput | urltagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: urltagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urltags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urltags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned urltags
    **/
    _count?: true | UrltagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrltagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrltagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrltagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrltagMaxAggregateInputType
  }

  export type GetUrltagAggregateType<T extends UrltagAggregateArgs> = {
        [P in keyof T & keyof AggregateUrltag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrltag[P]>
      : GetScalarType<T[P], AggregateUrltag[P]>
  }




  export type urltagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: urltagWhereInput
    orderBy?: urltagOrderByWithAggregationInput | urltagOrderByWithAggregationInput[]
    by: UrltagScalarFieldEnum[] | UrltagScalarFieldEnum
    having?: urltagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrltagCountAggregateInputType | true
    _avg?: UrltagAvgAggregateInputType
    _sum?: UrltagSumAggregateInputType
    _min?: UrltagMinAggregateInputType
    _max?: UrltagMaxAggregateInputType
  }

  export type UrltagGroupByOutputType = {
    tag_id: number
    user_id: string
    tag_name: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: UrltagCountAggregateOutputType | null
    _avg: UrltagAvgAggregateOutputType | null
    _sum: UrltagSumAggregateOutputType | null
    _min: UrltagMinAggregateOutputType | null
    _max: UrltagMaxAggregateOutputType | null
  }

  type GetUrltagGroupByPayload<T extends urltagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrltagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrltagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrltagGroupByOutputType[P]>
            : GetScalarType<T[P], UrltagGroupByOutputType[P]>
        }
      >
    >


  export type urltagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    user_id?: boolean
    tag_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    url?: boolean | urltag$urlArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | UrltagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urltag"]>

  export type urltagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    user_id?: boolean
    tag_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urltag"]>

  export type urltagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_id?: boolean
    user_id?: boolean
    tag_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urltag"]>

  export type urltagSelectScalar = {
    tag_id?: boolean
    user_id?: boolean
    tag_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type urltagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_id" | "user_id" | "tag_name" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["urltag"]>
  export type urltagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url?: boolean | urltag$urlArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | UrltagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type urltagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type urltagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $urltagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "urltag"
    objects: {
      url: Prisma.$urlPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_id: number
      user_id: string
      tag_name: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["urltag"]>
    composites: {}
  }

  type urltagGetPayload<S extends boolean | null | undefined | urltagDefaultArgs> = $Result.GetResult<Prisma.$urltagPayload, S>

  type urltagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<urltagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrltagCountAggregateInputType | true
    }

  export interface urltagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['urltag'], meta: { name: 'urltag' } }
    /**
     * Find zero or one Urltag that matches the filter.
     * @param {urltagFindUniqueArgs} args - Arguments to find a Urltag
     * @example
     * // Get one Urltag
     * const urltag = await prisma.urltag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends urltagFindUniqueArgs>(args: SelectSubset<T, urltagFindUniqueArgs<ExtArgs>>): Prisma__urltagClient<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Urltag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {urltagFindUniqueOrThrowArgs} args - Arguments to find a Urltag
     * @example
     * // Get one Urltag
     * const urltag = await prisma.urltag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends urltagFindUniqueOrThrowArgs>(args: SelectSubset<T, urltagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__urltagClient<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Urltag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urltagFindFirstArgs} args - Arguments to find a Urltag
     * @example
     * // Get one Urltag
     * const urltag = await prisma.urltag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends urltagFindFirstArgs>(args?: SelectSubset<T, urltagFindFirstArgs<ExtArgs>>): Prisma__urltagClient<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Urltag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urltagFindFirstOrThrowArgs} args - Arguments to find a Urltag
     * @example
     * // Get one Urltag
     * const urltag = await prisma.urltag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends urltagFindFirstOrThrowArgs>(args?: SelectSubset<T, urltagFindFirstOrThrowArgs<ExtArgs>>): Prisma__urltagClient<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Urltags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urltagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urltags
     * const urltags = await prisma.urltag.findMany()
     * 
     * // Get first 10 Urltags
     * const urltags = await prisma.urltag.findMany({ take: 10 })
     * 
     * // Only select the `tag_id`
     * const urltagWithTag_idOnly = await prisma.urltag.findMany({ select: { tag_id: true } })
     * 
     */
    findMany<T extends urltagFindManyArgs>(args?: SelectSubset<T, urltagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Urltag.
     * @param {urltagCreateArgs} args - Arguments to create a Urltag.
     * @example
     * // Create one Urltag
     * const Urltag = await prisma.urltag.create({
     *   data: {
     *     // ... data to create a Urltag
     *   }
     * })
     * 
     */
    create<T extends urltagCreateArgs>(args: SelectSubset<T, urltagCreateArgs<ExtArgs>>): Prisma__urltagClient<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Urltags.
     * @param {urltagCreateManyArgs} args - Arguments to create many Urltags.
     * @example
     * // Create many Urltags
     * const urltag = await prisma.urltag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends urltagCreateManyArgs>(args?: SelectSubset<T, urltagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Urltags and returns the data saved in the database.
     * @param {urltagCreateManyAndReturnArgs} args - Arguments to create many Urltags.
     * @example
     * // Create many Urltags
     * const urltag = await prisma.urltag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Urltags and only return the `tag_id`
     * const urltagWithTag_idOnly = await prisma.urltag.createManyAndReturn({
     *   select: { tag_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends urltagCreateManyAndReturnArgs>(args?: SelectSubset<T, urltagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Urltag.
     * @param {urltagDeleteArgs} args - Arguments to delete one Urltag.
     * @example
     * // Delete one Urltag
     * const Urltag = await prisma.urltag.delete({
     *   where: {
     *     // ... filter to delete one Urltag
     *   }
     * })
     * 
     */
    delete<T extends urltagDeleteArgs>(args: SelectSubset<T, urltagDeleteArgs<ExtArgs>>): Prisma__urltagClient<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Urltag.
     * @param {urltagUpdateArgs} args - Arguments to update one Urltag.
     * @example
     * // Update one Urltag
     * const urltag = await prisma.urltag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends urltagUpdateArgs>(args: SelectSubset<T, urltagUpdateArgs<ExtArgs>>): Prisma__urltagClient<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Urltags.
     * @param {urltagDeleteManyArgs} args - Arguments to filter Urltags to delete.
     * @example
     * // Delete a few Urltags
     * const { count } = await prisma.urltag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends urltagDeleteManyArgs>(args?: SelectSubset<T, urltagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urltags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urltagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urltags
     * const urltag = await prisma.urltag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends urltagUpdateManyArgs>(args: SelectSubset<T, urltagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urltags and returns the data updated in the database.
     * @param {urltagUpdateManyAndReturnArgs} args - Arguments to update many Urltags.
     * @example
     * // Update many Urltags
     * const urltag = await prisma.urltag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Urltags and only return the `tag_id`
     * const urltagWithTag_idOnly = await prisma.urltag.updateManyAndReturn({
     *   select: { tag_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends urltagUpdateManyAndReturnArgs>(args: SelectSubset<T, urltagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Urltag.
     * @param {urltagUpsertArgs} args - Arguments to update or create a Urltag.
     * @example
     * // Update or create a Urltag
     * const urltag = await prisma.urltag.upsert({
     *   create: {
     *     // ... data to create a Urltag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Urltag we want to update
     *   }
     * })
     */
    upsert<T extends urltagUpsertArgs>(args: SelectSubset<T, urltagUpsertArgs<ExtArgs>>): Prisma__urltagClient<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Urltags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urltagCountArgs} args - Arguments to filter Urltags to count.
     * @example
     * // Count the number of Urltags
     * const count = await prisma.urltag.count({
     *   where: {
     *     // ... the filter for the Urltags we want to count
     *   }
     * })
    **/
    count<T extends urltagCountArgs>(
      args?: Subset<T, urltagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrltagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Urltag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrltagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UrltagAggregateArgs>(args: Subset<T, UrltagAggregateArgs>): Prisma.PrismaPromise<GetUrltagAggregateType<T>>

    /**
     * Group by Urltag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {urltagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends urltagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: urltagGroupByArgs['orderBy'] }
        : { orderBy?: urltagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, urltagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrltagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the urltag model
   */
  readonly fields: urltagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for urltag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__urltagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    url<T extends urltag$urlArgs<ExtArgs> = {}>(args?: Subset<T, urltag$urlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the urltag model
   */
  interface urltagFieldRefs {
    readonly tag_id: FieldRef<"urltag", 'Int'>
    readonly user_id: FieldRef<"urltag", 'String'>
    readonly tag_name: FieldRef<"urltag", 'String'>
    readonly created_at: FieldRef<"urltag", 'DateTime'>
    readonly updated_at: FieldRef<"urltag", 'DateTime'>
    readonly deleted_at: FieldRef<"urltag", 'DateTime'>
    readonly is_deleted: FieldRef<"urltag", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * urltag findUnique
   */
  export type urltagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    /**
     * Filter, which urltag to fetch.
     */
    where: urltagWhereUniqueInput
  }

  /**
   * urltag findUniqueOrThrow
   */
  export type urltagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    /**
     * Filter, which urltag to fetch.
     */
    where: urltagWhereUniqueInput
  }

  /**
   * urltag findFirst
   */
  export type urltagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    /**
     * Filter, which urltag to fetch.
     */
    where?: urltagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urltags to fetch.
     */
    orderBy?: urltagOrderByWithRelationInput | urltagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for urltags.
     */
    cursor?: urltagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urltags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urltags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of urltags.
     */
    distinct?: UrltagScalarFieldEnum | UrltagScalarFieldEnum[]
  }

  /**
   * urltag findFirstOrThrow
   */
  export type urltagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    /**
     * Filter, which urltag to fetch.
     */
    where?: urltagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urltags to fetch.
     */
    orderBy?: urltagOrderByWithRelationInput | urltagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for urltags.
     */
    cursor?: urltagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urltags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urltags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of urltags.
     */
    distinct?: UrltagScalarFieldEnum | UrltagScalarFieldEnum[]
  }

  /**
   * urltag findMany
   */
  export type urltagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    /**
     * Filter, which urltags to fetch.
     */
    where?: urltagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of urltags to fetch.
     */
    orderBy?: urltagOrderByWithRelationInput | urltagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing urltags.
     */
    cursor?: urltagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` urltags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` urltags.
     */
    skip?: number
    distinct?: UrltagScalarFieldEnum | UrltagScalarFieldEnum[]
  }

  /**
   * urltag create
   */
  export type urltagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    /**
     * The data needed to create a urltag.
     */
    data: XOR<urltagCreateInput, urltagUncheckedCreateInput>
  }

  /**
   * urltag createMany
   */
  export type urltagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many urltags.
     */
    data: urltagCreateManyInput | urltagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * urltag createManyAndReturn
   */
  export type urltagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * The data used to create many urltags.
     */
    data: urltagCreateManyInput | urltagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * urltag update
   */
  export type urltagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    /**
     * The data needed to update a urltag.
     */
    data: XOR<urltagUpdateInput, urltagUncheckedUpdateInput>
    /**
     * Choose, which urltag to update.
     */
    where: urltagWhereUniqueInput
  }

  /**
   * urltag updateMany
   */
  export type urltagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update urltags.
     */
    data: XOR<urltagUpdateManyMutationInput, urltagUncheckedUpdateManyInput>
    /**
     * Filter which urltags to update
     */
    where?: urltagWhereInput
    /**
     * Limit how many urltags to update.
     */
    limit?: number
  }

  /**
   * urltag updateManyAndReturn
   */
  export type urltagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * The data used to update urltags.
     */
    data: XOR<urltagUpdateManyMutationInput, urltagUncheckedUpdateManyInput>
    /**
     * Filter which urltags to update
     */
    where?: urltagWhereInput
    /**
     * Limit how many urltags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * urltag upsert
   */
  export type urltagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    /**
     * The filter to search for the urltag to update in case it exists.
     */
    where: urltagWhereUniqueInput
    /**
     * In case the urltag found by the `where` argument doesn't exist, create a new urltag with this data.
     */
    create: XOR<urltagCreateInput, urltagUncheckedCreateInput>
    /**
     * In case the urltag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<urltagUpdateInput, urltagUncheckedUpdateInput>
  }

  /**
   * urltag delete
   */
  export type urltagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    /**
     * Filter which urltag to delete.
     */
    where: urltagWhereUniqueInput
  }

  /**
   * urltag deleteMany
   */
  export type urltagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which urltags to delete
     */
    where?: urltagWhereInput
    /**
     * Limit how many urltags to delete.
     */
    limit?: number
  }

  /**
   * urltag.url
   */
  export type urltag$urlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    where?: urlWhereInput
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    cursor?: urlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * urltag without action
   */
  export type urltagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
  }


  /**
   * Model userrole
   */

  export type AggregateUserrole = {
    _count: UserroleCountAggregateOutputType | null
    _avg: UserroleAvgAggregateOutputType | null
    _sum: UserroleSumAggregateOutputType | null
    _min: UserroleMinAggregateOutputType | null
    _max: UserroleMaxAggregateOutputType | null
  }

  export type UserroleAvgAggregateOutputType = {
    role_id: number | null
  }

  export type UserroleSumAggregateOutputType = {
    role_id: number | null
  }

  export type UserroleMinAggregateOutputType = {
    role_id: number | null
    role_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type UserroleMaxAggregateOutputType = {
    role_id: number | null
    role_name: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type UserroleCountAggregateOutputType = {
    role_id: number
    role_name: number
    description: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type UserroleAvgAggregateInputType = {
    role_id?: true
  }

  export type UserroleSumAggregateInputType = {
    role_id?: true
  }

  export type UserroleMinAggregateInputType = {
    role_id?: true
    role_name?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type UserroleMaxAggregateInputType = {
    role_id?: true
    role_name?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type UserroleCountAggregateInputType = {
    role_id?: true
    role_name?: true
    description?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type UserroleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userrole to aggregate.
     */
    where?: userroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userroles to fetch.
     */
    orderBy?: userroleOrderByWithRelationInput | userroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userroles
    **/
    _count?: true | UserroleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserroleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserroleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserroleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserroleMaxAggregateInputType
  }

  export type GetUserroleAggregateType<T extends UserroleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserrole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserrole[P]>
      : GetScalarType<T[P], AggregateUserrole[P]>
  }




  export type userroleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userroleWhereInput
    orderBy?: userroleOrderByWithAggregationInput | userroleOrderByWithAggregationInput[]
    by: UserroleScalarFieldEnum[] | UserroleScalarFieldEnum
    having?: userroleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserroleCountAggregateInputType | true
    _avg?: UserroleAvgAggregateInputType
    _sum?: UserroleSumAggregateInputType
    _min?: UserroleMinAggregateInputType
    _max?: UserroleMaxAggregateInputType
  }

  export type UserroleGroupByOutputType = {
    role_id: number
    role_name: string
    description: string | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: UserroleCountAggregateOutputType | null
    _avg: UserroleAvgAggregateOutputType | null
    _sum: UserroleSumAggregateOutputType | null
    _min: UserroleMinAggregateOutputType | null
    _max: UserroleMaxAggregateOutputType | null
  }

  type GetUserroleGroupByPayload<T extends userroleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserroleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserroleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserroleGroupByOutputType[P]>
            : GetScalarType<T[P], UserroleGroupByOutputType[P]>
        }
      >
    >


  export type userroleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    users?: boolean | userrole$usersArgs<ExtArgs>
    _count?: boolean | UserroleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userrole"]>

  export type userroleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }, ExtArgs["result"]["userrole"]>

  export type userroleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    role_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }, ExtArgs["result"]["userrole"]>

  export type userroleSelectScalar = {
    role_id?: boolean
    role_name?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type userroleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "role_name" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["userrole"]>
  export type userroleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userrole$usersArgs<ExtArgs>
    _count?: boolean | UserroleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userroleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userroleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userrolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userrole"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      role_name: string
      description: string | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["userrole"]>
    composites: {}
  }

  type userroleGetPayload<S extends boolean | null | undefined | userroleDefaultArgs> = $Result.GetResult<Prisma.$userrolePayload, S>

  type userroleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userroleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserroleCountAggregateInputType | true
    }

  export interface userroleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userrole'], meta: { name: 'userrole' } }
    /**
     * Find zero or one Userrole that matches the filter.
     * @param {userroleFindUniqueArgs} args - Arguments to find a Userrole
     * @example
     * // Get one Userrole
     * const userrole = await prisma.userrole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userroleFindUniqueArgs>(args: SelectSubset<T, userroleFindUniqueArgs<ExtArgs>>): Prisma__userroleClient<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Userrole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userroleFindUniqueOrThrowArgs} args - Arguments to find a Userrole
     * @example
     * // Get one Userrole
     * const userrole = await prisma.userrole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userroleFindUniqueOrThrowArgs>(args: SelectSubset<T, userroleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userroleClient<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Userrole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userroleFindFirstArgs} args - Arguments to find a Userrole
     * @example
     * // Get one Userrole
     * const userrole = await prisma.userrole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userroleFindFirstArgs>(args?: SelectSubset<T, userroleFindFirstArgs<ExtArgs>>): Prisma__userroleClient<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Userrole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userroleFindFirstOrThrowArgs} args - Arguments to find a Userrole
     * @example
     * // Get one Userrole
     * const userrole = await prisma.userrole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userroleFindFirstOrThrowArgs>(args?: SelectSubset<T, userroleFindFirstOrThrowArgs<ExtArgs>>): Prisma__userroleClient<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Userroles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userroleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Userroles
     * const userroles = await prisma.userrole.findMany()
     * 
     * // Get first 10 Userroles
     * const userroles = await prisma.userrole.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const userroleWithRole_idOnly = await prisma.userrole.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends userroleFindManyArgs>(args?: SelectSubset<T, userroleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Userrole.
     * @param {userroleCreateArgs} args - Arguments to create a Userrole.
     * @example
     * // Create one Userrole
     * const Userrole = await prisma.userrole.create({
     *   data: {
     *     // ... data to create a Userrole
     *   }
     * })
     * 
     */
    create<T extends userroleCreateArgs>(args: SelectSubset<T, userroleCreateArgs<ExtArgs>>): Prisma__userroleClient<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Userroles.
     * @param {userroleCreateManyArgs} args - Arguments to create many Userroles.
     * @example
     * // Create many Userroles
     * const userrole = await prisma.userrole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userroleCreateManyArgs>(args?: SelectSubset<T, userroleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Userroles and returns the data saved in the database.
     * @param {userroleCreateManyAndReturnArgs} args - Arguments to create many Userroles.
     * @example
     * // Create many Userroles
     * const userrole = await prisma.userrole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Userroles and only return the `role_id`
     * const userroleWithRole_idOnly = await prisma.userrole.createManyAndReturn({
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userroleCreateManyAndReturnArgs>(args?: SelectSubset<T, userroleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Userrole.
     * @param {userroleDeleteArgs} args - Arguments to delete one Userrole.
     * @example
     * // Delete one Userrole
     * const Userrole = await prisma.userrole.delete({
     *   where: {
     *     // ... filter to delete one Userrole
     *   }
     * })
     * 
     */
    delete<T extends userroleDeleteArgs>(args: SelectSubset<T, userroleDeleteArgs<ExtArgs>>): Prisma__userroleClient<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Userrole.
     * @param {userroleUpdateArgs} args - Arguments to update one Userrole.
     * @example
     * // Update one Userrole
     * const userrole = await prisma.userrole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userroleUpdateArgs>(args: SelectSubset<T, userroleUpdateArgs<ExtArgs>>): Prisma__userroleClient<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Userroles.
     * @param {userroleDeleteManyArgs} args - Arguments to filter Userroles to delete.
     * @example
     * // Delete a few Userroles
     * const { count } = await prisma.userrole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userroleDeleteManyArgs>(args?: SelectSubset<T, userroleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userroles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userroleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Userroles
     * const userrole = await prisma.userrole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userroleUpdateManyArgs>(args: SelectSubset<T, userroleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Userroles and returns the data updated in the database.
     * @param {userroleUpdateManyAndReturnArgs} args - Arguments to update many Userroles.
     * @example
     * // Update many Userroles
     * const userrole = await prisma.userrole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Userroles and only return the `role_id`
     * const userroleWithRole_idOnly = await prisma.userrole.updateManyAndReturn({
     *   select: { role_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userroleUpdateManyAndReturnArgs>(args: SelectSubset<T, userroleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Userrole.
     * @param {userroleUpsertArgs} args - Arguments to update or create a Userrole.
     * @example
     * // Update or create a Userrole
     * const userrole = await prisma.userrole.upsert({
     *   create: {
     *     // ... data to create a Userrole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Userrole we want to update
     *   }
     * })
     */
    upsert<T extends userroleUpsertArgs>(args: SelectSubset<T, userroleUpsertArgs<ExtArgs>>): Prisma__userroleClient<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Userroles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userroleCountArgs} args - Arguments to filter Userroles to count.
     * @example
     * // Count the number of Userroles
     * const count = await prisma.userrole.count({
     *   where: {
     *     // ... the filter for the Userroles we want to count
     *   }
     * })
    **/
    count<T extends userroleCountArgs>(
      args?: Subset<T, userroleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserroleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Userrole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserroleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserroleAggregateArgs>(args: Subset<T, UserroleAggregateArgs>): Prisma.PrismaPromise<GetUserroleAggregateType<T>>

    /**
     * Group by Userrole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userroleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userroleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userroleGroupByArgs['orderBy'] }
        : { orderBy?: userroleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userroleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserroleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userrole model
   */
  readonly fields: userroleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userrole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userroleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends userrole$usersArgs<ExtArgs> = {}>(args?: Subset<T, userrole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userrole model
   */
  interface userroleFieldRefs {
    readonly role_id: FieldRef<"userrole", 'Int'>
    readonly role_name: FieldRef<"userrole", 'String'>
    readonly description: FieldRef<"userrole", 'String'>
    readonly created_at: FieldRef<"userrole", 'DateTime'>
    readonly updated_at: FieldRef<"userrole", 'DateTime'>
    readonly deleted_at: FieldRef<"userrole", 'DateTime'>
    readonly is_deleted: FieldRef<"userrole", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * userrole findUnique
   */
  export type userroleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
    /**
     * Filter, which userrole to fetch.
     */
    where: userroleWhereUniqueInput
  }

  /**
   * userrole findUniqueOrThrow
   */
  export type userroleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
    /**
     * Filter, which userrole to fetch.
     */
    where: userroleWhereUniqueInput
  }

  /**
   * userrole findFirst
   */
  export type userroleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
    /**
     * Filter, which userrole to fetch.
     */
    where?: userroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userroles to fetch.
     */
    orderBy?: userroleOrderByWithRelationInput | userroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userroles.
     */
    cursor?: userroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userroles.
     */
    distinct?: UserroleScalarFieldEnum | UserroleScalarFieldEnum[]
  }

  /**
   * userrole findFirstOrThrow
   */
  export type userroleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
    /**
     * Filter, which userrole to fetch.
     */
    where?: userroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userroles to fetch.
     */
    orderBy?: userroleOrderByWithRelationInput | userroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userroles.
     */
    cursor?: userroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userroles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userroles.
     */
    distinct?: UserroleScalarFieldEnum | UserroleScalarFieldEnum[]
  }

  /**
   * userrole findMany
   */
  export type userroleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
    /**
     * Filter, which userroles to fetch.
     */
    where?: userroleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userroles to fetch.
     */
    orderBy?: userroleOrderByWithRelationInput | userroleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userroles.
     */
    cursor?: userroleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userroles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userroles.
     */
    skip?: number
    distinct?: UserroleScalarFieldEnum | UserroleScalarFieldEnum[]
  }

  /**
   * userrole create
   */
  export type userroleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
    /**
     * The data needed to create a userrole.
     */
    data: XOR<userroleCreateInput, userroleUncheckedCreateInput>
  }

  /**
   * userrole createMany
   */
  export type userroleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userroles.
     */
    data: userroleCreateManyInput | userroleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userrole createManyAndReturn
   */
  export type userroleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * The data used to create many userroles.
     */
    data: userroleCreateManyInput | userroleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userrole update
   */
  export type userroleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
    /**
     * The data needed to update a userrole.
     */
    data: XOR<userroleUpdateInput, userroleUncheckedUpdateInput>
    /**
     * Choose, which userrole to update.
     */
    where: userroleWhereUniqueInput
  }

  /**
   * userrole updateMany
   */
  export type userroleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userroles.
     */
    data: XOR<userroleUpdateManyMutationInput, userroleUncheckedUpdateManyInput>
    /**
     * Filter which userroles to update
     */
    where?: userroleWhereInput
    /**
     * Limit how many userroles to update.
     */
    limit?: number
  }

  /**
   * userrole updateManyAndReturn
   */
  export type userroleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * The data used to update userroles.
     */
    data: XOR<userroleUpdateManyMutationInput, userroleUncheckedUpdateManyInput>
    /**
     * Filter which userroles to update
     */
    where?: userroleWhereInput
    /**
     * Limit how many userroles to update.
     */
    limit?: number
  }

  /**
   * userrole upsert
   */
  export type userroleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
    /**
     * The filter to search for the userrole to update in case it exists.
     */
    where: userroleWhereUniqueInput
    /**
     * In case the userrole found by the `where` argument doesn't exist, create a new userrole with this data.
     */
    create: XOR<userroleCreateInput, userroleUncheckedCreateInput>
    /**
     * In case the userrole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userroleUpdateInput, userroleUncheckedUpdateInput>
  }

  /**
   * userrole delete
   */
  export type userroleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
    /**
     * Filter which userrole to delete.
     */
    where: userroleWhereUniqueInput
  }

  /**
   * userrole deleteMany
   */
  export type userroleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userroles to delete
     */
    where?: userroleWhereInput
    /**
     * Limit how many userroles to delete.
     */
    limit?: number
  }

  /**
   * userrole.users
   */
  export type userrole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * userrole without action
   */
  export type userroleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    role_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    role_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    role_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    role_id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    username: number
    email: number
    password_hash: number
    role_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    role_id?: true
  }

  export type UsersSumAggregateInputType = {
    role_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password_hash?: true
    role_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: string
    username: string
    email: string
    password_hash: string
    role_id: number | null
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    is_deleted: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    apikey?: boolean | users$apikeyArgs<ExtArgs>
    auditlog?: boolean | users$auditlogArgs<ExtArgs>
    logo?: boolean | users$logoArgs<ExtArgs>
    url?: boolean | users$urlArgs<ExtArgs>
    urltag?: boolean | users$urltagArgs<ExtArgs>
    userrole?: boolean | users$userroleArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    userrole?: boolean | users$userroleArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    userrole?: boolean | users$userroleArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "email" | "password_hash" | "role_id" | "created_at" | "updated_at" | "deleted_at" | "is_deleted", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apikey?: boolean | users$apikeyArgs<ExtArgs>
    auditlog?: boolean | users$auditlogArgs<ExtArgs>
    logo?: boolean | users$logoArgs<ExtArgs>
    url?: boolean | users$urlArgs<ExtArgs>
    urltag?: boolean | users$urltagArgs<ExtArgs>
    userrole?: boolean | users$userroleArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userrole?: boolean | users$userroleArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userrole?: boolean | users$userroleArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      apikey: Prisma.$apikeyPayload<ExtArgs>[]
      auditlog: Prisma.$auditlogPayload<ExtArgs>[]
      logo: Prisma.$logoPayload<ExtArgs>[]
      url: Prisma.$urlPayload<ExtArgs>[]
      urltag: Prisma.$urltagPayload<ExtArgs>[]
      userrole: Prisma.$userrolePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      username: string
      email: string
      password_hash: string
      role_id: number | null
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
      is_deleted: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apikey<T extends users$apikeyArgs<ExtArgs> = {}>(args?: Subset<T, users$apikeyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$apikeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditlog<T extends users$auditlogArgs<ExtArgs> = {}>(args?: Subset<T, users$auditlogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    logo<T extends users$logoArgs<ExtArgs> = {}>(args?: Subset<T, users$logoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    url<T extends users$urlArgs<ExtArgs> = {}>(args?: Subset<T, users$urlArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    urltag<T extends users$urltagArgs<ExtArgs> = {}>(args?: Subset<T, users$urltagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$urltagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userrole<T extends users$userroleArgs<ExtArgs> = {}>(args?: Subset<T, users$userroleArgs<ExtArgs>>): Prisma__userroleClient<$Result.GetResult<Prisma.$userrolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role_id: FieldRef<"users", 'Int'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
    readonly is_deleted: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.apikey
   */
  export type users$apikeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the apikey
     */
    select?: apikeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the apikey
     */
    omit?: apikeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: apikeyInclude<ExtArgs> | null
    where?: apikeyWhereInput
    orderBy?: apikeyOrderByWithRelationInput | apikeyOrderByWithRelationInput[]
    cursor?: apikeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApikeyScalarFieldEnum | ApikeyScalarFieldEnum[]
  }

  /**
   * users.auditlog
   */
  export type users$auditlogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: auditlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auditlog
     */
    omit?: auditlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auditlogInclude<ExtArgs> | null
    where?: auditlogWhereInput
    orderBy?: auditlogOrderByWithRelationInput | auditlogOrderByWithRelationInput[]
    cursor?: auditlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditlogScalarFieldEnum | AuditlogScalarFieldEnum[]
  }

  /**
   * users.logo
   */
  export type users$logoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logo
     */
    select?: logoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logo
     */
    omit?: logoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logoInclude<ExtArgs> | null
    where?: logoWhereInput
    orderBy?: logoOrderByWithRelationInput | logoOrderByWithRelationInput[]
    cursor?: logoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogoScalarFieldEnum | LogoScalarFieldEnum[]
  }

  /**
   * users.url
   */
  export type users$urlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the url
     */
    select?: urlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the url
     */
    omit?: urlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urlInclude<ExtArgs> | null
    where?: urlWhereInput
    orderBy?: urlOrderByWithRelationInput | urlOrderByWithRelationInput[]
    cursor?: urlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * users.urltag
   */
  export type users$urltagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the urltag
     */
    select?: urltagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the urltag
     */
    omit?: urltagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: urltagInclude<ExtArgs> | null
    where?: urltagWhereInput
    orderBy?: urltagOrderByWithRelationInput | urltagOrderByWithRelationInput[]
    cursor?: urltagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrltagScalarFieldEnum | UrltagScalarFieldEnum[]
  }

  /**
   * users.userrole
   */
  export type users$userroleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userrole
     */
    select?: userroleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userrole
     */
    omit?: userroleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userroleInclude<ExtArgs> | null
    where?: userroleWhereInput
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApikeyScalarFieldEnum: {
    api_key_id: 'api_key_id',
    user_id: 'user_id',
    api_key: 'api_key',
    created_at: 'created_at',
    expires_at: 'expires_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type ApikeyScalarFieldEnum = (typeof ApikeyScalarFieldEnum)[keyof typeof ApikeyScalarFieldEnum]


  export const AuditlogScalarFieldEnum: {
    audit_id: 'audit_id',
    url_id: 'url_id',
    action: 'action',
    changed_by: 'changed_by',
    change_date: 'change_date',
    details: 'details',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type AuditlogScalarFieldEnum = (typeof AuditlogScalarFieldEnum)[keyof typeof AuditlogScalarFieldEnum]


  export const LogoScalarFieldEnum: {
    logo_id: 'logo_id',
    user_id: 'user_id',
    logo_path: 'logo_path',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type LogoScalarFieldEnum = (typeof LogoScalarFieldEnum)[keyof typeof LogoScalarFieldEnum]


  export const UrlScalarFieldEnum: {
    url_id: 'url_id',
    user_id: 'user_id',
    original_url: 'original_url',
    short_url: 'short_url',
    logo_id: 'logo_id',
    tag_id: 'tag_id',
    url_type: 'url_type',
    associated: 'associated',
    expiration_date: 'expiration_date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted',
    is_pre_generated: 'is_pre_generated',
    associated_at: 'associated_at',
    status: 'status'
  };

  export type UrlScalarFieldEnum = (typeof UrlScalarFieldEnum)[keyof typeof UrlScalarFieldEnum]


  export const UrlclickScalarFieldEnum: {
    click_id: 'click_id',
    url_id: 'url_id',
    access_date: 'access_date',
    access_time: 'access_time',
    ip_address: 'ip_address',
    user_agent: 'user_agent',
    referrer: 'referrer',
    country: 'country',
    city: 'city',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type UrlclickScalarFieldEnum = (typeof UrlclickScalarFieldEnum)[keyof typeof UrlclickScalarFieldEnum]


  export const UrltagScalarFieldEnum: {
    tag_id: 'tag_id',
    user_id: 'user_id',
    tag_name: 'tag_name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type UrltagScalarFieldEnum = (typeof UrltagScalarFieldEnum)[keyof typeof UrltagScalarFieldEnum]


  export const UserroleScalarFieldEnum: {
    role_id: 'role_id',
    role_name: 'role_name',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type UserroleScalarFieldEnum = (typeof UserroleScalarFieldEnum)[keyof typeof UserroleScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    role_id: 'role_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'urltypeenum'
   */
  export type EnumurltypeenumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'urltypeenum'>
    


  /**
   * Reference to a field of type 'urltypeenum[]'
   */
  export type ListEnumurltypeenumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'urltypeenum[]'>
    


  /**
   * Reference to a field of type 'statusenum'
   */
  export type EnumstatusenumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusenum'>
    


  /**
   * Reference to a field of type 'statusenum[]'
   */
  export type ListEnumstatusenumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusenum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type apikeyWhereInput = {
    AND?: apikeyWhereInput | apikeyWhereInput[]
    OR?: apikeyWhereInput[]
    NOT?: apikeyWhereInput | apikeyWhereInput[]
    api_key_id?: IntFilter<"apikey"> | number
    user_id?: UuidFilter<"apikey"> | string
    api_key?: StringFilter<"apikey"> | string
    created_at?: DateTimeFilter<"apikey"> | Date | string
    expires_at?: DateTimeNullableFilter<"apikey"> | Date | string | null
    updated_at?: DateTimeFilter<"apikey"> | Date | string
    deleted_at?: DateTimeNullableFilter<"apikey"> | Date | string | null
    is_deleted?: BoolFilter<"apikey"> | boolean
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type apikeyOrderByWithRelationInput = {
    api_key_id?: SortOrder
    user_id?: SortOrder
    api_key?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type apikeyWhereUniqueInput = Prisma.AtLeast<{
    api_key_id?: number
    api_key?: string
    AND?: apikeyWhereInput | apikeyWhereInput[]
    OR?: apikeyWhereInput[]
    NOT?: apikeyWhereInput | apikeyWhereInput[]
    user_id?: UuidFilter<"apikey"> | string
    created_at?: DateTimeFilter<"apikey"> | Date | string
    expires_at?: DateTimeNullableFilter<"apikey"> | Date | string | null
    updated_at?: DateTimeFilter<"apikey"> | Date | string
    deleted_at?: DateTimeNullableFilter<"apikey"> | Date | string | null
    is_deleted?: BoolFilter<"apikey"> | boolean
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "api_key_id" | "api_key">

  export type apikeyOrderByWithAggregationInput = {
    api_key_id?: SortOrder
    user_id?: SortOrder
    api_key?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: apikeyCountOrderByAggregateInput
    _avg?: apikeyAvgOrderByAggregateInput
    _max?: apikeyMaxOrderByAggregateInput
    _min?: apikeyMinOrderByAggregateInput
    _sum?: apikeySumOrderByAggregateInput
  }

  export type apikeyScalarWhereWithAggregatesInput = {
    AND?: apikeyScalarWhereWithAggregatesInput | apikeyScalarWhereWithAggregatesInput[]
    OR?: apikeyScalarWhereWithAggregatesInput[]
    NOT?: apikeyScalarWhereWithAggregatesInput | apikeyScalarWhereWithAggregatesInput[]
    api_key_id?: IntWithAggregatesFilter<"apikey"> | number
    user_id?: UuidWithAggregatesFilter<"apikey"> | string
    api_key?: StringWithAggregatesFilter<"apikey"> | string
    created_at?: DateTimeWithAggregatesFilter<"apikey"> | Date | string
    expires_at?: DateTimeNullableWithAggregatesFilter<"apikey"> | Date | string | null
    updated_at?: DateTimeWithAggregatesFilter<"apikey"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"apikey"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"apikey"> | boolean
  }

  export type auditlogWhereInput = {
    AND?: auditlogWhereInput | auditlogWhereInput[]
    OR?: auditlogWhereInput[]
    NOT?: auditlogWhereInput | auditlogWhereInput[]
    audit_id?: IntFilter<"auditlog"> | number
    url_id?: UuidFilter<"auditlog"> | string
    action?: StringFilter<"auditlog"> | string
    changed_by?: UuidFilter<"auditlog"> | string
    change_date?: DateTimeFilter<"auditlog"> | Date | string
    details?: StringNullableFilter<"auditlog"> | string | null
    created_at?: DateTimeFilter<"auditlog"> | Date | string
    updated_at?: DateTimeFilter<"auditlog"> | Date | string
    deleted_at?: DateTimeNullableFilter<"auditlog"> | Date | string | null
    is_deleted?: BoolFilter<"auditlog"> | boolean
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    url?: XOR<UrlScalarRelationFilter, urlWhereInput>
  }

  export type auditlogOrderByWithRelationInput = {
    audit_id?: SortOrder
    url_id?: SortOrder
    action?: SortOrder
    changed_by?: SortOrder
    change_date?: SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    users?: usersOrderByWithRelationInput
    url?: urlOrderByWithRelationInput
  }

  export type auditlogWhereUniqueInput = Prisma.AtLeast<{
    audit_id?: number
    AND?: auditlogWhereInput | auditlogWhereInput[]
    OR?: auditlogWhereInput[]
    NOT?: auditlogWhereInput | auditlogWhereInput[]
    url_id?: UuidFilter<"auditlog"> | string
    action?: StringFilter<"auditlog"> | string
    changed_by?: UuidFilter<"auditlog"> | string
    change_date?: DateTimeFilter<"auditlog"> | Date | string
    details?: StringNullableFilter<"auditlog"> | string | null
    created_at?: DateTimeFilter<"auditlog"> | Date | string
    updated_at?: DateTimeFilter<"auditlog"> | Date | string
    deleted_at?: DateTimeNullableFilter<"auditlog"> | Date | string | null
    is_deleted?: BoolFilter<"auditlog"> | boolean
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    url?: XOR<UrlScalarRelationFilter, urlWhereInput>
  }, "audit_id">

  export type auditlogOrderByWithAggregationInput = {
    audit_id?: SortOrder
    url_id?: SortOrder
    action?: SortOrder
    changed_by?: SortOrder
    change_date?: SortOrder
    details?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: auditlogCountOrderByAggregateInput
    _avg?: auditlogAvgOrderByAggregateInput
    _max?: auditlogMaxOrderByAggregateInput
    _min?: auditlogMinOrderByAggregateInput
    _sum?: auditlogSumOrderByAggregateInput
  }

  export type auditlogScalarWhereWithAggregatesInput = {
    AND?: auditlogScalarWhereWithAggregatesInput | auditlogScalarWhereWithAggregatesInput[]
    OR?: auditlogScalarWhereWithAggregatesInput[]
    NOT?: auditlogScalarWhereWithAggregatesInput | auditlogScalarWhereWithAggregatesInput[]
    audit_id?: IntWithAggregatesFilter<"auditlog"> | number
    url_id?: UuidWithAggregatesFilter<"auditlog"> | string
    action?: StringWithAggregatesFilter<"auditlog"> | string
    changed_by?: UuidWithAggregatesFilter<"auditlog"> | string
    change_date?: DateTimeWithAggregatesFilter<"auditlog"> | Date | string
    details?: StringNullableWithAggregatesFilter<"auditlog"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"auditlog"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"auditlog"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"auditlog"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"auditlog"> | boolean
  }

  export type logoWhereInput = {
    AND?: logoWhereInput | logoWhereInput[]
    OR?: logoWhereInput[]
    NOT?: logoWhereInput | logoWhereInput[]
    logo_id?: IntFilter<"logo"> | number
    user_id?: UuidFilter<"logo"> | string
    logo_path?: StringFilter<"logo"> | string
    created_at?: DateTimeFilter<"logo"> | Date | string
    updated_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    is_deleted?: BoolFilter<"logo"> | boolean
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    url?: UrlListRelationFilter
  }

  export type logoOrderByWithRelationInput = {
    logo_id?: SortOrder
    user_id?: SortOrder
    logo_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    users?: usersOrderByWithRelationInput
    url?: urlOrderByRelationAggregateInput
  }

  export type logoWhereUniqueInput = Prisma.AtLeast<{
    logo_id?: number
    AND?: logoWhereInput | logoWhereInput[]
    OR?: logoWhereInput[]
    NOT?: logoWhereInput | logoWhereInput[]
    user_id?: UuidFilter<"logo"> | string
    logo_path?: StringFilter<"logo"> | string
    created_at?: DateTimeFilter<"logo"> | Date | string
    updated_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    is_deleted?: BoolFilter<"logo"> | boolean
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    url?: UrlListRelationFilter
  }, "logo_id">

  export type logoOrderByWithAggregationInput = {
    logo_id?: SortOrder
    user_id?: SortOrder
    logo_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: logoCountOrderByAggregateInput
    _avg?: logoAvgOrderByAggregateInput
    _max?: logoMaxOrderByAggregateInput
    _min?: logoMinOrderByAggregateInput
    _sum?: logoSumOrderByAggregateInput
  }

  export type logoScalarWhereWithAggregatesInput = {
    AND?: logoScalarWhereWithAggregatesInput | logoScalarWhereWithAggregatesInput[]
    OR?: logoScalarWhereWithAggregatesInput[]
    NOT?: logoScalarWhereWithAggregatesInput | logoScalarWhereWithAggregatesInput[]
    logo_id?: IntWithAggregatesFilter<"logo"> | number
    user_id?: UuidWithAggregatesFilter<"logo"> | string
    logo_path?: StringWithAggregatesFilter<"logo"> | string
    created_at?: DateTimeWithAggregatesFilter<"logo"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"logo"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"logo"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"logo"> | boolean
  }

  export type urlWhereInput = {
    AND?: urlWhereInput | urlWhereInput[]
    OR?: urlWhereInput[]
    NOT?: urlWhereInput | urlWhereInput[]
    url_id?: UuidFilter<"url"> | string
    user_id?: UuidNullableFilter<"url"> | string | null
    original_url?: StringNullableFilter<"url"> | string | null
    short_url?: StringFilter<"url"> | string
    logo_id?: IntNullableFilter<"url"> | number | null
    tag_id?: IntNullableFilter<"url"> | number | null
    url_type?: EnumurltypeenumNullableFilter<"url"> | $Enums.urltypeenum | null
    associated?: BoolFilter<"url"> | boolean
    expiration_date?: DateTimeNullableFilter<"url"> | Date | string | null
    created_at?: DateTimeFilter<"url"> | Date | string
    updated_at?: DateTimeFilter<"url"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url"> | Date | string | null
    is_deleted?: BoolFilter<"url"> | boolean
    is_pre_generated?: BoolFilter<"url"> | boolean
    associated_at?: DateTimeNullableFilter<"url"> | Date | string | null
    status?: EnumstatusenumFilter<"url"> | $Enums.statusenum
    auditlog?: AuditlogListRelationFilter
    logo?: XOR<LogoNullableScalarRelationFilter, logoWhereInput> | null
    urltag?: XOR<UrltagNullableScalarRelationFilter, urltagWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    urlclick?: UrlclickListRelationFilter
  }

  export type urlOrderByWithRelationInput = {
    url_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    original_url?: SortOrderInput | SortOrder
    short_url?: SortOrder
    logo_id?: SortOrderInput | SortOrder
    tag_id?: SortOrderInput | SortOrder
    url_type?: SortOrderInput | SortOrder
    associated?: SortOrder
    expiration_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    is_pre_generated?: SortOrder
    associated_at?: SortOrderInput | SortOrder
    status?: SortOrder
    auditlog?: auditlogOrderByRelationAggregateInput
    logo?: logoOrderByWithRelationInput
    urltag?: urltagOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    urlclick?: urlclickOrderByRelationAggregateInput
  }

  export type urlWhereUniqueInput = Prisma.AtLeast<{
    url_id?: string
    short_url?: string
    AND?: urlWhereInput | urlWhereInput[]
    OR?: urlWhereInput[]
    NOT?: urlWhereInput | urlWhereInput[]
    user_id?: UuidNullableFilter<"url"> | string | null
    original_url?: StringNullableFilter<"url"> | string | null
    logo_id?: IntNullableFilter<"url"> | number | null
    tag_id?: IntNullableFilter<"url"> | number | null
    url_type?: EnumurltypeenumNullableFilter<"url"> | $Enums.urltypeenum | null
    associated?: BoolFilter<"url"> | boolean
    expiration_date?: DateTimeNullableFilter<"url"> | Date | string | null
    created_at?: DateTimeFilter<"url"> | Date | string
    updated_at?: DateTimeFilter<"url"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url"> | Date | string | null
    is_deleted?: BoolFilter<"url"> | boolean
    is_pre_generated?: BoolFilter<"url"> | boolean
    associated_at?: DateTimeNullableFilter<"url"> | Date | string | null
    status?: EnumstatusenumFilter<"url"> | $Enums.statusenum
    auditlog?: AuditlogListRelationFilter
    logo?: XOR<LogoNullableScalarRelationFilter, logoWhereInput> | null
    urltag?: XOR<UrltagNullableScalarRelationFilter, urltagWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    urlclick?: UrlclickListRelationFilter
  }, "url_id" | "short_url">

  export type urlOrderByWithAggregationInput = {
    url_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    original_url?: SortOrderInput | SortOrder
    short_url?: SortOrder
    logo_id?: SortOrderInput | SortOrder
    tag_id?: SortOrderInput | SortOrder
    url_type?: SortOrderInput | SortOrder
    associated?: SortOrder
    expiration_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    is_pre_generated?: SortOrder
    associated_at?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: urlCountOrderByAggregateInput
    _avg?: urlAvgOrderByAggregateInput
    _max?: urlMaxOrderByAggregateInput
    _min?: urlMinOrderByAggregateInput
    _sum?: urlSumOrderByAggregateInput
  }

  export type urlScalarWhereWithAggregatesInput = {
    AND?: urlScalarWhereWithAggregatesInput | urlScalarWhereWithAggregatesInput[]
    OR?: urlScalarWhereWithAggregatesInput[]
    NOT?: urlScalarWhereWithAggregatesInput | urlScalarWhereWithAggregatesInput[]
    url_id?: UuidWithAggregatesFilter<"url"> | string
    user_id?: UuidNullableWithAggregatesFilter<"url"> | string | null
    original_url?: StringNullableWithAggregatesFilter<"url"> | string | null
    short_url?: StringWithAggregatesFilter<"url"> | string
    logo_id?: IntNullableWithAggregatesFilter<"url"> | number | null
    tag_id?: IntNullableWithAggregatesFilter<"url"> | number | null
    url_type?: EnumurltypeenumNullableWithAggregatesFilter<"url"> | $Enums.urltypeenum | null
    associated?: BoolWithAggregatesFilter<"url"> | boolean
    expiration_date?: DateTimeNullableWithAggregatesFilter<"url"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"url"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"url"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"url"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"url"> | boolean
    is_pre_generated?: BoolWithAggregatesFilter<"url"> | boolean
    associated_at?: DateTimeNullableWithAggregatesFilter<"url"> | Date | string | null
    status?: EnumstatusenumWithAggregatesFilter<"url"> | $Enums.statusenum
  }

  export type urlclickWhereInput = {
    AND?: urlclickWhereInput | urlclickWhereInput[]
    OR?: urlclickWhereInput[]
    NOT?: urlclickWhereInput | urlclickWhereInput[]
    click_id?: IntFilter<"urlclick"> | number
    url_id?: UuidFilter<"urlclick"> | string
    access_date?: DateTimeFilter<"urlclick"> | Date | string
    access_time?: DateTimeFilter<"urlclick"> | Date | string
    ip_address?: StringFilter<"urlclick"> | string
    user_agent?: StringFilter<"urlclick"> | string
    referrer?: StringNullableFilter<"urlclick"> | string | null
    country?: StringNullableFilter<"urlclick"> | string | null
    city?: StringNullableFilter<"urlclick"> | string | null
    created_at?: DateTimeFilter<"urlclick"> | Date | string
    updated_at?: DateTimeFilter<"urlclick"> | Date | string
    deleted_at?: DateTimeNullableFilter<"urlclick"> | Date | string | null
    is_deleted?: BoolFilter<"urlclick"> | boolean
    url?: XOR<UrlScalarRelationFilter, urlWhereInput>
  }

  export type urlclickOrderByWithRelationInput = {
    click_id?: SortOrder
    url_id?: SortOrder
    access_date?: SortOrder
    access_time?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    url?: urlOrderByWithRelationInput
  }

  export type urlclickWhereUniqueInput = Prisma.AtLeast<{
    click_id?: number
    AND?: urlclickWhereInput | urlclickWhereInput[]
    OR?: urlclickWhereInput[]
    NOT?: urlclickWhereInput | urlclickWhereInput[]
    url_id?: UuidFilter<"urlclick"> | string
    access_date?: DateTimeFilter<"urlclick"> | Date | string
    access_time?: DateTimeFilter<"urlclick"> | Date | string
    ip_address?: StringFilter<"urlclick"> | string
    user_agent?: StringFilter<"urlclick"> | string
    referrer?: StringNullableFilter<"urlclick"> | string | null
    country?: StringNullableFilter<"urlclick"> | string | null
    city?: StringNullableFilter<"urlclick"> | string | null
    created_at?: DateTimeFilter<"urlclick"> | Date | string
    updated_at?: DateTimeFilter<"urlclick"> | Date | string
    deleted_at?: DateTimeNullableFilter<"urlclick"> | Date | string | null
    is_deleted?: BoolFilter<"urlclick"> | boolean
    url?: XOR<UrlScalarRelationFilter, urlWhereInput>
  }, "click_id">

  export type urlclickOrderByWithAggregationInput = {
    click_id?: SortOrder
    url_id?: SortOrder
    access_date?: SortOrder
    access_time?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: urlclickCountOrderByAggregateInput
    _avg?: urlclickAvgOrderByAggregateInput
    _max?: urlclickMaxOrderByAggregateInput
    _min?: urlclickMinOrderByAggregateInput
    _sum?: urlclickSumOrderByAggregateInput
  }

  export type urlclickScalarWhereWithAggregatesInput = {
    AND?: urlclickScalarWhereWithAggregatesInput | urlclickScalarWhereWithAggregatesInput[]
    OR?: urlclickScalarWhereWithAggregatesInput[]
    NOT?: urlclickScalarWhereWithAggregatesInput | urlclickScalarWhereWithAggregatesInput[]
    click_id?: IntWithAggregatesFilter<"urlclick"> | number
    url_id?: UuidWithAggregatesFilter<"urlclick"> | string
    access_date?: DateTimeWithAggregatesFilter<"urlclick"> | Date | string
    access_time?: DateTimeWithAggregatesFilter<"urlclick"> | Date | string
    ip_address?: StringWithAggregatesFilter<"urlclick"> | string
    user_agent?: StringWithAggregatesFilter<"urlclick"> | string
    referrer?: StringNullableWithAggregatesFilter<"urlclick"> | string | null
    country?: StringNullableWithAggregatesFilter<"urlclick"> | string | null
    city?: StringNullableWithAggregatesFilter<"urlclick"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"urlclick"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"urlclick"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"urlclick"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"urlclick"> | boolean
  }

  export type urltagWhereInput = {
    AND?: urltagWhereInput | urltagWhereInput[]
    OR?: urltagWhereInput[]
    NOT?: urltagWhereInput | urltagWhereInput[]
    tag_id?: IntFilter<"urltag"> | number
    user_id?: UuidFilter<"urltag"> | string
    tag_name?: StringFilter<"urltag"> | string
    created_at?: DateTimeFilter<"urltag"> | Date | string
    updated_at?: DateTimeFilter<"urltag"> | Date | string
    deleted_at?: DateTimeNullableFilter<"urltag"> | Date | string | null
    is_deleted?: BoolFilter<"urltag"> | boolean
    url?: UrlListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type urltagOrderByWithRelationInput = {
    tag_id?: SortOrder
    user_id?: SortOrder
    tag_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    url?: urlOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type urltagWhereUniqueInput = Prisma.AtLeast<{
    tag_id?: number
    AND?: urltagWhereInput | urltagWhereInput[]
    OR?: urltagWhereInput[]
    NOT?: urltagWhereInput | urltagWhereInput[]
    user_id?: UuidFilter<"urltag"> | string
    tag_name?: StringFilter<"urltag"> | string
    created_at?: DateTimeFilter<"urltag"> | Date | string
    updated_at?: DateTimeFilter<"urltag"> | Date | string
    deleted_at?: DateTimeNullableFilter<"urltag"> | Date | string | null
    is_deleted?: BoolFilter<"urltag"> | boolean
    url?: UrlListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "tag_id">

  export type urltagOrderByWithAggregationInput = {
    tag_id?: SortOrder
    user_id?: SortOrder
    tag_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: urltagCountOrderByAggregateInput
    _avg?: urltagAvgOrderByAggregateInput
    _max?: urltagMaxOrderByAggregateInput
    _min?: urltagMinOrderByAggregateInput
    _sum?: urltagSumOrderByAggregateInput
  }

  export type urltagScalarWhereWithAggregatesInput = {
    AND?: urltagScalarWhereWithAggregatesInput | urltagScalarWhereWithAggregatesInput[]
    OR?: urltagScalarWhereWithAggregatesInput[]
    NOT?: urltagScalarWhereWithAggregatesInput | urltagScalarWhereWithAggregatesInput[]
    tag_id?: IntWithAggregatesFilter<"urltag"> | number
    user_id?: UuidWithAggregatesFilter<"urltag"> | string
    tag_name?: StringWithAggregatesFilter<"urltag"> | string
    created_at?: DateTimeWithAggregatesFilter<"urltag"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"urltag"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"urltag"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"urltag"> | boolean
  }

  export type userroleWhereInput = {
    AND?: userroleWhereInput | userroleWhereInput[]
    OR?: userroleWhereInput[]
    NOT?: userroleWhereInput | userroleWhereInput[]
    role_id?: IntFilter<"userrole"> | number
    role_name?: StringFilter<"userrole"> | string
    description?: StringNullableFilter<"userrole"> | string | null
    created_at?: DateTimeFilter<"userrole"> | Date | string
    updated_at?: DateTimeFilter<"userrole"> | Date | string
    deleted_at?: DateTimeNullableFilter<"userrole"> | Date | string | null
    is_deleted?: BoolFilter<"userrole"> | boolean
    users?: UsersListRelationFilter
  }

  export type userroleOrderByWithRelationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type userroleWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    role_name?: string
    AND?: userroleWhereInput | userroleWhereInput[]
    OR?: userroleWhereInput[]
    NOT?: userroleWhereInput | userroleWhereInput[]
    description?: StringNullableFilter<"userrole"> | string | null
    created_at?: DateTimeFilter<"userrole"> | Date | string
    updated_at?: DateTimeFilter<"userrole"> | Date | string
    deleted_at?: DateTimeNullableFilter<"userrole"> | Date | string | null
    is_deleted?: BoolFilter<"userrole"> | boolean
    users?: UsersListRelationFilter
  }, "role_id" | "role_name">

  export type userroleOrderByWithAggregationInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: userroleCountOrderByAggregateInput
    _avg?: userroleAvgOrderByAggregateInput
    _max?: userroleMaxOrderByAggregateInput
    _min?: userroleMinOrderByAggregateInput
    _sum?: userroleSumOrderByAggregateInput
  }

  export type userroleScalarWhereWithAggregatesInput = {
    AND?: userroleScalarWhereWithAggregatesInput | userroleScalarWhereWithAggregatesInput[]
    OR?: userroleScalarWhereWithAggregatesInput[]
    NOT?: userroleScalarWhereWithAggregatesInput | userroleScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"userrole"> | number
    role_name?: StringWithAggregatesFilter<"userrole"> | string
    description?: StringNullableWithAggregatesFilter<"userrole"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"userrole"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"userrole"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"userrole"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"userrole"> | boolean
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: UuidFilter<"users"> | string
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_deleted?: BoolFilter<"users"> | boolean
    apikey?: ApikeyListRelationFilter
    auditlog?: AuditlogListRelationFilter
    logo?: LogoListRelationFilter
    url?: UrlListRelationFilter
    urltag?: UrltagListRelationFilter
    userrole?: XOR<UserroleNullableScalarRelationFilter, userroleWhereInput> | null
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    apikey?: apikeyOrderByRelationAggregateInput
    auditlog?: auditlogOrderByRelationAggregateInput
    logo?: logoOrderByRelationAggregateInput
    url?: urlOrderByRelationAggregateInput
    urltag?: urltagOrderByRelationAggregateInput
    userrole?: userroleOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    role_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_deleted?: BoolFilter<"users"> | boolean
    apikey?: ApikeyListRelationFilter
    auditlog?: AuditlogListRelationFilter
    logo?: LogoListRelationFilter
    url?: UrlListRelationFilter
    urltag?: UrltagListRelationFilter
    userrole?: XOR<UserroleNullableScalarRelationFilter, userroleWhereInput> | null
  }, "user_id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: UuidWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    role_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    is_deleted?: BoolWithAggregatesFilter<"users"> | boolean
  }

  export type apikeyCreateInput = {
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    users: usersCreateNestedOneWithoutApikeyInput
  }

  export type apikeyUncheckedCreateInput = {
    api_key_id?: number
    user_id: string
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type apikeyUpdateInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutApikeyNestedInput
  }

  export type apikeyUncheckedUpdateInput = {
    api_key_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type apikeyCreateManyInput = {
    api_key_id?: number
    user_id: string
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type apikeyUpdateManyMutationInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type apikeyUncheckedUpdateManyInput = {
    api_key_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type auditlogCreateInput = {
    action: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    users: usersCreateNestedOneWithoutAuditlogInput
    url: urlCreateNestedOneWithoutAuditlogInput
  }

  export type auditlogUncheckedCreateInput = {
    audit_id?: number
    url_id: string
    action: string
    changed_by: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type auditlogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutAuditlogNestedInput
    url?: urlUpdateOneRequiredWithoutAuditlogNestedInput
  }

  export type auditlogUncheckedUpdateInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    changed_by?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type auditlogCreateManyInput = {
    audit_id?: number
    url_id: string
    action: string
    changed_by: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type auditlogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type auditlogUncheckedUpdateManyInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    changed_by?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type logoCreateInput = {
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
    users: usersCreateNestedOneWithoutLogoInput
    url?: urlCreateNestedManyWithoutLogoInput
  }

  export type logoUncheckedCreateInput = {
    logo_id?: number
    user_id: string
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlUncheckedCreateNestedManyWithoutLogoInput
  }

  export type logoUpdateInput = {
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutLogoNestedInput
    url?: urlUpdateManyWithoutLogoNestedInput
  }

  export type logoUncheckedUpdateInput = {
    logo_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUncheckedUpdateManyWithoutLogoNestedInput
  }

  export type logoCreateManyInput = {
    logo_id?: number
    user_id: string
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type logoUpdateManyMutationInput = {
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type logoUncheckedUpdateManyInput = {
    logo_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlCreateInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    auditlog?: auditlogCreateNestedManyWithoutUrlInput
    logo?: logoCreateNestedOneWithoutUrlInput
    urltag?: urltagCreateNestedOneWithoutUrlInput
    users?: usersCreateNestedOneWithoutUrlInput
    urlclick?: urlclickCreateNestedManyWithoutUrlInput
  }

  export type urlUncheckedCreateInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUrlInput
    urlclick?: urlclickUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlUpdateInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    auditlog?: auditlogUpdateManyWithoutUrlNestedInput
    logo?: logoUpdateOneWithoutUrlNestedInput
    urltag?: urltagUpdateOneWithoutUrlNestedInput
    users?: usersUpdateOneWithoutUrlNestedInput
    urlclick?: urlclickUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    auditlog?: auditlogUncheckedUpdateManyWithoutUrlNestedInput
    urlclick?: urlclickUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type urlCreateManyInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
  }

  export type urlUpdateManyMutationInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
  }

  export type urlUncheckedUpdateManyInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
  }

  export type urlclickCreateInput = {
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url: urlCreateNestedOneWithoutUrlclickInput
  }

  export type urlclickUncheckedCreateInput = {
    click_id?: number
    url_id: string
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type urlclickUpdateInput = {
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUpdateOneRequiredWithoutUrlclickNestedInput
  }

  export type urlclickUncheckedUpdateInput = {
    click_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlclickCreateManyInput = {
    click_id?: number
    url_id: string
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type urlclickUpdateManyMutationInput = {
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlclickUncheckedUpdateManyInput = {
    click_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urltagCreateInput = {
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlCreateNestedManyWithoutUrltagInput
    users: usersCreateNestedOneWithoutUrltagInput
  }

  export type urltagUncheckedCreateInput = {
    tag_id?: number
    user_id: string
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlUncheckedCreateNestedManyWithoutUrltagInput
  }

  export type urltagUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUpdateManyWithoutUrltagNestedInput
    users?: usersUpdateOneRequiredWithoutUrltagNestedInput
  }

  export type urltagUncheckedUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUncheckedUpdateManyWithoutUrltagNestedInput
  }

  export type urltagCreateManyInput = {
    tag_id?: number
    user_id: string
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type urltagUpdateManyMutationInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urltagUncheckedUpdateManyInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userroleCreateInput = {
    role_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    users?: usersCreateNestedManyWithoutUserroleInput
  }

  export type userroleUncheckedCreateInput = {
    role_id?: number
    role_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    users?: usersUncheckedCreateNestedManyWithoutUserroleInput
  }

  export type userroleUpdateInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateManyWithoutUserroleNestedInput
  }

  export type userroleUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUncheckedUpdateManyWithoutUserroleNestedInput
  }

  export type userroleCreateManyInput = {
    role_id?: number
    role_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type userroleUpdateManyMutationInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userroleUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersCreateInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyCreateNestedManyWithoutUsersInput
    auditlog?: auditlogCreateNestedManyWithoutUsersInput
    logo?: logoCreateNestedManyWithoutUsersInput
    url?: urlCreateNestedManyWithoutUsersInput
    urltag?: urltagCreateNestedManyWithoutUsersInput
    userrole?: userroleCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyUncheckedCreateNestedManyWithoutUsersInput
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUsersInput
    logo?: logoUncheckedCreateNestedManyWithoutUsersInput
    url?: urlUncheckedCreateNestedManyWithoutUsersInput
    urltag?: urltagUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUpdateManyWithoutUsersNestedInput
    auditlog?: auditlogUpdateManyWithoutUsersNestedInput
    logo?: logoUpdateManyWithoutUsersNestedInput
    url?: urlUpdateManyWithoutUsersNestedInput
    urltag?: urltagUpdateManyWithoutUsersNestedInput
    userrole?: userroleUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUncheckedUpdateManyWithoutUsersNestedInput
    auditlog?: auditlogUncheckedUpdateManyWithoutUsersNestedInput
    logo?: logoUncheckedUpdateManyWithoutUsersNestedInput
    url?: urlUncheckedUpdateManyWithoutUsersNestedInput
    urltag?: urltagUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type usersUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type apikeyCountOrderByAggregateInput = {
    api_key_id?: SortOrder
    user_id?: SortOrder
    api_key?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type apikeyAvgOrderByAggregateInput = {
    api_key_id?: SortOrder
  }

  export type apikeyMaxOrderByAggregateInput = {
    api_key_id?: SortOrder
    user_id?: SortOrder
    api_key?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type apikeyMinOrderByAggregateInput = {
    api_key_id?: SortOrder
    user_id?: SortOrder
    api_key?: SortOrder
    created_at?: SortOrder
    expires_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type apikeySumOrderByAggregateInput = {
    api_key_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UrlScalarRelationFilter = {
    is?: urlWhereInput
    isNot?: urlWhereInput
  }

  export type auditlogCountOrderByAggregateInput = {
    audit_id?: SortOrder
    url_id?: SortOrder
    action?: SortOrder
    changed_by?: SortOrder
    change_date?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type auditlogAvgOrderByAggregateInput = {
    audit_id?: SortOrder
  }

  export type auditlogMaxOrderByAggregateInput = {
    audit_id?: SortOrder
    url_id?: SortOrder
    action?: SortOrder
    changed_by?: SortOrder
    change_date?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type auditlogMinOrderByAggregateInput = {
    audit_id?: SortOrder
    url_id?: SortOrder
    action?: SortOrder
    changed_by?: SortOrder
    change_date?: SortOrder
    details?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type auditlogSumOrderByAggregateInput = {
    audit_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UrlListRelationFilter = {
    every?: urlWhereInput
    some?: urlWhereInput
    none?: urlWhereInput
  }

  export type urlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type logoCountOrderByAggregateInput = {
    logo_id?: SortOrder
    user_id?: SortOrder
    logo_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type logoAvgOrderByAggregateInput = {
    logo_id?: SortOrder
  }

  export type logoMaxOrderByAggregateInput = {
    logo_id?: SortOrder
    user_id?: SortOrder
    logo_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type logoMinOrderByAggregateInput = {
    logo_id?: SortOrder
    user_id?: SortOrder
    logo_path?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type logoSumOrderByAggregateInput = {
    logo_id?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumurltypeenumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.urltypeenum | EnumurltypeenumFieldRefInput<$PrismaModel> | null
    in?: $Enums.urltypeenum[] | ListEnumurltypeenumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.urltypeenum[] | ListEnumurltypeenumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumurltypeenumNullableFilter<$PrismaModel> | $Enums.urltypeenum | null
  }

  export type EnumstatusenumFilter<$PrismaModel = never> = {
    equals?: $Enums.statusenum | EnumstatusenumFieldRefInput<$PrismaModel>
    in?: $Enums.statusenum[] | ListEnumstatusenumFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusenum[] | ListEnumstatusenumFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusenumFilter<$PrismaModel> | $Enums.statusenum
  }

  export type AuditlogListRelationFilter = {
    every?: auditlogWhereInput
    some?: auditlogWhereInput
    none?: auditlogWhereInput
  }

  export type LogoNullableScalarRelationFilter = {
    is?: logoWhereInput | null
    isNot?: logoWhereInput | null
  }

  export type UrltagNullableScalarRelationFilter = {
    is?: urltagWhereInput | null
    isNot?: urltagWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type UrlclickListRelationFilter = {
    every?: urlclickWhereInput
    some?: urlclickWhereInput
    none?: urlclickWhereInput
  }

  export type auditlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type urlclickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type urlCountOrderByAggregateInput = {
    url_id?: SortOrder
    user_id?: SortOrder
    original_url?: SortOrder
    short_url?: SortOrder
    logo_id?: SortOrder
    tag_id?: SortOrder
    url_type?: SortOrder
    associated?: SortOrder
    expiration_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    is_pre_generated?: SortOrder
    associated_at?: SortOrder
    status?: SortOrder
  }

  export type urlAvgOrderByAggregateInput = {
    logo_id?: SortOrder
    tag_id?: SortOrder
  }

  export type urlMaxOrderByAggregateInput = {
    url_id?: SortOrder
    user_id?: SortOrder
    original_url?: SortOrder
    short_url?: SortOrder
    logo_id?: SortOrder
    tag_id?: SortOrder
    url_type?: SortOrder
    associated?: SortOrder
    expiration_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    is_pre_generated?: SortOrder
    associated_at?: SortOrder
    status?: SortOrder
  }

  export type urlMinOrderByAggregateInput = {
    url_id?: SortOrder
    user_id?: SortOrder
    original_url?: SortOrder
    short_url?: SortOrder
    logo_id?: SortOrder
    tag_id?: SortOrder
    url_type?: SortOrder
    associated?: SortOrder
    expiration_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
    is_pre_generated?: SortOrder
    associated_at?: SortOrder
    status?: SortOrder
  }

  export type urlSumOrderByAggregateInput = {
    logo_id?: SortOrder
    tag_id?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumurltypeenumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.urltypeenum | EnumurltypeenumFieldRefInput<$PrismaModel> | null
    in?: $Enums.urltypeenum[] | ListEnumurltypeenumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.urltypeenum[] | ListEnumurltypeenumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumurltypeenumNullableWithAggregatesFilter<$PrismaModel> | $Enums.urltypeenum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumurltypeenumNullableFilter<$PrismaModel>
    _max?: NestedEnumurltypeenumNullableFilter<$PrismaModel>
  }

  export type EnumstatusenumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusenum | EnumstatusenumFieldRefInput<$PrismaModel>
    in?: $Enums.statusenum[] | ListEnumstatusenumFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusenum[] | ListEnumstatusenumFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusenumWithAggregatesFilter<$PrismaModel> | $Enums.statusenum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusenumFilter<$PrismaModel>
    _max?: NestedEnumstatusenumFilter<$PrismaModel>
  }

  export type urlclickCountOrderByAggregateInput = {
    click_id?: SortOrder
    url_id?: SortOrder
    access_date?: SortOrder
    access_time?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type urlclickAvgOrderByAggregateInput = {
    click_id?: SortOrder
  }

  export type urlclickMaxOrderByAggregateInput = {
    click_id?: SortOrder
    url_id?: SortOrder
    access_date?: SortOrder
    access_time?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type urlclickMinOrderByAggregateInput = {
    click_id?: SortOrder
    url_id?: SortOrder
    access_date?: SortOrder
    access_time?: SortOrder
    ip_address?: SortOrder
    user_agent?: SortOrder
    referrer?: SortOrder
    country?: SortOrder
    city?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type urlclickSumOrderByAggregateInput = {
    click_id?: SortOrder
  }

  export type urltagCountOrderByAggregateInput = {
    tag_id?: SortOrder
    user_id?: SortOrder
    tag_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type urltagAvgOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type urltagMaxOrderByAggregateInput = {
    tag_id?: SortOrder
    user_id?: SortOrder
    tag_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type urltagMinOrderByAggregateInput = {
    tag_id?: SortOrder
    user_id?: SortOrder
    tag_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type urltagSumOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userroleCountOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type userroleAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type userroleMaxOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type userroleMinOrderByAggregateInput = {
    role_id?: SortOrder
    role_name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type userroleSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type ApikeyListRelationFilter = {
    every?: apikeyWhereInput
    some?: apikeyWhereInput
    none?: apikeyWhereInput
  }

  export type LogoListRelationFilter = {
    every?: logoWhereInput
    some?: logoWhereInput
    none?: logoWhereInput
  }

  export type UrltagListRelationFilter = {
    every?: urltagWhereInput
    some?: urltagWhereInput
    none?: urltagWhereInput
  }

  export type UserroleNullableScalarRelationFilter = {
    is?: userroleWhereInput | null
    isNot?: userroleWhereInput | null
  }

  export type apikeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type logoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type urltagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type usersCreateNestedOneWithoutApikeyInput = {
    create?: XOR<usersCreateWithoutApikeyInput, usersUncheckedCreateWithoutApikeyInput>
    connectOrCreate?: usersCreateOrConnectWithoutApikeyInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usersUpdateOneRequiredWithoutApikeyNestedInput = {
    create?: XOR<usersCreateWithoutApikeyInput, usersUncheckedCreateWithoutApikeyInput>
    connectOrCreate?: usersCreateOrConnectWithoutApikeyInput
    upsert?: usersUpsertWithoutApikeyInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutApikeyInput, usersUpdateWithoutApikeyInput>, usersUncheckedUpdateWithoutApikeyInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutAuditlogInput = {
    create?: XOR<usersCreateWithoutAuditlogInput, usersUncheckedCreateWithoutAuditlogInput>
    connectOrCreate?: usersCreateOrConnectWithoutAuditlogInput
    connect?: usersWhereUniqueInput
  }

  export type urlCreateNestedOneWithoutAuditlogInput = {
    create?: XOR<urlCreateWithoutAuditlogInput, urlUncheckedCreateWithoutAuditlogInput>
    connectOrCreate?: urlCreateOrConnectWithoutAuditlogInput
    connect?: urlWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type usersUpdateOneRequiredWithoutAuditlogNestedInput = {
    create?: XOR<usersCreateWithoutAuditlogInput, usersUncheckedCreateWithoutAuditlogInput>
    connectOrCreate?: usersCreateOrConnectWithoutAuditlogInput
    upsert?: usersUpsertWithoutAuditlogInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAuditlogInput, usersUpdateWithoutAuditlogInput>, usersUncheckedUpdateWithoutAuditlogInput>
  }

  export type urlUpdateOneRequiredWithoutAuditlogNestedInput = {
    create?: XOR<urlCreateWithoutAuditlogInput, urlUncheckedCreateWithoutAuditlogInput>
    connectOrCreate?: urlCreateOrConnectWithoutAuditlogInput
    upsert?: urlUpsertWithoutAuditlogInput
    connect?: urlWhereUniqueInput
    update?: XOR<XOR<urlUpdateToOneWithWhereWithoutAuditlogInput, urlUpdateWithoutAuditlogInput>, urlUncheckedUpdateWithoutAuditlogInput>
  }

  export type usersCreateNestedOneWithoutLogoInput = {
    create?: XOR<usersCreateWithoutLogoInput, usersUncheckedCreateWithoutLogoInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogoInput
    connect?: usersWhereUniqueInput
  }

  export type urlCreateNestedManyWithoutLogoInput = {
    create?: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput> | urlCreateWithoutLogoInput[] | urlUncheckedCreateWithoutLogoInput[]
    connectOrCreate?: urlCreateOrConnectWithoutLogoInput | urlCreateOrConnectWithoutLogoInput[]
    createMany?: urlCreateManyLogoInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type urlUncheckedCreateNestedManyWithoutLogoInput = {
    create?: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput> | urlCreateWithoutLogoInput[] | urlUncheckedCreateWithoutLogoInput[]
    connectOrCreate?: urlCreateOrConnectWithoutLogoInput | urlCreateOrConnectWithoutLogoInput[]
    createMany?: urlCreateManyLogoInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutLogoNestedInput = {
    create?: XOR<usersCreateWithoutLogoInput, usersUncheckedCreateWithoutLogoInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogoInput
    upsert?: usersUpsertWithoutLogoInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLogoInput, usersUpdateWithoutLogoInput>, usersUncheckedUpdateWithoutLogoInput>
  }

  export type urlUpdateManyWithoutLogoNestedInput = {
    create?: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput> | urlCreateWithoutLogoInput[] | urlUncheckedCreateWithoutLogoInput[]
    connectOrCreate?: urlCreateOrConnectWithoutLogoInput | urlCreateOrConnectWithoutLogoInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutLogoInput | urlUpsertWithWhereUniqueWithoutLogoInput[]
    createMany?: urlCreateManyLogoInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutLogoInput | urlUpdateWithWhereUniqueWithoutLogoInput[]
    updateMany?: urlUpdateManyWithWhereWithoutLogoInput | urlUpdateManyWithWhereWithoutLogoInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type urlUncheckedUpdateManyWithoutLogoNestedInput = {
    create?: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput> | urlCreateWithoutLogoInput[] | urlUncheckedCreateWithoutLogoInput[]
    connectOrCreate?: urlCreateOrConnectWithoutLogoInput | urlCreateOrConnectWithoutLogoInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutLogoInput | urlUpsertWithWhereUniqueWithoutLogoInput[]
    createMany?: urlCreateManyLogoInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutLogoInput | urlUpdateWithWhereUniqueWithoutLogoInput[]
    updateMany?: urlUpdateManyWithWhereWithoutLogoInput | urlUpdateManyWithWhereWithoutLogoInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type auditlogCreateNestedManyWithoutUrlInput = {
    create?: XOR<auditlogCreateWithoutUrlInput, auditlogUncheckedCreateWithoutUrlInput> | auditlogCreateWithoutUrlInput[] | auditlogUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: auditlogCreateOrConnectWithoutUrlInput | auditlogCreateOrConnectWithoutUrlInput[]
    createMany?: auditlogCreateManyUrlInputEnvelope
    connect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
  }

  export type logoCreateNestedOneWithoutUrlInput = {
    create?: XOR<logoCreateWithoutUrlInput, logoUncheckedCreateWithoutUrlInput>
    connectOrCreate?: logoCreateOrConnectWithoutUrlInput
    connect?: logoWhereUniqueInput
  }

  export type urltagCreateNestedOneWithoutUrlInput = {
    create?: XOR<urltagCreateWithoutUrlInput, urltagUncheckedCreateWithoutUrlInput>
    connectOrCreate?: urltagCreateOrConnectWithoutUrlInput
    connect?: urltagWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUrlInput = {
    create?: XOR<usersCreateWithoutUrlInput, usersUncheckedCreateWithoutUrlInput>
    connectOrCreate?: usersCreateOrConnectWithoutUrlInput
    connect?: usersWhereUniqueInput
  }

  export type urlclickCreateNestedManyWithoutUrlInput = {
    create?: XOR<urlclickCreateWithoutUrlInput, urlclickUncheckedCreateWithoutUrlInput> | urlclickCreateWithoutUrlInput[] | urlclickUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: urlclickCreateOrConnectWithoutUrlInput | urlclickCreateOrConnectWithoutUrlInput[]
    createMany?: urlclickCreateManyUrlInputEnvelope
    connect?: urlclickWhereUniqueInput | urlclickWhereUniqueInput[]
  }

  export type auditlogUncheckedCreateNestedManyWithoutUrlInput = {
    create?: XOR<auditlogCreateWithoutUrlInput, auditlogUncheckedCreateWithoutUrlInput> | auditlogCreateWithoutUrlInput[] | auditlogUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: auditlogCreateOrConnectWithoutUrlInput | auditlogCreateOrConnectWithoutUrlInput[]
    createMany?: auditlogCreateManyUrlInputEnvelope
    connect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
  }

  export type urlclickUncheckedCreateNestedManyWithoutUrlInput = {
    create?: XOR<urlclickCreateWithoutUrlInput, urlclickUncheckedCreateWithoutUrlInput> | urlclickCreateWithoutUrlInput[] | urlclickUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: urlclickCreateOrConnectWithoutUrlInput | urlclickCreateOrConnectWithoutUrlInput[]
    createMany?: urlclickCreateManyUrlInputEnvelope
    connect?: urlclickWhereUniqueInput | urlclickWhereUniqueInput[]
  }

  export type NullableEnumurltypeenumFieldUpdateOperationsInput = {
    set?: $Enums.urltypeenum | null
  }

  export type EnumstatusenumFieldUpdateOperationsInput = {
    set?: $Enums.statusenum
  }

  export type auditlogUpdateManyWithoutUrlNestedInput = {
    create?: XOR<auditlogCreateWithoutUrlInput, auditlogUncheckedCreateWithoutUrlInput> | auditlogCreateWithoutUrlInput[] | auditlogUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: auditlogCreateOrConnectWithoutUrlInput | auditlogCreateOrConnectWithoutUrlInput[]
    upsert?: auditlogUpsertWithWhereUniqueWithoutUrlInput | auditlogUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: auditlogCreateManyUrlInputEnvelope
    set?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    disconnect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    delete?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    connect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    update?: auditlogUpdateWithWhereUniqueWithoutUrlInput | auditlogUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: auditlogUpdateManyWithWhereWithoutUrlInput | auditlogUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: auditlogScalarWhereInput | auditlogScalarWhereInput[]
  }

  export type logoUpdateOneWithoutUrlNestedInput = {
    create?: XOR<logoCreateWithoutUrlInput, logoUncheckedCreateWithoutUrlInput>
    connectOrCreate?: logoCreateOrConnectWithoutUrlInput
    upsert?: logoUpsertWithoutUrlInput
    disconnect?: logoWhereInput | boolean
    delete?: logoWhereInput | boolean
    connect?: logoWhereUniqueInput
    update?: XOR<XOR<logoUpdateToOneWithWhereWithoutUrlInput, logoUpdateWithoutUrlInput>, logoUncheckedUpdateWithoutUrlInput>
  }

  export type urltagUpdateOneWithoutUrlNestedInput = {
    create?: XOR<urltagCreateWithoutUrlInput, urltagUncheckedCreateWithoutUrlInput>
    connectOrCreate?: urltagCreateOrConnectWithoutUrlInput
    upsert?: urltagUpsertWithoutUrlInput
    disconnect?: urltagWhereInput | boolean
    delete?: urltagWhereInput | boolean
    connect?: urltagWhereUniqueInput
    update?: XOR<XOR<urltagUpdateToOneWithWhereWithoutUrlInput, urltagUpdateWithoutUrlInput>, urltagUncheckedUpdateWithoutUrlInput>
  }

  export type usersUpdateOneWithoutUrlNestedInput = {
    create?: XOR<usersCreateWithoutUrlInput, usersUncheckedCreateWithoutUrlInput>
    connectOrCreate?: usersCreateOrConnectWithoutUrlInput
    upsert?: usersUpsertWithoutUrlInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUrlInput, usersUpdateWithoutUrlInput>, usersUncheckedUpdateWithoutUrlInput>
  }

  export type urlclickUpdateManyWithoutUrlNestedInput = {
    create?: XOR<urlclickCreateWithoutUrlInput, urlclickUncheckedCreateWithoutUrlInput> | urlclickCreateWithoutUrlInput[] | urlclickUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: urlclickCreateOrConnectWithoutUrlInput | urlclickCreateOrConnectWithoutUrlInput[]
    upsert?: urlclickUpsertWithWhereUniqueWithoutUrlInput | urlclickUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: urlclickCreateManyUrlInputEnvelope
    set?: urlclickWhereUniqueInput | urlclickWhereUniqueInput[]
    disconnect?: urlclickWhereUniqueInput | urlclickWhereUniqueInput[]
    delete?: urlclickWhereUniqueInput | urlclickWhereUniqueInput[]
    connect?: urlclickWhereUniqueInput | urlclickWhereUniqueInput[]
    update?: urlclickUpdateWithWhereUniqueWithoutUrlInput | urlclickUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: urlclickUpdateManyWithWhereWithoutUrlInput | urlclickUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: urlclickScalarWhereInput | urlclickScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type auditlogUncheckedUpdateManyWithoutUrlNestedInput = {
    create?: XOR<auditlogCreateWithoutUrlInput, auditlogUncheckedCreateWithoutUrlInput> | auditlogCreateWithoutUrlInput[] | auditlogUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: auditlogCreateOrConnectWithoutUrlInput | auditlogCreateOrConnectWithoutUrlInput[]
    upsert?: auditlogUpsertWithWhereUniqueWithoutUrlInput | auditlogUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: auditlogCreateManyUrlInputEnvelope
    set?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    disconnect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    delete?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    connect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    update?: auditlogUpdateWithWhereUniqueWithoutUrlInput | auditlogUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: auditlogUpdateManyWithWhereWithoutUrlInput | auditlogUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: auditlogScalarWhereInput | auditlogScalarWhereInput[]
  }

  export type urlclickUncheckedUpdateManyWithoutUrlNestedInput = {
    create?: XOR<urlclickCreateWithoutUrlInput, urlclickUncheckedCreateWithoutUrlInput> | urlclickCreateWithoutUrlInput[] | urlclickUncheckedCreateWithoutUrlInput[]
    connectOrCreate?: urlclickCreateOrConnectWithoutUrlInput | urlclickCreateOrConnectWithoutUrlInput[]
    upsert?: urlclickUpsertWithWhereUniqueWithoutUrlInput | urlclickUpsertWithWhereUniqueWithoutUrlInput[]
    createMany?: urlclickCreateManyUrlInputEnvelope
    set?: urlclickWhereUniqueInput | urlclickWhereUniqueInput[]
    disconnect?: urlclickWhereUniqueInput | urlclickWhereUniqueInput[]
    delete?: urlclickWhereUniqueInput | urlclickWhereUniqueInput[]
    connect?: urlclickWhereUniqueInput | urlclickWhereUniqueInput[]
    update?: urlclickUpdateWithWhereUniqueWithoutUrlInput | urlclickUpdateWithWhereUniqueWithoutUrlInput[]
    updateMany?: urlclickUpdateManyWithWhereWithoutUrlInput | urlclickUpdateManyWithWhereWithoutUrlInput[]
    deleteMany?: urlclickScalarWhereInput | urlclickScalarWhereInput[]
  }

  export type urlCreateNestedOneWithoutUrlclickInput = {
    create?: XOR<urlCreateWithoutUrlclickInput, urlUncheckedCreateWithoutUrlclickInput>
    connectOrCreate?: urlCreateOrConnectWithoutUrlclickInput
    connect?: urlWhereUniqueInput
  }

  export type urlUpdateOneRequiredWithoutUrlclickNestedInput = {
    create?: XOR<urlCreateWithoutUrlclickInput, urlUncheckedCreateWithoutUrlclickInput>
    connectOrCreate?: urlCreateOrConnectWithoutUrlclickInput
    upsert?: urlUpsertWithoutUrlclickInput
    connect?: urlWhereUniqueInput
    update?: XOR<XOR<urlUpdateToOneWithWhereWithoutUrlclickInput, urlUpdateWithoutUrlclickInput>, urlUncheckedUpdateWithoutUrlclickInput>
  }

  export type urlCreateNestedManyWithoutUrltagInput = {
    create?: XOR<urlCreateWithoutUrltagInput, urlUncheckedCreateWithoutUrltagInput> | urlCreateWithoutUrltagInput[] | urlUncheckedCreateWithoutUrltagInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUrltagInput | urlCreateOrConnectWithoutUrltagInput[]
    createMany?: urlCreateManyUrltagInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutUrltagInput = {
    create?: XOR<usersCreateWithoutUrltagInput, usersUncheckedCreateWithoutUrltagInput>
    connectOrCreate?: usersCreateOrConnectWithoutUrltagInput
    connect?: usersWhereUniqueInput
  }

  export type urlUncheckedCreateNestedManyWithoutUrltagInput = {
    create?: XOR<urlCreateWithoutUrltagInput, urlUncheckedCreateWithoutUrltagInput> | urlCreateWithoutUrltagInput[] | urlUncheckedCreateWithoutUrltagInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUrltagInput | urlCreateOrConnectWithoutUrltagInput[]
    createMany?: urlCreateManyUrltagInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type urlUpdateManyWithoutUrltagNestedInput = {
    create?: XOR<urlCreateWithoutUrltagInput, urlUncheckedCreateWithoutUrltagInput> | urlCreateWithoutUrltagInput[] | urlUncheckedCreateWithoutUrltagInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUrltagInput | urlCreateOrConnectWithoutUrltagInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutUrltagInput | urlUpsertWithWhereUniqueWithoutUrltagInput[]
    createMany?: urlCreateManyUrltagInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutUrltagInput | urlUpdateWithWhereUniqueWithoutUrltagInput[]
    updateMany?: urlUpdateManyWithWhereWithoutUrltagInput | urlUpdateManyWithWhereWithoutUrltagInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutUrltagNestedInput = {
    create?: XOR<usersCreateWithoutUrltagInput, usersUncheckedCreateWithoutUrltagInput>
    connectOrCreate?: usersCreateOrConnectWithoutUrltagInput
    upsert?: usersUpsertWithoutUrltagInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUrltagInput, usersUpdateWithoutUrltagInput>, usersUncheckedUpdateWithoutUrltagInput>
  }

  export type urlUncheckedUpdateManyWithoutUrltagNestedInput = {
    create?: XOR<urlCreateWithoutUrltagInput, urlUncheckedCreateWithoutUrltagInput> | urlCreateWithoutUrltagInput[] | urlUncheckedCreateWithoutUrltagInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUrltagInput | urlCreateOrConnectWithoutUrltagInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutUrltagInput | urlUpsertWithWhereUniqueWithoutUrltagInput[]
    createMany?: urlCreateManyUrltagInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutUrltagInput | urlUpdateWithWhereUniqueWithoutUrltagInput[]
    updateMany?: urlUpdateManyWithWhereWithoutUrltagInput | urlUpdateManyWithWhereWithoutUrltagInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutUserroleInput = {
    create?: XOR<usersCreateWithoutUserroleInput, usersUncheckedCreateWithoutUserroleInput> | usersCreateWithoutUserroleInput[] | usersUncheckedCreateWithoutUserroleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUserroleInput | usersCreateOrConnectWithoutUserroleInput[]
    createMany?: usersCreateManyUserroleInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutUserroleInput = {
    create?: XOR<usersCreateWithoutUserroleInput, usersUncheckedCreateWithoutUserroleInput> | usersCreateWithoutUserroleInput[] | usersUncheckedCreateWithoutUserroleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUserroleInput | usersCreateOrConnectWithoutUserroleInput[]
    createMany?: usersCreateManyUserroleInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutUserroleNestedInput = {
    create?: XOR<usersCreateWithoutUserroleInput, usersUncheckedCreateWithoutUserroleInput> | usersCreateWithoutUserroleInput[] | usersUncheckedCreateWithoutUserroleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUserroleInput | usersCreateOrConnectWithoutUserroleInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUserroleInput | usersUpsertWithWhereUniqueWithoutUserroleInput[]
    createMany?: usersCreateManyUserroleInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUserroleInput | usersUpdateWithWhereUniqueWithoutUserroleInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUserroleInput | usersUpdateManyWithWhereWithoutUserroleInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutUserroleNestedInput = {
    create?: XOR<usersCreateWithoutUserroleInput, usersUncheckedCreateWithoutUserroleInput> | usersCreateWithoutUserroleInput[] | usersUncheckedCreateWithoutUserroleInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUserroleInput | usersCreateOrConnectWithoutUserroleInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUserroleInput | usersUpsertWithWhereUniqueWithoutUserroleInput[]
    createMany?: usersCreateManyUserroleInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUserroleInput | usersUpdateWithWhereUniqueWithoutUserroleInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUserroleInput | usersUpdateManyWithWhereWithoutUserroleInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type apikeyCreateNestedManyWithoutUsersInput = {
    create?: XOR<apikeyCreateWithoutUsersInput, apikeyUncheckedCreateWithoutUsersInput> | apikeyCreateWithoutUsersInput[] | apikeyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: apikeyCreateOrConnectWithoutUsersInput | apikeyCreateOrConnectWithoutUsersInput[]
    createMany?: apikeyCreateManyUsersInputEnvelope
    connect?: apikeyWhereUniqueInput | apikeyWhereUniqueInput[]
  }

  export type auditlogCreateNestedManyWithoutUsersInput = {
    create?: XOR<auditlogCreateWithoutUsersInput, auditlogUncheckedCreateWithoutUsersInput> | auditlogCreateWithoutUsersInput[] | auditlogUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: auditlogCreateOrConnectWithoutUsersInput | auditlogCreateOrConnectWithoutUsersInput[]
    createMany?: auditlogCreateManyUsersInputEnvelope
    connect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
  }

  export type logoCreateNestedManyWithoutUsersInput = {
    create?: XOR<logoCreateWithoutUsersInput, logoUncheckedCreateWithoutUsersInput> | logoCreateWithoutUsersInput[] | logoUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logoCreateOrConnectWithoutUsersInput | logoCreateOrConnectWithoutUsersInput[]
    createMany?: logoCreateManyUsersInputEnvelope
    connect?: logoWhereUniqueInput | logoWhereUniqueInput[]
  }

  export type urlCreateNestedManyWithoutUsersInput = {
    create?: XOR<urlCreateWithoutUsersInput, urlUncheckedCreateWithoutUsersInput> | urlCreateWithoutUsersInput[] | urlUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUsersInput | urlCreateOrConnectWithoutUsersInput[]
    createMany?: urlCreateManyUsersInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type urltagCreateNestedManyWithoutUsersInput = {
    create?: XOR<urltagCreateWithoutUsersInput, urltagUncheckedCreateWithoutUsersInput> | urltagCreateWithoutUsersInput[] | urltagUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: urltagCreateOrConnectWithoutUsersInput | urltagCreateOrConnectWithoutUsersInput[]
    createMany?: urltagCreateManyUsersInputEnvelope
    connect?: urltagWhereUniqueInput | urltagWhereUniqueInput[]
  }

  export type userroleCreateNestedOneWithoutUsersInput = {
    create?: XOR<userroleCreateWithoutUsersInput, userroleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userroleCreateOrConnectWithoutUsersInput
    connect?: userroleWhereUniqueInput
  }

  export type apikeyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<apikeyCreateWithoutUsersInput, apikeyUncheckedCreateWithoutUsersInput> | apikeyCreateWithoutUsersInput[] | apikeyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: apikeyCreateOrConnectWithoutUsersInput | apikeyCreateOrConnectWithoutUsersInput[]
    createMany?: apikeyCreateManyUsersInputEnvelope
    connect?: apikeyWhereUniqueInput | apikeyWhereUniqueInput[]
  }

  export type auditlogUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<auditlogCreateWithoutUsersInput, auditlogUncheckedCreateWithoutUsersInput> | auditlogCreateWithoutUsersInput[] | auditlogUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: auditlogCreateOrConnectWithoutUsersInput | auditlogCreateOrConnectWithoutUsersInput[]
    createMany?: auditlogCreateManyUsersInputEnvelope
    connect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
  }

  export type logoUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<logoCreateWithoutUsersInput, logoUncheckedCreateWithoutUsersInput> | logoCreateWithoutUsersInput[] | logoUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logoCreateOrConnectWithoutUsersInput | logoCreateOrConnectWithoutUsersInput[]
    createMany?: logoCreateManyUsersInputEnvelope
    connect?: logoWhereUniqueInput | logoWhereUniqueInput[]
  }

  export type urlUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<urlCreateWithoutUsersInput, urlUncheckedCreateWithoutUsersInput> | urlCreateWithoutUsersInput[] | urlUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUsersInput | urlCreateOrConnectWithoutUsersInput[]
    createMany?: urlCreateManyUsersInputEnvelope
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
  }

  export type urltagUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<urltagCreateWithoutUsersInput, urltagUncheckedCreateWithoutUsersInput> | urltagCreateWithoutUsersInput[] | urltagUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: urltagCreateOrConnectWithoutUsersInput | urltagCreateOrConnectWithoutUsersInput[]
    createMany?: urltagCreateManyUsersInputEnvelope
    connect?: urltagWhereUniqueInput | urltagWhereUniqueInput[]
  }

  export type apikeyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<apikeyCreateWithoutUsersInput, apikeyUncheckedCreateWithoutUsersInput> | apikeyCreateWithoutUsersInput[] | apikeyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: apikeyCreateOrConnectWithoutUsersInput | apikeyCreateOrConnectWithoutUsersInput[]
    upsert?: apikeyUpsertWithWhereUniqueWithoutUsersInput | apikeyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: apikeyCreateManyUsersInputEnvelope
    set?: apikeyWhereUniqueInput | apikeyWhereUniqueInput[]
    disconnect?: apikeyWhereUniqueInput | apikeyWhereUniqueInput[]
    delete?: apikeyWhereUniqueInput | apikeyWhereUniqueInput[]
    connect?: apikeyWhereUniqueInput | apikeyWhereUniqueInput[]
    update?: apikeyUpdateWithWhereUniqueWithoutUsersInput | apikeyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: apikeyUpdateManyWithWhereWithoutUsersInput | apikeyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: apikeyScalarWhereInput | apikeyScalarWhereInput[]
  }

  export type auditlogUpdateManyWithoutUsersNestedInput = {
    create?: XOR<auditlogCreateWithoutUsersInput, auditlogUncheckedCreateWithoutUsersInput> | auditlogCreateWithoutUsersInput[] | auditlogUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: auditlogCreateOrConnectWithoutUsersInput | auditlogCreateOrConnectWithoutUsersInput[]
    upsert?: auditlogUpsertWithWhereUniqueWithoutUsersInput | auditlogUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: auditlogCreateManyUsersInputEnvelope
    set?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    disconnect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    delete?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    connect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    update?: auditlogUpdateWithWhereUniqueWithoutUsersInput | auditlogUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: auditlogUpdateManyWithWhereWithoutUsersInput | auditlogUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: auditlogScalarWhereInput | auditlogScalarWhereInput[]
  }

  export type logoUpdateManyWithoutUsersNestedInput = {
    create?: XOR<logoCreateWithoutUsersInput, logoUncheckedCreateWithoutUsersInput> | logoCreateWithoutUsersInput[] | logoUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logoCreateOrConnectWithoutUsersInput | logoCreateOrConnectWithoutUsersInput[]
    upsert?: logoUpsertWithWhereUniqueWithoutUsersInput | logoUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: logoCreateManyUsersInputEnvelope
    set?: logoWhereUniqueInput | logoWhereUniqueInput[]
    disconnect?: logoWhereUniqueInput | logoWhereUniqueInput[]
    delete?: logoWhereUniqueInput | logoWhereUniqueInput[]
    connect?: logoWhereUniqueInput | logoWhereUniqueInput[]
    update?: logoUpdateWithWhereUniqueWithoutUsersInput | logoUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: logoUpdateManyWithWhereWithoutUsersInput | logoUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: logoScalarWhereInput | logoScalarWhereInput[]
  }

  export type urlUpdateManyWithoutUsersNestedInput = {
    create?: XOR<urlCreateWithoutUsersInput, urlUncheckedCreateWithoutUsersInput> | urlCreateWithoutUsersInput[] | urlUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUsersInput | urlCreateOrConnectWithoutUsersInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutUsersInput | urlUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: urlCreateManyUsersInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutUsersInput | urlUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: urlUpdateManyWithWhereWithoutUsersInput | urlUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type urltagUpdateManyWithoutUsersNestedInput = {
    create?: XOR<urltagCreateWithoutUsersInput, urltagUncheckedCreateWithoutUsersInput> | urltagCreateWithoutUsersInput[] | urltagUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: urltagCreateOrConnectWithoutUsersInput | urltagCreateOrConnectWithoutUsersInput[]
    upsert?: urltagUpsertWithWhereUniqueWithoutUsersInput | urltagUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: urltagCreateManyUsersInputEnvelope
    set?: urltagWhereUniqueInput | urltagWhereUniqueInput[]
    disconnect?: urltagWhereUniqueInput | urltagWhereUniqueInput[]
    delete?: urltagWhereUniqueInput | urltagWhereUniqueInput[]
    connect?: urltagWhereUniqueInput | urltagWhereUniqueInput[]
    update?: urltagUpdateWithWhereUniqueWithoutUsersInput | urltagUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: urltagUpdateManyWithWhereWithoutUsersInput | urltagUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: urltagScalarWhereInput | urltagScalarWhereInput[]
  }

  export type userroleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<userroleCreateWithoutUsersInput, userroleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userroleCreateOrConnectWithoutUsersInput
    upsert?: userroleUpsertWithoutUsersInput
    disconnect?: userroleWhereInput | boolean
    delete?: userroleWhereInput | boolean
    connect?: userroleWhereUniqueInput
    update?: XOR<XOR<userroleUpdateToOneWithWhereWithoutUsersInput, userroleUpdateWithoutUsersInput>, userroleUncheckedUpdateWithoutUsersInput>
  }

  export type apikeyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<apikeyCreateWithoutUsersInput, apikeyUncheckedCreateWithoutUsersInput> | apikeyCreateWithoutUsersInput[] | apikeyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: apikeyCreateOrConnectWithoutUsersInput | apikeyCreateOrConnectWithoutUsersInput[]
    upsert?: apikeyUpsertWithWhereUniqueWithoutUsersInput | apikeyUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: apikeyCreateManyUsersInputEnvelope
    set?: apikeyWhereUniqueInput | apikeyWhereUniqueInput[]
    disconnect?: apikeyWhereUniqueInput | apikeyWhereUniqueInput[]
    delete?: apikeyWhereUniqueInput | apikeyWhereUniqueInput[]
    connect?: apikeyWhereUniqueInput | apikeyWhereUniqueInput[]
    update?: apikeyUpdateWithWhereUniqueWithoutUsersInput | apikeyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: apikeyUpdateManyWithWhereWithoutUsersInput | apikeyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: apikeyScalarWhereInput | apikeyScalarWhereInput[]
  }

  export type auditlogUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<auditlogCreateWithoutUsersInput, auditlogUncheckedCreateWithoutUsersInput> | auditlogCreateWithoutUsersInput[] | auditlogUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: auditlogCreateOrConnectWithoutUsersInput | auditlogCreateOrConnectWithoutUsersInput[]
    upsert?: auditlogUpsertWithWhereUniqueWithoutUsersInput | auditlogUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: auditlogCreateManyUsersInputEnvelope
    set?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    disconnect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    delete?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    connect?: auditlogWhereUniqueInput | auditlogWhereUniqueInput[]
    update?: auditlogUpdateWithWhereUniqueWithoutUsersInput | auditlogUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: auditlogUpdateManyWithWhereWithoutUsersInput | auditlogUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: auditlogScalarWhereInput | auditlogScalarWhereInput[]
  }

  export type logoUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<logoCreateWithoutUsersInput, logoUncheckedCreateWithoutUsersInput> | logoCreateWithoutUsersInput[] | logoUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: logoCreateOrConnectWithoutUsersInput | logoCreateOrConnectWithoutUsersInput[]
    upsert?: logoUpsertWithWhereUniqueWithoutUsersInput | logoUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: logoCreateManyUsersInputEnvelope
    set?: logoWhereUniqueInput | logoWhereUniqueInput[]
    disconnect?: logoWhereUniqueInput | logoWhereUniqueInput[]
    delete?: logoWhereUniqueInput | logoWhereUniqueInput[]
    connect?: logoWhereUniqueInput | logoWhereUniqueInput[]
    update?: logoUpdateWithWhereUniqueWithoutUsersInput | logoUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: logoUpdateManyWithWhereWithoutUsersInput | logoUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: logoScalarWhereInput | logoScalarWhereInput[]
  }

  export type urlUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<urlCreateWithoutUsersInput, urlUncheckedCreateWithoutUsersInput> | urlCreateWithoutUsersInput[] | urlUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: urlCreateOrConnectWithoutUsersInput | urlCreateOrConnectWithoutUsersInput[]
    upsert?: urlUpsertWithWhereUniqueWithoutUsersInput | urlUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: urlCreateManyUsersInputEnvelope
    set?: urlWhereUniqueInput | urlWhereUniqueInput[]
    disconnect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    delete?: urlWhereUniqueInput | urlWhereUniqueInput[]
    connect?: urlWhereUniqueInput | urlWhereUniqueInput[]
    update?: urlUpdateWithWhereUniqueWithoutUsersInput | urlUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: urlUpdateManyWithWhereWithoutUsersInput | urlUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: urlScalarWhereInput | urlScalarWhereInput[]
  }

  export type urltagUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<urltagCreateWithoutUsersInput, urltagUncheckedCreateWithoutUsersInput> | urltagCreateWithoutUsersInput[] | urltagUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: urltagCreateOrConnectWithoutUsersInput | urltagCreateOrConnectWithoutUsersInput[]
    upsert?: urltagUpsertWithWhereUniqueWithoutUsersInput | urltagUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: urltagCreateManyUsersInputEnvelope
    set?: urltagWhereUniqueInput | urltagWhereUniqueInput[]
    disconnect?: urltagWhereUniqueInput | urltagWhereUniqueInput[]
    delete?: urltagWhereUniqueInput | urltagWhereUniqueInput[]
    connect?: urltagWhereUniqueInput | urltagWhereUniqueInput[]
    update?: urltagUpdateWithWhereUniqueWithoutUsersInput | urltagUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: urltagUpdateManyWithWhereWithoutUsersInput | urltagUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: urltagScalarWhereInput | urltagScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumurltypeenumNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.urltypeenum | EnumurltypeenumFieldRefInput<$PrismaModel> | null
    in?: $Enums.urltypeenum[] | ListEnumurltypeenumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.urltypeenum[] | ListEnumurltypeenumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumurltypeenumNullableFilter<$PrismaModel> | $Enums.urltypeenum | null
  }

  export type NestedEnumstatusenumFilter<$PrismaModel = never> = {
    equals?: $Enums.statusenum | EnumstatusenumFieldRefInput<$PrismaModel>
    in?: $Enums.statusenum[] | ListEnumstatusenumFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusenum[] | ListEnumstatusenumFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusenumFilter<$PrismaModel> | $Enums.statusenum
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumurltypeenumNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.urltypeenum | EnumurltypeenumFieldRefInput<$PrismaModel> | null
    in?: $Enums.urltypeenum[] | ListEnumurltypeenumFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.urltypeenum[] | ListEnumurltypeenumFieldRefInput<$PrismaModel> | null
    not?: NestedEnumurltypeenumNullableWithAggregatesFilter<$PrismaModel> | $Enums.urltypeenum | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumurltypeenumNullableFilter<$PrismaModel>
    _max?: NestedEnumurltypeenumNullableFilter<$PrismaModel>
  }

  export type NestedEnumstatusenumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusenum | EnumstatusenumFieldRefInput<$PrismaModel>
    in?: $Enums.statusenum[] | ListEnumstatusenumFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusenum[] | ListEnumstatusenumFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusenumWithAggregatesFilter<$PrismaModel> | $Enums.statusenum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusenumFilter<$PrismaModel>
    _max?: NestedEnumstatusenumFilter<$PrismaModel>
  }

  export type usersCreateWithoutApikeyInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    auditlog?: auditlogCreateNestedManyWithoutUsersInput
    logo?: logoCreateNestedManyWithoutUsersInput
    url?: urlCreateNestedManyWithoutUsersInput
    urltag?: urltagCreateNestedManyWithoutUsersInput
    userrole?: userroleCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutApikeyInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUsersInput
    logo?: logoUncheckedCreateNestedManyWithoutUsersInput
    url?: urlUncheckedCreateNestedManyWithoutUsersInput
    urltag?: urltagUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutApikeyInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutApikeyInput, usersUncheckedCreateWithoutApikeyInput>
  }

  export type usersUpsertWithoutApikeyInput = {
    update: XOR<usersUpdateWithoutApikeyInput, usersUncheckedUpdateWithoutApikeyInput>
    create: XOR<usersCreateWithoutApikeyInput, usersUncheckedCreateWithoutApikeyInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutApikeyInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutApikeyInput, usersUncheckedUpdateWithoutApikeyInput>
  }

  export type usersUpdateWithoutApikeyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    auditlog?: auditlogUpdateManyWithoutUsersNestedInput
    logo?: logoUpdateManyWithoutUsersNestedInput
    url?: urlUpdateManyWithoutUsersNestedInput
    urltag?: urltagUpdateManyWithoutUsersNestedInput
    userrole?: userroleUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutApikeyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    auditlog?: auditlogUncheckedUpdateManyWithoutUsersNestedInput
    logo?: logoUncheckedUpdateManyWithoutUsersNestedInput
    url?: urlUncheckedUpdateManyWithoutUsersNestedInput
    urltag?: urltagUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutAuditlogInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyCreateNestedManyWithoutUsersInput
    logo?: logoCreateNestedManyWithoutUsersInput
    url?: urlCreateNestedManyWithoutUsersInput
    urltag?: urltagCreateNestedManyWithoutUsersInput
    userrole?: userroleCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAuditlogInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyUncheckedCreateNestedManyWithoutUsersInput
    logo?: logoUncheckedCreateNestedManyWithoutUsersInput
    url?: urlUncheckedCreateNestedManyWithoutUsersInput
    urltag?: urltagUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAuditlogInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAuditlogInput, usersUncheckedCreateWithoutAuditlogInput>
  }

  export type urlCreateWithoutAuditlogInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    logo?: logoCreateNestedOneWithoutUrlInput
    urltag?: urltagCreateNestedOneWithoutUrlInput
    users?: usersCreateNestedOneWithoutUrlInput
    urlclick?: urlclickCreateNestedManyWithoutUrlInput
  }

  export type urlUncheckedCreateWithoutAuditlogInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    urlclick?: urlclickUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlCreateOrConnectWithoutAuditlogInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutAuditlogInput, urlUncheckedCreateWithoutAuditlogInput>
  }

  export type usersUpsertWithoutAuditlogInput = {
    update: XOR<usersUpdateWithoutAuditlogInput, usersUncheckedUpdateWithoutAuditlogInput>
    create: XOR<usersCreateWithoutAuditlogInput, usersUncheckedCreateWithoutAuditlogInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAuditlogInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAuditlogInput, usersUncheckedUpdateWithoutAuditlogInput>
  }

  export type usersUpdateWithoutAuditlogInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUpdateManyWithoutUsersNestedInput
    logo?: logoUpdateManyWithoutUsersNestedInput
    url?: urlUpdateManyWithoutUsersNestedInput
    urltag?: urltagUpdateManyWithoutUsersNestedInput
    userrole?: userroleUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAuditlogInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUncheckedUpdateManyWithoutUsersNestedInput
    logo?: logoUncheckedUpdateManyWithoutUsersNestedInput
    url?: urlUncheckedUpdateManyWithoutUsersNestedInput
    urltag?: urltagUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type urlUpsertWithoutAuditlogInput = {
    update: XOR<urlUpdateWithoutAuditlogInput, urlUncheckedUpdateWithoutAuditlogInput>
    create: XOR<urlCreateWithoutAuditlogInput, urlUncheckedCreateWithoutAuditlogInput>
    where?: urlWhereInput
  }

  export type urlUpdateToOneWithWhereWithoutAuditlogInput = {
    where?: urlWhereInput
    data: XOR<urlUpdateWithoutAuditlogInput, urlUncheckedUpdateWithoutAuditlogInput>
  }

  export type urlUpdateWithoutAuditlogInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    logo?: logoUpdateOneWithoutUrlNestedInput
    urltag?: urltagUpdateOneWithoutUrlNestedInput
    users?: usersUpdateOneWithoutUrlNestedInput
    urlclick?: urlclickUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateWithoutAuditlogInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    urlclick?: urlclickUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type usersCreateWithoutLogoInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyCreateNestedManyWithoutUsersInput
    auditlog?: auditlogCreateNestedManyWithoutUsersInput
    url?: urlCreateNestedManyWithoutUsersInput
    urltag?: urltagCreateNestedManyWithoutUsersInput
    userrole?: userroleCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLogoInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyUncheckedCreateNestedManyWithoutUsersInput
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUsersInput
    url?: urlUncheckedCreateNestedManyWithoutUsersInput
    urltag?: urltagUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLogoInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLogoInput, usersUncheckedCreateWithoutLogoInput>
  }

  export type urlCreateWithoutLogoInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    auditlog?: auditlogCreateNestedManyWithoutUrlInput
    urltag?: urltagCreateNestedOneWithoutUrlInput
    users?: usersCreateNestedOneWithoutUrlInput
    urlclick?: urlclickCreateNestedManyWithoutUrlInput
  }

  export type urlUncheckedCreateWithoutLogoInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    tag_id?: number | null
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUrlInput
    urlclick?: urlclickUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlCreateOrConnectWithoutLogoInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput>
  }

  export type urlCreateManyLogoInputEnvelope = {
    data: urlCreateManyLogoInput | urlCreateManyLogoInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutLogoInput = {
    update: XOR<usersUpdateWithoutLogoInput, usersUncheckedUpdateWithoutLogoInput>
    create: XOR<usersCreateWithoutLogoInput, usersUncheckedCreateWithoutLogoInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLogoInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLogoInput, usersUncheckedUpdateWithoutLogoInput>
  }

  export type usersUpdateWithoutLogoInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUpdateManyWithoutUsersNestedInput
    auditlog?: auditlogUpdateManyWithoutUsersNestedInput
    url?: urlUpdateManyWithoutUsersNestedInput
    urltag?: urltagUpdateManyWithoutUsersNestedInput
    userrole?: userroleUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLogoInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUncheckedUpdateManyWithoutUsersNestedInput
    auditlog?: auditlogUncheckedUpdateManyWithoutUsersNestedInput
    url?: urlUncheckedUpdateManyWithoutUsersNestedInput
    urltag?: urltagUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type urlUpsertWithWhereUniqueWithoutLogoInput = {
    where: urlWhereUniqueInput
    update: XOR<urlUpdateWithoutLogoInput, urlUncheckedUpdateWithoutLogoInput>
    create: XOR<urlCreateWithoutLogoInput, urlUncheckedCreateWithoutLogoInput>
  }

  export type urlUpdateWithWhereUniqueWithoutLogoInput = {
    where: urlWhereUniqueInput
    data: XOR<urlUpdateWithoutLogoInput, urlUncheckedUpdateWithoutLogoInput>
  }

  export type urlUpdateManyWithWhereWithoutLogoInput = {
    where: urlScalarWhereInput
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyWithoutLogoInput>
  }

  export type urlScalarWhereInput = {
    AND?: urlScalarWhereInput | urlScalarWhereInput[]
    OR?: urlScalarWhereInput[]
    NOT?: urlScalarWhereInput | urlScalarWhereInput[]
    url_id?: UuidFilter<"url"> | string
    user_id?: UuidNullableFilter<"url"> | string | null
    original_url?: StringNullableFilter<"url"> | string | null
    short_url?: StringFilter<"url"> | string
    logo_id?: IntNullableFilter<"url"> | number | null
    tag_id?: IntNullableFilter<"url"> | number | null
    url_type?: EnumurltypeenumNullableFilter<"url"> | $Enums.urltypeenum | null
    associated?: BoolFilter<"url"> | boolean
    expiration_date?: DateTimeNullableFilter<"url"> | Date | string | null
    created_at?: DateTimeFilter<"url"> | Date | string
    updated_at?: DateTimeFilter<"url"> | Date | string
    deleted_at?: DateTimeNullableFilter<"url"> | Date | string | null
    is_deleted?: BoolFilter<"url"> | boolean
    is_pre_generated?: BoolFilter<"url"> | boolean
    associated_at?: DateTimeNullableFilter<"url"> | Date | string | null
    status?: EnumstatusenumFilter<"url"> | $Enums.statusenum
  }

  export type auditlogCreateWithoutUrlInput = {
    action: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    users: usersCreateNestedOneWithoutAuditlogInput
  }

  export type auditlogUncheckedCreateWithoutUrlInput = {
    audit_id?: number
    action: string
    changed_by: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type auditlogCreateOrConnectWithoutUrlInput = {
    where: auditlogWhereUniqueInput
    create: XOR<auditlogCreateWithoutUrlInput, auditlogUncheckedCreateWithoutUrlInput>
  }

  export type auditlogCreateManyUrlInputEnvelope = {
    data: auditlogCreateManyUrlInput | auditlogCreateManyUrlInput[]
    skipDuplicates?: boolean
  }

  export type logoCreateWithoutUrlInput = {
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
    users: usersCreateNestedOneWithoutLogoInput
  }

  export type logoUncheckedCreateWithoutUrlInput = {
    logo_id?: number
    user_id: string
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type logoCreateOrConnectWithoutUrlInput = {
    where: logoWhereUniqueInput
    create: XOR<logoCreateWithoutUrlInput, logoUncheckedCreateWithoutUrlInput>
  }

  export type urltagCreateWithoutUrlInput = {
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    users: usersCreateNestedOneWithoutUrltagInput
  }

  export type urltagUncheckedCreateWithoutUrlInput = {
    tag_id?: number
    user_id: string
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type urltagCreateOrConnectWithoutUrlInput = {
    where: urltagWhereUniqueInput
    create: XOR<urltagCreateWithoutUrlInput, urltagUncheckedCreateWithoutUrlInput>
  }

  export type usersCreateWithoutUrlInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyCreateNestedManyWithoutUsersInput
    auditlog?: auditlogCreateNestedManyWithoutUsersInput
    logo?: logoCreateNestedManyWithoutUsersInput
    urltag?: urltagCreateNestedManyWithoutUsersInput
    userrole?: userroleCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUrlInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyUncheckedCreateNestedManyWithoutUsersInput
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUsersInput
    logo?: logoUncheckedCreateNestedManyWithoutUsersInput
    urltag?: urltagUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUrlInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUrlInput, usersUncheckedCreateWithoutUrlInput>
  }

  export type urlclickCreateWithoutUrlInput = {
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type urlclickUncheckedCreateWithoutUrlInput = {
    click_id?: number
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type urlclickCreateOrConnectWithoutUrlInput = {
    where: urlclickWhereUniqueInput
    create: XOR<urlclickCreateWithoutUrlInput, urlclickUncheckedCreateWithoutUrlInput>
  }

  export type urlclickCreateManyUrlInputEnvelope = {
    data: urlclickCreateManyUrlInput | urlclickCreateManyUrlInput[]
    skipDuplicates?: boolean
  }

  export type auditlogUpsertWithWhereUniqueWithoutUrlInput = {
    where: auditlogWhereUniqueInput
    update: XOR<auditlogUpdateWithoutUrlInput, auditlogUncheckedUpdateWithoutUrlInput>
    create: XOR<auditlogCreateWithoutUrlInput, auditlogUncheckedCreateWithoutUrlInput>
  }

  export type auditlogUpdateWithWhereUniqueWithoutUrlInput = {
    where: auditlogWhereUniqueInput
    data: XOR<auditlogUpdateWithoutUrlInput, auditlogUncheckedUpdateWithoutUrlInput>
  }

  export type auditlogUpdateManyWithWhereWithoutUrlInput = {
    where: auditlogScalarWhereInput
    data: XOR<auditlogUpdateManyMutationInput, auditlogUncheckedUpdateManyWithoutUrlInput>
  }

  export type auditlogScalarWhereInput = {
    AND?: auditlogScalarWhereInput | auditlogScalarWhereInput[]
    OR?: auditlogScalarWhereInput[]
    NOT?: auditlogScalarWhereInput | auditlogScalarWhereInput[]
    audit_id?: IntFilter<"auditlog"> | number
    url_id?: UuidFilter<"auditlog"> | string
    action?: StringFilter<"auditlog"> | string
    changed_by?: UuidFilter<"auditlog"> | string
    change_date?: DateTimeFilter<"auditlog"> | Date | string
    details?: StringNullableFilter<"auditlog"> | string | null
    created_at?: DateTimeFilter<"auditlog"> | Date | string
    updated_at?: DateTimeFilter<"auditlog"> | Date | string
    deleted_at?: DateTimeNullableFilter<"auditlog"> | Date | string | null
    is_deleted?: BoolFilter<"auditlog"> | boolean
  }

  export type logoUpsertWithoutUrlInput = {
    update: XOR<logoUpdateWithoutUrlInput, logoUncheckedUpdateWithoutUrlInput>
    create: XOR<logoCreateWithoutUrlInput, logoUncheckedCreateWithoutUrlInput>
    where?: logoWhereInput
  }

  export type logoUpdateToOneWithWhereWithoutUrlInput = {
    where?: logoWhereInput
    data: XOR<logoUpdateWithoutUrlInput, logoUncheckedUpdateWithoutUrlInput>
  }

  export type logoUpdateWithoutUrlInput = {
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutLogoNestedInput
  }

  export type logoUncheckedUpdateWithoutUrlInput = {
    logo_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urltagUpsertWithoutUrlInput = {
    update: XOR<urltagUpdateWithoutUrlInput, urltagUncheckedUpdateWithoutUrlInput>
    create: XOR<urltagCreateWithoutUrlInput, urltagUncheckedCreateWithoutUrlInput>
    where?: urltagWhereInput
  }

  export type urltagUpdateToOneWithWhereWithoutUrlInput = {
    where?: urltagWhereInput
    data: XOR<urltagUpdateWithoutUrlInput, urltagUncheckedUpdateWithoutUrlInput>
  }

  export type urltagUpdateWithoutUrlInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutUrltagNestedInput
  }

  export type urltagUncheckedUpdateWithoutUrlInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUpsertWithoutUrlInput = {
    update: XOR<usersUpdateWithoutUrlInput, usersUncheckedUpdateWithoutUrlInput>
    create: XOR<usersCreateWithoutUrlInput, usersUncheckedCreateWithoutUrlInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUrlInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUrlInput, usersUncheckedUpdateWithoutUrlInput>
  }

  export type usersUpdateWithoutUrlInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUpdateManyWithoutUsersNestedInput
    auditlog?: auditlogUpdateManyWithoutUsersNestedInput
    logo?: logoUpdateManyWithoutUsersNestedInput
    urltag?: urltagUpdateManyWithoutUsersNestedInput
    userrole?: userroleUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUrlInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUncheckedUpdateManyWithoutUsersNestedInput
    auditlog?: auditlogUncheckedUpdateManyWithoutUsersNestedInput
    logo?: logoUncheckedUpdateManyWithoutUsersNestedInput
    urltag?: urltagUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type urlclickUpsertWithWhereUniqueWithoutUrlInput = {
    where: urlclickWhereUniqueInput
    update: XOR<urlclickUpdateWithoutUrlInput, urlclickUncheckedUpdateWithoutUrlInput>
    create: XOR<urlclickCreateWithoutUrlInput, urlclickUncheckedCreateWithoutUrlInput>
  }

  export type urlclickUpdateWithWhereUniqueWithoutUrlInput = {
    where: urlclickWhereUniqueInput
    data: XOR<urlclickUpdateWithoutUrlInput, urlclickUncheckedUpdateWithoutUrlInput>
  }

  export type urlclickUpdateManyWithWhereWithoutUrlInput = {
    where: urlclickScalarWhereInput
    data: XOR<urlclickUpdateManyMutationInput, urlclickUncheckedUpdateManyWithoutUrlInput>
  }

  export type urlclickScalarWhereInput = {
    AND?: urlclickScalarWhereInput | urlclickScalarWhereInput[]
    OR?: urlclickScalarWhereInput[]
    NOT?: urlclickScalarWhereInput | urlclickScalarWhereInput[]
    click_id?: IntFilter<"urlclick"> | number
    url_id?: UuidFilter<"urlclick"> | string
    access_date?: DateTimeFilter<"urlclick"> | Date | string
    access_time?: DateTimeFilter<"urlclick"> | Date | string
    ip_address?: StringFilter<"urlclick"> | string
    user_agent?: StringFilter<"urlclick"> | string
    referrer?: StringNullableFilter<"urlclick"> | string | null
    country?: StringNullableFilter<"urlclick"> | string | null
    city?: StringNullableFilter<"urlclick"> | string | null
    created_at?: DateTimeFilter<"urlclick"> | Date | string
    updated_at?: DateTimeFilter<"urlclick"> | Date | string
    deleted_at?: DateTimeNullableFilter<"urlclick"> | Date | string | null
    is_deleted?: BoolFilter<"urlclick"> | boolean
  }

  export type urlCreateWithoutUrlclickInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    auditlog?: auditlogCreateNestedManyWithoutUrlInput
    logo?: logoCreateNestedOneWithoutUrlInput
    urltag?: urltagCreateNestedOneWithoutUrlInput
    users?: usersCreateNestedOneWithoutUrlInput
  }

  export type urlUncheckedCreateWithoutUrlclickInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlCreateOrConnectWithoutUrlclickInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutUrlclickInput, urlUncheckedCreateWithoutUrlclickInput>
  }

  export type urlUpsertWithoutUrlclickInput = {
    update: XOR<urlUpdateWithoutUrlclickInput, urlUncheckedUpdateWithoutUrlclickInput>
    create: XOR<urlCreateWithoutUrlclickInput, urlUncheckedCreateWithoutUrlclickInput>
    where?: urlWhereInput
  }

  export type urlUpdateToOneWithWhereWithoutUrlclickInput = {
    where?: urlWhereInput
    data: XOR<urlUpdateWithoutUrlclickInput, urlUncheckedUpdateWithoutUrlclickInput>
  }

  export type urlUpdateWithoutUrlclickInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    auditlog?: auditlogUpdateManyWithoutUrlNestedInput
    logo?: logoUpdateOneWithoutUrlNestedInput
    urltag?: urltagUpdateOneWithoutUrlNestedInput
    users?: usersUpdateOneWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateWithoutUrlclickInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    auditlog?: auditlogUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type urlCreateWithoutUrltagInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    auditlog?: auditlogCreateNestedManyWithoutUrlInput
    logo?: logoCreateNestedOneWithoutUrlInput
    users?: usersCreateNestedOneWithoutUrlInput
    urlclick?: urlclickCreateNestedManyWithoutUrlInput
  }

  export type urlUncheckedCreateWithoutUrltagInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUrlInput
    urlclick?: urlclickUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlCreateOrConnectWithoutUrltagInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutUrltagInput, urlUncheckedCreateWithoutUrltagInput>
  }

  export type urlCreateManyUrltagInputEnvelope = {
    data: urlCreateManyUrltagInput | urlCreateManyUrltagInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutUrltagInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyCreateNestedManyWithoutUsersInput
    auditlog?: auditlogCreateNestedManyWithoutUsersInput
    logo?: logoCreateNestedManyWithoutUsersInput
    url?: urlCreateNestedManyWithoutUsersInput
    userrole?: userroleCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUrltagInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    role_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyUncheckedCreateNestedManyWithoutUsersInput
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUsersInput
    logo?: logoUncheckedCreateNestedManyWithoutUsersInput
    url?: urlUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUrltagInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUrltagInput, usersUncheckedCreateWithoutUrltagInput>
  }

  export type urlUpsertWithWhereUniqueWithoutUrltagInput = {
    where: urlWhereUniqueInput
    update: XOR<urlUpdateWithoutUrltagInput, urlUncheckedUpdateWithoutUrltagInput>
    create: XOR<urlCreateWithoutUrltagInput, urlUncheckedCreateWithoutUrltagInput>
  }

  export type urlUpdateWithWhereUniqueWithoutUrltagInput = {
    where: urlWhereUniqueInput
    data: XOR<urlUpdateWithoutUrltagInput, urlUncheckedUpdateWithoutUrltagInput>
  }

  export type urlUpdateManyWithWhereWithoutUrltagInput = {
    where: urlScalarWhereInput
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyWithoutUrltagInput>
  }

  export type usersUpsertWithoutUrltagInput = {
    update: XOR<usersUpdateWithoutUrltagInput, usersUncheckedUpdateWithoutUrltagInput>
    create: XOR<usersCreateWithoutUrltagInput, usersUncheckedCreateWithoutUrltagInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUrltagInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUrltagInput, usersUncheckedUpdateWithoutUrltagInput>
  }

  export type usersUpdateWithoutUrltagInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUpdateManyWithoutUsersNestedInput
    auditlog?: auditlogUpdateManyWithoutUsersNestedInput
    logo?: logoUpdateManyWithoutUsersNestedInput
    url?: urlUpdateManyWithoutUsersNestedInput
    userrole?: userroleUpdateOneWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUrltagInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUncheckedUpdateManyWithoutUsersNestedInput
    auditlog?: auditlogUncheckedUpdateManyWithoutUsersNestedInput
    logo?: logoUncheckedUpdateManyWithoutUsersNestedInput
    url?: urlUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutUserroleInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyCreateNestedManyWithoutUsersInput
    auditlog?: auditlogCreateNestedManyWithoutUsersInput
    logo?: logoCreateNestedManyWithoutUsersInput
    url?: urlCreateNestedManyWithoutUsersInput
    urltag?: urltagCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUserroleInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    apikey?: apikeyUncheckedCreateNestedManyWithoutUsersInput
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUsersInput
    logo?: logoUncheckedCreateNestedManyWithoutUsersInput
    url?: urlUncheckedCreateNestedManyWithoutUsersInput
    urltag?: urltagUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUserroleInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUserroleInput, usersUncheckedCreateWithoutUserroleInput>
  }

  export type usersCreateManyUserroleInputEnvelope = {
    data: usersCreateManyUserroleInput | usersCreateManyUserroleInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutUserroleInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutUserroleInput, usersUncheckedUpdateWithoutUserroleInput>
    create: XOR<usersCreateWithoutUserroleInput, usersUncheckedCreateWithoutUserroleInput>
  }

  export type usersUpdateWithWhereUniqueWithoutUserroleInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutUserroleInput, usersUncheckedUpdateWithoutUserroleInput>
  }

  export type usersUpdateManyWithWhereWithoutUserroleInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUserroleInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    user_id?: UuidFilter<"users"> | string
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    is_deleted?: BoolFilter<"users"> | boolean
  }

  export type apikeyCreateWithoutUsersInput = {
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type apikeyUncheckedCreateWithoutUsersInput = {
    api_key_id?: number
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type apikeyCreateOrConnectWithoutUsersInput = {
    where: apikeyWhereUniqueInput
    create: XOR<apikeyCreateWithoutUsersInput, apikeyUncheckedCreateWithoutUsersInput>
  }

  export type apikeyCreateManyUsersInputEnvelope = {
    data: apikeyCreateManyUsersInput | apikeyCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type auditlogCreateWithoutUsersInput = {
    action: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url: urlCreateNestedOneWithoutAuditlogInput
  }

  export type auditlogUncheckedCreateWithoutUsersInput = {
    audit_id?: number
    url_id: string
    action: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type auditlogCreateOrConnectWithoutUsersInput = {
    where: auditlogWhereUniqueInput
    create: XOR<auditlogCreateWithoutUsersInput, auditlogUncheckedCreateWithoutUsersInput>
  }

  export type auditlogCreateManyUsersInputEnvelope = {
    data: auditlogCreateManyUsersInput | auditlogCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type logoCreateWithoutUsersInput = {
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlCreateNestedManyWithoutLogoInput
  }

  export type logoUncheckedCreateWithoutUsersInput = {
    logo_id?: number
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlUncheckedCreateNestedManyWithoutLogoInput
  }

  export type logoCreateOrConnectWithoutUsersInput = {
    where: logoWhereUniqueInput
    create: XOR<logoCreateWithoutUsersInput, logoUncheckedCreateWithoutUsersInput>
  }

  export type logoCreateManyUsersInputEnvelope = {
    data: logoCreateManyUsersInput | logoCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type urlCreateWithoutUsersInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    auditlog?: auditlogCreateNestedManyWithoutUrlInput
    logo?: logoCreateNestedOneWithoutUrlInput
    urltag?: urltagCreateNestedOneWithoutUrlInput
    urlclick?: urlclickCreateNestedManyWithoutUrlInput
  }

  export type urlUncheckedCreateWithoutUsersInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
    auditlog?: auditlogUncheckedCreateNestedManyWithoutUrlInput
    urlclick?: urlclickUncheckedCreateNestedManyWithoutUrlInput
  }

  export type urlCreateOrConnectWithoutUsersInput = {
    where: urlWhereUniqueInput
    create: XOR<urlCreateWithoutUsersInput, urlUncheckedCreateWithoutUsersInput>
  }

  export type urlCreateManyUsersInputEnvelope = {
    data: urlCreateManyUsersInput | urlCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type urltagCreateWithoutUsersInput = {
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlCreateNestedManyWithoutUrltagInput
  }

  export type urltagUncheckedCreateWithoutUsersInput = {
    tag_id?: number
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    url?: urlUncheckedCreateNestedManyWithoutUrltagInput
  }

  export type urltagCreateOrConnectWithoutUsersInput = {
    where: urltagWhereUniqueInput
    create: XOR<urltagCreateWithoutUsersInput, urltagUncheckedCreateWithoutUsersInput>
  }

  export type urltagCreateManyUsersInputEnvelope = {
    data: urltagCreateManyUsersInput | urltagCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type userroleCreateWithoutUsersInput = {
    role_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type userroleUncheckedCreateWithoutUsersInput = {
    role_id?: number
    role_name: string
    description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type userroleCreateOrConnectWithoutUsersInput = {
    where: userroleWhereUniqueInput
    create: XOR<userroleCreateWithoutUsersInput, userroleUncheckedCreateWithoutUsersInput>
  }

  export type apikeyUpsertWithWhereUniqueWithoutUsersInput = {
    where: apikeyWhereUniqueInput
    update: XOR<apikeyUpdateWithoutUsersInput, apikeyUncheckedUpdateWithoutUsersInput>
    create: XOR<apikeyCreateWithoutUsersInput, apikeyUncheckedCreateWithoutUsersInput>
  }

  export type apikeyUpdateWithWhereUniqueWithoutUsersInput = {
    where: apikeyWhereUniqueInput
    data: XOR<apikeyUpdateWithoutUsersInput, apikeyUncheckedUpdateWithoutUsersInput>
  }

  export type apikeyUpdateManyWithWhereWithoutUsersInput = {
    where: apikeyScalarWhereInput
    data: XOR<apikeyUpdateManyMutationInput, apikeyUncheckedUpdateManyWithoutUsersInput>
  }

  export type apikeyScalarWhereInput = {
    AND?: apikeyScalarWhereInput | apikeyScalarWhereInput[]
    OR?: apikeyScalarWhereInput[]
    NOT?: apikeyScalarWhereInput | apikeyScalarWhereInput[]
    api_key_id?: IntFilter<"apikey"> | number
    user_id?: UuidFilter<"apikey"> | string
    api_key?: StringFilter<"apikey"> | string
    created_at?: DateTimeFilter<"apikey"> | Date | string
    expires_at?: DateTimeNullableFilter<"apikey"> | Date | string | null
    updated_at?: DateTimeFilter<"apikey"> | Date | string
    deleted_at?: DateTimeNullableFilter<"apikey"> | Date | string | null
    is_deleted?: BoolFilter<"apikey"> | boolean
  }

  export type auditlogUpsertWithWhereUniqueWithoutUsersInput = {
    where: auditlogWhereUniqueInput
    update: XOR<auditlogUpdateWithoutUsersInput, auditlogUncheckedUpdateWithoutUsersInput>
    create: XOR<auditlogCreateWithoutUsersInput, auditlogUncheckedCreateWithoutUsersInput>
  }

  export type auditlogUpdateWithWhereUniqueWithoutUsersInput = {
    where: auditlogWhereUniqueInput
    data: XOR<auditlogUpdateWithoutUsersInput, auditlogUncheckedUpdateWithoutUsersInput>
  }

  export type auditlogUpdateManyWithWhereWithoutUsersInput = {
    where: auditlogScalarWhereInput
    data: XOR<auditlogUpdateManyMutationInput, auditlogUncheckedUpdateManyWithoutUsersInput>
  }

  export type logoUpsertWithWhereUniqueWithoutUsersInput = {
    where: logoWhereUniqueInput
    update: XOR<logoUpdateWithoutUsersInput, logoUncheckedUpdateWithoutUsersInput>
    create: XOR<logoCreateWithoutUsersInput, logoUncheckedCreateWithoutUsersInput>
  }

  export type logoUpdateWithWhereUniqueWithoutUsersInput = {
    where: logoWhereUniqueInput
    data: XOR<logoUpdateWithoutUsersInput, logoUncheckedUpdateWithoutUsersInput>
  }

  export type logoUpdateManyWithWhereWithoutUsersInput = {
    where: logoScalarWhereInput
    data: XOR<logoUpdateManyMutationInput, logoUncheckedUpdateManyWithoutUsersInput>
  }

  export type logoScalarWhereInput = {
    AND?: logoScalarWhereInput | logoScalarWhereInput[]
    OR?: logoScalarWhereInput[]
    NOT?: logoScalarWhereInput | logoScalarWhereInput[]
    logo_id?: IntFilter<"logo"> | number
    user_id?: UuidFilter<"logo"> | string
    logo_path?: StringFilter<"logo"> | string
    created_at?: DateTimeFilter<"logo"> | Date | string
    updated_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"logo"> | Date | string | null
    is_deleted?: BoolFilter<"logo"> | boolean
  }

  export type urlUpsertWithWhereUniqueWithoutUsersInput = {
    where: urlWhereUniqueInput
    update: XOR<urlUpdateWithoutUsersInput, urlUncheckedUpdateWithoutUsersInput>
    create: XOR<urlCreateWithoutUsersInput, urlUncheckedCreateWithoutUsersInput>
  }

  export type urlUpdateWithWhereUniqueWithoutUsersInput = {
    where: urlWhereUniqueInput
    data: XOR<urlUpdateWithoutUsersInput, urlUncheckedUpdateWithoutUsersInput>
  }

  export type urlUpdateManyWithWhereWithoutUsersInput = {
    where: urlScalarWhereInput
    data: XOR<urlUpdateManyMutationInput, urlUncheckedUpdateManyWithoutUsersInput>
  }

  export type urltagUpsertWithWhereUniqueWithoutUsersInput = {
    where: urltagWhereUniqueInput
    update: XOR<urltagUpdateWithoutUsersInput, urltagUncheckedUpdateWithoutUsersInput>
    create: XOR<urltagCreateWithoutUsersInput, urltagUncheckedCreateWithoutUsersInput>
  }

  export type urltagUpdateWithWhereUniqueWithoutUsersInput = {
    where: urltagWhereUniqueInput
    data: XOR<urltagUpdateWithoutUsersInput, urltagUncheckedUpdateWithoutUsersInput>
  }

  export type urltagUpdateManyWithWhereWithoutUsersInput = {
    where: urltagScalarWhereInput
    data: XOR<urltagUpdateManyMutationInput, urltagUncheckedUpdateManyWithoutUsersInput>
  }

  export type urltagScalarWhereInput = {
    AND?: urltagScalarWhereInput | urltagScalarWhereInput[]
    OR?: urltagScalarWhereInput[]
    NOT?: urltagScalarWhereInput | urltagScalarWhereInput[]
    tag_id?: IntFilter<"urltag"> | number
    user_id?: UuidFilter<"urltag"> | string
    tag_name?: StringFilter<"urltag"> | string
    created_at?: DateTimeFilter<"urltag"> | Date | string
    updated_at?: DateTimeFilter<"urltag"> | Date | string
    deleted_at?: DateTimeNullableFilter<"urltag"> | Date | string | null
    is_deleted?: BoolFilter<"urltag"> | boolean
  }

  export type userroleUpsertWithoutUsersInput = {
    update: XOR<userroleUpdateWithoutUsersInput, userroleUncheckedUpdateWithoutUsersInput>
    create: XOR<userroleCreateWithoutUsersInput, userroleUncheckedCreateWithoutUsersInput>
    where?: userroleWhereInput
  }

  export type userroleUpdateToOneWithWhereWithoutUsersInput = {
    where?: userroleWhereInput
    data: XOR<userroleUpdateWithoutUsersInput, userroleUncheckedUpdateWithoutUsersInput>
  }

  export type userroleUpdateWithoutUsersInput = {
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userroleUncheckedUpdateWithoutUsersInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    role_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlCreateManyLogoInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    tag_id?: number | null
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
  }

  export type urlUpdateWithoutLogoInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    auditlog?: auditlogUpdateManyWithoutUrlNestedInput
    urltag?: urltagUpdateOneWithoutUrlNestedInput
    users?: usersUpdateOneWithoutUrlNestedInput
    urlclick?: urlclickUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateWithoutLogoInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    auditlog?: auditlogUncheckedUpdateManyWithoutUrlNestedInput
    urlclick?: urlclickUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateManyWithoutLogoInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
  }

  export type auditlogCreateManyUrlInput = {
    audit_id?: number
    action: string
    changed_by: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type urlclickCreateManyUrlInput = {
    click_id?: number
    access_date: Date | string
    access_time: Date | string
    ip_address: string
    user_agent: string
    referrer?: string | null
    country?: string | null
    city?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type auditlogUpdateWithoutUrlInput = {
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: usersUpdateOneRequiredWithoutAuditlogNestedInput
  }

  export type auditlogUncheckedUpdateWithoutUrlInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    changed_by?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type auditlogUncheckedUpdateManyWithoutUrlInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    changed_by?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlclickUpdateWithoutUrlInput = {
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlclickUncheckedUpdateWithoutUrlInput = {
    click_id?: IntFieldUpdateOperationsInput | number
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlclickUncheckedUpdateManyWithoutUrlInput = {
    click_id?: IntFieldUpdateOperationsInput | number
    access_date?: DateTimeFieldUpdateOperationsInput | Date | string
    access_time?: DateTimeFieldUpdateOperationsInput | Date | string
    ip_address?: StringFieldUpdateOperationsInput | string
    user_agent?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlCreateManyUrltagInput = {
    url_id?: string
    user_id?: string | null
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
  }

  export type urlUpdateWithoutUrltagInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    auditlog?: auditlogUpdateManyWithoutUrlNestedInput
    logo?: logoUpdateOneWithoutUrlNestedInput
    users?: usersUpdateOneWithoutUrlNestedInput
    urlclick?: urlclickUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateWithoutUrltagInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    auditlog?: auditlogUncheckedUpdateManyWithoutUrlNestedInput
    urlclick?: urlclickUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateManyWithoutUrltagInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
  }

  export type usersCreateManyUserroleInput = {
    user_id?: string
    username: string
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type usersUpdateWithoutUserroleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUpdateManyWithoutUsersNestedInput
    auditlog?: auditlogUpdateManyWithoutUsersNestedInput
    logo?: logoUpdateManyWithoutUsersNestedInput
    url?: urlUpdateManyWithoutUsersNestedInput
    urltag?: urltagUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUserroleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    apikey?: apikeyUncheckedUpdateManyWithoutUsersNestedInput
    auditlog?: auditlogUncheckedUpdateManyWithoutUsersNestedInput
    logo?: logoUncheckedUpdateManyWithoutUsersNestedInput
    url?: urlUncheckedUpdateManyWithoutUsersNestedInput
    urltag?: urltagUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUserroleInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type apikeyCreateManyUsersInput = {
    api_key_id?: number
    api_key: string
    created_at?: Date | string
    expires_at?: Date | string | null
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type auditlogCreateManyUsersInput = {
    audit_id?: number
    url_id: string
    action: string
    change_date?: Date | string
    details?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type logoCreateManyUsersInput = {
    logo_id?: number
    logo_path: string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type urlCreateManyUsersInput = {
    url_id?: string
    original_url?: string | null
    short_url: string
    logo_id?: number | null
    tag_id?: number | null
    url_type?: $Enums.urltypeenum | null
    associated?: boolean
    expiration_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
    is_pre_generated?: boolean
    associated_at?: Date | string | null
    status?: $Enums.statusenum
  }

  export type urltagCreateManyUsersInput = {
    tag_id?: number
    tag_name: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    is_deleted?: boolean
  }

  export type apikeyUpdateWithoutUsersInput = {
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type apikeyUncheckedUpdateWithoutUsersInput = {
    api_key_id?: IntFieldUpdateOperationsInput | number
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type apikeyUncheckedUpdateManyWithoutUsersInput = {
    api_key_id?: IntFieldUpdateOperationsInput | number
    api_key?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type auditlogUpdateWithoutUsersInput = {
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUpdateOneRequiredWithoutAuditlogNestedInput
  }

  export type auditlogUncheckedUpdateWithoutUsersInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type auditlogUncheckedUpdateManyWithoutUsersInput = {
    audit_id?: IntFieldUpdateOperationsInput | number
    url_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type logoUpdateWithoutUsersInput = {
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUpdateManyWithoutLogoNestedInput
  }

  export type logoUncheckedUpdateWithoutUsersInput = {
    logo_id?: IntFieldUpdateOperationsInput | number
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUncheckedUpdateManyWithoutLogoNestedInput
  }

  export type logoUncheckedUpdateManyWithoutUsersInput = {
    logo_id?: IntFieldUpdateOperationsInput | number
    logo_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type urlUpdateWithoutUsersInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    auditlog?: auditlogUpdateManyWithoutUrlNestedInput
    logo?: logoUpdateOneWithoutUrlNestedInput
    urltag?: urltagUpdateOneWithoutUrlNestedInput
    urlclick?: urlclickUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateWithoutUsersInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
    auditlog?: auditlogUncheckedUpdateManyWithoutUrlNestedInput
    urlclick?: urlclickUncheckedUpdateManyWithoutUrlNestedInput
  }

  export type urlUncheckedUpdateManyWithoutUsersInput = {
    url_id?: StringFieldUpdateOperationsInput | string
    original_url?: NullableStringFieldUpdateOperationsInput | string | null
    short_url?: StringFieldUpdateOperationsInput | string
    logo_id?: NullableIntFieldUpdateOperationsInput | number | null
    tag_id?: NullableIntFieldUpdateOperationsInput | number | null
    url_type?: NullableEnumurltypeenumFieldUpdateOperationsInput | $Enums.urltypeenum | null
    associated?: BoolFieldUpdateOperationsInput | boolean
    expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    is_pre_generated?: BoolFieldUpdateOperationsInput | boolean
    associated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumstatusenumFieldUpdateOperationsInput | $Enums.statusenum
  }

  export type urltagUpdateWithoutUsersInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUpdateManyWithoutUrltagNestedInput
  }

  export type urltagUncheckedUpdateWithoutUsersInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    url?: urlUncheckedUpdateManyWithoutUrltagNestedInput
  }

  export type urltagUncheckedUpdateManyWithoutUsersInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    tag_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}