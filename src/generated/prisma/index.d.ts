
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
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Etablissement
 * 
 */
export type Etablissement = $Result.DefaultSelection<Prisma.$EtablissementPayload>
/**
 * Model Etudiant
 * 
 */
export type Etudiant = $Result.DefaultSelection<Prisma.$EtudiantPayload>
/**
 * Model ProgrammeBourse
 * 
 */
export type ProgrammeBourse = $Result.DefaultSelection<Prisma.$ProgrammeBoursePayload>
/**
 * Model AppelCandidature
 * 
 */
export type AppelCandidature = $Result.DefaultSelection<Prisma.$AppelCandidaturePayload>
/**
 * Model Candidature
 * 
 */
export type Candidature = $Result.DefaultSelection<Prisma.$CandidaturePayload>
/**
 * Model DocumentCandidature
 * 
 */
export type DocumentCandidature = $Result.DefaultSelection<Prisma.$DocumentCandidaturePayload>
/**
 * Model Evaluation
 * 
 */
export type Evaluation = $Result.DefaultSelection<Prisma.$EvaluationPayload>
/**
 * Model AttributionBourse
 * 
 */
export type AttributionBourse = $Result.DefaultSelection<Prisma.$AttributionBoursePayload>
/**
 * Model Paiement
 * 
 */
export type Paiement = $Result.DefaultSelection<Prisma.$PaiementPayload>
/**
 * Model Renouvellement
 * 
 */
export type Renouvellement = $Result.DefaultSelection<Prisma.$RenouvellementPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Parametre
 * 
 */
export type Parametre = $Result.DefaultSelection<Prisma.$ParametrePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleUtilisateur: {
  SUPER_ADMINISTRATEUR: 'SUPER_ADMINISTRATEUR',
  ADMINISTRATEUR: 'ADMINISTRATEUR',
  GESTIONNAIRE_BOURSES: 'GESTIONNAIRE_BOURSES',
  EVALUATEUR: 'EVALUATEUR',
  COMPTABLE: 'COMPTABLE',
  ETUDIANT: 'ETUDIANT'
};

export type RoleUtilisateur = (typeof RoleUtilisateur)[keyof typeof RoleUtilisateur]


export const StatutCandidature: {
  BROUILLON: 'BROUILLON',
  SOUMISE: 'SOUMISE',
  EN_VERIFICATION: 'EN_VERIFICATION',
  ELIGIBLE: 'ELIGIBLE',
  NON_ELIGIBLE: 'NON_ELIGIBLE',
  EN_EVALUATION: 'EN_EVALUATION',
  RETENUE: 'RETENUE',
  REJETEE: 'REJETEE',
  ANNULEE: 'ANNULEE'
};

export type StatutCandidature = (typeof StatutCandidature)[keyof typeof StatutCandidature]


export const TypeDocument: {
  CARTE_IDENTITE: 'CARTE_IDENTITE',
  PHOTO_IDENTITE: 'PHOTO_IDENTITE',
  RELEVE_NOTES: 'RELEVE_NOTES',
  ATTESTATION_INSCRIPTION: 'ATTESTATION_INSCRIPTION',
  LETTRE_MOTIVATION: 'LETTRE_MOTIVATION',
  RECOMMANDATION: 'RECOMMANDATION',
  AUTRE: 'AUTRE'
};

export type TypeDocument = (typeof TypeDocument)[keyof typeof TypeDocument]


export const DecisionEvaluation: {
  FAVORABLE: 'FAVORABLE',
  DEFAVORABLE: 'DEFAVORABLE',
  A_REVOIR: 'A_REVOIR'
};

export type DecisionEvaluation = (typeof DecisionEvaluation)[keyof typeof DecisionEvaluation]


export const StatutAttribution: {
  ACTIVE: 'ACTIVE',
  SUSPENDUE: 'SUSPENDUE',
  TERMINEE: 'TERMINEE',
  ANNULEE: 'ANNULEE'
};

export type StatutAttribution = (typeof StatutAttribution)[keyof typeof StatutAttribution]


export const StatutPaiement: {
  PREVU: 'PREVU',
  EFFECTUE: 'EFFECTUE',
  ECHEC: 'ECHEC',
  ANNULE: 'ANNULE'
};

export type StatutPaiement = (typeof StatutPaiement)[keyof typeof StatutPaiement]

}

export type RoleUtilisateur = $Enums.RoleUtilisateur

export const RoleUtilisateur: typeof $Enums.RoleUtilisateur

export type StatutCandidature = $Enums.StatutCandidature

export const StatutCandidature: typeof $Enums.StatutCandidature

export type TypeDocument = $Enums.TypeDocument

export const TypeDocument: typeof $Enums.TypeDocument

export type DecisionEvaluation = $Enums.DecisionEvaluation

export const DecisionEvaluation: typeof $Enums.DecisionEvaluation

export type StatutAttribution = $Enums.StatutAttribution

export const StatutAttribution: typeof $Enums.StatutAttribution

export type StatutPaiement = $Enums.StatutPaiement

export const StatutPaiement: typeof $Enums.StatutPaiement

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
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
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etablissement`: Exposes CRUD operations for the **Etablissement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etablissements
    * const etablissements = await prisma.etablissement.findMany()
    * ```
    */
  get etablissement(): Prisma.EtablissementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etudiant`: Exposes CRUD operations for the **Etudiant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etudiants
    * const etudiants = await prisma.etudiant.findMany()
    * ```
    */
  get etudiant(): Prisma.EtudiantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programmeBourse`: Exposes CRUD operations for the **ProgrammeBourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgrammeBourses
    * const programmeBourses = await prisma.programmeBourse.findMany()
    * ```
    */
  get programmeBourse(): Prisma.ProgrammeBourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appelCandidature`: Exposes CRUD operations for the **AppelCandidature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppelCandidatures
    * const appelCandidatures = await prisma.appelCandidature.findMany()
    * ```
    */
  get appelCandidature(): Prisma.AppelCandidatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidature`: Exposes CRUD operations for the **Candidature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidatures
    * const candidatures = await prisma.candidature.findMany()
    * ```
    */
  get candidature(): Prisma.CandidatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentCandidature`: Exposes CRUD operations for the **DocumentCandidature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentCandidatures
    * const documentCandidatures = await prisma.documentCandidature.findMany()
    * ```
    */
  get documentCandidature(): Prisma.DocumentCandidatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluation`: Exposes CRUD operations for the **Evaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluations
    * const evaluations = await prisma.evaluation.findMany()
    * ```
    */
  get evaluation(): Prisma.EvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attributionBourse`: Exposes CRUD operations for the **AttributionBourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttributionBourses
    * const attributionBourses = await prisma.attributionBourse.findMany()
    * ```
    */
  get attributionBourse(): Prisma.AttributionBourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paiement`: Exposes CRUD operations for the **Paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiements
    * const paiements = await prisma.paiement.findMany()
    * ```
    */
  get paiement(): Prisma.PaiementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.renouvellement`: Exposes CRUD operations for the **Renouvellement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Renouvellements
    * const renouvellements = await prisma.renouvellement.findMany()
    * ```
    */
  get renouvellement(): Prisma.RenouvellementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parametre`: Exposes CRUD operations for the **Parametre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parametres
    * const parametres = await prisma.parametre.findMany()
    * ```
    */
  get parametre(): Prisma.ParametreDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Utilisateur: 'Utilisateur',
    Etablissement: 'Etablissement',
    Etudiant: 'Etudiant',
    ProgrammeBourse: 'ProgrammeBourse',
    AppelCandidature: 'AppelCandidature',
    Candidature: 'Candidature',
    DocumentCandidature: 'DocumentCandidature',
    Evaluation: 'Evaluation',
    AttributionBourse: 'AttributionBourse',
    Paiement: 'Paiement',
    Renouvellement: 'Renouvellement',
    Notification: 'Notification',
    Parametre: 'Parametre'
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
      modelProps: "utilisateur" | "etablissement" | "etudiant" | "programmeBourse" | "appelCandidature" | "candidature" | "documentCandidature" | "evaluation" | "attributionBourse" | "paiement" | "renouvellement" | "notification" | "parametre"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Etablissement: {
        payload: Prisma.$EtablissementPayload<ExtArgs>
        fields: Prisma.EtablissementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtablissementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtablissementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          findFirst: {
            args: Prisma.EtablissementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtablissementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          findMany: {
            args: Prisma.EtablissementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>[]
          }
          create: {
            args: Prisma.EtablissementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          createMany: {
            args: Prisma.EtablissementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EtablissementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          update: {
            args: Prisma.EtablissementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          deleteMany: {
            args: Prisma.EtablissementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtablissementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EtablissementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtablissementPayload>
          }
          aggregate: {
            args: Prisma.EtablissementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtablissement>
          }
          groupBy: {
            args: Prisma.EtablissementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtablissementGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtablissementCountArgs<ExtArgs>
            result: $Utils.Optional<EtablissementCountAggregateOutputType> | number
          }
        }
      }
      Etudiant: {
        payload: Prisma.$EtudiantPayload<ExtArgs>
        fields: Prisma.EtudiantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtudiantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtudiantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          findFirst: {
            args: Prisma.EtudiantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtudiantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          findMany: {
            args: Prisma.EtudiantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>[]
          }
          create: {
            args: Prisma.EtudiantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          createMany: {
            args: Prisma.EtudiantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EtudiantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          update: {
            args: Prisma.EtudiantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          deleteMany: {
            args: Prisma.EtudiantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtudiantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EtudiantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtudiantPayload>
          }
          aggregate: {
            args: Prisma.EtudiantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtudiant>
          }
          groupBy: {
            args: Prisma.EtudiantGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtudiantGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtudiantCountArgs<ExtArgs>
            result: $Utils.Optional<EtudiantCountAggregateOutputType> | number
          }
        }
      }
      ProgrammeBourse: {
        payload: Prisma.$ProgrammeBoursePayload<ExtArgs>
        fields: Prisma.ProgrammeBourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgrammeBourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammeBoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgrammeBourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammeBoursePayload>
          }
          findFirst: {
            args: Prisma.ProgrammeBourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammeBoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgrammeBourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammeBoursePayload>
          }
          findMany: {
            args: Prisma.ProgrammeBourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammeBoursePayload>[]
          }
          create: {
            args: Prisma.ProgrammeBourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammeBoursePayload>
          }
          createMany: {
            args: Prisma.ProgrammeBourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgrammeBourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammeBoursePayload>
          }
          update: {
            args: Prisma.ProgrammeBourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammeBoursePayload>
          }
          deleteMany: {
            args: Prisma.ProgrammeBourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgrammeBourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgrammeBourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgrammeBoursePayload>
          }
          aggregate: {
            args: Prisma.ProgrammeBourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgrammeBourse>
          }
          groupBy: {
            args: Prisma.ProgrammeBourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgrammeBourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgrammeBourseCountArgs<ExtArgs>
            result: $Utils.Optional<ProgrammeBourseCountAggregateOutputType> | number
          }
        }
      }
      AppelCandidature: {
        payload: Prisma.$AppelCandidaturePayload<ExtArgs>
        fields: Prisma.AppelCandidatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppelCandidatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppelCandidaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppelCandidatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppelCandidaturePayload>
          }
          findFirst: {
            args: Prisma.AppelCandidatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppelCandidaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppelCandidatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppelCandidaturePayload>
          }
          findMany: {
            args: Prisma.AppelCandidatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppelCandidaturePayload>[]
          }
          create: {
            args: Prisma.AppelCandidatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppelCandidaturePayload>
          }
          createMany: {
            args: Prisma.AppelCandidatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppelCandidatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppelCandidaturePayload>
          }
          update: {
            args: Prisma.AppelCandidatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppelCandidaturePayload>
          }
          deleteMany: {
            args: Prisma.AppelCandidatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppelCandidatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppelCandidatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppelCandidaturePayload>
          }
          aggregate: {
            args: Prisma.AppelCandidatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppelCandidature>
          }
          groupBy: {
            args: Prisma.AppelCandidatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppelCandidatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppelCandidatureCountArgs<ExtArgs>
            result: $Utils.Optional<AppelCandidatureCountAggregateOutputType> | number
          }
        }
      }
      Candidature: {
        payload: Prisma.$CandidaturePayload<ExtArgs>
        fields: Prisma.CandidatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CandidatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CandidatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          findFirst: {
            args: Prisma.CandidatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CandidatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          findMany: {
            args: Prisma.CandidatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>[]
          }
          create: {
            args: Prisma.CandidatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          createMany: {
            args: Prisma.CandidatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CandidatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          update: {
            args: Prisma.CandidatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          deleteMany: {
            args: Prisma.CandidatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CandidatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CandidatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CandidaturePayload>
          }
          aggregate: {
            args: Prisma.CandidatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidature>
          }
          groupBy: {
            args: Prisma.CandidatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.CandidatureCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatureCountAggregateOutputType> | number
          }
        }
      }
      DocumentCandidature: {
        payload: Prisma.$DocumentCandidaturePayload<ExtArgs>
        fields: Prisma.DocumentCandidatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentCandidatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCandidaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentCandidatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCandidaturePayload>
          }
          findFirst: {
            args: Prisma.DocumentCandidatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCandidaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentCandidatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCandidaturePayload>
          }
          findMany: {
            args: Prisma.DocumentCandidatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCandidaturePayload>[]
          }
          create: {
            args: Prisma.DocumentCandidatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCandidaturePayload>
          }
          createMany: {
            args: Prisma.DocumentCandidatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentCandidatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCandidaturePayload>
          }
          update: {
            args: Prisma.DocumentCandidatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCandidaturePayload>
          }
          deleteMany: {
            args: Prisma.DocumentCandidatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentCandidatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentCandidatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentCandidaturePayload>
          }
          aggregate: {
            args: Prisma.DocumentCandidatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentCandidature>
          }
          groupBy: {
            args: Prisma.DocumentCandidatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentCandidatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCandidatureCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCandidatureCountAggregateOutputType> | number
          }
        }
      }
      Evaluation: {
        payload: Prisma.$EvaluationPayload<ExtArgs>
        fields: Prisma.EvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findFirst: {
            args: Prisma.EvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findMany: {
            args: Prisma.EvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          create: {
            args: Prisma.EvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          createMany: {
            args: Prisma.EvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          update: {
            args: Prisma.EvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          aggregate: {
            args: Prisma.EvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation>
          }
          groupBy: {
            args: Prisma.EvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationCountAggregateOutputType> | number
          }
        }
      }
      AttributionBourse: {
        payload: Prisma.$AttributionBoursePayload<ExtArgs>
        fields: Prisma.AttributionBourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributionBourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributionBoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributionBourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributionBoursePayload>
          }
          findFirst: {
            args: Prisma.AttributionBourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributionBoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributionBourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributionBoursePayload>
          }
          findMany: {
            args: Prisma.AttributionBourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributionBoursePayload>[]
          }
          create: {
            args: Prisma.AttributionBourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributionBoursePayload>
          }
          createMany: {
            args: Prisma.AttributionBourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttributionBourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributionBoursePayload>
          }
          update: {
            args: Prisma.AttributionBourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributionBoursePayload>
          }
          deleteMany: {
            args: Prisma.AttributionBourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributionBourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttributionBourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributionBoursePayload>
          }
          aggregate: {
            args: Prisma.AttributionBourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttributionBourse>
          }
          groupBy: {
            args: Prisma.AttributionBourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributionBourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributionBourseCountArgs<ExtArgs>
            result: $Utils.Optional<AttributionBourseCountAggregateOutputType> | number
          }
        }
      }
      Paiement: {
        payload: Prisma.$PaiementPayload<ExtArgs>
        fields: Prisma.PaiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaiementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findFirst: {
            args: Prisma.PaiementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findMany: {
            args: Prisma.PaiementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          create: {
            args: Prisma.PaiementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          createMany: {
            args: Prisma.PaiementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaiementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          update: {
            args: Prisma.PaiementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          deleteMany: {
            args: Prisma.PaiementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaiementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaiementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          aggregate: {
            args: Prisma.PaiementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaiement>
          }
          groupBy: {
            args: Prisma.PaiementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaiementCountArgs<ExtArgs>
            result: $Utils.Optional<PaiementCountAggregateOutputType> | number
          }
        }
      }
      Renouvellement: {
        payload: Prisma.$RenouvellementPayload<ExtArgs>
        fields: Prisma.RenouvellementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RenouvellementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenouvellementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RenouvellementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenouvellementPayload>
          }
          findFirst: {
            args: Prisma.RenouvellementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenouvellementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RenouvellementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenouvellementPayload>
          }
          findMany: {
            args: Prisma.RenouvellementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenouvellementPayload>[]
          }
          create: {
            args: Prisma.RenouvellementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenouvellementPayload>
          }
          createMany: {
            args: Prisma.RenouvellementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RenouvellementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenouvellementPayload>
          }
          update: {
            args: Prisma.RenouvellementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenouvellementPayload>
          }
          deleteMany: {
            args: Prisma.RenouvellementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RenouvellementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RenouvellementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenouvellementPayload>
          }
          aggregate: {
            args: Prisma.RenouvellementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRenouvellement>
          }
          groupBy: {
            args: Prisma.RenouvellementGroupByArgs<ExtArgs>
            result: $Utils.Optional<RenouvellementGroupByOutputType>[]
          }
          count: {
            args: Prisma.RenouvellementCountArgs<ExtArgs>
            result: $Utils.Optional<RenouvellementCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Parametre: {
        payload: Prisma.$ParametrePayload<ExtArgs>
        fields: Prisma.ParametreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParametreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParametreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametrePayload>
          }
          findFirst: {
            args: Prisma.ParametreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParametreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametrePayload>
          }
          findMany: {
            args: Prisma.ParametreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametrePayload>[]
          }
          create: {
            args: Prisma.ParametreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametrePayload>
          }
          createMany: {
            args: Prisma.ParametreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ParametreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametrePayload>
          }
          update: {
            args: Prisma.ParametreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametrePayload>
          }
          deleteMany: {
            args: Prisma.ParametreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParametreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParametreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametrePayload>
          }
          aggregate: {
            args: Prisma.ParametreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParametre>
          }
          groupBy: {
            args: Prisma.ParametreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParametreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParametreCountArgs<ExtArgs>
            result: $Utils.Optional<ParametreCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    utilisateur?: UtilisateurOmit
    etablissement?: EtablissementOmit
    etudiant?: EtudiantOmit
    programmeBourse?: ProgrammeBourseOmit
    appelCandidature?: AppelCandidatureOmit
    candidature?: CandidatureOmit
    documentCandidature?: DocumentCandidatureOmit
    evaluation?: EvaluationOmit
    attributionBourse?: AttributionBourseOmit
    paiement?: PaiementOmit
    renouvellement?: RenouvellementOmit
    notification?: NotificationOmit
    parametre?: ParametreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    evaluations: number
    notifications: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | UtilisateurCountOutputTypeCountEvaluationsArgs
    notifications?: boolean | UtilisateurCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type EtablissementCountOutputType
   */

  export type EtablissementCountOutputType = {
    etudiants: number
  }

  export type EtablissementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiants?: boolean | EtablissementCountOutputTypeCountEtudiantsArgs
  }

  // Custom InputTypes
  /**
   * EtablissementCountOutputType without action
   */
  export type EtablissementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtablissementCountOutputType
     */
    select?: EtablissementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtablissementCountOutputType without action
   */
  export type EtablissementCountOutputTypeCountEtudiantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtudiantWhereInput
  }


  /**
   * Count Type EtudiantCountOutputType
   */

  export type EtudiantCountOutputType = {
    candidatures: number
    attributions: number
  }

  export type EtudiantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidatures?: boolean | EtudiantCountOutputTypeCountCandidaturesArgs
    attributions?: boolean | EtudiantCountOutputTypeCountAttributionsArgs
  }

  // Custom InputTypes
  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EtudiantCountOutputType
     */
    select?: EtudiantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountCandidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatureWhereInput
  }

  /**
   * EtudiantCountOutputType without action
   */
  export type EtudiantCountOutputTypeCountAttributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributionBourseWhereInput
  }


  /**
   * Count Type ProgrammeBourseCountOutputType
   */

  export type ProgrammeBourseCountOutputType = {
    appels: number
  }

  export type ProgrammeBourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appels?: boolean | ProgrammeBourseCountOutputTypeCountAppelsArgs
  }

  // Custom InputTypes
  /**
   * ProgrammeBourseCountOutputType without action
   */
  export type ProgrammeBourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourseCountOutputType
     */
    select?: ProgrammeBourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgrammeBourseCountOutputType without action
   */
  export type ProgrammeBourseCountOutputTypeCountAppelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppelCandidatureWhereInput
  }


  /**
   * Count Type AppelCandidatureCountOutputType
   */

  export type AppelCandidatureCountOutputType = {
    candidatures: number
  }

  export type AppelCandidatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidatures?: boolean | AppelCandidatureCountOutputTypeCountCandidaturesArgs
  }

  // Custom InputTypes
  /**
   * AppelCandidatureCountOutputType without action
   */
  export type AppelCandidatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidatureCountOutputType
     */
    select?: AppelCandidatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppelCandidatureCountOutputType without action
   */
  export type AppelCandidatureCountOutputTypeCountCandidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatureWhereInput
  }


  /**
   * Count Type CandidatureCountOutputType
   */

  export type CandidatureCountOutputType = {
    documents: number
    evaluations: number
  }

  export type CandidatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | CandidatureCountOutputTypeCountDocumentsArgs
    evaluations?: boolean | CandidatureCountOutputTypeCountEvaluationsArgs
  }

  // Custom InputTypes
  /**
   * CandidatureCountOutputType without action
   */
  export type CandidatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CandidatureCountOutputType
     */
    select?: CandidatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CandidatureCountOutputType without action
   */
  export type CandidatureCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCandidatureWhereInput
  }

  /**
   * CandidatureCountOutputType without action
   */
  export type CandidatureCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }


  /**
   * Count Type AttributionBourseCountOutputType
   */

  export type AttributionBourseCountOutputType = {
    paiements: number
    renouvellements: number
  }

  export type AttributionBourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paiements?: boolean | AttributionBourseCountOutputTypeCountPaiementsArgs
    renouvellements?: boolean | AttributionBourseCountOutputTypeCountRenouvellementsArgs
  }

  // Custom InputTypes
  /**
   * AttributionBourseCountOutputType without action
   */
  export type AttributionBourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourseCountOutputType
     */
    select?: AttributionBourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttributionBourseCountOutputType without action
   */
  export type AttributionBourseCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
  }

  /**
   * AttributionBourseCountOutputType without action
   */
  export type AttributionBourseCountOutputTypeCountRenouvellementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenouvellementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: string | null
    nomComplet: string | null
    email: string | null
    motDePasse: string | null
    role: $Enums.RoleUtilisateur | null
    estActif: boolean | null
    etudiantId: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: string | null
    nomComplet: string | null
    email: string | null
    motDePasse: string | null
    role: $Enums.RoleUtilisateur | null
    estActif: boolean | null
    etudiantId: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    nomComplet: number
    email: number
    motDePasse: number
    role: number
    estActif: number
    etudiantId: number
    creeLe: number
    modifieLe: number
    _all: number
  }


  export type UtilisateurMinAggregateInputType = {
    id?: true
    nomComplet?: true
    email?: true
    motDePasse?: true
    role?: true
    estActif?: true
    etudiantId?: true
    creeLe?: true
    modifieLe?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    nomComplet?: true
    email?: true
    motDePasse?: true
    role?: true
    estActif?: true
    etudiantId?: true
    creeLe?: true
    modifieLe?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    nomComplet?: true
    email?: true
    motDePasse?: true
    role?: true
    estActif?: true
    etudiantId?: true
    creeLe?: true
    modifieLe?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: string
    nomComplet: string
    email: string
    motDePasse: string
    role: $Enums.RoleUtilisateur
    estActif: boolean
    etudiantId: string | null
    creeLe: Date
    modifieLe: Date
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomComplet?: boolean
    email?: boolean
    motDePasse?: boolean
    role?: boolean
    estActif?: boolean
    etudiantId?: boolean
    creeLe?: boolean
    modifieLe?: boolean
    etudiant?: boolean | Utilisateur$etudiantArgs<ExtArgs>
    evaluations?: boolean | Utilisateur$evaluationsArgs<ExtArgs>
    notifications?: boolean | Utilisateur$notificationsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>



  export type UtilisateurSelectScalar = {
    id?: boolean
    nomComplet?: boolean
    email?: boolean
    motDePasse?: boolean
    role?: boolean
    estActif?: boolean
    etudiantId?: boolean
    creeLe?: boolean
    modifieLe?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomComplet" | "email" | "motDePasse" | "role" | "estActif" | "etudiantId" | "creeLe" | "modifieLe", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | Utilisateur$etudiantArgs<ExtArgs>
    evaluations?: boolean | Utilisateur$evaluationsArgs<ExtArgs>
    notifications?: boolean | Utilisateur$notificationsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      etudiant: Prisma.$EtudiantPayload<ExtArgs> | null
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nomComplet: string
      email: string
      motDePasse: string
      role: $Enums.RoleUtilisateur
      estActif: boolean
      etudiantId: string | null
      creeLe: Date
      modifieLe: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
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
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etudiant<T extends Utilisateur$etudiantArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$etudiantArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    evaluations<T extends Utilisateur$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Utilisateur$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'String'>
    readonly nomComplet: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly motDePasse: FieldRef<"Utilisateur", 'String'>
    readonly role: FieldRef<"Utilisateur", 'RoleUtilisateur'>
    readonly estActif: FieldRef<"Utilisateur", 'Boolean'>
    readonly etudiantId: FieldRef<"Utilisateur", 'String'>
    readonly creeLe: FieldRef<"Utilisateur", 'DateTime'>
    readonly modifieLe: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.etudiant
   */
  export type Utilisateur$etudiantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    where?: EtudiantWhereInput
  }

  /**
   * Utilisateur.evaluations
   */
  export type Utilisateur$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Utilisateur.notifications
   */
  export type Utilisateur$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Etablissement
   */

  export type AggregateEtablissement = {
    _count: EtablissementCountAggregateOutputType | null
    _min: EtablissementMinAggregateOutputType | null
    _max: EtablissementMaxAggregateOutputType | null
  }

  export type EtablissementMinAggregateOutputType = {
    id: string | null
    nom: string | null
    sigle: string | null
    province: string | null
    ville: string | null
    type: string | null
    estActif: boolean | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type EtablissementMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    sigle: string | null
    province: string | null
    ville: string | null
    type: string | null
    estActif: boolean | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type EtablissementCountAggregateOutputType = {
    id: number
    nom: number
    sigle: number
    province: number
    ville: number
    type: number
    estActif: number
    creeLe: number
    modifieLe: number
    _all: number
  }


  export type EtablissementMinAggregateInputType = {
    id?: true
    nom?: true
    sigle?: true
    province?: true
    ville?: true
    type?: true
    estActif?: true
    creeLe?: true
    modifieLe?: true
  }

  export type EtablissementMaxAggregateInputType = {
    id?: true
    nom?: true
    sigle?: true
    province?: true
    ville?: true
    type?: true
    estActif?: true
    creeLe?: true
    modifieLe?: true
  }

  export type EtablissementCountAggregateInputType = {
    id?: true
    nom?: true
    sigle?: true
    province?: true
    ville?: true
    type?: true
    estActif?: true
    creeLe?: true
    modifieLe?: true
    _all?: true
  }

  export type EtablissementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etablissement to aggregate.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etablissements
    **/
    _count?: true | EtablissementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtablissementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtablissementMaxAggregateInputType
  }

  export type GetEtablissementAggregateType<T extends EtablissementAggregateArgs> = {
        [P in keyof T & keyof AggregateEtablissement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtablissement[P]>
      : GetScalarType<T[P], AggregateEtablissement[P]>
  }




  export type EtablissementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtablissementWhereInput
    orderBy?: EtablissementOrderByWithAggregationInput | EtablissementOrderByWithAggregationInput[]
    by: EtablissementScalarFieldEnum[] | EtablissementScalarFieldEnum
    having?: EtablissementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtablissementCountAggregateInputType | true
    _min?: EtablissementMinAggregateInputType
    _max?: EtablissementMaxAggregateInputType
  }

  export type EtablissementGroupByOutputType = {
    id: string
    nom: string
    sigle: string | null
    province: string | null
    ville: string | null
    type: string | null
    estActif: boolean
    creeLe: Date
    modifieLe: Date
    _count: EtablissementCountAggregateOutputType | null
    _min: EtablissementMinAggregateOutputType | null
    _max: EtablissementMaxAggregateOutputType | null
  }

  type GetEtablissementGroupByPayload<T extends EtablissementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtablissementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtablissementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtablissementGroupByOutputType[P]>
            : GetScalarType<T[P], EtablissementGroupByOutputType[P]>
        }
      >
    >


  export type EtablissementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    sigle?: boolean
    province?: boolean
    ville?: boolean
    type?: boolean
    estActif?: boolean
    creeLe?: boolean
    modifieLe?: boolean
    etudiants?: boolean | Etablissement$etudiantsArgs<ExtArgs>
    _count?: boolean | EtablissementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etablissement"]>



  export type EtablissementSelectScalar = {
    id?: boolean
    nom?: boolean
    sigle?: boolean
    province?: boolean
    ville?: boolean
    type?: boolean
    estActif?: boolean
    creeLe?: boolean
    modifieLe?: boolean
  }

  export type EtablissementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "sigle" | "province" | "ville" | "type" | "estActif" | "creeLe" | "modifieLe", ExtArgs["result"]["etablissement"]>
  export type EtablissementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiants?: boolean | Etablissement$etudiantsArgs<ExtArgs>
    _count?: boolean | EtablissementCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EtablissementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etablissement"
    objects: {
      etudiants: Prisma.$EtudiantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      sigle: string | null
      province: string | null
      ville: string | null
      type: string | null
      estActif: boolean
      creeLe: Date
      modifieLe: Date
    }, ExtArgs["result"]["etablissement"]>
    composites: {}
  }

  type EtablissementGetPayload<S extends boolean | null | undefined | EtablissementDefaultArgs> = $Result.GetResult<Prisma.$EtablissementPayload, S>

  type EtablissementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtablissementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtablissementCountAggregateInputType | true
    }

  export interface EtablissementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etablissement'], meta: { name: 'Etablissement' } }
    /**
     * Find zero or one Etablissement that matches the filter.
     * @param {EtablissementFindUniqueArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtablissementFindUniqueArgs>(args: SelectSubset<T, EtablissementFindUniqueArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etablissement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtablissementFindUniqueOrThrowArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtablissementFindUniqueOrThrowArgs>(args: SelectSubset<T, EtablissementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etablissement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindFirstArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtablissementFindFirstArgs>(args?: SelectSubset<T, EtablissementFindFirstArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etablissement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindFirstOrThrowArgs} args - Arguments to find a Etablissement
     * @example
     * // Get one Etablissement
     * const etablissement = await prisma.etablissement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtablissementFindFirstOrThrowArgs>(args?: SelectSubset<T, EtablissementFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etablissements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etablissements
     * const etablissements = await prisma.etablissement.findMany()
     * 
     * // Get first 10 Etablissements
     * const etablissements = await prisma.etablissement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etablissementWithIdOnly = await prisma.etablissement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtablissementFindManyArgs>(args?: SelectSubset<T, EtablissementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etablissement.
     * @param {EtablissementCreateArgs} args - Arguments to create a Etablissement.
     * @example
     * // Create one Etablissement
     * const Etablissement = await prisma.etablissement.create({
     *   data: {
     *     // ... data to create a Etablissement
     *   }
     * })
     * 
     */
    create<T extends EtablissementCreateArgs>(args: SelectSubset<T, EtablissementCreateArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etablissements.
     * @param {EtablissementCreateManyArgs} args - Arguments to create many Etablissements.
     * @example
     * // Create many Etablissements
     * const etablissement = await prisma.etablissement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtablissementCreateManyArgs>(args?: SelectSubset<T, EtablissementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Etablissement.
     * @param {EtablissementDeleteArgs} args - Arguments to delete one Etablissement.
     * @example
     * // Delete one Etablissement
     * const Etablissement = await prisma.etablissement.delete({
     *   where: {
     *     // ... filter to delete one Etablissement
     *   }
     * })
     * 
     */
    delete<T extends EtablissementDeleteArgs>(args: SelectSubset<T, EtablissementDeleteArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etablissement.
     * @param {EtablissementUpdateArgs} args - Arguments to update one Etablissement.
     * @example
     * // Update one Etablissement
     * const etablissement = await prisma.etablissement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtablissementUpdateArgs>(args: SelectSubset<T, EtablissementUpdateArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etablissements.
     * @param {EtablissementDeleteManyArgs} args - Arguments to filter Etablissements to delete.
     * @example
     * // Delete a few Etablissements
     * const { count } = await prisma.etablissement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtablissementDeleteManyArgs>(args?: SelectSubset<T, EtablissementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etablissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etablissements
     * const etablissement = await prisma.etablissement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtablissementUpdateManyArgs>(args: SelectSubset<T, EtablissementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Etablissement.
     * @param {EtablissementUpsertArgs} args - Arguments to update or create a Etablissement.
     * @example
     * // Update or create a Etablissement
     * const etablissement = await prisma.etablissement.upsert({
     *   create: {
     *     // ... data to create a Etablissement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etablissement we want to update
     *   }
     * })
     */
    upsert<T extends EtablissementUpsertArgs>(args: SelectSubset<T, EtablissementUpsertArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etablissements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementCountArgs} args - Arguments to filter Etablissements to count.
     * @example
     * // Count the number of Etablissements
     * const count = await prisma.etablissement.count({
     *   where: {
     *     // ... the filter for the Etablissements we want to count
     *   }
     * })
    **/
    count<T extends EtablissementCountArgs>(
      args?: Subset<T, EtablissementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtablissementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etablissement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtablissementAggregateArgs>(args: Subset<T, EtablissementAggregateArgs>): Prisma.PrismaPromise<GetEtablissementAggregateType<T>>

    /**
     * Group by Etablissement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtablissementGroupByArgs} args - Group by arguments.
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
      T extends EtablissementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtablissementGroupByArgs['orderBy'] }
        : { orderBy?: EtablissementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EtablissementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtablissementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etablissement model
   */
  readonly fields: EtablissementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etablissement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtablissementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etudiants<T extends Etablissement$etudiantsArgs<ExtArgs> = {}>(args?: Subset<T, Etablissement$etudiantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Etablissement model
   */
  interface EtablissementFieldRefs {
    readonly id: FieldRef<"Etablissement", 'String'>
    readonly nom: FieldRef<"Etablissement", 'String'>
    readonly sigle: FieldRef<"Etablissement", 'String'>
    readonly province: FieldRef<"Etablissement", 'String'>
    readonly ville: FieldRef<"Etablissement", 'String'>
    readonly type: FieldRef<"Etablissement", 'String'>
    readonly estActif: FieldRef<"Etablissement", 'Boolean'>
    readonly creeLe: FieldRef<"Etablissement", 'DateTime'>
    readonly modifieLe: FieldRef<"Etablissement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Etablissement findUnique
   */
  export type EtablissementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement findUniqueOrThrow
   */
  export type EtablissementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement findFirst
   */
  export type EtablissementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etablissements.
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etablissements.
     */
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * Etablissement findFirstOrThrow
   */
  export type EtablissementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissement to fetch.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etablissements.
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etablissements.
     */
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * Etablissement findMany
   */
  export type EtablissementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter, which Etablissements to fetch.
     */
    where?: EtablissementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etablissements to fetch.
     */
    orderBy?: EtablissementOrderByWithRelationInput | EtablissementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etablissements.
     */
    cursor?: EtablissementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etablissements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etablissements.
     */
    skip?: number
    distinct?: EtablissementScalarFieldEnum | EtablissementScalarFieldEnum[]
  }

  /**
   * Etablissement create
   */
  export type EtablissementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * The data needed to create a Etablissement.
     */
    data: XOR<EtablissementCreateInput, EtablissementUncheckedCreateInput>
  }

  /**
   * Etablissement createMany
   */
  export type EtablissementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etablissements.
     */
    data: EtablissementCreateManyInput | EtablissementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etablissement update
   */
  export type EtablissementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * The data needed to update a Etablissement.
     */
    data: XOR<EtablissementUpdateInput, EtablissementUncheckedUpdateInput>
    /**
     * Choose, which Etablissement to update.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement updateMany
   */
  export type EtablissementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etablissements.
     */
    data: XOR<EtablissementUpdateManyMutationInput, EtablissementUncheckedUpdateManyInput>
    /**
     * Filter which Etablissements to update
     */
    where?: EtablissementWhereInput
    /**
     * Limit how many Etablissements to update.
     */
    limit?: number
  }

  /**
   * Etablissement upsert
   */
  export type EtablissementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * The filter to search for the Etablissement to update in case it exists.
     */
    where: EtablissementWhereUniqueInput
    /**
     * In case the Etablissement found by the `where` argument doesn't exist, create a new Etablissement with this data.
     */
    create: XOR<EtablissementCreateInput, EtablissementUncheckedCreateInput>
    /**
     * In case the Etablissement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtablissementUpdateInput, EtablissementUncheckedUpdateInput>
  }

  /**
   * Etablissement delete
   */
  export type EtablissementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
    /**
     * Filter which Etablissement to delete.
     */
    where: EtablissementWhereUniqueInput
  }

  /**
   * Etablissement deleteMany
   */
  export type EtablissementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etablissements to delete
     */
    where?: EtablissementWhereInput
    /**
     * Limit how many Etablissements to delete.
     */
    limit?: number
  }

  /**
   * Etablissement.etudiants
   */
  export type Etablissement$etudiantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    where?: EtudiantWhereInput
    orderBy?: EtudiantOrderByWithRelationInput | EtudiantOrderByWithRelationInput[]
    cursor?: EtudiantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtudiantScalarFieldEnum | EtudiantScalarFieldEnum[]
  }

  /**
   * Etablissement without action
   */
  export type EtablissementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etablissement
     */
    select?: EtablissementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etablissement
     */
    omit?: EtablissementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtablissementInclude<ExtArgs> | null
  }


  /**
   * Model Etudiant
   */

  export type AggregateEtudiant = {
    _count: EtudiantCountAggregateOutputType | null
    _min: EtudiantMinAggregateOutputType | null
    _max: EtudiantMaxAggregateOutputType | null
  }

  export type EtudiantMinAggregateOutputType = {
    id: string | null
    matricule: string | null
    nom: string | null
    postnom: string | null
    prenom: string | null
    sexe: string | null
    dateNaissance: Date | null
    telephone: string | null
    email: string | null
    adresse: string | null
    provinceOrigine: string | null
    niveauEtude: string | null
    filiere: string | null
    anneeAcademique: string | null
    estActif: boolean | null
    etablissementId: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type EtudiantMaxAggregateOutputType = {
    id: string | null
    matricule: string | null
    nom: string | null
    postnom: string | null
    prenom: string | null
    sexe: string | null
    dateNaissance: Date | null
    telephone: string | null
    email: string | null
    adresse: string | null
    provinceOrigine: string | null
    niveauEtude: string | null
    filiere: string | null
    anneeAcademique: string | null
    estActif: boolean | null
    etablissementId: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type EtudiantCountAggregateOutputType = {
    id: number
    matricule: number
    nom: number
    postnom: number
    prenom: number
    sexe: number
    dateNaissance: number
    telephone: number
    email: number
    adresse: number
    provinceOrigine: number
    niveauEtude: number
    filiere: number
    anneeAcademique: number
    estActif: number
    etablissementId: number
    creeLe: number
    modifieLe: number
    _all: number
  }


  export type EtudiantMinAggregateInputType = {
    id?: true
    matricule?: true
    nom?: true
    postnom?: true
    prenom?: true
    sexe?: true
    dateNaissance?: true
    telephone?: true
    email?: true
    adresse?: true
    provinceOrigine?: true
    niveauEtude?: true
    filiere?: true
    anneeAcademique?: true
    estActif?: true
    etablissementId?: true
    creeLe?: true
    modifieLe?: true
  }

  export type EtudiantMaxAggregateInputType = {
    id?: true
    matricule?: true
    nom?: true
    postnom?: true
    prenom?: true
    sexe?: true
    dateNaissance?: true
    telephone?: true
    email?: true
    adresse?: true
    provinceOrigine?: true
    niveauEtude?: true
    filiere?: true
    anneeAcademique?: true
    estActif?: true
    etablissementId?: true
    creeLe?: true
    modifieLe?: true
  }

  export type EtudiantCountAggregateInputType = {
    id?: true
    matricule?: true
    nom?: true
    postnom?: true
    prenom?: true
    sexe?: true
    dateNaissance?: true
    telephone?: true
    email?: true
    adresse?: true
    provinceOrigine?: true
    niveauEtude?: true
    filiere?: true
    anneeAcademique?: true
    estActif?: true
    etablissementId?: true
    creeLe?: true
    modifieLe?: true
    _all?: true
  }

  export type EtudiantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etudiant to aggregate.
     */
    where?: EtudiantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudiants to fetch.
     */
    orderBy?: EtudiantOrderByWithRelationInput | EtudiantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtudiantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudiants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudiants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etudiants
    **/
    _count?: true | EtudiantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtudiantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtudiantMaxAggregateInputType
  }

  export type GetEtudiantAggregateType<T extends EtudiantAggregateArgs> = {
        [P in keyof T & keyof AggregateEtudiant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtudiant[P]>
      : GetScalarType<T[P], AggregateEtudiant[P]>
  }




  export type EtudiantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtudiantWhereInput
    orderBy?: EtudiantOrderByWithAggregationInput | EtudiantOrderByWithAggregationInput[]
    by: EtudiantScalarFieldEnum[] | EtudiantScalarFieldEnum
    having?: EtudiantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtudiantCountAggregateInputType | true
    _min?: EtudiantMinAggregateInputType
    _max?: EtudiantMaxAggregateInputType
  }

  export type EtudiantGroupByOutputType = {
    id: string
    matricule: string
    nom: string
    postnom: string | null
    prenom: string
    sexe: string | null
    dateNaissance: Date | null
    telephone: string | null
    email: string | null
    adresse: string | null
    provinceOrigine: string | null
    niveauEtude: string | null
    filiere: string | null
    anneeAcademique: string | null
    estActif: boolean
    etablissementId: string
    creeLe: Date
    modifieLe: Date
    _count: EtudiantCountAggregateOutputType | null
    _min: EtudiantMinAggregateOutputType | null
    _max: EtudiantMaxAggregateOutputType | null
  }

  type GetEtudiantGroupByPayload<T extends EtudiantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtudiantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtudiantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtudiantGroupByOutputType[P]>
            : GetScalarType<T[P], EtudiantGroupByOutputType[P]>
        }
      >
    >


  export type EtudiantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricule?: boolean
    nom?: boolean
    postnom?: boolean
    prenom?: boolean
    sexe?: boolean
    dateNaissance?: boolean
    telephone?: boolean
    email?: boolean
    adresse?: boolean
    provinceOrigine?: boolean
    niveauEtude?: boolean
    filiere?: boolean
    anneeAcademique?: boolean
    estActif?: boolean
    etablissementId?: boolean
    creeLe?: boolean
    modifieLe?: boolean
    etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
    utilisateur?: boolean | Etudiant$utilisateurArgs<ExtArgs>
    candidatures?: boolean | Etudiant$candidaturesArgs<ExtArgs>
    attributions?: boolean | Etudiant$attributionsArgs<ExtArgs>
    _count?: boolean | EtudiantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["etudiant"]>



  export type EtudiantSelectScalar = {
    id?: boolean
    matricule?: boolean
    nom?: boolean
    postnom?: boolean
    prenom?: boolean
    sexe?: boolean
    dateNaissance?: boolean
    telephone?: boolean
    email?: boolean
    adresse?: boolean
    provinceOrigine?: boolean
    niveauEtude?: boolean
    filiere?: boolean
    anneeAcademique?: boolean
    estActif?: boolean
    etablissementId?: boolean
    creeLe?: boolean
    modifieLe?: boolean
  }

  export type EtudiantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matricule" | "nom" | "postnom" | "prenom" | "sexe" | "dateNaissance" | "telephone" | "email" | "adresse" | "provinceOrigine" | "niveauEtude" | "filiere" | "anneeAcademique" | "estActif" | "etablissementId" | "creeLe" | "modifieLe", ExtArgs["result"]["etudiant"]>
  export type EtudiantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etablissement?: boolean | EtablissementDefaultArgs<ExtArgs>
    utilisateur?: boolean | Etudiant$utilisateurArgs<ExtArgs>
    candidatures?: boolean | Etudiant$candidaturesArgs<ExtArgs>
    attributions?: boolean | Etudiant$attributionsArgs<ExtArgs>
    _count?: boolean | EtudiantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EtudiantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etudiant"
    objects: {
      etablissement: Prisma.$EtablissementPayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs> | null
      candidatures: Prisma.$CandidaturePayload<ExtArgs>[]
      attributions: Prisma.$AttributionBoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matricule: string
      nom: string
      postnom: string | null
      prenom: string
      sexe: string | null
      dateNaissance: Date | null
      telephone: string | null
      email: string | null
      adresse: string | null
      provinceOrigine: string | null
      niveauEtude: string | null
      filiere: string | null
      anneeAcademique: string | null
      estActif: boolean
      etablissementId: string
      creeLe: Date
      modifieLe: Date
    }, ExtArgs["result"]["etudiant"]>
    composites: {}
  }

  type EtudiantGetPayload<S extends boolean | null | undefined | EtudiantDefaultArgs> = $Result.GetResult<Prisma.$EtudiantPayload, S>

  type EtudiantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtudiantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtudiantCountAggregateInputType | true
    }

  export interface EtudiantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etudiant'], meta: { name: 'Etudiant' } }
    /**
     * Find zero or one Etudiant that matches the filter.
     * @param {EtudiantFindUniqueArgs} args - Arguments to find a Etudiant
     * @example
     * // Get one Etudiant
     * const etudiant = await prisma.etudiant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtudiantFindUniqueArgs>(args: SelectSubset<T, EtudiantFindUniqueArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etudiant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtudiantFindUniqueOrThrowArgs} args - Arguments to find a Etudiant
     * @example
     * // Get one Etudiant
     * const etudiant = await prisma.etudiant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtudiantFindUniqueOrThrowArgs>(args: SelectSubset<T, EtudiantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etudiant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantFindFirstArgs} args - Arguments to find a Etudiant
     * @example
     * // Get one Etudiant
     * const etudiant = await prisma.etudiant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtudiantFindFirstArgs>(args?: SelectSubset<T, EtudiantFindFirstArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etudiant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantFindFirstOrThrowArgs} args - Arguments to find a Etudiant
     * @example
     * // Get one Etudiant
     * const etudiant = await prisma.etudiant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtudiantFindFirstOrThrowArgs>(args?: SelectSubset<T, EtudiantFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etudiants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etudiants
     * const etudiants = await prisma.etudiant.findMany()
     * 
     * // Get first 10 Etudiants
     * const etudiants = await prisma.etudiant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etudiantWithIdOnly = await prisma.etudiant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtudiantFindManyArgs>(args?: SelectSubset<T, EtudiantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etudiant.
     * @param {EtudiantCreateArgs} args - Arguments to create a Etudiant.
     * @example
     * // Create one Etudiant
     * const Etudiant = await prisma.etudiant.create({
     *   data: {
     *     // ... data to create a Etudiant
     *   }
     * })
     * 
     */
    create<T extends EtudiantCreateArgs>(args: SelectSubset<T, EtudiantCreateArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etudiants.
     * @param {EtudiantCreateManyArgs} args - Arguments to create many Etudiants.
     * @example
     * // Create many Etudiants
     * const etudiant = await prisma.etudiant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtudiantCreateManyArgs>(args?: SelectSubset<T, EtudiantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Etudiant.
     * @param {EtudiantDeleteArgs} args - Arguments to delete one Etudiant.
     * @example
     * // Delete one Etudiant
     * const Etudiant = await prisma.etudiant.delete({
     *   where: {
     *     // ... filter to delete one Etudiant
     *   }
     * })
     * 
     */
    delete<T extends EtudiantDeleteArgs>(args: SelectSubset<T, EtudiantDeleteArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etudiant.
     * @param {EtudiantUpdateArgs} args - Arguments to update one Etudiant.
     * @example
     * // Update one Etudiant
     * const etudiant = await prisma.etudiant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtudiantUpdateArgs>(args: SelectSubset<T, EtudiantUpdateArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etudiants.
     * @param {EtudiantDeleteManyArgs} args - Arguments to filter Etudiants to delete.
     * @example
     * // Delete a few Etudiants
     * const { count } = await prisma.etudiant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtudiantDeleteManyArgs>(args?: SelectSubset<T, EtudiantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etudiants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etudiants
     * const etudiant = await prisma.etudiant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtudiantUpdateManyArgs>(args: SelectSubset<T, EtudiantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Etudiant.
     * @param {EtudiantUpsertArgs} args - Arguments to update or create a Etudiant.
     * @example
     * // Update or create a Etudiant
     * const etudiant = await prisma.etudiant.upsert({
     *   create: {
     *     // ... data to create a Etudiant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etudiant we want to update
     *   }
     * })
     */
    upsert<T extends EtudiantUpsertArgs>(args: SelectSubset<T, EtudiantUpsertArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etudiants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantCountArgs} args - Arguments to filter Etudiants to count.
     * @example
     * // Count the number of Etudiants
     * const count = await prisma.etudiant.count({
     *   where: {
     *     // ... the filter for the Etudiants we want to count
     *   }
     * })
    **/
    count<T extends EtudiantCountArgs>(
      args?: Subset<T, EtudiantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtudiantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etudiant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtudiantAggregateArgs>(args: Subset<T, EtudiantAggregateArgs>): Prisma.PrismaPromise<GetEtudiantAggregateType<T>>

    /**
     * Group by Etudiant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtudiantGroupByArgs} args - Group by arguments.
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
      T extends EtudiantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtudiantGroupByArgs['orderBy'] }
        : { orderBy?: EtudiantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EtudiantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtudiantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etudiant model
   */
  readonly fields: EtudiantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etudiant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtudiantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etablissement<T extends EtablissementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtablissementDefaultArgs<ExtArgs>>): Prisma__EtablissementClient<$Result.GetResult<Prisma.$EtablissementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends Etudiant$utilisateurArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$utilisateurArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    candidatures<T extends Etudiant$candidaturesArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$candidaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attributions<T extends Etudiant$attributionsArgs<ExtArgs> = {}>(args?: Subset<T, Etudiant$attributionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Etudiant model
   */
  interface EtudiantFieldRefs {
    readonly id: FieldRef<"Etudiant", 'String'>
    readonly matricule: FieldRef<"Etudiant", 'String'>
    readonly nom: FieldRef<"Etudiant", 'String'>
    readonly postnom: FieldRef<"Etudiant", 'String'>
    readonly prenom: FieldRef<"Etudiant", 'String'>
    readonly sexe: FieldRef<"Etudiant", 'String'>
    readonly dateNaissance: FieldRef<"Etudiant", 'DateTime'>
    readonly telephone: FieldRef<"Etudiant", 'String'>
    readonly email: FieldRef<"Etudiant", 'String'>
    readonly adresse: FieldRef<"Etudiant", 'String'>
    readonly provinceOrigine: FieldRef<"Etudiant", 'String'>
    readonly niveauEtude: FieldRef<"Etudiant", 'String'>
    readonly filiere: FieldRef<"Etudiant", 'String'>
    readonly anneeAcademique: FieldRef<"Etudiant", 'String'>
    readonly estActif: FieldRef<"Etudiant", 'Boolean'>
    readonly etablissementId: FieldRef<"Etudiant", 'String'>
    readonly creeLe: FieldRef<"Etudiant", 'DateTime'>
    readonly modifieLe: FieldRef<"Etudiant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Etudiant findUnique
   */
  export type EtudiantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter, which Etudiant to fetch.
     */
    where: EtudiantWhereUniqueInput
  }

  /**
   * Etudiant findUniqueOrThrow
   */
  export type EtudiantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter, which Etudiant to fetch.
     */
    where: EtudiantWhereUniqueInput
  }

  /**
   * Etudiant findFirst
   */
  export type EtudiantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter, which Etudiant to fetch.
     */
    where?: EtudiantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudiants to fetch.
     */
    orderBy?: EtudiantOrderByWithRelationInput | EtudiantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etudiants.
     */
    cursor?: EtudiantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudiants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudiants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etudiants.
     */
    distinct?: EtudiantScalarFieldEnum | EtudiantScalarFieldEnum[]
  }

  /**
   * Etudiant findFirstOrThrow
   */
  export type EtudiantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter, which Etudiant to fetch.
     */
    where?: EtudiantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudiants to fetch.
     */
    orderBy?: EtudiantOrderByWithRelationInput | EtudiantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etudiants.
     */
    cursor?: EtudiantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudiants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudiants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etudiants.
     */
    distinct?: EtudiantScalarFieldEnum | EtudiantScalarFieldEnum[]
  }

  /**
   * Etudiant findMany
   */
  export type EtudiantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter, which Etudiants to fetch.
     */
    where?: EtudiantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etudiants to fetch.
     */
    orderBy?: EtudiantOrderByWithRelationInput | EtudiantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etudiants.
     */
    cursor?: EtudiantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etudiants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etudiants.
     */
    skip?: number
    distinct?: EtudiantScalarFieldEnum | EtudiantScalarFieldEnum[]
  }

  /**
   * Etudiant create
   */
  export type EtudiantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * The data needed to create a Etudiant.
     */
    data: XOR<EtudiantCreateInput, EtudiantUncheckedCreateInput>
  }

  /**
   * Etudiant createMany
   */
  export type EtudiantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etudiants.
     */
    data: EtudiantCreateManyInput | EtudiantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etudiant update
   */
  export type EtudiantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * The data needed to update a Etudiant.
     */
    data: XOR<EtudiantUpdateInput, EtudiantUncheckedUpdateInput>
    /**
     * Choose, which Etudiant to update.
     */
    where: EtudiantWhereUniqueInput
  }

  /**
   * Etudiant updateMany
   */
  export type EtudiantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etudiants.
     */
    data: XOR<EtudiantUpdateManyMutationInput, EtudiantUncheckedUpdateManyInput>
    /**
     * Filter which Etudiants to update
     */
    where?: EtudiantWhereInput
    /**
     * Limit how many Etudiants to update.
     */
    limit?: number
  }

  /**
   * Etudiant upsert
   */
  export type EtudiantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * The filter to search for the Etudiant to update in case it exists.
     */
    where: EtudiantWhereUniqueInput
    /**
     * In case the Etudiant found by the `where` argument doesn't exist, create a new Etudiant with this data.
     */
    create: XOR<EtudiantCreateInput, EtudiantUncheckedCreateInput>
    /**
     * In case the Etudiant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtudiantUpdateInput, EtudiantUncheckedUpdateInput>
  }

  /**
   * Etudiant delete
   */
  export type EtudiantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
    /**
     * Filter which Etudiant to delete.
     */
    where: EtudiantWhereUniqueInput
  }

  /**
   * Etudiant deleteMany
   */
  export type EtudiantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etudiants to delete
     */
    where?: EtudiantWhereInput
    /**
     * Limit how many Etudiants to delete.
     */
    limit?: number
  }

  /**
   * Etudiant.utilisateur
   */
  export type Etudiant$utilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    where?: UtilisateurWhereInput
  }

  /**
   * Etudiant.candidatures
   */
  export type Etudiant$candidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    where?: CandidatureWhereInput
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    cursor?: CandidatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidatureScalarFieldEnum | CandidatureScalarFieldEnum[]
  }

  /**
   * Etudiant.attributions
   */
  export type Etudiant$attributionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    where?: AttributionBourseWhereInput
    orderBy?: AttributionBourseOrderByWithRelationInput | AttributionBourseOrderByWithRelationInput[]
    cursor?: AttributionBourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributionBourseScalarFieldEnum | AttributionBourseScalarFieldEnum[]
  }

  /**
   * Etudiant without action
   */
  export type EtudiantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etudiant
     */
    select?: EtudiantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etudiant
     */
    omit?: EtudiantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtudiantInclude<ExtArgs> | null
  }


  /**
   * Model ProgrammeBourse
   */

  export type AggregateProgrammeBourse = {
    _count: ProgrammeBourseCountAggregateOutputType | null
    _avg: ProgrammeBourseAvgAggregateOutputType | null
    _sum: ProgrammeBourseSumAggregateOutputType | null
    _min: ProgrammeBourseMinAggregateOutputType | null
    _max: ProgrammeBourseMaxAggregateOutputType | null
  }

  export type ProgrammeBourseAvgAggregateOutputType = {
    montantMaximum: Decimal | null
  }

  export type ProgrammeBourseSumAggregateOutputType = {
    montantMaximum: Decimal | null
  }

  export type ProgrammeBourseMinAggregateOutputType = {
    id: string | null
    code: string | null
    nom: string | null
    description: string | null
    organismeFinanceur: string | null
    montantMaximum: Decimal | null
    devise: string | null
    niveauCible: string | null
    domaineCible: string | null
    estActif: boolean | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type ProgrammeBourseMaxAggregateOutputType = {
    id: string | null
    code: string | null
    nom: string | null
    description: string | null
    organismeFinanceur: string | null
    montantMaximum: Decimal | null
    devise: string | null
    niveauCible: string | null
    domaineCible: string | null
    estActif: boolean | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type ProgrammeBourseCountAggregateOutputType = {
    id: number
    code: number
    nom: number
    description: number
    organismeFinanceur: number
    montantMaximum: number
    devise: number
    niveauCible: number
    domaineCible: number
    estActif: number
    creeLe: number
    modifieLe: number
    _all: number
  }


  export type ProgrammeBourseAvgAggregateInputType = {
    montantMaximum?: true
  }

  export type ProgrammeBourseSumAggregateInputType = {
    montantMaximum?: true
  }

  export type ProgrammeBourseMinAggregateInputType = {
    id?: true
    code?: true
    nom?: true
    description?: true
    organismeFinanceur?: true
    montantMaximum?: true
    devise?: true
    niveauCible?: true
    domaineCible?: true
    estActif?: true
    creeLe?: true
    modifieLe?: true
  }

  export type ProgrammeBourseMaxAggregateInputType = {
    id?: true
    code?: true
    nom?: true
    description?: true
    organismeFinanceur?: true
    montantMaximum?: true
    devise?: true
    niveauCible?: true
    domaineCible?: true
    estActif?: true
    creeLe?: true
    modifieLe?: true
  }

  export type ProgrammeBourseCountAggregateInputType = {
    id?: true
    code?: true
    nom?: true
    description?: true
    organismeFinanceur?: true
    montantMaximum?: true
    devise?: true
    niveauCible?: true
    domaineCible?: true
    estActif?: true
    creeLe?: true
    modifieLe?: true
    _all?: true
  }

  export type ProgrammeBourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgrammeBourse to aggregate.
     */
    where?: ProgrammeBourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgrammeBourses to fetch.
     */
    orderBy?: ProgrammeBourseOrderByWithRelationInput | ProgrammeBourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgrammeBourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgrammeBourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgrammeBourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgrammeBourses
    **/
    _count?: true | ProgrammeBourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgrammeBourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgrammeBourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgrammeBourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgrammeBourseMaxAggregateInputType
  }

  export type GetProgrammeBourseAggregateType<T extends ProgrammeBourseAggregateArgs> = {
        [P in keyof T & keyof AggregateProgrammeBourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgrammeBourse[P]>
      : GetScalarType<T[P], AggregateProgrammeBourse[P]>
  }




  export type ProgrammeBourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgrammeBourseWhereInput
    orderBy?: ProgrammeBourseOrderByWithAggregationInput | ProgrammeBourseOrderByWithAggregationInput[]
    by: ProgrammeBourseScalarFieldEnum[] | ProgrammeBourseScalarFieldEnum
    having?: ProgrammeBourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgrammeBourseCountAggregateInputType | true
    _avg?: ProgrammeBourseAvgAggregateInputType
    _sum?: ProgrammeBourseSumAggregateInputType
    _min?: ProgrammeBourseMinAggregateInputType
    _max?: ProgrammeBourseMaxAggregateInputType
  }

  export type ProgrammeBourseGroupByOutputType = {
    id: string
    code: string
    nom: string
    description: string | null
    organismeFinanceur: string | null
    montantMaximum: Decimal | null
    devise: string
    niveauCible: string | null
    domaineCible: string | null
    estActif: boolean
    creeLe: Date
    modifieLe: Date
    _count: ProgrammeBourseCountAggregateOutputType | null
    _avg: ProgrammeBourseAvgAggregateOutputType | null
    _sum: ProgrammeBourseSumAggregateOutputType | null
    _min: ProgrammeBourseMinAggregateOutputType | null
    _max: ProgrammeBourseMaxAggregateOutputType | null
  }

  type GetProgrammeBourseGroupByPayload<T extends ProgrammeBourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgrammeBourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgrammeBourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgrammeBourseGroupByOutputType[P]>
            : GetScalarType<T[P], ProgrammeBourseGroupByOutputType[P]>
        }
      >
    >


  export type ProgrammeBourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    nom?: boolean
    description?: boolean
    organismeFinanceur?: boolean
    montantMaximum?: boolean
    devise?: boolean
    niveauCible?: boolean
    domaineCible?: boolean
    estActif?: boolean
    creeLe?: boolean
    modifieLe?: boolean
    appels?: boolean | ProgrammeBourse$appelsArgs<ExtArgs>
    _count?: boolean | ProgrammeBourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programmeBourse"]>



  export type ProgrammeBourseSelectScalar = {
    id?: boolean
    code?: boolean
    nom?: boolean
    description?: boolean
    organismeFinanceur?: boolean
    montantMaximum?: boolean
    devise?: boolean
    niveauCible?: boolean
    domaineCible?: boolean
    estActif?: boolean
    creeLe?: boolean
    modifieLe?: boolean
  }

  export type ProgrammeBourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "nom" | "description" | "organismeFinanceur" | "montantMaximum" | "devise" | "niveauCible" | "domaineCible" | "estActif" | "creeLe" | "modifieLe", ExtArgs["result"]["programmeBourse"]>
  export type ProgrammeBourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appels?: boolean | ProgrammeBourse$appelsArgs<ExtArgs>
    _count?: boolean | ProgrammeBourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProgrammeBoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgrammeBourse"
    objects: {
      appels: Prisma.$AppelCandidaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      nom: string
      description: string | null
      organismeFinanceur: string | null
      montantMaximum: Prisma.Decimal | null
      devise: string
      niveauCible: string | null
      domaineCible: string | null
      estActif: boolean
      creeLe: Date
      modifieLe: Date
    }, ExtArgs["result"]["programmeBourse"]>
    composites: {}
  }

  type ProgrammeBourseGetPayload<S extends boolean | null | undefined | ProgrammeBourseDefaultArgs> = $Result.GetResult<Prisma.$ProgrammeBoursePayload, S>

  type ProgrammeBourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgrammeBourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgrammeBourseCountAggregateInputType | true
    }

  export interface ProgrammeBourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgrammeBourse'], meta: { name: 'ProgrammeBourse' } }
    /**
     * Find zero or one ProgrammeBourse that matches the filter.
     * @param {ProgrammeBourseFindUniqueArgs} args - Arguments to find a ProgrammeBourse
     * @example
     * // Get one ProgrammeBourse
     * const programmeBourse = await prisma.programmeBourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgrammeBourseFindUniqueArgs>(args: SelectSubset<T, ProgrammeBourseFindUniqueArgs<ExtArgs>>): Prisma__ProgrammeBourseClient<$Result.GetResult<Prisma.$ProgrammeBoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgrammeBourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgrammeBourseFindUniqueOrThrowArgs} args - Arguments to find a ProgrammeBourse
     * @example
     * // Get one ProgrammeBourse
     * const programmeBourse = await prisma.programmeBourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgrammeBourseFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgrammeBourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgrammeBourseClient<$Result.GetResult<Prisma.$ProgrammeBoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgrammeBourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeBourseFindFirstArgs} args - Arguments to find a ProgrammeBourse
     * @example
     * // Get one ProgrammeBourse
     * const programmeBourse = await prisma.programmeBourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgrammeBourseFindFirstArgs>(args?: SelectSubset<T, ProgrammeBourseFindFirstArgs<ExtArgs>>): Prisma__ProgrammeBourseClient<$Result.GetResult<Prisma.$ProgrammeBoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgrammeBourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeBourseFindFirstOrThrowArgs} args - Arguments to find a ProgrammeBourse
     * @example
     * // Get one ProgrammeBourse
     * const programmeBourse = await prisma.programmeBourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgrammeBourseFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgrammeBourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgrammeBourseClient<$Result.GetResult<Prisma.$ProgrammeBoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgrammeBourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeBourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgrammeBourses
     * const programmeBourses = await prisma.programmeBourse.findMany()
     * 
     * // Get first 10 ProgrammeBourses
     * const programmeBourses = await prisma.programmeBourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programmeBourseWithIdOnly = await prisma.programmeBourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgrammeBourseFindManyArgs>(args?: SelectSubset<T, ProgrammeBourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgrammeBoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgrammeBourse.
     * @param {ProgrammeBourseCreateArgs} args - Arguments to create a ProgrammeBourse.
     * @example
     * // Create one ProgrammeBourse
     * const ProgrammeBourse = await prisma.programmeBourse.create({
     *   data: {
     *     // ... data to create a ProgrammeBourse
     *   }
     * })
     * 
     */
    create<T extends ProgrammeBourseCreateArgs>(args: SelectSubset<T, ProgrammeBourseCreateArgs<ExtArgs>>): Prisma__ProgrammeBourseClient<$Result.GetResult<Prisma.$ProgrammeBoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgrammeBourses.
     * @param {ProgrammeBourseCreateManyArgs} args - Arguments to create many ProgrammeBourses.
     * @example
     * // Create many ProgrammeBourses
     * const programmeBourse = await prisma.programmeBourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgrammeBourseCreateManyArgs>(args?: SelectSubset<T, ProgrammeBourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgrammeBourse.
     * @param {ProgrammeBourseDeleteArgs} args - Arguments to delete one ProgrammeBourse.
     * @example
     * // Delete one ProgrammeBourse
     * const ProgrammeBourse = await prisma.programmeBourse.delete({
     *   where: {
     *     // ... filter to delete one ProgrammeBourse
     *   }
     * })
     * 
     */
    delete<T extends ProgrammeBourseDeleteArgs>(args: SelectSubset<T, ProgrammeBourseDeleteArgs<ExtArgs>>): Prisma__ProgrammeBourseClient<$Result.GetResult<Prisma.$ProgrammeBoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgrammeBourse.
     * @param {ProgrammeBourseUpdateArgs} args - Arguments to update one ProgrammeBourse.
     * @example
     * // Update one ProgrammeBourse
     * const programmeBourse = await prisma.programmeBourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgrammeBourseUpdateArgs>(args: SelectSubset<T, ProgrammeBourseUpdateArgs<ExtArgs>>): Prisma__ProgrammeBourseClient<$Result.GetResult<Prisma.$ProgrammeBoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgrammeBourses.
     * @param {ProgrammeBourseDeleteManyArgs} args - Arguments to filter ProgrammeBourses to delete.
     * @example
     * // Delete a few ProgrammeBourses
     * const { count } = await prisma.programmeBourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgrammeBourseDeleteManyArgs>(args?: SelectSubset<T, ProgrammeBourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgrammeBourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeBourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgrammeBourses
     * const programmeBourse = await prisma.programmeBourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgrammeBourseUpdateManyArgs>(args: SelectSubset<T, ProgrammeBourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgrammeBourse.
     * @param {ProgrammeBourseUpsertArgs} args - Arguments to update or create a ProgrammeBourse.
     * @example
     * // Update or create a ProgrammeBourse
     * const programmeBourse = await prisma.programmeBourse.upsert({
     *   create: {
     *     // ... data to create a ProgrammeBourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgrammeBourse we want to update
     *   }
     * })
     */
    upsert<T extends ProgrammeBourseUpsertArgs>(args: SelectSubset<T, ProgrammeBourseUpsertArgs<ExtArgs>>): Prisma__ProgrammeBourseClient<$Result.GetResult<Prisma.$ProgrammeBoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgrammeBourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeBourseCountArgs} args - Arguments to filter ProgrammeBourses to count.
     * @example
     * // Count the number of ProgrammeBourses
     * const count = await prisma.programmeBourse.count({
     *   where: {
     *     // ... the filter for the ProgrammeBourses we want to count
     *   }
     * })
    **/
    count<T extends ProgrammeBourseCountArgs>(
      args?: Subset<T, ProgrammeBourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgrammeBourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgrammeBourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeBourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgrammeBourseAggregateArgs>(args: Subset<T, ProgrammeBourseAggregateArgs>): Prisma.PrismaPromise<GetProgrammeBourseAggregateType<T>>

    /**
     * Group by ProgrammeBourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgrammeBourseGroupByArgs} args - Group by arguments.
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
      T extends ProgrammeBourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgrammeBourseGroupByArgs['orderBy'] }
        : { orderBy?: ProgrammeBourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgrammeBourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgrammeBourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgrammeBourse model
   */
  readonly fields: ProgrammeBourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgrammeBourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgrammeBourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appels<T extends ProgrammeBourse$appelsArgs<ExtArgs> = {}>(args?: Subset<T, ProgrammeBourse$appelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProgrammeBourse model
   */
  interface ProgrammeBourseFieldRefs {
    readonly id: FieldRef<"ProgrammeBourse", 'String'>
    readonly code: FieldRef<"ProgrammeBourse", 'String'>
    readonly nom: FieldRef<"ProgrammeBourse", 'String'>
    readonly description: FieldRef<"ProgrammeBourse", 'String'>
    readonly organismeFinanceur: FieldRef<"ProgrammeBourse", 'String'>
    readonly montantMaximum: FieldRef<"ProgrammeBourse", 'Decimal'>
    readonly devise: FieldRef<"ProgrammeBourse", 'String'>
    readonly niveauCible: FieldRef<"ProgrammeBourse", 'String'>
    readonly domaineCible: FieldRef<"ProgrammeBourse", 'String'>
    readonly estActif: FieldRef<"ProgrammeBourse", 'Boolean'>
    readonly creeLe: FieldRef<"ProgrammeBourse", 'DateTime'>
    readonly modifieLe: FieldRef<"ProgrammeBourse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgrammeBourse findUnique
   */
  export type ProgrammeBourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourse
     */
    select?: ProgrammeBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgrammeBourse
     */
    omit?: ProgrammeBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeBourseInclude<ExtArgs> | null
    /**
     * Filter, which ProgrammeBourse to fetch.
     */
    where: ProgrammeBourseWhereUniqueInput
  }

  /**
   * ProgrammeBourse findUniqueOrThrow
   */
  export type ProgrammeBourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourse
     */
    select?: ProgrammeBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgrammeBourse
     */
    omit?: ProgrammeBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeBourseInclude<ExtArgs> | null
    /**
     * Filter, which ProgrammeBourse to fetch.
     */
    where: ProgrammeBourseWhereUniqueInput
  }

  /**
   * ProgrammeBourse findFirst
   */
  export type ProgrammeBourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourse
     */
    select?: ProgrammeBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgrammeBourse
     */
    omit?: ProgrammeBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeBourseInclude<ExtArgs> | null
    /**
     * Filter, which ProgrammeBourse to fetch.
     */
    where?: ProgrammeBourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgrammeBourses to fetch.
     */
    orderBy?: ProgrammeBourseOrderByWithRelationInput | ProgrammeBourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgrammeBourses.
     */
    cursor?: ProgrammeBourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgrammeBourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgrammeBourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgrammeBourses.
     */
    distinct?: ProgrammeBourseScalarFieldEnum | ProgrammeBourseScalarFieldEnum[]
  }

  /**
   * ProgrammeBourse findFirstOrThrow
   */
  export type ProgrammeBourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourse
     */
    select?: ProgrammeBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgrammeBourse
     */
    omit?: ProgrammeBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeBourseInclude<ExtArgs> | null
    /**
     * Filter, which ProgrammeBourse to fetch.
     */
    where?: ProgrammeBourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgrammeBourses to fetch.
     */
    orderBy?: ProgrammeBourseOrderByWithRelationInput | ProgrammeBourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgrammeBourses.
     */
    cursor?: ProgrammeBourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgrammeBourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgrammeBourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgrammeBourses.
     */
    distinct?: ProgrammeBourseScalarFieldEnum | ProgrammeBourseScalarFieldEnum[]
  }

  /**
   * ProgrammeBourse findMany
   */
  export type ProgrammeBourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourse
     */
    select?: ProgrammeBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgrammeBourse
     */
    omit?: ProgrammeBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeBourseInclude<ExtArgs> | null
    /**
     * Filter, which ProgrammeBourses to fetch.
     */
    where?: ProgrammeBourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgrammeBourses to fetch.
     */
    orderBy?: ProgrammeBourseOrderByWithRelationInput | ProgrammeBourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgrammeBourses.
     */
    cursor?: ProgrammeBourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgrammeBourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgrammeBourses.
     */
    skip?: number
    distinct?: ProgrammeBourseScalarFieldEnum | ProgrammeBourseScalarFieldEnum[]
  }

  /**
   * ProgrammeBourse create
   */
  export type ProgrammeBourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourse
     */
    select?: ProgrammeBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgrammeBourse
     */
    omit?: ProgrammeBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeBourseInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgrammeBourse.
     */
    data: XOR<ProgrammeBourseCreateInput, ProgrammeBourseUncheckedCreateInput>
  }

  /**
   * ProgrammeBourse createMany
   */
  export type ProgrammeBourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgrammeBourses.
     */
    data: ProgrammeBourseCreateManyInput | ProgrammeBourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgrammeBourse update
   */
  export type ProgrammeBourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourse
     */
    select?: ProgrammeBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgrammeBourse
     */
    omit?: ProgrammeBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeBourseInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgrammeBourse.
     */
    data: XOR<ProgrammeBourseUpdateInput, ProgrammeBourseUncheckedUpdateInput>
    /**
     * Choose, which ProgrammeBourse to update.
     */
    where: ProgrammeBourseWhereUniqueInput
  }

  /**
   * ProgrammeBourse updateMany
   */
  export type ProgrammeBourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgrammeBourses.
     */
    data: XOR<ProgrammeBourseUpdateManyMutationInput, ProgrammeBourseUncheckedUpdateManyInput>
    /**
     * Filter which ProgrammeBourses to update
     */
    where?: ProgrammeBourseWhereInput
    /**
     * Limit how many ProgrammeBourses to update.
     */
    limit?: number
  }

  /**
   * ProgrammeBourse upsert
   */
  export type ProgrammeBourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourse
     */
    select?: ProgrammeBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgrammeBourse
     */
    omit?: ProgrammeBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeBourseInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgrammeBourse to update in case it exists.
     */
    where: ProgrammeBourseWhereUniqueInput
    /**
     * In case the ProgrammeBourse found by the `where` argument doesn't exist, create a new ProgrammeBourse with this data.
     */
    create: XOR<ProgrammeBourseCreateInput, ProgrammeBourseUncheckedCreateInput>
    /**
     * In case the ProgrammeBourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgrammeBourseUpdateInput, ProgrammeBourseUncheckedUpdateInput>
  }

  /**
   * ProgrammeBourse delete
   */
  export type ProgrammeBourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourse
     */
    select?: ProgrammeBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgrammeBourse
     */
    omit?: ProgrammeBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeBourseInclude<ExtArgs> | null
    /**
     * Filter which ProgrammeBourse to delete.
     */
    where: ProgrammeBourseWhereUniqueInput
  }

  /**
   * ProgrammeBourse deleteMany
   */
  export type ProgrammeBourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgrammeBourses to delete
     */
    where?: ProgrammeBourseWhereInput
    /**
     * Limit how many ProgrammeBourses to delete.
     */
    limit?: number
  }

  /**
   * ProgrammeBourse.appels
   */
  export type ProgrammeBourse$appelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
    where?: AppelCandidatureWhereInput
    orderBy?: AppelCandidatureOrderByWithRelationInput | AppelCandidatureOrderByWithRelationInput[]
    cursor?: AppelCandidatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppelCandidatureScalarFieldEnum | AppelCandidatureScalarFieldEnum[]
  }

  /**
   * ProgrammeBourse without action
   */
  export type ProgrammeBourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgrammeBourse
     */
    select?: ProgrammeBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgrammeBourse
     */
    omit?: ProgrammeBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgrammeBourseInclude<ExtArgs> | null
  }


  /**
   * Model AppelCandidature
   */

  export type AggregateAppelCandidature = {
    _count: AppelCandidatureCountAggregateOutputType | null
    _avg: AppelCandidatureAvgAggregateOutputType | null
    _sum: AppelCandidatureSumAggregateOutputType | null
    _min: AppelCandidatureMinAggregateOutputType | null
    _max: AppelCandidatureMaxAggregateOutputType | null
  }

  export type AppelCandidatureAvgAggregateOutputType = {
    nombrePlaces: number | null
  }

  export type AppelCandidatureSumAggregateOutputType = {
    nombrePlaces: number | null
  }

  export type AppelCandidatureMinAggregateOutputType = {
    id: string | null
    reference: string | null
    titre: string | null
    description: string | null
    dateOuverture: Date | null
    dateCloture: Date | null
    nombrePlaces: number | null
    criteresEligibilite: string | null
    estPublie: boolean | null
    programmeId: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type AppelCandidatureMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    titre: string | null
    description: string | null
    dateOuverture: Date | null
    dateCloture: Date | null
    nombrePlaces: number | null
    criteresEligibilite: string | null
    estPublie: boolean | null
    programmeId: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type AppelCandidatureCountAggregateOutputType = {
    id: number
    reference: number
    titre: number
    description: number
    dateOuverture: number
    dateCloture: number
    nombrePlaces: number
    criteresEligibilite: number
    estPublie: number
    programmeId: number
    creeLe: number
    modifieLe: number
    _all: number
  }


  export type AppelCandidatureAvgAggregateInputType = {
    nombrePlaces?: true
  }

  export type AppelCandidatureSumAggregateInputType = {
    nombrePlaces?: true
  }

  export type AppelCandidatureMinAggregateInputType = {
    id?: true
    reference?: true
    titre?: true
    description?: true
    dateOuverture?: true
    dateCloture?: true
    nombrePlaces?: true
    criteresEligibilite?: true
    estPublie?: true
    programmeId?: true
    creeLe?: true
    modifieLe?: true
  }

  export type AppelCandidatureMaxAggregateInputType = {
    id?: true
    reference?: true
    titre?: true
    description?: true
    dateOuverture?: true
    dateCloture?: true
    nombrePlaces?: true
    criteresEligibilite?: true
    estPublie?: true
    programmeId?: true
    creeLe?: true
    modifieLe?: true
  }

  export type AppelCandidatureCountAggregateInputType = {
    id?: true
    reference?: true
    titre?: true
    description?: true
    dateOuverture?: true
    dateCloture?: true
    nombrePlaces?: true
    criteresEligibilite?: true
    estPublie?: true
    programmeId?: true
    creeLe?: true
    modifieLe?: true
    _all?: true
  }

  export type AppelCandidatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppelCandidature to aggregate.
     */
    where?: AppelCandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppelCandidatures to fetch.
     */
    orderBy?: AppelCandidatureOrderByWithRelationInput | AppelCandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppelCandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppelCandidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppelCandidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppelCandidatures
    **/
    _count?: true | AppelCandidatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppelCandidatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppelCandidatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppelCandidatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppelCandidatureMaxAggregateInputType
  }

  export type GetAppelCandidatureAggregateType<T extends AppelCandidatureAggregateArgs> = {
        [P in keyof T & keyof AggregateAppelCandidature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppelCandidature[P]>
      : GetScalarType<T[P], AggregateAppelCandidature[P]>
  }




  export type AppelCandidatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppelCandidatureWhereInput
    orderBy?: AppelCandidatureOrderByWithAggregationInput | AppelCandidatureOrderByWithAggregationInput[]
    by: AppelCandidatureScalarFieldEnum[] | AppelCandidatureScalarFieldEnum
    having?: AppelCandidatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppelCandidatureCountAggregateInputType | true
    _avg?: AppelCandidatureAvgAggregateInputType
    _sum?: AppelCandidatureSumAggregateInputType
    _min?: AppelCandidatureMinAggregateInputType
    _max?: AppelCandidatureMaxAggregateInputType
  }

  export type AppelCandidatureGroupByOutputType = {
    id: string
    reference: string
    titre: string
    description: string | null
    dateOuverture: Date
    dateCloture: Date
    nombrePlaces: number | null
    criteresEligibilite: string | null
    estPublie: boolean
    programmeId: string
    creeLe: Date
    modifieLe: Date
    _count: AppelCandidatureCountAggregateOutputType | null
    _avg: AppelCandidatureAvgAggregateOutputType | null
    _sum: AppelCandidatureSumAggregateOutputType | null
    _min: AppelCandidatureMinAggregateOutputType | null
    _max: AppelCandidatureMaxAggregateOutputType | null
  }

  type GetAppelCandidatureGroupByPayload<T extends AppelCandidatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppelCandidatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppelCandidatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppelCandidatureGroupByOutputType[P]>
            : GetScalarType<T[P], AppelCandidatureGroupByOutputType[P]>
        }
      >
    >


  export type AppelCandidatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    titre?: boolean
    description?: boolean
    dateOuverture?: boolean
    dateCloture?: boolean
    nombrePlaces?: boolean
    criteresEligibilite?: boolean
    estPublie?: boolean
    programmeId?: boolean
    creeLe?: boolean
    modifieLe?: boolean
    programme?: boolean | ProgrammeBourseDefaultArgs<ExtArgs>
    candidatures?: boolean | AppelCandidature$candidaturesArgs<ExtArgs>
    _count?: boolean | AppelCandidatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appelCandidature"]>



  export type AppelCandidatureSelectScalar = {
    id?: boolean
    reference?: boolean
    titre?: boolean
    description?: boolean
    dateOuverture?: boolean
    dateCloture?: boolean
    nombrePlaces?: boolean
    criteresEligibilite?: boolean
    estPublie?: boolean
    programmeId?: boolean
    creeLe?: boolean
    modifieLe?: boolean
  }

  export type AppelCandidatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "titre" | "description" | "dateOuverture" | "dateCloture" | "nombrePlaces" | "criteresEligibilite" | "estPublie" | "programmeId" | "creeLe" | "modifieLe", ExtArgs["result"]["appelCandidature"]>
  export type AppelCandidatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programme?: boolean | ProgrammeBourseDefaultArgs<ExtArgs>
    candidatures?: boolean | AppelCandidature$candidaturesArgs<ExtArgs>
    _count?: boolean | AppelCandidatureCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AppelCandidaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppelCandidature"
    objects: {
      programme: Prisma.$ProgrammeBoursePayload<ExtArgs>
      candidatures: Prisma.$CandidaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      titre: string
      description: string | null
      dateOuverture: Date
      dateCloture: Date
      nombrePlaces: number | null
      criteresEligibilite: string | null
      estPublie: boolean
      programmeId: string
      creeLe: Date
      modifieLe: Date
    }, ExtArgs["result"]["appelCandidature"]>
    composites: {}
  }

  type AppelCandidatureGetPayload<S extends boolean | null | undefined | AppelCandidatureDefaultArgs> = $Result.GetResult<Prisma.$AppelCandidaturePayload, S>

  type AppelCandidatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppelCandidatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppelCandidatureCountAggregateInputType | true
    }

  export interface AppelCandidatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppelCandidature'], meta: { name: 'AppelCandidature' } }
    /**
     * Find zero or one AppelCandidature that matches the filter.
     * @param {AppelCandidatureFindUniqueArgs} args - Arguments to find a AppelCandidature
     * @example
     * // Get one AppelCandidature
     * const appelCandidature = await prisma.appelCandidature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppelCandidatureFindUniqueArgs>(args: SelectSubset<T, AppelCandidatureFindUniqueArgs<ExtArgs>>): Prisma__AppelCandidatureClient<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppelCandidature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppelCandidatureFindUniqueOrThrowArgs} args - Arguments to find a AppelCandidature
     * @example
     * // Get one AppelCandidature
     * const appelCandidature = await prisma.appelCandidature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppelCandidatureFindUniqueOrThrowArgs>(args: SelectSubset<T, AppelCandidatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppelCandidatureClient<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppelCandidature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppelCandidatureFindFirstArgs} args - Arguments to find a AppelCandidature
     * @example
     * // Get one AppelCandidature
     * const appelCandidature = await prisma.appelCandidature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppelCandidatureFindFirstArgs>(args?: SelectSubset<T, AppelCandidatureFindFirstArgs<ExtArgs>>): Prisma__AppelCandidatureClient<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppelCandidature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppelCandidatureFindFirstOrThrowArgs} args - Arguments to find a AppelCandidature
     * @example
     * // Get one AppelCandidature
     * const appelCandidature = await prisma.appelCandidature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppelCandidatureFindFirstOrThrowArgs>(args?: SelectSubset<T, AppelCandidatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppelCandidatureClient<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppelCandidatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppelCandidatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppelCandidatures
     * const appelCandidatures = await prisma.appelCandidature.findMany()
     * 
     * // Get first 10 AppelCandidatures
     * const appelCandidatures = await prisma.appelCandidature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appelCandidatureWithIdOnly = await prisma.appelCandidature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppelCandidatureFindManyArgs>(args?: SelectSubset<T, AppelCandidatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppelCandidature.
     * @param {AppelCandidatureCreateArgs} args - Arguments to create a AppelCandidature.
     * @example
     * // Create one AppelCandidature
     * const AppelCandidature = await prisma.appelCandidature.create({
     *   data: {
     *     // ... data to create a AppelCandidature
     *   }
     * })
     * 
     */
    create<T extends AppelCandidatureCreateArgs>(args: SelectSubset<T, AppelCandidatureCreateArgs<ExtArgs>>): Prisma__AppelCandidatureClient<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppelCandidatures.
     * @param {AppelCandidatureCreateManyArgs} args - Arguments to create many AppelCandidatures.
     * @example
     * // Create many AppelCandidatures
     * const appelCandidature = await prisma.appelCandidature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppelCandidatureCreateManyArgs>(args?: SelectSubset<T, AppelCandidatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppelCandidature.
     * @param {AppelCandidatureDeleteArgs} args - Arguments to delete one AppelCandidature.
     * @example
     * // Delete one AppelCandidature
     * const AppelCandidature = await prisma.appelCandidature.delete({
     *   where: {
     *     // ... filter to delete one AppelCandidature
     *   }
     * })
     * 
     */
    delete<T extends AppelCandidatureDeleteArgs>(args: SelectSubset<T, AppelCandidatureDeleteArgs<ExtArgs>>): Prisma__AppelCandidatureClient<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppelCandidature.
     * @param {AppelCandidatureUpdateArgs} args - Arguments to update one AppelCandidature.
     * @example
     * // Update one AppelCandidature
     * const appelCandidature = await prisma.appelCandidature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppelCandidatureUpdateArgs>(args: SelectSubset<T, AppelCandidatureUpdateArgs<ExtArgs>>): Prisma__AppelCandidatureClient<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppelCandidatures.
     * @param {AppelCandidatureDeleteManyArgs} args - Arguments to filter AppelCandidatures to delete.
     * @example
     * // Delete a few AppelCandidatures
     * const { count } = await prisma.appelCandidature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppelCandidatureDeleteManyArgs>(args?: SelectSubset<T, AppelCandidatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppelCandidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppelCandidatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppelCandidatures
     * const appelCandidature = await prisma.appelCandidature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppelCandidatureUpdateManyArgs>(args: SelectSubset<T, AppelCandidatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppelCandidature.
     * @param {AppelCandidatureUpsertArgs} args - Arguments to update or create a AppelCandidature.
     * @example
     * // Update or create a AppelCandidature
     * const appelCandidature = await prisma.appelCandidature.upsert({
     *   create: {
     *     // ... data to create a AppelCandidature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppelCandidature we want to update
     *   }
     * })
     */
    upsert<T extends AppelCandidatureUpsertArgs>(args: SelectSubset<T, AppelCandidatureUpsertArgs<ExtArgs>>): Prisma__AppelCandidatureClient<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppelCandidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppelCandidatureCountArgs} args - Arguments to filter AppelCandidatures to count.
     * @example
     * // Count the number of AppelCandidatures
     * const count = await prisma.appelCandidature.count({
     *   where: {
     *     // ... the filter for the AppelCandidatures we want to count
     *   }
     * })
    **/
    count<T extends AppelCandidatureCountArgs>(
      args?: Subset<T, AppelCandidatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppelCandidatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppelCandidature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppelCandidatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppelCandidatureAggregateArgs>(args: Subset<T, AppelCandidatureAggregateArgs>): Prisma.PrismaPromise<GetAppelCandidatureAggregateType<T>>

    /**
     * Group by AppelCandidature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppelCandidatureGroupByArgs} args - Group by arguments.
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
      T extends AppelCandidatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppelCandidatureGroupByArgs['orderBy'] }
        : { orderBy?: AppelCandidatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppelCandidatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppelCandidatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppelCandidature model
   */
  readonly fields: AppelCandidatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppelCandidature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppelCandidatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programme<T extends ProgrammeBourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgrammeBourseDefaultArgs<ExtArgs>>): Prisma__ProgrammeBourseClient<$Result.GetResult<Prisma.$ProgrammeBoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    candidatures<T extends AppelCandidature$candidaturesArgs<ExtArgs> = {}>(args?: Subset<T, AppelCandidature$candidaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AppelCandidature model
   */
  interface AppelCandidatureFieldRefs {
    readonly id: FieldRef<"AppelCandidature", 'String'>
    readonly reference: FieldRef<"AppelCandidature", 'String'>
    readonly titre: FieldRef<"AppelCandidature", 'String'>
    readonly description: FieldRef<"AppelCandidature", 'String'>
    readonly dateOuverture: FieldRef<"AppelCandidature", 'DateTime'>
    readonly dateCloture: FieldRef<"AppelCandidature", 'DateTime'>
    readonly nombrePlaces: FieldRef<"AppelCandidature", 'Int'>
    readonly criteresEligibilite: FieldRef<"AppelCandidature", 'String'>
    readonly estPublie: FieldRef<"AppelCandidature", 'Boolean'>
    readonly programmeId: FieldRef<"AppelCandidature", 'String'>
    readonly creeLe: FieldRef<"AppelCandidature", 'DateTime'>
    readonly modifieLe: FieldRef<"AppelCandidature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppelCandidature findUnique
   */
  export type AppelCandidatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
    /**
     * Filter, which AppelCandidature to fetch.
     */
    where: AppelCandidatureWhereUniqueInput
  }

  /**
   * AppelCandidature findUniqueOrThrow
   */
  export type AppelCandidatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
    /**
     * Filter, which AppelCandidature to fetch.
     */
    where: AppelCandidatureWhereUniqueInput
  }

  /**
   * AppelCandidature findFirst
   */
  export type AppelCandidatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
    /**
     * Filter, which AppelCandidature to fetch.
     */
    where?: AppelCandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppelCandidatures to fetch.
     */
    orderBy?: AppelCandidatureOrderByWithRelationInput | AppelCandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppelCandidatures.
     */
    cursor?: AppelCandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppelCandidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppelCandidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppelCandidatures.
     */
    distinct?: AppelCandidatureScalarFieldEnum | AppelCandidatureScalarFieldEnum[]
  }

  /**
   * AppelCandidature findFirstOrThrow
   */
  export type AppelCandidatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
    /**
     * Filter, which AppelCandidature to fetch.
     */
    where?: AppelCandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppelCandidatures to fetch.
     */
    orderBy?: AppelCandidatureOrderByWithRelationInput | AppelCandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppelCandidatures.
     */
    cursor?: AppelCandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppelCandidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppelCandidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppelCandidatures.
     */
    distinct?: AppelCandidatureScalarFieldEnum | AppelCandidatureScalarFieldEnum[]
  }

  /**
   * AppelCandidature findMany
   */
  export type AppelCandidatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
    /**
     * Filter, which AppelCandidatures to fetch.
     */
    where?: AppelCandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppelCandidatures to fetch.
     */
    orderBy?: AppelCandidatureOrderByWithRelationInput | AppelCandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppelCandidatures.
     */
    cursor?: AppelCandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppelCandidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppelCandidatures.
     */
    skip?: number
    distinct?: AppelCandidatureScalarFieldEnum | AppelCandidatureScalarFieldEnum[]
  }

  /**
   * AppelCandidature create
   */
  export type AppelCandidatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
    /**
     * The data needed to create a AppelCandidature.
     */
    data: XOR<AppelCandidatureCreateInput, AppelCandidatureUncheckedCreateInput>
  }

  /**
   * AppelCandidature createMany
   */
  export type AppelCandidatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppelCandidatures.
     */
    data: AppelCandidatureCreateManyInput | AppelCandidatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppelCandidature update
   */
  export type AppelCandidatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
    /**
     * The data needed to update a AppelCandidature.
     */
    data: XOR<AppelCandidatureUpdateInput, AppelCandidatureUncheckedUpdateInput>
    /**
     * Choose, which AppelCandidature to update.
     */
    where: AppelCandidatureWhereUniqueInput
  }

  /**
   * AppelCandidature updateMany
   */
  export type AppelCandidatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppelCandidatures.
     */
    data: XOR<AppelCandidatureUpdateManyMutationInput, AppelCandidatureUncheckedUpdateManyInput>
    /**
     * Filter which AppelCandidatures to update
     */
    where?: AppelCandidatureWhereInput
    /**
     * Limit how many AppelCandidatures to update.
     */
    limit?: number
  }

  /**
   * AppelCandidature upsert
   */
  export type AppelCandidatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
    /**
     * The filter to search for the AppelCandidature to update in case it exists.
     */
    where: AppelCandidatureWhereUniqueInput
    /**
     * In case the AppelCandidature found by the `where` argument doesn't exist, create a new AppelCandidature with this data.
     */
    create: XOR<AppelCandidatureCreateInput, AppelCandidatureUncheckedCreateInput>
    /**
     * In case the AppelCandidature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppelCandidatureUpdateInput, AppelCandidatureUncheckedUpdateInput>
  }

  /**
   * AppelCandidature delete
   */
  export type AppelCandidatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
    /**
     * Filter which AppelCandidature to delete.
     */
    where: AppelCandidatureWhereUniqueInput
  }

  /**
   * AppelCandidature deleteMany
   */
  export type AppelCandidatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppelCandidatures to delete
     */
    where?: AppelCandidatureWhereInput
    /**
     * Limit how many AppelCandidatures to delete.
     */
    limit?: number
  }

  /**
   * AppelCandidature.candidatures
   */
  export type AppelCandidature$candidaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    where?: CandidatureWhereInput
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    cursor?: CandidatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CandidatureScalarFieldEnum | CandidatureScalarFieldEnum[]
  }

  /**
   * AppelCandidature without action
   */
  export type AppelCandidatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppelCandidature
     */
    select?: AppelCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppelCandidature
     */
    omit?: AppelCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppelCandidatureInclude<ExtArgs> | null
  }


  /**
   * Model Candidature
   */

  export type AggregateCandidature = {
    _count: CandidatureCountAggregateOutputType | null
    _avg: CandidatureAvgAggregateOutputType | null
    _sum: CandidatureSumAggregateOutputType | null
    _min: CandidatureMinAggregateOutputType | null
    _max: CandidatureMaxAggregateOutputType | null
  }

  export type CandidatureAvgAggregateOutputType = {
    scoreFinal: Decimal | null
  }

  export type CandidatureSumAggregateOutputType = {
    scoreFinal: Decimal | null
  }

  export type CandidatureMinAggregateOutputType = {
    id: string | null
    reference: string | null
    dateSoumission: Date | null
    motivation: string | null
    statut: $Enums.StatutCandidature | null
    scoreFinal: Decimal | null
    commentaire: string | null
    etudiantId: string | null
    appelId: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type CandidatureMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    dateSoumission: Date | null
    motivation: string | null
    statut: $Enums.StatutCandidature | null
    scoreFinal: Decimal | null
    commentaire: string | null
    etudiantId: string | null
    appelId: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type CandidatureCountAggregateOutputType = {
    id: number
    reference: number
    dateSoumission: number
    motivation: number
    statut: number
    scoreFinal: number
    commentaire: number
    etudiantId: number
    appelId: number
    creeLe: number
    modifieLe: number
    _all: number
  }


  export type CandidatureAvgAggregateInputType = {
    scoreFinal?: true
  }

  export type CandidatureSumAggregateInputType = {
    scoreFinal?: true
  }

  export type CandidatureMinAggregateInputType = {
    id?: true
    reference?: true
    dateSoumission?: true
    motivation?: true
    statut?: true
    scoreFinal?: true
    commentaire?: true
    etudiantId?: true
    appelId?: true
    creeLe?: true
    modifieLe?: true
  }

  export type CandidatureMaxAggregateInputType = {
    id?: true
    reference?: true
    dateSoumission?: true
    motivation?: true
    statut?: true
    scoreFinal?: true
    commentaire?: true
    etudiantId?: true
    appelId?: true
    creeLe?: true
    modifieLe?: true
  }

  export type CandidatureCountAggregateInputType = {
    id?: true
    reference?: true
    dateSoumission?: true
    motivation?: true
    statut?: true
    scoreFinal?: true
    commentaire?: true
    etudiantId?: true
    appelId?: true
    creeLe?: true
    modifieLe?: true
    _all?: true
  }

  export type CandidatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidature to aggregate.
     */
    where?: CandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatures to fetch.
     */
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Candidatures
    **/
    _count?: true | CandidatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatureMaxAggregateInputType
  }

  export type GetCandidatureAggregateType<T extends CandidatureAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidature[P]>
      : GetScalarType<T[P], AggregateCandidature[P]>
  }




  export type CandidatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CandidatureWhereInput
    orderBy?: CandidatureOrderByWithAggregationInput | CandidatureOrderByWithAggregationInput[]
    by: CandidatureScalarFieldEnum[] | CandidatureScalarFieldEnum
    having?: CandidatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatureCountAggregateInputType | true
    _avg?: CandidatureAvgAggregateInputType
    _sum?: CandidatureSumAggregateInputType
    _min?: CandidatureMinAggregateInputType
    _max?: CandidatureMaxAggregateInputType
  }

  export type CandidatureGroupByOutputType = {
    id: string
    reference: string
    dateSoumission: Date | null
    motivation: string | null
    statut: $Enums.StatutCandidature
    scoreFinal: Decimal | null
    commentaire: string | null
    etudiantId: string
    appelId: string
    creeLe: Date
    modifieLe: Date
    _count: CandidatureCountAggregateOutputType | null
    _avg: CandidatureAvgAggregateOutputType | null
    _sum: CandidatureSumAggregateOutputType | null
    _min: CandidatureMinAggregateOutputType | null
    _max: CandidatureMaxAggregateOutputType | null
  }

  type GetCandidatureGroupByPayload<T extends CandidatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatureGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatureGroupByOutputType[P]>
        }
      >
    >


  export type CandidatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    dateSoumission?: boolean
    motivation?: boolean
    statut?: boolean
    scoreFinal?: boolean
    commentaire?: boolean
    etudiantId?: boolean
    appelId?: boolean
    creeLe?: boolean
    modifieLe?: boolean
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    appel?: boolean | AppelCandidatureDefaultArgs<ExtArgs>
    documents?: boolean | Candidature$documentsArgs<ExtArgs>
    evaluations?: boolean | Candidature$evaluationsArgs<ExtArgs>
    attribution?: boolean | Candidature$attributionArgs<ExtArgs>
    _count?: boolean | CandidatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["candidature"]>



  export type CandidatureSelectScalar = {
    id?: boolean
    reference?: boolean
    dateSoumission?: boolean
    motivation?: boolean
    statut?: boolean
    scoreFinal?: boolean
    commentaire?: boolean
    etudiantId?: boolean
    appelId?: boolean
    creeLe?: boolean
    modifieLe?: boolean
  }

  export type CandidatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "dateSoumission" | "motivation" | "statut" | "scoreFinal" | "commentaire" | "etudiantId" | "appelId" | "creeLe" | "modifieLe", ExtArgs["result"]["candidature"]>
  export type CandidatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    appel?: boolean | AppelCandidatureDefaultArgs<ExtArgs>
    documents?: boolean | Candidature$documentsArgs<ExtArgs>
    evaluations?: boolean | Candidature$evaluationsArgs<ExtArgs>
    attribution?: boolean | Candidature$attributionArgs<ExtArgs>
    _count?: boolean | CandidatureCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CandidaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Candidature"
    objects: {
      etudiant: Prisma.$EtudiantPayload<ExtArgs>
      appel: Prisma.$AppelCandidaturePayload<ExtArgs>
      documents: Prisma.$DocumentCandidaturePayload<ExtArgs>[]
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
      attribution: Prisma.$AttributionBoursePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      dateSoumission: Date | null
      motivation: string | null
      statut: $Enums.StatutCandidature
      scoreFinal: Prisma.Decimal | null
      commentaire: string | null
      etudiantId: string
      appelId: string
      creeLe: Date
      modifieLe: Date
    }, ExtArgs["result"]["candidature"]>
    composites: {}
  }

  type CandidatureGetPayload<S extends boolean | null | undefined | CandidatureDefaultArgs> = $Result.GetResult<Prisma.$CandidaturePayload, S>

  type CandidatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CandidatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidatureCountAggregateInputType | true
    }

  export interface CandidatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Candidature'], meta: { name: 'Candidature' } }
    /**
     * Find zero or one Candidature that matches the filter.
     * @param {CandidatureFindUniqueArgs} args - Arguments to find a Candidature
     * @example
     * // Get one Candidature
     * const candidature = await prisma.candidature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CandidatureFindUniqueArgs>(args: SelectSubset<T, CandidatureFindUniqueArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CandidatureFindUniqueOrThrowArgs} args - Arguments to find a Candidature
     * @example
     * // Get one Candidature
     * const candidature = await prisma.candidature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CandidatureFindUniqueOrThrowArgs>(args: SelectSubset<T, CandidatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureFindFirstArgs} args - Arguments to find a Candidature
     * @example
     * // Get one Candidature
     * const candidature = await prisma.candidature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CandidatureFindFirstArgs>(args?: SelectSubset<T, CandidatureFindFirstArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureFindFirstOrThrowArgs} args - Arguments to find a Candidature
     * @example
     * // Get one Candidature
     * const candidature = await prisma.candidature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CandidatureFindFirstOrThrowArgs>(args?: SelectSubset<T, CandidatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidatures
     * const candidatures = await prisma.candidature.findMany()
     * 
     * // Get first 10 Candidatures
     * const candidatures = await prisma.candidature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const candidatureWithIdOnly = await prisma.candidature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CandidatureFindManyArgs>(args?: SelectSubset<T, CandidatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidature.
     * @param {CandidatureCreateArgs} args - Arguments to create a Candidature.
     * @example
     * // Create one Candidature
     * const Candidature = await prisma.candidature.create({
     *   data: {
     *     // ... data to create a Candidature
     *   }
     * })
     * 
     */
    create<T extends CandidatureCreateArgs>(args: SelectSubset<T, CandidatureCreateArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidatures.
     * @param {CandidatureCreateManyArgs} args - Arguments to create many Candidatures.
     * @example
     * // Create many Candidatures
     * const candidature = await prisma.candidature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CandidatureCreateManyArgs>(args?: SelectSubset<T, CandidatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Candidature.
     * @param {CandidatureDeleteArgs} args - Arguments to delete one Candidature.
     * @example
     * // Delete one Candidature
     * const Candidature = await prisma.candidature.delete({
     *   where: {
     *     // ... filter to delete one Candidature
     *   }
     * })
     * 
     */
    delete<T extends CandidatureDeleteArgs>(args: SelectSubset<T, CandidatureDeleteArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidature.
     * @param {CandidatureUpdateArgs} args - Arguments to update one Candidature.
     * @example
     * // Update one Candidature
     * const candidature = await prisma.candidature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CandidatureUpdateArgs>(args: SelectSubset<T, CandidatureUpdateArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidatures.
     * @param {CandidatureDeleteManyArgs} args - Arguments to filter Candidatures to delete.
     * @example
     * // Delete a few Candidatures
     * const { count } = await prisma.candidature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CandidatureDeleteManyArgs>(args?: SelectSubset<T, CandidatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidatures
     * const candidature = await prisma.candidature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CandidatureUpdateManyArgs>(args: SelectSubset<T, CandidatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Candidature.
     * @param {CandidatureUpsertArgs} args - Arguments to update or create a Candidature.
     * @example
     * // Update or create a Candidature
     * const candidature = await prisma.candidature.upsert({
     *   create: {
     *     // ... data to create a Candidature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidature we want to update
     *   }
     * })
     */
    upsert<T extends CandidatureUpsertArgs>(args: SelectSubset<T, CandidatureUpsertArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureCountArgs} args - Arguments to filter Candidatures to count.
     * @example
     * // Count the number of Candidatures
     * const count = await prisma.candidature.count({
     *   where: {
     *     // ... the filter for the Candidatures we want to count
     *   }
     * })
    **/
    count<T extends CandidatureCountArgs>(
      args?: Subset<T, CandidatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidatureAggregateArgs>(args: Subset<T, CandidatureAggregateArgs>): Prisma.PrismaPromise<GetCandidatureAggregateType<T>>

    /**
     * Group by Candidature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatureGroupByArgs} args - Group by arguments.
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
      T extends CandidatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CandidatureGroupByArgs['orderBy'] }
        : { orderBy?: CandidatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CandidatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Candidature model
   */
  readonly fields: CandidatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Candidature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CandidatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    etudiant<T extends EtudiantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtudiantDefaultArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appel<T extends AppelCandidatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppelCandidatureDefaultArgs<ExtArgs>>): Prisma__AppelCandidatureClient<$Result.GetResult<Prisma.$AppelCandidaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Candidature$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Candidature$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCandidaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evaluations<T extends Candidature$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Candidature$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attribution<T extends Candidature$attributionArgs<ExtArgs> = {}>(args?: Subset<T, Candidature$attributionArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Candidature model
   */
  interface CandidatureFieldRefs {
    readonly id: FieldRef<"Candidature", 'String'>
    readonly reference: FieldRef<"Candidature", 'String'>
    readonly dateSoumission: FieldRef<"Candidature", 'DateTime'>
    readonly motivation: FieldRef<"Candidature", 'String'>
    readonly statut: FieldRef<"Candidature", 'StatutCandidature'>
    readonly scoreFinal: FieldRef<"Candidature", 'Decimal'>
    readonly commentaire: FieldRef<"Candidature", 'String'>
    readonly etudiantId: FieldRef<"Candidature", 'String'>
    readonly appelId: FieldRef<"Candidature", 'String'>
    readonly creeLe: FieldRef<"Candidature", 'DateTime'>
    readonly modifieLe: FieldRef<"Candidature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Candidature findUnique
   */
  export type CandidatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter, which Candidature to fetch.
     */
    where: CandidatureWhereUniqueInput
  }

  /**
   * Candidature findUniqueOrThrow
   */
  export type CandidatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter, which Candidature to fetch.
     */
    where: CandidatureWhereUniqueInput
  }

  /**
   * Candidature findFirst
   */
  export type CandidatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter, which Candidature to fetch.
     */
    where?: CandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatures to fetch.
     */
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidatures.
     */
    cursor?: CandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidatures.
     */
    distinct?: CandidatureScalarFieldEnum | CandidatureScalarFieldEnum[]
  }

  /**
   * Candidature findFirstOrThrow
   */
  export type CandidatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter, which Candidature to fetch.
     */
    where?: CandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatures to fetch.
     */
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Candidatures.
     */
    cursor?: CandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Candidatures.
     */
    distinct?: CandidatureScalarFieldEnum | CandidatureScalarFieldEnum[]
  }

  /**
   * Candidature findMany
   */
  export type CandidatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter, which Candidatures to fetch.
     */
    where?: CandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Candidatures to fetch.
     */
    orderBy?: CandidatureOrderByWithRelationInput | CandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Candidatures.
     */
    cursor?: CandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Candidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Candidatures.
     */
    skip?: number
    distinct?: CandidatureScalarFieldEnum | CandidatureScalarFieldEnum[]
  }

  /**
   * Candidature create
   */
  export type CandidatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Candidature.
     */
    data: XOR<CandidatureCreateInput, CandidatureUncheckedCreateInput>
  }

  /**
   * Candidature createMany
   */
  export type CandidatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Candidatures.
     */
    data: CandidatureCreateManyInput | CandidatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Candidature update
   */
  export type CandidatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Candidature.
     */
    data: XOR<CandidatureUpdateInput, CandidatureUncheckedUpdateInput>
    /**
     * Choose, which Candidature to update.
     */
    where: CandidatureWhereUniqueInput
  }

  /**
   * Candidature updateMany
   */
  export type CandidatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Candidatures.
     */
    data: XOR<CandidatureUpdateManyMutationInput, CandidatureUncheckedUpdateManyInput>
    /**
     * Filter which Candidatures to update
     */
    where?: CandidatureWhereInput
    /**
     * Limit how many Candidatures to update.
     */
    limit?: number
  }

  /**
   * Candidature upsert
   */
  export type CandidatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Candidature to update in case it exists.
     */
    where: CandidatureWhereUniqueInput
    /**
     * In case the Candidature found by the `where` argument doesn't exist, create a new Candidature with this data.
     */
    create: XOR<CandidatureCreateInput, CandidatureUncheckedCreateInput>
    /**
     * In case the Candidature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CandidatureUpdateInput, CandidatureUncheckedUpdateInput>
  }

  /**
   * Candidature delete
   */
  export type CandidatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
    /**
     * Filter which Candidature to delete.
     */
    where: CandidatureWhereUniqueInput
  }

  /**
   * Candidature deleteMany
   */
  export type CandidatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Candidatures to delete
     */
    where?: CandidatureWhereInput
    /**
     * Limit how many Candidatures to delete.
     */
    limit?: number
  }

  /**
   * Candidature.documents
   */
  export type Candidature$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
    where?: DocumentCandidatureWhereInput
    orderBy?: DocumentCandidatureOrderByWithRelationInput | DocumentCandidatureOrderByWithRelationInput[]
    cursor?: DocumentCandidatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentCandidatureScalarFieldEnum | DocumentCandidatureScalarFieldEnum[]
  }

  /**
   * Candidature.evaluations
   */
  export type Candidature$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Candidature.attribution
   */
  export type Candidature$attributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    where?: AttributionBourseWhereInput
  }

  /**
   * Candidature without action
   */
  export type CandidatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Candidature
     */
    select?: CandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Candidature
     */
    omit?: CandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CandidatureInclude<ExtArgs> | null
  }


  /**
   * Model DocumentCandidature
   */

  export type AggregateDocumentCandidature = {
    _count: DocumentCandidatureCountAggregateOutputType | null
    _min: DocumentCandidatureMinAggregateOutputType | null
    _max: DocumentCandidatureMaxAggregateOutputType | null
  }

  export type DocumentCandidatureMinAggregateOutputType = {
    id: string | null
    type: $Enums.TypeDocument | null
    nomFichier: string | null
    cheminFichier: string | null
    estValide: boolean | null
    commentaire: string | null
    candidatureId: string | null
    creeLe: Date | null
  }

  export type DocumentCandidatureMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TypeDocument | null
    nomFichier: string | null
    cheminFichier: string | null
    estValide: boolean | null
    commentaire: string | null
    candidatureId: string | null
    creeLe: Date | null
  }

  export type DocumentCandidatureCountAggregateOutputType = {
    id: number
    type: number
    nomFichier: number
    cheminFichier: number
    estValide: number
    commentaire: number
    candidatureId: number
    creeLe: number
    _all: number
  }


  export type DocumentCandidatureMinAggregateInputType = {
    id?: true
    type?: true
    nomFichier?: true
    cheminFichier?: true
    estValide?: true
    commentaire?: true
    candidatureId?: true
    creeLe?: true
  }

  export type DocumentCandidatureMaxAggregateInputType = {
    id?: true
    type?: true
    nomFichier?: true
    cheminFichier?: true
    estValide?: true
    commentaire?: true
    candidatureId?: true
    creeLe?: true
  }

  export type DocumentCandidatureCountAggregateInputType = {
    id?: true
    type?: true
    nomFichier?: true
    cheminFichier?: true
    estValide?: true
    commentaire?: true
    candidatureId?: true
    creeLe?: true
    _all?: true
  }

  export type DocumentCandidatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentCandidature to aggregate.
     */
    where?: DocumentCandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCandidatures to fetch.
     */
    orderBy?: DocumentCandidatureOrderByWithRelationInput | DocumentCandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentCandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCandidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCandidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentCandidatures
    **/
    _count?: true | DocumentCandidatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentCandidatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentCandidatureMaxAggregateInputType
  }

  export type GetDocumentCandidatureAggregateType<T extends DocumentCandidatureAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentCandidature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentCandidature[P]>
      : GetScalarType<T[P], AggregateDocumentCandidature[P]>
  }




  export type DocumentCandidatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentCandidatureWhereInput
    orderBy?: DocumentCandidatureOrderByWithAggregationInput | DocumentCandidatureOrderByWithAggregationInput[]
    by: DocumentCandidatureScalarFieldEnum[] | DocumentCandidatureScalarFieldEnum
    having?: DocumentCandidatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCandidatureCountAggregateInputType | true
    _min?: DocumentCandidatureMinAggregateInputType
    _max?: DocumentCandidatureMaxAggregateInputType
  }

  export type DocumentCandidatureGroupByOutputType = {
    id: string
    type: $Enums.TypeDocument
    nomFichier: string
    cheminFichier: string
    estValide: boolean
    commentaire: string | null
    candidatureId: string
    creeLe: Date
    _count: DocumentCandidatureCountAggregateOutputType | null
    _min: DocumentCandidatureMinAggregateOutputType | null
    _max: DocumentCandidatureMaxAggregateOutputType | null
  }

  type GetDocumentCandidatureGroupByPayload<T extends DocumentCandidatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentCandidatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentCandidatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentCandidatureGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentCandidatureGroupByOutputType[P]>
        }
      >
    >


  export type DocumentCandidatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    nomFichier?: boolean
    cheminFichier?: boolean
    estValide?: boolean
    commentaire?: boolean
    candidatureId?: boolean
    creeLe?: boolean
    candidature?: boolean | CandidatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentCandidature"]>



  export type DocumentCandidatureSelectScalar = {
    id?: boolean
    type?: boolean
    nomFichier?: boolean
    cheminFichier?: boolean
    estValide?: boolean
    commentaire?: boolean
    candidatureId?: boolean
    creeLe?: boolean
  }

  export type DocumentCandidatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "nomFichier" | "cheminFichier" | "estValide" | "commentaire" | "candidatureId" | "creeLe", ExtArgs["result"]["documentCandidature"]>
  export type DocumentCandidatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidature?: boolean | CandidatureDefaultArgs<ExtArgs>
  }

  export type $DocumentCandidaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentCandidature"
    objects: {
      candidature: Prisma.$CandidaturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TypeDocument
      nomFichier: string
      cheminFichier: string
      estValide: boolean
      commentaire: string | null
      candidatureId: string
      creeLe: Date
    }, ExtArgs["result"]["documentCandidature"]>
    composites: {}
  }

  type DocumentCandidatureGetPayload<S extends boolean | null | undefined | DocumentCandidatureDefaultArgs> = $Result.GetResult<Prisma.$DocumentCandidaturePayload, S>

  type DocumentCandidatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentCandidatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCandidatureCountAggregateInputType | true
    }

  export interface DocumentCandidatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentCandidature'], meta: { name: 'DocumentCandidature' } }
    /**
     * Find zero or one DocumentCandidature that matches the filter.
     * @param {DocumentCandidatureFindUniqueArgs} args - Arguments to find a DocumentCandidature
     * @example
     * // Get one DocumentCandidature
     * const documentCandidature = await prisma.documentCandidature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentCandidatureFindUniqueArgs>(args: SelectSubset<T, DocumentCandidatureFindUniqueArgs<ExtArgs>>): Prisma__DocumentCandidatureClient<$Result.GetResult<Prisma.$DocumentCandidaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentCandidature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentCandidatureFindUniqueOrThrowArgs} args - Arguments to find a DocumentCandidature
     * @example
     * // Get one DocumentCandidature
     * const documentCandidature = await prisma.documentCandidature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentCandidatureFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentCandidatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentCandidatureClient<$Result.GetResult<Prisma.$DocumentCandidaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentCandidature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCandidatureFindFirstArgs} args - Arguments to find a DocumentCandidature
     * @example
     * // Get one DocumentCandidature
     * const documentCandidature = await prisma.documentCandidature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentCandidatureFindFirstArgs>(args?: SelectSubset<T, DocumentCandidatureFindFirstArgs<ExtArgs>>): Prisma__DocumentCandidatureClient<$Result.GetResult<Prisma.$DocumentCandidaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentCandidature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCandidatureFindFirstOrThrowArgs} args - Arguments to find a DocumentCandidature
     * @example
     * // Get one DocumentCandidature
     * const documentCandidature = await prisma.documentCandidature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentCandidatureFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentCandidatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentCandidatureClient<$Result.GetResult<Prisma.$DocumentCandidaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentCandidatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCandidatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentCandidatures
     * const documentCandidatures = await prisma.documentCandidature.findMany()
     * 
     * // Get first 10 DocumentCandidatures
     * const documentCandidatures = await prisma.documentCandidature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentCandidatureWithIdOnly = await prisma.documentCandidature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentCandidatureFindManyArgs>(args?: SelectSubset<T, DocumentCandidatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentCandidaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentCandidature.
     * @param {DocumentCandidatureCreateArgs} args - Arguments to create a DocumentCandidature.
     * @example
     * // Create one DocumentCandidature
     * const DocumentCandidature = await prisma.documentCandidature.create({
     *   data: {
     *     // ... data to create a DocumentCandidature
     *   }
     * })
     * 
     */
    create<T extends DocumentCandidatureCreateArgs>(args: SelectSubset<T, DocumentCandidatureCreateArgs<ExtArgs>>): Prisma__DocumentCandidatureClient<$Result.GetResult<Prisma.$DocumentCandidaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentCandidatures.
     * @param {DocumentCandidatureCreateManyArgs} args - Arguments to create many DocumentCandidatures.
     * @example
     * // Create many DocumentCandidatures
     * const documentCandidature = await prisma.documentCandidature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCandidatureCreateManyArgs>(args?: SelectSubset<T, DocumentCandidatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DocumentCandidature.
     * @param {DocumentCandidatureDeleteArgs} args - Arguments to delete one DocumentCandidature.
     * @example
     * // Delete one DocumentCandidature
     * const DocumentCandidature = await prisma.documentCandidature.delete({
     *   where: {
     *     // ... filter to delete one DocumentCandidature
     *   }
     * })
     * 
     */
    delete<T extends DocumentCandidatureDeleteArgs>(args: SelectSubset<T, DocumentCandidatureDeleteArgs<ExtArgs>>): Prisma__DocumentCandidatureClient<$Result.GetResult<Prisma.$DocumentCandidaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentCandidature.
     * @param {DocumentCandidatureUpdateArgs} args - Arguments to update one DocumentCandidature.
     * @example
     * // Update one DocumentCandidature
     * const documentCandidature = await prisma.documentCandidature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentCandidatureUpdateArgs>(args: SelectSubset<T, DocumentCandidatureUpdateArgs<ExtArgs>>): Prisma__DocumentCandidatureClient<$Result.GetResult<Prisma.$DocumentCandidaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentCandidatures.
     * @param {DocumentCandidatureDeleteManyArgs} args - Arguments to filter DocumentCandidatures to delete.
     * @example
     * // Delete a few DocumentCandidatures
     * const { count } = await prisma.documentCandidature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentCandidatureDeleteManyArgs>(args?: SelectSubset<T, DocumentCandidatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentCandidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCandidatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentCandidatures
     * const documentCandidature = await prisma.documentCandidature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentCandidatureUpdateManyArgs>(args: SelectSubset<T, DocumentCandidatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocumentCandidature.
     * @param {DocumentCandidatureUpsertArgs} args - Arguments to update or create a DocumentCandidature.
     * @example
     * // Update or create a DocumentCandidature
     * const documentCandidature = await prisma.documentCandidature.upsert({
     *   create: {
     *     // ... data to create a DocumentCandidature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentCandidature we want to update
     *   }
     * })
     */
    upsert<T extends DocumentCandidatureUpsertArgs>(args: SelectSubset<T, DocumentCandidatureUpsertArgs<ExtArgs>>): Prisma__DocumentCandidatureClient<$Result.GetResult<Prisma.$DocumentCandidaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentCandidatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCandidatureCountArgs} args - Arguments to filter DocumentCandidatures to count.
     * @example
     * // Count the number of DocumentCandidatures
     * const count = await prisma.documentCandidature.count({
     *   where: {
     *     // ... the filter for the DocumentCandidatures we want to count
     *   }
     * })
    **/
    count<T extends DocumentCandidatureCountArgs>(
      args?: Subset<T, DocumentCandidatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCandidatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentCandidature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCandidatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentCandidatureAggregateArgs>(args: Subset<T, DocumentCandidatureAggregateArgs>): Prisma.PrismaPromise<GetDocumentCandidatureAggregateType<T>>

    /**
     * Group by DocumentCandidature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCandidatureGroupByArgs} args - Group by arguments.
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
      T extends DocumentCandidatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentCandidatureGroupByArgs['orderBy'] }
        : { orderBy?: DocumentCandidatureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentCandidatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentCandidatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentCandidature model
   */
  readonly fields: DocumentCandidatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentCandidature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentCandidatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidature<T extends CandidatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatureDefaultArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DocumentCandidature model
   */
  interface DocumentCandidatureFieldRefs {
    readonly id: FieldRef<"DocumentCandidature", 'String'>
    readonly type: FieldRef<"DocumentCandidature", 'TypeDocument'>
    readonly nomFichier: FieldRef<"DocumentCandidature", 'String'>
    readonly cheminFichier: FieldRef<"DocumentCandidature", 'String'>
    readonly estValide: FieldRef<"DocumentCandidature", 'Boolean'>
    readonly commentaire: FieldRef<"DocumentCandidature", 'String'>
    readonly candidatureId: FieldRef<"DocumentCandidature", 'String'>
    readonly creeLe: FieldRef<"DocumentCandidature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentCandidature findUnique
   */
  export type DocumentCandidatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCandidature to fetch.
     */
    where: DocumentCandidatureWhereUniqueInput
  }

  /**
   * DocumentCandidature findUniqueOrThrow
   */
  export type DocumentCandidatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCandidature to fetch.
     */
    where: DocumentCandidatureWhereUniqueInput
  }

  /**
   * DocumentCandidature findFirst
   */
  export type DocumentCandidatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCandidature to fetch.
     */
    where?: DocumentCandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCandidatures to fetch.
     */
    orderBy?: DocumentCandidatureOrderByWithRelationInput | DocumentCandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentCandidatures.
     */
    cursor?: DocumentCandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCandidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCandidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentCandidatures.
     */
    distinct?: DocumentCandidatureScalarFieldEnum | DocumentCandidatureScalarFieldEnum[]
  }

  /**
   * DocumentCandidature findFirstOrThrow
   */
  export type DocumentCandidatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCandidature to fetch.
     */
    where?: DocumentCandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCandidatures to fetch.
     */
    orderBy?: DocumentCandidatureOrderByWithRelationInput | DocumentCandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentCandidatures.
     */
    cursor?: DocumentCandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCandidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCandidatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentCandidatures.
     */
    distinct?: DocumentCandidatureScalarFieldEnum | DocumentCandidatureScalarFieldEnum[]
  }

  /**
   * DocumentCandidature findMany
   */
  export type DocumentCandidatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
    /**
     * Filter, which DocumentCandidatures to fetch.
     */
    where?: DocumentCandidatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentCandidatures to fetch.
     */
    orderBy?: DocumentCandidatureOrderByWithRelationInput | DocumentCandidatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentCandidatures.
     */
    cursor?: DocumentCandidatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentCandidatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentCandidatures.
     */
    skip?: number
    distinct?: DocumentCandidatureScalarFieldEnum | DocumentCandidatureScalarFieldEnum[]
  }

  /**
   * DocumentCandidature create
   */
  export type DocumentCandidatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentCandidature.
     */
    data: XOR<DocumentCandidatureCreateInput, DocumentCandidatureUncheckedCreateInput>
  }

  /**
   * DocumentCandidature createMany
   */
  export type DocumentCandidatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentCandidatures.
     */
    data: DocumentCandidatureCreateManyInput | DocumentCandidatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentCandidature update
   */
  export type DocumentCandidatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentCandidature.
     */
    data: XOR<DocumentCandidatureUpdateInput, DocumentCandidatureUncheckedUpdateInput>
    /**
     * Choose, which DocumentCandidature to update.
     */
    where: DocumentCandidatureWhereUniqueInput
  }

  /**
   * DocumentCandidature updateMany
   */
  export type DocumentCandidatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentCandidatures.
     */
    data: XOR<DocumentCandidatureUpdateManyMutationInput, DocumentCandidatureUncheckedUpdateManyInput>
    /**
     * Filter which DocumentCandidatures to update
     */
    where?: DocumentCandidatureWhereInput
    /**
     * Limit how many DocumentCandidatures to update.
     */
    limit?: number
  }

  /**
   * DocumentCandidature upsert
   */
  export type DocumentCandidatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentCandidature to update in case it exists.
     */
    where: DocumentCandidatureWhereUniqueInput
    /**
     * In case the DocumentCandidature found by the `where` argument doesn't exist, create a new DocumentCandidature with this data.
     */
    create: XOR<DocumentCandidatureCreateInput, DocumentCandidatureUncheckedCreateInput>
    /**
     * In case the DocumentCandidature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentCandidatureUpdateInput, DocumentCandidatureUncheckedUpdateInput>
  }

  /**
   * DocumentCandidature delete
   */
  export type DocumentCandidatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
    /**
     * Filter which DocumentCandidature to delete.
     */
    where: DocumentCandidatureWhereUniqueInput
  }

  /**
   * DocumentCandidature deleteMany
   */
  export type DocumentCandidatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentCandidatures to delete
     */
    where?: DocumentCandidatureWhereInput
    /**
     * Limit how many DocumentCandidatures to delete.
     */
    limit?: number
  }

  /**
   * DocumentCandidature without action
   */
  export type DocumentCandidatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCandidature
     */
    select?: DocumentCandidatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentCandidature
     */
    omit?: DocumentCandidatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentCandidatureInclude<ExtArgs> | null
  }


  /**
   * Model Evaluation
   */

  export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  export type EvaluationAvgAggregateOutputType = {
    note: Decimal | null
  }

  export type EvaluationSumAggregateOutputType = {
    note: Decimal | null
  }

  export type EvaluationMinAggregateOutputType = {
    id: string | null
    note: Decimal | null
    decision: $Enums.DecisionEvaluation | null
    commentaire: string | null
    candidatureId: string | null
    evaluateurId: string | null
    creeLe: Date | null
  }

  export type EvaluationMaxAggregateOutputType = {
    id: string | null
    note: Decimal | null
    decision: $Enums.DecisionEvaluation | null
    commentaire: string | null
    candidatureId: string | null
    evaluateurId: string | null
    creeLe: Date | null
  }

  export type EvaluationCountAggregateOutputType = {
    id: number
    note: number
    decision: number
    commentaire: number
    candidatureId: number
    evaluateurId: number
    creeLe: number
    _all: number
  }


  export type EvaluationAvgAggregateInputType = {
    note?: true
  }

  export type EvaluationSumAggregateInputType = {
    note?: true
  }

  export type EvaluationMinAggregateInputType = {
    id?: true
    note?: true
    decision?: true
    commentaire?: true
    candidatureId?: true
    evaluateurId?: true
    creeLe?: true
  }

  export type EvaluationMaxAggregateInputType = {
    id?: true
    note?: true
    decision?: true
    commentaire?: true
    candidatureId?: true
    evaluateurId?: true
    creeLe?: true
  }

  export type EvaluationCountAggregateInputType = {
    id?: true
    note?: true
    decision?: true
    commentaire?: true
    candidatureId?: true
    evaluateurId?: true
    creeLe?: true
    _all?: true
  }

  export type EvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation to aggregate.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evaluations
    **/
    _count?: true | EvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationMaxAggregateInputType
  }

  export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation[P]>
      : GetScalarType<T[P], AggregateEvaluation[P]>
  }




  export type EvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithAggregationInput | EvaluationOrderByWithAggregationInput[]
    by: EvaluationScalarFieldEnum[] | EvaluationScalarFieldEnum
    having?: EvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationCountAggregateInputType | true
    _avg?: EvaluationAvgAggregateInputType
    _sum?: EvaluationSumAggregateInputType
    _min?: EvaluationMinAggregateInputType
    _max?: EvaluationMaxAggregateInputType
  }

  export type EvaluationGroupByOutputType = {
    id: string
    note: Decimal | null
    decision: $Enums.DecisionEvaluation
    commentaire: string | null
    candidatureId: string
    evaluateurId: string
    creeLe: Date
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note?: boolean
    decision?: boolean
    commentaire?: boolean
    candidatureId?: boolean
    evaluateurId?: boolean
    creeLe?: boolean
    candidature?: boolean | CandidatureDefaultArgs<ExtArgs>
    evaluateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>



  export type EvaluationSelectScalar = {
    id?: boolean
    note?: boolean
    decision?: boolean
    commentaire?: boolean
    candidatureId?: boolean
    evaluateurId?: boolean
    creeLe?: boolean
  }

  export type EvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "note" | "decision" | "commentaire" | "candidatureId" | "evaluateurId" | "creeLe", ExtArgs["result"]["evaluation"]>
  export type EvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidature?: boolean | CandidatureDefaultArgs<ExtArgs>
    evaluateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $EvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evaluation"
    objects: {
      candidature: Prisma.$CandidaturePayload<ExtArgs>
      evaluateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      note: Prisma.Decimal | null
      decision: $Enums.DecisionEvaluation
      commentaire: string | null
      candidatureId: string
      evaluateurId: string
      creeLe: Date
    }, ExtArgs["result"]["evaluation"]>
    composites: {}
  }

  type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = $Result.GetResult<Prisma.$EvaluationPayload, S>

  type EvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationCountAggregateInputType | true
    }

  export interface EvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'], meta: { name: 'Evaluation' } }
    /**
     * Find zero or one Evaluation that matches the filter.
     * @param {EvaluationFindUniqueArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationFindUniqueArgs>(args: SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationFindUniqueOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationFindFirstArgs>(args?: SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluations
     * const evaluations = await prisma.evaluation.findMany()
     * 
     * // Get first 10 Evaluations
     * const evaluations = await prisma.evaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationFindManyArgs>(args?: SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation.
     * @param {EvaluationCreateArgs} args - Arguments to create a Evaluation.
     * @example
     * // Create one Evaluation
     * const Evaluation = await prisma.evaluation.create({
     *   data: {
     *     // ... data to create a Evaluation
     *   }
     * })
     * 
     */
    create<T extends EvaluationCreateArgs>(args: SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluations.
     * @param {EvaluationCreateManyArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationCreateManyArgs>(args?: SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evaluation.
     * @param {EvaluationDeleteArgs} args - Arguments to delete one Evaluation.
     * @example
     * // Delete one Evaluation
     * const Evaluation = await prisma.evaluation.delete({
     *   where: {
     *     // ... filter to delete one Evaluation
     *   }
     * })
     * 
     */
    delete<T extends EvaluationDeleteArgs>(args: SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation.
     * @param {EvaluationUpdateArgs} args - Arguments to update one Evaluation.
     * @example
     * // Update one Evaluation
     * const evaluation = await prisma.evaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationUpdateArgs>(args: SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluations.
     * @param {EvaluationDeleteManyArgs} args - Arguments to filter Evaluations to delete.
     * @example
     * // Delete a few Evaluations
     * const { count } = await prisma.evaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationUpdateManyArgs>(args: SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evaluation.
     * @param {EvaluationUpsertArgs} args - Arguments to update or create a Evaluation.
     * @example
     * // Update or create a Evaluation
     * const evaluation = await prisma.evaluation.upsert({
     *   create: {
     *     // ... data to create a Evaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationUpsertArgs>(args: SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationCountArgs} args - Arguments to filter Evaluations to count.
     * @example
     * // Count the number of Evaluations
     * const count = await prisma.evaluation.count({
     *   where: {
     *     // ... the filter for the Evaluations we want to count
     *   }
     * })
    **/
    count<T extends EvaluationCountArgs>(
      args?: Subset<T, EvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvaluationAggregateArgs>(args: Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>

    /**
     * Group by Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationGroupByArgs} args - Group by arguments.
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
      T extends EvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evaluation model
   */
  readonly fields: EvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidature<T extends CandidatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatureDefaultArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evaluation model
   */
  interface EvaluationFieldRefs {
    readonly id: FieldRef<"Evaluation", 'String'>
    readonly note: FieldRef<"Evaluation", 'Decimal'>
    readonly decision: FieldRef<"Evaluation", 'DecisionEvaluation'>
    readonly commentaire: FieldRef<"Evaluation", 'String'>
    readonly candidatureId: FieldRef<"Evaluation", 'String'>
    readonly evaluateurId: FieldRef<"Evaluation", 'String'>
    readonly creeLe: FieldRef<"Evaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evaluation findUnique
   */
  export type EvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findUniqueOrThrow
   */
  export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findFirst
   */
  export type EvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findFirstOrThrow
   */
  export type EvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findMany
   */
  export type EvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluations to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation create
   */
  export type EvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a Evaluation.
     */
    data: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
  }

  /**
   * Evaluation createMany
   */
  export type EvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evaluation update
   */
  export type EvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a Evaluation.
     */
    data: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
    /**
     * Choose, which Evaluation to update.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation updateMany
   */
  export type EvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
  }

  /**
   * Evaluation upsert
   */
  export type EvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the Evaluation to update in case it exists.
     */
    where: EvaluationWhereUniqueInput
    /**
     * In case the Evaluation found by the `where` argument doesn't exist, create a new Evaluation with this data.
     */
    create: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
    /**
     * In case the Evaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
  }

  /**
   * Evaluation delete
   */
  export type EvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter which Evaluation to delete.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation deleteMany
   */
  export type EvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluations to delete
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to delete.
     */
    limit?: number
  }

  /**
   * Evaluation without action
   */
  export type EvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
  }


  /**
   * Model AttributionBourse
   */

  export type AggregateAttributionBourse = {
    _count: AttributionBourseCountAggregateOutputType | null
    _avg: AttributionBourseAvgAggregateOutputType | null
    _sum: AttributionBourseSumAggregateOutputType | null
    _min: AttributionBourseMinAggregateOutputType | null
    _max: AttributionBourseMaxAggregateOutputType | null
  }

  export type AttributionBourseAvgAggregateOutputType = {
    montantAccorde: Decimal | null
  }

  export type AttributionBourseSumAggregateOutputType = {
    montantAccorde: Decimal | null
  }

  export type AttributionBourseMinAggregateOutputType = {
    id: string | null
    reference: string | null
    montantAccorde: Decimal | null
    devise: string | null
    dateDebut: Date | null
    dateFin: Date | null
    statut: $Enums.StatutAttribution | null
    candidatureId: string | null
    etudiantId: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type AttributionBourseMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    montantAccorde: Decimal | null
    devise: string | null
    dateDebut: Date | null
    dateFin: Date | null
    statut: $Enums.StatutAttribution | null
    candidatureId: string | null
    etudiantId: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type AttributionBourseCountAggregateOutputType = {
    id: number
    reference: number
    montantAccorde: number
    devise: number
    dateDebut: number
    dateFin: number
    statut: number
    candidatureId: number
    etudiantId: number
    creeLe: number
    modifieLe: number
    _all: number
  }


  export type AttributionBourseAvgAggregateInputType = {
    montantAccorde?: true
  }

  export type AttributionBourseSumAggregateInputType = {
    montantAccorde?: true
  }

  export type AttributionBourseMinAggregateInputType = {
    id?: true
    reference?: true
    montantAccorde?: true
    devise?: true
    dateDebut?: true
    dateFin?: true
    statut?: true
    candidatureId?: true
    etudiantId?: true
    creeLe?: true
    modifieLe?: true
  }

  export type AttributionBourseMaxAggregateInputType = {
    id?: true
    reference?: true
    montantAccorde?: true
    devise?: true
    dateDebut?: true
    dateFin?: true
    statut?: true
    candidatureId?: true
    etudiantId?: true
    creeLe?: true
    modifieLe?: true
  }

  export type AttributionBourseCountAggregateInputType = {
    id?: true
    reference?: true
    montantAccorde?: true
    devise?: true
    dateDebut?: true
    dateFin?: true
    statut?: true
    candidatureId?: true
    etudiantId?: true
    creeLe?: true
    modifieLe?: true
    _all?: true
  }

  export type AttributionBourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributionBourse to aggregate.
     */
    where?: AttributionBourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributionBourses to fetch.
     */
    orderBy?: AttributionBourseOrderByWithRelationInput | AttributionBourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributionBourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributionBourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributionBourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttributionBourses
    **/
    _count?: true | AttributionBourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributionBourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributionBourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributionBourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributionBourseMaxAggregateInputType
  }

  export type GetAttributionBourseAggregateType<T extends AttributionBourseAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributionBourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributionBourse[P]>
      : GetScalarType<T[P], AggregateAttributionBourse[P]>
  }




  export type AttributionBourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributionBourseWhereInput
    orderBy?: AttributionBourseOrderByWithAggregationInput | AttributionBourseOrderByWithAggregationInput[]
    by: AttributionBourseScalarFieldEnum[] | AttributionBourseScalarFieldEnum
    having?: AttributionBourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributionBourseCountAggregateInputType | true
    _avg?: AttributionBourseAvgAggregateInputType
    _sum?: AttributionBourseSumAggregateInputType
    _min?: AttributionBourseMinAggregateInputType
    _max?: AttributionBourseMaxAggregateInputType
  }

  export type AttributionBourseGroupByOutputType = {
    id: string
    reference: string
    montantAccorde: Decimal
    devise: string
    dateDebut: Date
    dateFin: Date
    statut: $Enums.StatutAttribution
    candidatureId: string
    etudiantId: string
    creeLe: Date
    modifieLe: Date
    _count: AttributionBourseCountAggregateOutputType | null
    _avg: AttributionBourseAvgAggregateOutputType | null
    _sum: AttributionBourseSumAggregateOutputType | null
    _min: AttributionBourseMinAggregateOutputType | null
    _max: AttributionBourseMaxAggregateOutputType | null
  }

  type GetAttributionBourseGroupByPayload<T extends AttributionBourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributionBourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributionBourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributionBourseGroupByOutputType[P]>
            : GetScalarType<T[P], AttributionBourseGroupByOutputType[P]>
        }
      >
    >


  export type AttributionBourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    montantAccorde?: boolean
    devise?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    statut?: boolean
    candidatureId?: boolean
    etudiantId?: boolean
    creeLe?: boolean
    modifieLe?: boolean
    candidature?: boolean | CandidatureDefaultArgs<ExtArgs>
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    paiements?: boolean | AttributionBourse$paiementsArgs<ExtArgs>
    renouvellements?: boolean | AttributionBourse$renouvellementsArgs<ExtArgs>
    _count?: boolean | AttributionBourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributionBourse"]>



  export type AttributionBourseSelectScalar = {
    id?: boolean
    reference?: boolean
    montantAccorde?: boolean
    devise?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    statut?: boolean
    candidatureId?: boolean
    etudiantId?: boolean
    creeLe?: boolean
    modifieLe?: boolean
  }

  export type AttributionBourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "montantAccorde" | "devise" | "dateDebut" | "dateFin" | "statut" | "candidatureId" | "etudiantId" | "creeLe" | "modifieLe", ExtArgs["result"]["attributionBourse"]>
  export type AttributionBourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    candidature?: boolean | CandidatureDefaultArgs<ExtArgs>
    etudiant?: boolean | EtudiantDefaultArgs<ExtArgs>
    paiements?: boolean | AttributionBourse$paiementsArgs<ExtArgs>
    renouvellements?: boolean | AttributionBourse$renouvellementsArgs<ExtArgs>
    _count?: boolean | AttributionBourseCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AttributionBoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttributionBourse"
    objects: {
      candidature: Prisma.$CandidaturePayload<ExtArgs>
      etudiant: Prisma.$EtudiantPayload<ExtArgs>
      paiements: Prisma.$PaiementPayload<ExtArgs>[]
      renouvellements: Prisma.$RenouvellementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      montantAccorde: Prisma.Decimal
      devise: string
      dateDebut: Date
      dateFin: Date
      statut: $Enums.StatutAttribution
      candidatureId: string
      etudiantId: string
      creeLe: Date
      modifieLe: Date
    }, ExtArgs["result"]["attributionBourse"]>
    composites: {}
  }

  type AttributionBourseGetPayload<S extends boolean | null | undefined | AttributionBourseDefaultArgs> = $Result.GetResult<Prisma.$AttributionBoursePayload, S>

  type AttributionBourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributionBourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributionBourseCountAggregateInputType | true
    }

  export interface AttributionBourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttributionBourse'], meta: { name: 'AttributionBourse' } }
    /**
     * Find zero or one AttributionBourse that matches the filter.
     * @param {AttributionBourseFindUniqueArgs} args - Arguments to find a AttributionBourse
     * @example
     * // Get one AttributionBourse
     * const attributionBourse = await prisma.attributionBourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributionBourseFindUniqueArgs>(args: SelectSubset<T, AttributionBourseFindUniqueArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttributionBourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributionBourseFindUniqueOrThrowArgs} args - Arguments to find a AttributionBourse
     * @example
     * // Get one AttributionBourse
     * const attributionBourse = await prisma.attributionBourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributionBourseFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributionBourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributionBourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributionBourseFindFirstArgs} args - Arguments to find a AttributionBourse
     * @example
     * // Get one AttributionBourse
     * const attributionBourse = await prisma.attributionBourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributionBourseFindFirstArgs>(args?: SelectSubset<T, AttributionBourseFindFirstArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributionBourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributionBourseFindFirstOrThrowArgs} args - Arguments to find a AttributionBourse
     * @example
     * // Get one AttributionBourse
     * const attributionBourse = await prisma.attributionBourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributionBourseFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributionBourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttributionBourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributionBourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttributionBourses
     * const attributionBourses = await prisma.attributionBourse.findMany()
     * 
     * // Get first 10 AttributionBourses
     * const attributionBourses = await prisma.attributionBourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributionBourseWithIdOnly = await prisma.attributionBourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributionBourseFindManyArgs>(args?: SelectSubset<T, AttributionBourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttributionBourse.
     * @param {AttributionBourseCreateArgs} args - Arguments to create a AttributionBourse.
     * @example
     * // Create one AttributionBourse
     * const AttributionBourse = await prisma.attributionBourse.create({
     *   data: {
     *     // ... data to create a AttributionBourse
     *   }
     * })
     * 
     */
    create<T extends AttributionBourseCreateArgs>(args: SelectSubset<T, AttributionBourseCreateArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttributionBourses.
     * @param {AttributionBourseCreateManyArgs} args - Arguments to create many AttributionBourses.
     * @example
     * // Create many AttributionBourses
     * const attributionBourse = await prisma.attributionBourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributionBourseCreateManyArgs>(args?: SelectSubset<T, AttributionBourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AttributionBourse.
     * @param {AttributionBourseDeleteArgs} args - Arguments to delete one AttributionBourse.
     * @example
     * // Delete one AttributionBourse
     * const AttributionBourse = await prisma.attributionBourse.delete({
     *   where: {
     *     // ... filter to delete one AttributionBourse
     *   }
     * })
     * 
     */
    delete<T extends AttributionBourseDeleteArgs>(args: SelectSubset<T, AttributionBourseDeleteArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttributionBourse.
     * @param {AttributionBourseUpdateArgs} args - Arguments to update one AttributionBourse.
     * @example
     * // Update one AttributionBourse
     * const attributionBourse = await prisma.attributionBourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributionBourseUpdateArgs>(args: SelectSubset<T, AttributionBourseUpdateArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttributionBourses.
     * @param {AttributionBourseDeleteManyArgs} args - Arguments to filter AttributionBourses to delete.
     * @example
     * // Delete a few AttributionBourses
     * const { count } = await prisma.attributionBourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributionBourseDeleteManyArgs>(args?: SelectSubset<T, AttributionBourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributionBourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributionBourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttributionBourses
     * const attributionBourse = await prisma.attributionBourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributionBourseUpdateManyArgs>(args: SelectSubset<T, AttributionBourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttributionBourse.
     * @param {AttributionBourseUpsertArgs} args - Arguments to update or create a AttributionBourse.
     * @example
     * // Update or create a AttributionBourse
     * const attributionBourse = await prisma.attributionBourse.upsert({
     *   create: {
     *     // ... data to create a AttributionBourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttributionBourse we want to update
     *   }
     * })
     */
    upsert<T extends AttributionBourseUpsertArgs>(args: SelectSubset<T, AttributionBourseUpsertArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttributionBourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributionBourseCountArgs} args - Arguments to filter AttributionBourses to count.
     * @example
     * // Count the number of AttributionBourses
     * const count = await prisma.attributionBourse.count({
     *   where: {
     *     // ... the filter for the AttributionBourses we want to count
     *   }
     * })
    **/
    count<T extends AttributionBourseCountArgs>(
      args?: Subset<T, AttributionBourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributionBourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttributionBourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributionBourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttributionBourseAggregateArgs>(args: Subset<T, AttributionBourseAggregateArgs>): Prisma.PrismaPromise<GetAttributionBourseAggregateType<T>>

    /**
     * Group by AttributionBourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributionBourseGroupByArgs} args - Group by arguments.
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
      T extends AttributionBourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributionBourseGroupByArgs['orderBy'] }
        : { orderBy?: AttributionBourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttributionBourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributionBourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttributionBourse model
   */
  readonly fields: AttributionBourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttributionBourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributionBourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    candidature<T extends CandidatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CandidatureDefaultArgs<ExtArgs>>): Prisma__CandidatureClient<$Result.GetResult<Prisma.$CandidaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    etudiant<T extends EtudiantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EtudiantDefaultArgs<ExtArgs>>): Prisma__EtudiantClient<$Result.GetResult<Prisma.$EtudiantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paiements<T extends AttributionBourse$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, AttributionBourse$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    renouvellements<T extends AttributionBourse$renouvellementsArgs<ExtArgs> = {}>(args?: Subset<T, AttributionBourse$renouvellementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenouvellementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AttributionBourse model
   */
  interface AttributionBourseFieldRefs {
    readonly id: FieldRef<"AttributionBourse", 'String'>
    readonly reference: FieldRef<"AttributionBourse", 'String'>
    readonly montantAccorde: FieldRef<"AttributionBourse", 'Decimal'>
    readonly devise: FieldRef<"AttributionBourse", 'String'>
    readonly dateDebut: FieldRef<"AttributionBourse", 'DateTime'>
    readonly dateFin: FieldRef<"AttributionBourse", 'DateTime'>
    readonly statut: FieldRef<"AttributionBourse", 'StatutAttribution'>
    readonly candidatureId: FieldRef<"AttributionBourse", 'String'>
    readonly etudiantId: FieldRef<"AttributionBourse", 'String'>
    readonly creeLe: FieldRef<"AttributionBourse", 'DateTime'>
    readonly modifieLe: FieldRef<"AttributionBourse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttributionBourse findUnique
   */
  export type AttributionBourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    /**
     * Filter, which AttributionBourse to fetch.
     */
    where: AttributionBourseWhereUniqueInput
  }

  /**
   * AttributionBourse findUniqueOrThrow
   */
  export type AttributionBourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    /**
     * Filter, which AttributionBourse to fetch.
     */
    where: AttributionBourseWhereUniqueInput
  }

  /**
   * AttributionBourse findFirst
   */
  export type AttributionBourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    /**
     * Filter, which AttributionBourse to fetch.
     */
    where?: AttributionBourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributionBourses to fetch.
     */
    orderBy?: AttributionBourseOrderByWithRelationInput | AttributionBourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributionBourses.
     */
    cursor?: AttributionBourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributionBourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributionBourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributionBourses.
     */
    distinct?: AttributionBourseScalarFieldEnum | AttributionBourseScalarFieldEnum[]
  }

  /**
   * AttributionBourse findFirstOrThrow
   */
  export type AttributionBourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    /**
     * Filter, which AttributionBourse to fetch.
     */
    where?: AttributionBourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributionBourses to fetch.
     */
    orderBy?: AttributionBourseOrderByWithRelationInput | AttributionBourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributionBourses.
     */
    cursor?: AttributionBourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributionBourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributionBourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributionBourses.
     */
    distinct?: AttributionBourseScalarFieldEnum | AttributionBourseScalarFieldEnum[]
  }

  /**
   * AttributionBourse findMany
   */
  export type AttributionBourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    /**
     * Filter, which AttributionBourses to fetch.
     */
    where?: AttributionBourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributionBourses to fetch.
     */
    orderBy?: AttributionBourseOrderByWithRelationInput | AttributionBourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttributionBourses.
     */
    cursor?: AttributionBourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributionBourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributionBourses.
     */
    skip?: number
    distinct?: AttributionBourseScalarFieldEnum | AttributionBourseScalarFieldEnum[]
  }

  /**
   * AttributionBourse create
   */
  export type AttributionBourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    /**
     * The data needed to create a AttributionBourse.
     */
    data: XOR<AttributionBourseCreateInput, AttributionBourseUncheckedCreateInput>
  }

  /**
   * AttributionBourse createMany
   */
  export type AttributionBourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttributionBourses.
     */
    data: AttributionBourseCreateManyInput | AttributionBourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttributionBourse update
   */
  export type AttributionBourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    /**
     * The data needed to update a AttributionBourse.
     */
    data: XOR<AttributionBourseUpdateInput, AttributionBourseUncheckedUpdateInput>
    /**
     * Choose, which AttributionBourse to update.
     */
    where: AttributionBourseWhereUniqueInput
  }

  /**
   * AttributionBourse updateMany
   */
  export type AttributionBourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttributionBourses.
     */
    data: XOR<AttributionBourseUpdateManyMutationInput, AttributionBourseUncheckedUpdateManyInput>
    /**
     * Filter which AttributionBourses to update
     */
    where?: AttributionBourseWhereInput
    /**
     * Limit how many AttributionBourses to update.
     */
    limit?: number
  }

  /**
   * AttributionBourse upsert
   */
  export type AttributionBourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    /**
     * The filter to search for the AttributionBourse to update in case it exists.
     */
    where: AttributionBourseWhereUniqueInput
    /**
     * In case the AttributionBourse found by the `where` argument doesn't exist, create a new AttributionBourse with this data.
     */
    create: XOR<AttributionBourseCreateInput, AttributionBourseUncheckedCreateInput>
    /**
     * In case the AttributionBourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributionBourseUpdateInput, AttributionBourseUncheckedUpdateInput>
  }

  /**
   * AttributionBourse delete
   */
  export type AttributionBourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
    /**
     * Filter which AttributionBourse to delete.
     */
    where: AttributionBourseWhereUniqueInput
  }

  /**
   * AttributionBourse deleteMany
   */
  export type AttributionBourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributionBourses to delete
     */
    where?: AttributionBourseWhereInput
    /**
     * Limit how many AttributionBourses to delete.
     */
    limit?: number
  }

  /**
   * AttributionBourse.paiements
   */
  export type AttributionBourse$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    cursor?: PaiementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * AttributionBourse.renouvellements
   */
  export type AttributionBourse$renouvellementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
    where?: RenouvellementWhereInput
    orderBy?: RenouvellementOrderByWithRelationInput | RenouvellementOrderByWithRelationInput[]
    cursor?: RenouvellementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RenouvellementScalarFieldEnum | RenouvellementScalarFieldEnum[]
  }

  /**
   * AttributionBourse without action
   */
  export type AttributionBourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributionBourse
     */
    select?: AttributionBourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributionBourse
     */
    omit?: AttributionBourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributionBourseInclude<ExtArgs> | null
  }


  /**
   * Model Paiement
   */

  export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  export type PaiementAvgAggregateOutputType = {
    montant: Decimal | null
  }

  export type PaiementSumAggregateOutputType = {
    montant: Decimal | null
  }

  export type PaiementMinAggregateOutputType = {
    id: string | null
    reference: string | null
    periode: string | null
    montant: Decimal | null
    devise: string | null
    datePrevue: Date | null
    datePaiement: Date | null
    statut: $Enums.StatutPaiement | null
    modePaiement: string | null
    preuveUrl: string | null
    attributionId: string | null
    creeLe: Date | null
  }

  export type PaiementMaxAggregateOutputType = {
    id: string | null
    reference: string | null
    periode: string | null
    montant: Decimal | null
    devise: string | null
    datePrevue: Date | null
    datePaiement: Date | null
    statut: $Enums.StatutPaiement | null
    modePaiement: string | null
    preuveUrl: string | null
    attributionId: string | null
    creeLe: Date | null
  }

  export type PaiementCountAggregateOutputType = {
    id: number
    reference: number
    periode: number
    montant: number
    devise: number
    datePrevue: number
    datePaiement: number
    statut: number
    modePaiement: number
    preuveUrl: number
    attributionId: number
    creeLe: number
    _all: number
  }


  export type PaiementAvgAggregateInputType = {
    montant?: true
  }

  export type PaiementSumAggregateInputType = {
    montant?: true
  }

  export type PaiementMinAggregateInputType = {
    id?: true
    reference?: true
    periode?: true
    montant?: true
    devise?: true
    datePrevue?: true
    datePaiement?: true
    statut?: true
    modePaiement?: true
    preuveUrl?: true
    attributionId?: true
    creeLe?: true
  }

  export type PaiementMaxAggregateInputType = {
    id?: true
    reference?: true
    periode?: true
    montant?: true
    devise?: true
    datePrevue?: true
    datePaiement?: true
    statut?: true
    modePaiement?: true
    preuveUrl?: true
    attributionId?: true
    creeLe?: true
  }

  export type PaiementCountAggregateInputType = {
    id?: true
    reference?: true
    periode?: true
    montant?: true
    devise?: true
    datePrevue?: true
    datePaiement?: true
    statut?: true
    modePaiement?: true
    preuveUrl?: true
    attributionId?: true
    creeLe?: true
    _all?: true
  }

  export type PaiementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiement to aggregate.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paiements
    **/
    _count?: true | PaiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaiementMaxAggregateInputType
  }

  export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiement[P]>
      : GetScalarType<T[P], AggregatePaiement[P]>
  }




  export type PaiementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithAggregationInput | PaiementOrderByWithAggregationInput[]
    by: PaiementScalarFieldEnum[] | PaiementScalarFieldEnum
    having?: PaiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaiementCountAggregateInputType | true
    _avg?: PaiementAvgAggregateInputType
    _sum?: PaiementSumAggregateInputType
    _min?: PaiementMinAggregateInputType
    _max?: PaiementMaxAggregateInputType
  }

  export type PaiementGroupByOutputType = {
    id: string
    reference: string
    periode: string
    montant: Decimal
    devise: string
    datePrevue: Date
    datePaiement: Date | null
    statut: $Enums.StatutPaiement
    modePaiement: string | null
    preuveUrl: string | null
    attributionId: string
    creeLe: Date
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaiementGroupByOutputType[P]>
            : GetScalarType<T[P], PaiementGroupByOutputType[P]>
        }
      >
    >


  export type PaiementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    periode?: boolean
    montant?: boolean
    devise?: boolean
    datePrevue?: boolean
    datePaiement?: boolean
    statut?: boolean
    modePaiement?: boolean
    preuveUrl?: boolean
    attributionId?: boolean
    creeLe?: boolean
    attribution?: boolean | AttributionBourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>



  export type PaiementSelectScalar = {
    id?: boolean
    reference?: boolean
    periode?: boolean
    montant?: boolean
    devise?: boolean
    datePrevue?: boolean
    datePaiement?: boolean
    statut?: boolean
    modePaiement?: boolean
    preuveUrl?: boolean
    attributionId?: boolean
    creeLe?: boolean
  }

  export type PaiementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "periode" | "montant" | "devise" | "datePrevue" | "datePaiement" | "statut" | "modePaiement" | "preuveUrl" | "attributionId" | "creeLe", ExtArgs["result"]["paiement"]>
  export type PaiementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribution?: boolean | AttributionBourseDefaultArgs<ExtArgs>
  }

  export type $PaiementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paiement"
    objects: {
      attribution: Prisma.$AttributionBoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reference: string
      periode: string
      montant: Prisma.Decimal
      devise: string
      datePrevue: Date
      datePaiement: Date | null
      statut: $Enums.StatutPaiement
      modePaiement: string | null
      preuveUrl: string | null
      attributionId: string
      creeLe: Date
    }, ExtArgs["result"]["paiement"]>
    composites: {}
  }

  type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = $Result.GetResult<Prisma.$PaiementPayload, S>

  type PaiementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaiementCountAggregateInputType | true
    }

  export interface PaiementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paiement'], meta: { name: 'Paiement' } }
    /**
     * Find zero or one Paiement that matches the filter.
     * @param {PaiementFindUniqueArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaiementFindUniqueArgs>(args: SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paiement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaiementFindUniqueOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaiementFindFirstArgs>(args?: SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiements
     * const paiements = await prisma.paiement.findMany()
     * 
     * // Get first 10 Paiements
     * const paiements = await prisma.paiement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paiementWithIdOnly = await prisma.paiement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaiementFindManyArgs>(args?: SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paiement.
     * @param {PaiementCreateArgs} args - Arguments to create a Paiement.
     * @example
     * // Create one Paiement
     * const Paiement = await prisma.paiement.create({
     *   data: {
     *     // ... data to create a Paiement
     *   }
     * })
     * 
     */
    create<T extends PaiementCreateArgs>(args: SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paiements.
     * @param {PaiementCreateManyArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaiementCreateManyArgs>(args?: SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paiement.
     * @param {PaiementDeleteArgs} args - Arguments to delete one Paiement.
     * @example
     * // Delete one Paiement
     * const Paiement = await prisma.paiement.delete({
     *   where: {
     *     // ... filter to delete one Paiement
     *   }
     * })
     * 
     */
    delete<T extends PaiementDeleteArgs>(args: SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paiement.
     * @param {PaiementUpdateArgs} args - Arguments to update one Paiement.
     * @example
     * // Update one Paiement
     * const paiement = await prisma.paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaiementUpdateArgs>(args: SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paiements.
     * @param {PaiementDeleteManyArgs} args - Arguments to filter Paiements to delete.
     * @example
     * // Delete a few Paiements
     * const { count } = await prisma.paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaiementDeleteManyArgs>(args?: SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaiementUpdateManyArgs>(args: SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paiement.
     * @param {PaiementUpsertArgs} args - Arguments to update or create a Paiement.
     * @example
     * // Update or create a Paiement
     * const paiement = await prisma.paiement.upsert({
     *   create: {
     *     // ... data to create a Paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiement we want to update
     *   }
     * })
     */
    upsert<T extends PaiementUpsertArgs>(args: SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementCountArgs} args - Arguments to filter Paiements to count.
     * @example
     * // Count the number of Paiements
     * const count = await prisma.paiement.count({
     *   where: {
     *     // ... the filter for the Paiements we want to count
     *   }
     * })
    **/
    count<T extends PaiementCountArgs>(
      args?: Subset<T, PaiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaiementAggregateArgs>(args: Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>

    /**
     * Group by Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementGroupByArgs} args - Group by arguments.
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
      T extends PaiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaiementGroupByArgs['orderBy'] }
        : { orderBy?: PaiementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paiement model
   */
  readonly fields: PaiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attribution<T extends AttributionBourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributionBourseDefaultArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Paiement model
   */
  interface PaiementFieldRefs {
    readonly id: FieldRef<"Paiement", 'String'>
    readonly reference: FieldRef<"Paiement", 'String'>
    readonly periode: FieldRef<"Paiement", 'String'>
    readonly montant: FieldRef<"Paiement", 'Decimal'>
    readonly devise: FieldRef<"Paiement", 'String'>
    readonly datePrevue: FieldRef<"Paiement", 'DateTime'>
    readonly datePaiement: FieldRef<"Paiement", 'DateTime'>
    readonly statut: FieldRef<"Paiement", 'StatutPaiement'>
    readonly modePaiement: FieldRef<"Paiement", 'String'>
    readonly preuveUrl: FieldRef<"Paiement", 'String'>
    readonly attributionId: FieldRef<"Paiement", 'String'>
    readonly creeLe: FieldRef<"Paiement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paiement findUnique
   */
  export type PaiementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findUniqueOrThrow
   */
  export type PaiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findFirst
   */
  export type PaiementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findFirstOrThrow
   */
  export type PaiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findMany
   */
  export type PaiementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiements to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement create
   */
  export type PaiementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to create a Paiement.
     */
    data: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
  }

  /**
   * Paiement createMany
   */
  export type PaiementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement update
   */
  export type PaiementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to update a Paiement.
     */
    data: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
    /**
     * Choose, which Paiement to update.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement updateMany
   */
  export type PaiementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement upsert
   */
  export type PaiementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The filter to search for the Paiement to update in case it exists.
     */
    where: PaiementWhereUniqueInput
    /**
     * In case the Paiement found by the `where` argument doesn't exist, create a new Paiement with this data.
     */
    create: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
    /**
     * In case the Paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
  }

  /**
   * Paiement delete
   */
  export type PaiementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter which Paiement to delete.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement deleteMany
   */
  export type PaiementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiements to delete
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to delete.
     */
    limit?: number
  }

  /**
   * Paiement without action
   */
  export type PaiementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
  }


  /**
   * Model Renouvellement
   */

  export type AggregateRenouvellement = {
    _count: RenouvellementCountAggregateOutputType | null
    _min: RenouvellementMinAggregateOutputType | null
    _max: RenouvellementMaxAggregateOutputType | null
  }

  export type RenouvellementMinAggregateOutputType = {
    id: string | null
    anneeAcademique: string | null
    decision: string | null
    commentaire: string | null
    dateDecision: Date | null
    attributionId: string | null
    creeLe: Date | null
  }

  export type RenouvellementMaxAggregateOutputType = {
    id: string | null
    anneeAcademique: string | null
    decision: string | null
    commentaire: string | null
    dateDecision: Date | null
    attributionId: string | null
    creeLe: Date | null
  }

  export type RenouvellementCountAggregateOutputType = {
    id: number
    anneeAcademique: number
    decision: number
    commentaire: number
    dateDecision: number
    attributionId: number
    creeLe: number
    _all: number
  }


  export type RenouvellementMinAggregateInputType = {
    id?: true
    anneeAcademique?: true
    decision?: true
    commentaire?: true
    dateDecision?: true
    attributionId?: true
    creeLe?: true
  }

  export type RenouvellementMaxAggregateInputType = {
    id?: true
    anneeAcademique?: true
    decision?: true
    commentaire?: true
    dateDecision?: true
    attributionId?: true
    creeLe?: true
  }

  export type RenouvellementCountAggregateInputType = {
    id?: true
    anneeAcademique?: true
    decision?: true
    commentaire?: true
    dateDecision?: true
    attributionId?: true
    creeLe?: true
    _all?: true
  }

  export type RenouvellementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Renouvellement to aggregate.
     */
    where?: RenouvellementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renouvellements to fetch.
     */
    orderBy?: RenouvellementOrderByWithRelationInput | RenouvellementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RenouvellementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renouvellements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renouvellements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Renouvellements
    **/
    _count?: true | RenouvellementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RenouvellementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RenouvellementMaxAggregateInputType
  }

  export type GetRenouvellementAggregateType<T extends RenouvellementAggregateArgs> = {
        [P in keyof T & keyof AggregateRenouvellement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRenouvellement[P]>
      : GetScalarType<T[P], AggregateRenouvellement[P]>
  }




  export type RenouvellementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenouvellementWhereInput
    orderBy?: RenouvellementOrderByWithAggregationInput | RenouvellementOrderByWithAggregationInput[]
    by: RenouvellementScalarFieldEnum[] | RenouvellementScalarFieldEnum
    having?: RenouvellementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RenouvellementCountAggregateInputType | true
    _min?: RenouvellementMinAggregateInputType
    _max?: RenouvellementMaxAggregateInputType
  }

  export type RenouvellementGroupByOutputType = {
    id: string
    anneeAcademique: string
    decision: string
    commentaire: string | null
    dateDecision: Date
    attributionId: string
    creeLe: Date
    _count: RenouvellementCountAggregateOutputType | null
    _min: RenouvellementMinAggregateOutputType | null
    _max: RenouvellementMaxAggregateOutputType | null
  }

  type GetRenouvellementGroupByPayload<T extends RenouvellementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RenouvellementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RenouvellementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RenouvellementGroupByOutputType[P]>
            : GetScalarType<T[P], RenouvellementGroupByOutputType[P]>
        }
      >
    >


  export type RenouvellementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    anneeAcademique?: boolean
    decision?: boolean
    commentaire?: boolean
    dateDecision?: boolean
    attributionId?: boolean
    creeLe?: boolean
    attribution?: boolean | AttributionBourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renouvellement"]>



  export type RenouvellementSelectScalar = {
    id?: boolean
    anneeAcademique?: boolean
    decision?: boolean
    commentaire?: boolean
    dateDecision?: boolean
    attributionId?: boolean
    creeLe?: boolean
  }

  export type RenouvellementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "anneeAcademique" | "decision" | "commentaire" | "dateDecision" | "attributionId" | "creeLe", ExtArgs["result"]["renouvellement"]>
  export type RenouvellementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attribution?: boolean | AttributionBourseDefaultArgs<ExtArgs>
  }

  export type $RenouvellementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Renouvellement"
    objects: {
      attribution: Prisma.$AttributionBoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      anneeAcademique: string
      decision: string
      commentaire: string | null
      dateDecision: Date
      attributionId: string
      creeLe: Date
    }, ExtArgs["result"]["renouvellement"]>
    composites: {}
  }

  type RenouvellementGetPayload<S extends boolean | null | undefined | RenouvellementDefaultArgs> = $Result.GetResult<Prisma.$RenouvellementPayload, S>

  type RenouvellementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RenouvellementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RenouvellementCountAggregateInputType | true
    }

  export interface RenouvellementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Renouvellement'], meta: { name: 'Renouvellement' } }
    /**
     * Find zero or one Renouvellement that matches the filter.
     * @param {RenouvellementFindUniqueArgs} args - Arguments to find a Renouvellement
     * @example
     * // Get one Renouvellement
     * const renouvellement = await prisma.renouvellement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RenouvellementFindUniqueArgs>(args: SelectSubset<T, RenouvellementFindUniqueArgs<ExtArgs>>): Prisma__RenouvellementClient<$Result.GetResult<Prisma.$RenouvellementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Renouvellement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RenouvellementFindUniqueOrThrowArgs} args - Arguments to find a Renouvellement
     * @example
     * // Get one Renouvellement
     * const renouvellement = await prisma.renouvellement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RenouvellementFindUniqueOrThrowArgs>(args: SelectSubset<T, RenouvellementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RenouvellementClient<$Result.GetResult<Prisma.$RenouvellementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Renouvellement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenouvellementFindFirstArgs} args - Arguments to find a Renouvellement
     * @example
     * // Get one Renouvellement
     * const renouvellement = await prisma.renouvellement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RenouvellementFindFirstArgs>(args?: SelectSubset<T, RenouvellementFindFirstArgs<ExtArgs>>): Prisma__RenouvellementClient<$Result.GetResult<Prisma.$RenouvellementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Renouvellement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenouvellementFindFirstOrThrowArgs} args - Arguments to find a Renouvellement
     * @example
     * // Get one Renouvellement
     * const renouvellement = await prisma.renouvellement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RenouvellementFindFirstOrThrowArgs>(args?: SelectSubset<T, RenouvellementFindFirstOrThrowArgs<ExtArgs>>): Prisma__RenouvellementClient<$Result.GetResult<Prisma.$RenouvellementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Renouvellements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenouvellementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Renouvellements
     * const renouvellements = await prisma.renouvellement.findMany()
     * 
     * // Get first 10 Renouvellements
     * const renouvellements = await prisma.renouvellement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const renouvellementWithIdOnly = await prisma.renouvellement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RenouvellementFindManyArgs>(args?: SelectSubset<T, RenouvellementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenouvellementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Renouvellement.
     * @param {RenouvellementCreateArgs} args - Arguments to create a Renouvellement.
     * @example
     * // Create one Renouvellement
     * const Renouvellement = await prisma.renouvellement.create({
     *   data: {
     *     // ... data to create a Renouvellement
     *   }
     * })
     * 
     */
    create<T extends RenouvellementCreateArgs>(args: SelectSubset<T, RenouvellementCreateArgs<ExtArgs>>): Prisma__RenouvellementClient<$Result.GetResult<Prisma.$RenouvellementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Renouvellements.
     * @param {RenouvellementCreateManyArgs} args - Arguments to create many Renouvellements.
     * @example
     * // Create many Renouvellements
     * const renouvellement = await prisma.renouvellement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RenouvellementCreateManyArgs>(args?: SelectSubset<T, RenouvellementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Renouvellement.
     * @param {RenouvellementDeleteArgs} args - Arguments to delete one Renouvellement.
     * @example
     * // Delete one Renouvellement
     * const Renouvellement = await prisma.renouvellement.delete({
     *   where: {
     *     // ... filter to delete one Renouvellement
     *   }
     * })
     * 
     */
    delete<T extends RenouvellementDeleteArgs>(args: SelectSubset<T, RenouvellementDeleteArgs<ExtArgs>>): Prisma__RenouvellementClient<$Result.GetResult<Prisma.$RenouvellementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Renouvellement.
     * @param {RenouvellementUpdateArgs} args - Arguments to update one Renouvellement.
     * @example
     * // Update one Renouvellement
     * const renouvellement = await prisma.renouvellement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RenouvellementUpdateArgs>(args: SelectSubset<T, RenouvellementUpdateArgs<ExtArgs>>): Prisma__RenouvellementClient<$Result.GetResult<Prisma.$RenouvellementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Renouvellements.
     * @param {RenouvellementDeleteManyArgs} args - Arguments to filter Renouvellements to delete.
     * @example
     * // Delete a few Renouvellements
     * const { count } = await prisma.renouvellement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RenouvellementDeleteManyArgs>(args?: SelectSubset<T, RenouvellementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Renouvellements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenouvellementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Renouvellements
     * const renouvellement = await prisma.renouvellement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RenouvellementUpdateManyArgs>(args: SelectSubset<T, RenouvellementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Renouvellement.
     * @param {RenouvellementUpsertArgs} args - Arguments to update or create a Renouvellement.
     * @example
     * // Update or create a Renouvellement
     * const renouvellement = await prisma.renouvellement.upsert({
     *   create: {
     *     // ... data to create a Renouvellement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Renouvellement we want to update
     *   }
     * })
     */
    upsert<T extends RenouvellementUpsertArgs>(args: SelectSubset<T, RenouvellementUpsertArgs<ExtArgs>>): Prisma__RenouvellementClient<$Result.GetResult<Prisma.$RenouvellementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Renouvellements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenouvellementCountArgs} args - Arguments to filter Renouvellements to count.
     * @example
     * // Count the number of Renouvellements
     * const count = await prisma.renouvellement.count({
     *   where: {
     *     // ... the filter for the Renouvellements we want to count
     *   }
     * })
    **/
    count<T extends RenouvellementCountArgs>(
      args?: Subset<T, RenouvellementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RenouvellementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Renouvellement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenouvellementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RenouvellementAggregateArgs>(args: Subset<T, RenouvellementAggregateArgs>): Prisma.PrismaPromise<GetRenouvellementAggregateType<T>>

    /**
     * Group by Renouvellement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenouvellementGroupByArgs} args - Group by arguments.
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
      T extends RenouvellementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RenouvellementGroupByArgs['orderBy'] }
        : { orderBy?: RenouvellementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RenouvellementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRenouvellementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Renouvellement model
   */
  readonly fields: RenouvellementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Renouvellement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RenouvellementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attribution<T extends AttributionBourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttributionBourseDefaultArgs<ExtArgs>>): Prisma__AttributionBourseClient<$Result.GetResult<Prisma.$AttributionBoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Renouvellement model
   */
  interface RenouvellementFieldRefs {
    readonly id: FieldRef<"Renouvellement", 'String'>
    readonly anneeAcademique: FieldRef<"Renouvellement", 'String'>
    readonly decision: FieldRef<"Renouvellement", 'String'>
    readonly commentaire: FieldRef<"Renouvellement", 'String'>
    readonly dateDecision: FieldRef<"Renouvellement", 'DateTime'>
    readonly attributionId: FieldRef<"Renouvellement", 'String'>
    readonly creeLe: FieldRef<"Renouvellement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Renouvellement findUnique
   */
  export type RenouvellementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
    /**
     * Filter, which Renouvellement to fetch.
     */
    where: RenouvellementWhereUniqueInput
  }

  /**
   * Renouvellement findUniqueOrThrow
   */
  export type RenouvellementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
    /**
     * Filter, which Renouvellement to fetch.
     */
    where: RenouvellementWhereUniqueInput
  }

  /**
   * Renouvellement findFirst
   */
  export type RenouvellementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
    /**
     * Filter, which Renouvellement to fetch.
     */
    where?: RenouvellementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renouvellements to fetch.
     */
    orderBy?: RenouvellementOrderByWithRelationInput | RenouvellementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Renouvellements.
     */
    cursor?: RenouvellementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renouvellements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renouvellements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Renouvellements.
     */
    distinct?: RenouvellementScalarFieldEnum | RenouvellementScalarFieldEnum[]
  }

  /**
   * Renouvellement findFirstOrThrow
   */
  export type RenouvellementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
    /**
     * Filter, which Renouvellement to fetch.
     */
    where?: RenouvellementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renouvellements to fetch.
     */
    orderBy?: RenouvellementOrderByWithRelationInput | RenouvellementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Renouvellements.
     */
    cursor?: RenouvellementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renouvellements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renouvellements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Renouvellements.
     */
    distinct?: RenouvellementScalarFieldEnum | RenouvellementScalarFieldEnum[]
  }

  /**
   * Renouvellement findMany
   */
  export type RenouvellementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
    /**
     * Filter, which Renouvellements to fetch.
     */
    where?: RenouvellementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Renouvellements to fetch.
     */
    orderBy?: RenouvellementOrderByWithRelationInput | RenouvellementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Renouvellements.
     */
    cursor?: RenouvellementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Renouvellements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Renouvellements.
     */
    skip?: number
    distinct?: RenouvellementScalarFieldEnum | RenouvellementScalarFieldEnum[]
  }

  /**
   * Renouvellement create
   */
  export type RenouvellementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
    /**
     * The data needed to create a Renouvellement.
     */
    data: XOR<RenouvellementCreateInput, RenouvellementUncheckedCreateInput>
  }

  /**
   * Renouvellement createMany
   */
  export type RenouvellementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Renouvellements.
     */
    data: RenouvellementCreateManyInput | RenouvellementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Renouvellement update
   */
  export type RenouvellementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
    /**
     * The data needed to update a Renouvellement.
     */
    data: XOR<RenouvellementUpdateInput, RenouvellementUncheckedUpdateInput>
    /**
     * Choose, which Renouvellement to update.
     */
    where: RenouvellementWhereUniqueInput
  }

  /**
   * Renouvellement updateMany
   */
  export type RenouvellementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Renouvellements.
     */
    data: XOR<RenouvellementUpdateManyMutationInput, RenouvellementUncheckedUpdateManyInput>
    /**
     * Filter which Renouvellements to update
     */
    where?: RenouvellementWhereInput
    /**
     * Limit how many Renouvellements to update.
     */
    limit?: number
  }

  /**
   * Renouvellement upsert
   */
  export type RenouvellementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
    /**
     * The filter to search for the Renouvellement to update in case it exists.
     */
    where: RenouvellementWhereUniqueInput
    /**
     * In case the Renouvellement found by the `where` argument doesn't exist, create a new Renouvellement with this data.
     */
    create: XOR<RenouvellementCreateInput, RenouvellementUncheckedCreateInput>
    /**
     * In case the Renouvellement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RenouvellementUpdateInput, RenouvellementUncheckedUpdateInput>
  }

  /**
   * Renouvellement delete
   */
  export type RenouvellementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
    /**
     * Filter which Renouvellement to delete.
     */
    where: RenouvellementWhereUniqueInput
  }

  /**
   * Renouvellement deleteMany
   */
  export type RenouvellementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Renouvellements to delete
     */
    where?: RenouvellementWhereInput
    /**
     * Limit how many Renouvellements to delete.
     */
    limit?: number
  }

  /**
   * Renouvellement without action
   */
  export type RenouvellementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renouvellement
     */
    select?: RenouvellementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Renouvellement
     */
    omit?: RenouvellementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenouvellementInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    titre: string | null
    message: string | null
    estLue: boolean | null
    utilisateurId: string | null
    creeLe: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    message: string | null
    estLue: boolean | null
    utilisateurId: string | null
    creeLe: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    titre: number
    message: number
    estLue: number
    utilisateurId: number
    creeLe: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    titre?: true
    message?: true
    estLue?: true
    utilisateurId?: true
    creeLe?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    titre?: true
    message?: true
    estLue?: true
    utilisateurId?: true
    creeLe?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    titre?: true
    message?: true
    estLue?: true
    utilisateurId?: true
    creeLe?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    titre: string
    message: string
    estLue: boolean
    utilisateurId: string
    creeLe: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    message?: boolean
    estLue?: boolean
    utilisateurId?: boolean
    creeLe?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    titre?: boolean
    message?: boolean
    estLue?: boolean
    utilisateurId?: boolean
    creeLe?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "message" | "estLue" | "utilisateurId" | "creeLe", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      message: string
      estLue: boolean
      utilisateurId: string
      creeLe: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly titre: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly estLue: FieldRef<"Notification", 'Boolean'>
    readonly utilisateurId: FieldRef<"Notification", 'String'>
    readonly creeLe: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Parametre
   */

  export type AggregateParametre = {
    _count: ParametreCountAggregateOutputType | null
    _min: ParametreMinAggregateOutputType | null
    _max: ParametreMaxAggregateOutputType | null
  }

  export type ParametreMinAggregateOutputType = {
    id: string | null
    cle: string | null
    valeur: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type ParametreMaxAggregateOutputType = {
    id: string | null
    cle: string | null
    valeur: string | null
    creeLe: Date | null
    modifieLe: Date | null
  }

  export type ParametreCountAggregateOutputType = {
    id: number
    cle: number
    valeur: number
    creeLe: number
    modifieLe: number
    _all: number
  }


  export type ParametreMinAggregateInputType = {
    id?: true
    cle?: true
    valeur?: true
    creeLe?: true
    modifieLe?: true
  }

  export type ParametreMaxAggregateInputType = {
    id?: true
    cle?: true
    valeur?: true
    creeLe?: true
    modifieLe?: true
  }

  export type ParametreCountAggregateInputType = {
    id?: true
    cle?: true
    valeur?: true
    creeLe?: true
    modifieLe?: true
    _all?: true
  }

  export type ParametreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parametre to aggregate.
     */
    where?: ParametreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parametres to fetch.
     */
    orderBy?: ParametreOrderByWithRelationInput | ParametreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParametreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parametres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parametres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parametres
    **/
    _count?: true | ParametreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParametreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParametreMaxAggregateInputType
  }

  export type GetParametreAggregateType<T extends ParametreAggregateArgs> = {
        [P in keyof T & keyof AggregateParametre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParametre[P]>
      : GetScalarType<T[P], AggregateParametre[P]>
  }




  export type ParametreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParametreWhereInput
    orderBy?: ParametreOrderByWithAggregationInput | ParametreOrderByWithAggregationInput[]
    by: ParametreScalarFieldEnum[] | ParametreScalarFieldEnum
    having?: ParametreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParametreCountAggregateInputType | true
    _min?: ParametreMinAggregateInputType
    _max?: ParametreMaxAggregateInputType
  }

  export type ParametreGroupByOutputType = {
    id: string
    cle: string
    valeur: string
    creeLe: Date
    modifieLe: Date
    _count: ParametreCountAggregateOutputType | null
    _min: ParametreMinAggregateOutputType | null
    _max: ParametreMaxAggregateOutputType | null
  }

  type GetParametreGroupByPayload<T extends ParametreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParametreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParametreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParametreGroupByOutputType[P]>
            : GetScalarType<T[P], ParametreGroupByOutputType[P]>
        }
      >
    >


  export type ParametreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cle?: boolean
    valeur?: boolean
    creeLe?: boolean
    modifieLe?: boolean
  }, ExtArgs["result"]["parametre"]>



  export type ParametreSelectScalar = {
    id?: boolean
    cle?: boolean
    valeur?: boolean
    creeLe?: boolean
    modifieLe?: boolean
  }

  export type ParametreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cle" | "valeur" | "creeLe" | "modifieLe", ExtArgs["result"]["parametre"]>

  export type $ParametrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parametre"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cle: string
      valeur: string
      creeLe: Date
      modifieLe: Date
    }, ExtArgs["result"]["parametre"]>
    composites: {}
  }

  type ParametreGetPayload<S extends boolean | null | undefined | ParametreDefaultArgs> = $Result.GetResult<Prisma.$ParametrePayload, S>

  type ParametreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParametreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParametreCountAggregateInputType | true
    }

  export interface ParametreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parametre'], meta: { name: 'Parametre' } }
    /**
     * Find zero or one Parametre that matches the filter.
     * @param {ParametreFindUniqueArgs} args - Arguments to find a Parametre
     * @example
     * // Get one Parametre
     * const parametre = await prisma.parametre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParametreFindUniqueArgs>(args: SelectSubset<T, ParametreFindUniqueArgs<ExtArgs>>): Prisma__ParametreClient<$Result.GetResult<Prisma.$ParametrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parametre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParametreFindUniqueOrThrowArgs} args - Arguments to find a Parametre
     * @example
     * // Get one Parametre
     * const parametre = await prisma.parametre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParametreFindUniqueOrThrowArgs>(args: SelectSubset<T, ParametreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParametreClient<$Result.GetResult<Prisma.$ParametrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parametre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametreFindFirstArgs} args - Arguments to find a Parametre
     * @example
     * // Get one Parametre
     * const parametre = await prisma.parametre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParametreFindFirstArgs>(args?: SelectSubset<T, ParametreFindFirstArgs<ExtArgs>>): Prisma__ParametreClient<$Result.GetResult<Prisma.$ParametrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parametre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametreFindFirstOrThrowArgs} args - Arguments to find a Parametre
     * @example
     * // Get one Parametre
     * const parametre = await prisma.parametre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParametreFindFirstOrThrowArgs>(args?: SelectSubset<T, ParametreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParametreClient<$Result.GetResult<Prisma.$ParametrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parametres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parametres
     * const parametres = await prisma.parametre.findMany()
     * 
     * // Get first 10 Parametres
     * const parametres = await prisma.parametre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parametreWithIdOnly = await prisma.parametre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParametreFindManyArgs>(args?: SelectSubset<T, ParametreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParametrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parametre.
     * @param {ParametreCreateArgs} args - Arguments to create a Parametre.
     * @example
     * // Create one Parametre
     * const Parametre = await prisma.parametre.create({
     *   data: {
     *     // ... data to create a Parametre
     *   }
     * })
     * 
     */
    create<T extends ParametreCreateArgs>(args: SelectSubset<T, ParametreCreateArgs<ExtArgs>>): Prisma__ParametreClient<$Result.GetResult<Prisma.$ParametrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parametres.
     * @param {ParametreCreateManyArgs} args - Arguments to create many Parametres.
     * @example
     * // Create many Parametres
     * const parametre = await prisma.parametre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParametreCreateManyArgs>(args?: SelectSubset<T, ParametreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parametre.
     * @param {ParametreDeleteArgs} args - Arguments to delete one Parametre.
     * @example
     * // Delete one Parametre
     * const Parametre = await prisma.parametre.delete({
     *   where: {
     *     // ... filter to delete one Parametre
     *   }
     * })
     * 
     */
    delete<T extends ParametreDeleteArgs>(args: SelectSubset<T, ParametreDeleteArgs<ExtArgs>>): Prisma__ParametreClient<$Result.GetResult<Prisma.$ParametrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parametre.
     * @param {ParametreUpdateArgs} args - Arguments to update one Parametre.
     * @example
     * // Update one Parametre
     * const parametre = await prisma.parametre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParametreUpdateArgs>(args: SelectSubset<T, ParametreUpdateArgs<ExtArgs>>): Prisma__ParametreClient<$Result.GetResult<Prisma.$ParametrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parametres.
     * @param {ParametreDeleteManyArgs} args - Arguments to filter Parametres to delete.
     * @example
     * // Delete a few Parametres
     * const { count } = await prisma.parametre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParametreDeleteManyArgs>(args?: SelectSubset<T, ParametreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parametres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parametres
     * const parametre = await prisma.parametre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParametreUpdateManyArgs>(args: SelectSubset<T, ParametreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parametre.
     * @param {ParametreUpsertArgs} args - Arguments to update or create a Parametre.
     * @example
     * // Update or create a Parametre
     * const parametre = await prisma.parametre.upsert({
     *   create: {
     *     // ... data to create a Parametre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parametre we want to update
     *   }
     * })
     */
    upsert<T extends ParametreUpsertArgs>(args: SelectSubset<T, ParametreUpsertArgs<ExtArgs>>): Prisma__ParametreClient<$Result.GetResult<Prisma.$ParametrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parametres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametreCountArgs} args - Arguments to filter Parametres to count.
     * @example
     * // Count the number of Parametres
     * const count = await prisma.parametre.count({
     *   where: {
     *     // ... the filter for the Parametres we want to count
     *   }
     * })
    **/
    count<T extends ParametreCountArgs>(
      args?: Subset<T, ParametreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParametreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parametre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParametreAggregateArgs>(args: Subset<T, ParametreAggregateArgs>): Prisma.PrismaPromise<GetParametreAggregateType<T>>

    /**
     * Group by Parametre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametreGroupByArgs} args - Group by arguments.
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
      T extends ParametreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParametreGroupByArgs['orderBy'] }
        : { orderBy?: ParametreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParametreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParametreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parametre model
   */
  readonly fields: ParametreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parametre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParametreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Parametre model
   */
  interface ParametreFieldRefs {
    readonly id: FieldRef<"Parametre", 'String'>
    readonly cle: FieldRef<"Parametre", 'String'>
    readonly valeur: FieldRef<"Parametre", 'String'>
    readonly creeLe: FieldRef<"Parametre", 'DateTime'>
    readonly modifieLe: FieldRef<"Parametre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parametre findUnique
   */
  export type ParametreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametre
     */
    select?: ParametreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametre
     */
    omit?: ParametreOmit<ExtArgs> | null
    /**
     * Filter, which Parametre to fetch.
     */
    where: ParametreWhereUniqueInput
  }

  /**
   * Parametre findUniqueOrThrow
   */
  export type ParametreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametre
     */
    select?: ParametreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametre
     */
    omit?: ParametreOmit<ExtArgs> | null
    /**
     * Filter, which Parametre to fetch.
     */
    where: ParametreWhereUniqueInput
  }

  /**
   * Parametre findFirst
   */
  export type ParametreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametre
     */
    select?: ParametreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametre
     */
    omit?: ParametreOmit<ExtArgs> | null
    /**
     * Filter, which Parametre to fetch.
     */
    where?: ParametreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parametres to fetch.
     */
    orderBy?: ParametreOrderByWithRelationInput | ParametreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parametres.
     */
    cursor?: ParametreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parametres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parametres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parametres.
     */
    distinct?: ParametreScalarFieldEnum | ParametreScalarFieldEnum[]
  }

  /**
   * Parametre findFirstOrThrow
   */
  export type ParametreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametre
     */
    select?: ParametreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametre
     */
    omit?: ParametreOmit<ExtArgs> | null
    /**
     * Filter, which Parametre to fetch.
     */
    where?: ParametreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parametres to fetch.
     */
    orderBy?: ParametreOrderByWithRelationInput | ParametreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parametres.
     */
    cursor?: ParametreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parametres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parametres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parametres.
     */
    distinct?: ParametreScalarFieldEnum | ParametreScalarFieldEnum[]
  }

  /**
   * Parametre findMany
   */
  export type ParametreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametre
     */
    select?: ParametreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametre
     */
    omit?: ParametreOmit<ExtArgs> | null
    /**
     * Filter, which Parametres to fetch.
     */
    where?: ParametreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parametres to fetch.
     */
    orderBy?: ParametreOrderByWithRelationInput | ParametreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parametres.
     */
    cursor?: ParametreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parametres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parametres.
     */
    skip?: number
    distinct?: ParametreScalarFieldEnum | ParametreScalarFieldEnum[]
  }

  /**
   * Parametre create
   */
  export type ParametreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametre
     */
    select?: ParametreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametre
     */
    omit?: ParametreOmit<ExtArgs> | null
    /**
     * The data needed to create a Parametre.
     */
    data: XOR<ParametreCreateInput, ParametreUncheckedCreateInput>
  }

  /**
   * Parametre createMany
   */
  export type ParametreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parametres.
     */
    data: ParametreCreateManyInput | ParametreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parametre update
   */
  export type ParametreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametre
     */
    select?: ParametreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametre
     */
    omit?: ParametreOmit<ExtArgs> | null
    /**
     * The data needed to update a Parametre.
     */
    data: XOR<ParametreUpdateInput, ParametreUncheckedUpdateInput>
    /**
     * Choose, which Parametre to update.
     */
    where: ParametreWhereUniqueInput
  }

  /**
   * Parametre updateMany
   */
  export type ParametreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parametres.
     */
    data: XOR<ParametreUpdateManyMutationInput, ParametreUncheckedUpdateManyInput>
    /**
     * Filter which Parametres to update
     */
    where?: ParametreWhereInput
    /**
     * Limit how many Parametres to update.
     */
    limit?: number
  }

  /**
   * Parametre upsert
   */
  export type ParametreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametre
     */
    select?: ParametreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametre
     */
    omit?: ParametreOmit<ExtArgs> | null
    /**
     * The filter to search for the Parametre to update in case it exists.
     */
    where: ParametreWhereUniqueInput
    /**
     * In case the Parametre found by the `where` argument doesn't exist, create a new Parametre with this data.
     */
    create: XOR<ParametreCreateInput, ParametreUncheckedCreateInput>
    /**
     * In case the Parametre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParametreUpdateInput, ParametreUncheckedUpdateInput>
  }

  /**
   * Parametre delete
   */
  export type ParametreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametre
     */
    select?: ParametreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametre
     */
    omit?: ParametreOmit<ExtArgs> | null
    /**
     * Filter which Parametre to delete.
     */
    where: ParametreWhereUniqueInput
  }

  /**
   * Parametre deleteMany
   */
  export type ParametreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parametres to delete
     */
    where?: ParametreWhereInput
    /**
     * Limit how many Parametres to delete.
     */
    limit?: number
  }

  /**
   * Parametre without action
   */
  export type ParametreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametre
     */
    select?: ParametreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametre
     */
    omit?: ParametreOmit<ExtArgs> | null
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


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    nomComplet: 'nomComplet',
    email: 'email',
    motDePasse: 'motDePasse',
    role: 'role',
    estActif: 'estActif',
    etudiantId: 'etudiantId',
    creeLe: 'creeLe',
    modifieLe: 'modifieLe'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const EtablissementScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    sigle: 'sigle',
    province: 'province',
    ville: 'ville',
    type: 'type',
    estActif: 'estActif',
    creeLe: 'creeLe',
    modifieLe: 'modifieLe'
  };

  export type EtablissementScalarFieldEnum = (typeof EtablissementScalarFieldEnum)[keyof typeof EtablissementScalarFieldEnum]


  export const EtudiantScalarFieldEnum: {
    id: 'id',
    matricule: 'matricule',
    nom: 'nom',
    postnom: 'postnom',
    prenom: 'prenom',
    sexe: 'sexe',
    dateNaissance: 'dateNaissance',
    telephone: 'telephone',
    email: 'email',
    adresse: 'adresse',
    provinceOrigine: 'provinceOrigine',
    niveauEtude: 'niveauEtude',
    filiere: 'filiere',
    anneeAcademique: 'anneeAcademique',
    estActif: 'estActif',
    etablissementId: 'etablissementId',
    creeLe: 'creeLe',
    modifieLe: 'modifieLe'
  };

  export type EtudiantScalarFieldEnum = (typeof EtudiantScalarFieldEnum)[keyof typeof EtudiantScalarFieldEnum]


  export const ProgrammeBourseScalarFieldEnum: {
    id: 'id',
    code: 'code',
    nom: 'nom',
    description: 'description',
    organismeFinanceur: 'organismeFinanceur',
    montantMaximum: 'montantMaximum',
    devise: 'devise',
    niveauCible: 'niveauCible',
    domaineCible: 'domaineCible',
    estActif: 'estActif',
    creeLe: 'creeLe',
    modifieLe: 'modifieLe'
  };

  export type ProgrammeBourseScalarFieldEnum = (typeof ProgrammeBourseScalarFieldEnum)[keyof typeof ProgrammeBourseScalarFieldEnum]


  export const AppelCandidatureScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    titre: 'titre',
    description: 'description',
    dateOuverture: 'dateOuverture',
    dateCloture: 'dateCloture',
    nombrePlaces: 'nombrePlaces',
    criteresEligibilite: 'criteresEligibilite',
    estPublie: 'estPublie',
    programmeId: 'programmeId',
    creeLe: 'creeLe',
    modifieLe: 'modifieLe'
  };

  export type AppelCandidatureScalarFieldEnum = (typeof AppelCandidatureScalarFieldEnum)[keyof typeof AppelCandidatureScalarFieldEnum]


  export const CandidatureScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    dateSoumission: 'dateSoumission',
    motivation: 'motivation',
    statut: 'statut',
    scoreFinal: 'scoreFinal',
    commentaire: 'commentaire',
    etudiantId: 'etudiantId',
    appelId: 'appelId',
    creeLe: 'creeLe',
    modifieLe: 'modifieLe'
  };

  export type CandidatureScalarFieldEnum = (typeof CandidatureScalarFieldEnum)[keyof typeof CandidatureScalarFieldEnum]


  export const DocumentCandidatureScalarFieldEnum: {
    id: 'id',
    type: 'type',
    nomFichier: 'nomFichier',
    cheminFichier: 'cheminFichier',
    estValide: 'estValide',
    commentaire: 'commentaire',
    candidatureId: 'candidatureId',
    creeLe: 'creeLe'
  };

  export type DocumentCandidatureScalarFieldEnum = (typeof DocumentCandidatureScalarFieldEnum)[keyof typeof DocumentCandidatureScalarFieldEnum]


  export const EvaluationScalarFieldEnum: {
    id: 'id',
    note: 'note',
    decision: 'decision',
    commentaire: 'commentaire',
    candidatureId: 'candidatureId',
    evaluateurId: 'evaluateurId',
    creeLe: 'creeLe'
  };

  export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum]


  export const AttributionBourseScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    montantAccorde: 'montantAccorde',
    devise: 'devise',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    statut: 'statut',
    candidatureId: 'candidatureId',
    etudiantId: 'etudiantId',
    creeLe: 'creeLe',
    modifieLe: 'modifieLe'
  };

  export type AttributionBourseScalarFieldEnum = (typeof AttributionBourseScalarFieldEnum)[keyof typeof AttributionBourseScalarFieldEnum]


  export const PaiementScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    periode: 'periode',
    montant: 'montant',
    devise: 'devise',
    datePrevue: 'datePrevue',
    datePaiement: 'datePaiement',
    statut: 'statut',
    modePaiement: 'modePaiement',
    preuveUrl: 'preuveUrl',
    attributionId: 'attributionId',
    creeLe: 'creeLe'
  };

  export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum]


  export const RenouvellementScalarFieldEnum: {
    id: 'id',
    anneeAcademique: 'anneeAcademique',
    decision: 'decision',
    commentaire: 'commentaire',
    dateDecision: 'dateDecision',
    attributionId: 'attributionId',
    creeLe: 'creeLe'
  };

  export type RenouvellementScalarFieldEnum = (typeof RenouvellementScalarFieldEnum)[keyof typeof RenouvellementScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    message: 'message',
    estLue: 'estLue',
    utilisateurId: 'utilisateurId',
    creeLe: 'creeLe'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ParametreScalarFieldEnum: {
    id: 'id',
    cle: 'cle',
    valeur: 'valeur',
    creeLe: 'creeLe',
    modifieLe: 'modifieLe'
  };

  export type ParametreScalarFieldEnum = (typeof ParametreScalarFieldEnum)[keyof typeof ParametreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UtilisateurOrderByRelevanceFieldEnum: {
    id: 'id',
    nomComplet: 'nomComplet',
    email: 'email',
    motDePasse: 'motDePasse',
    etudiantId: 'etudiantId'
  };

  export type UtilisateurOrderByRelevanceFieldEnum = (typeof UtilisateurOrderByRelevanceFieldEnum)[keyof typeof UtilisateurOrderByRelevanceFieldEnum]


  export const EtablissementOrderByRelevanceFieldEnum: {
    id: 'id',
    nom: 'nom',
    sigle: 'sigle',
    province: 'province',
    ville: 'ville',
    type: 'type'
  };

  export type EtablissementOrderByRelevanceFieldEnum = (typeof EtablissementOrderByRelevanceFieldEnum)[keyof typeof EtablissementOrderByRelevanceFieldEnum]


  export const EtudiantOrderByRelevanceFieldEnum: {
    id: 'id',
    matricule: 'matricule',
    nom: 'nom',
    postnom: 'postnom',
    prenom: 'prenom',
    sexe: 'sexe',
    telephone: 'telephone',
    email: 'email',
    adresse: 'adresse',
    provinceOrigine: 'provinceOrigine',
    niveauEtude: 'niveauEtude',
    filiere: 'filiere',
    anneeAcademique: 'anneeAcademique',
    etablissementId: 'etablissementId'
  };

  export type EtudiantOrderByRelevanceFieldEnum = (typeof EtudiantOrderByRelevanceFieldEnum)[keyof typeof EtudiantOrderByRelevanceFieldEnum]


  export const ProgrammeBourseOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    nom: 'nom',
    description: 'description',
    organismeFinanceur: 'organismeFinanceur',
    devise: 'devise',
    niveauCible: 'niveauCible',
    domaineCible: 'domaineCible'
  };

  export type ProgrammeBourseOrderByRelevanceFieldEnum = (typeof ProgrammeBourseOrderByRelevanceFieldEnum)[keyof typeof ProgrammeBourseOrderByRelevanceFieldEnum]


  export const AppelCandidatureOrderByRelevanceFieldEnum: {
    id: 'id',
    reference: 'reference',
    titre: 'titre',
    description: 'description',
    criteresEligibilite: 'criteresEligibilite',
    programmeId: 'programmeId'
  };

  export type AppelCandidatureOrderByRelevanceFieldEnum = (typeof AppelCandidatureOrderByRelevanceFieldEnum)[keyof typeof AppelCandidatureOrderByRelevanceFieldEnum]


  export const CandidatureOrderByRelevanceFieldEnum: {
    id: 'id',
    reference: 'reference',
    motivation: 'motivation',
    commentaire: 'commentaire',
    etudiantId: 'etudiantId',
    appelId: 'appelId'
  };

  export type CandidatureOrderByRelevanceFieldEnum = (typeof CandidatureOrderByRelevanceFieldEnum)[keyof typeof CandidatureOrderByRelevanceFieldEnum]


  export const DocumentCandidatureOrderByRelevanceFieldEnum: {
    id: 'id',
    nomFichier: 'nomFichier',
    cheminFichier: 'cheminFichier',
    commentaire: 'commentaire',
    candidatureId: 'candidatureId'
  };

  export type DocumentCandidatureOrderByRelevanceFieldEnum = (typeof DocumentCandidatureOrderByRelevanceFieldEnum)[keyof typeof DocumentCandidatureOrderByRelevanceFieldEnum]


  export const EvaluationOrderByRelevanceFieldEnum: {
    id: 'id',
    commentaire: 'commentaire',
    candidatureId: 'candidatureId',
    evaluateurId: 'evaluateurId'
  };

  export type EvaluationOrderByRelevanceFieldEnum = (typeof EvaluationOrderByRelevanceFieldEnum)[keyof typeof EvaluationOrderByRelevanceFieldEnum]


  export const AttributionBourseOrderByRelevanceFieldEnum: {
    id: 'id',
    reference: 'reference',
    devise: 'devise',
    candidatureId: 'candidatureId',
    etudiantId: 'etudiantId'
  };

  export type AttributionBourseOrderByRelevanceFieldEnum = (typeof AttributionBourseOrderByRelevanceFieldEnum)[keyof typeof AttributionBourseOrderByRelevanceFieldEnum]


  export const PaiementOrderByRelevanceFieldEnum: {
    id: 'id',
    reference: 'reference',
    periode: 'periode',
    devise: 'devise',
    modePaiement: 'modePaiement',
    preuveUrl: 'preuveUrl',
    attributionId: 'attributionId'
  };

  export type PaiementOrderByRelevanceFieldEnum = (typeof PaiementOrderByRelevanceFieldEnum)[keyof typeof PaiementOrderByRelevanceFieldEnum]


  export const RenouvellementOrderByRelevanceFieldEnum: {
    id: 'id',
    anneeAcademique: 'anneeAcademique',
    decision: 'decision',
    commentaire: 'commentaire',
    attributionId: 'attributionId'
  };

  export type RenouvellementOrderByRelevanceFieldEnum = (typeof RenouvellementOrderByRelevanceFieldEnum)[keyof typeof RenouvellementOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    titre: 'titre',
    message: 'message',
    utilisateurId: 'utilisateurId'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const ParametreOrderByRelevanceFieldEnum: {
    id: 'id',
    cle: 'cle',
    valeur: 'valeur'
  };

  export type ParametreOrderByRelevanceFieldEnum = (typeof ParametreOrderByRelevanceFieldEnum)[keyof typeof ParametreOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'RoleUtilisateur'
   */
  export type EnumRoleUtilisateurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleUtilisateur'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'StatutCandidature'
   */
  export type EnumStatutCandidatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutCandidature'>
    


  /**
   * Reference to a field of type 'TypeDocument'
   */
  export type EnumTypeDocumentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeDocument'>
    


  /**
   * Reference to a field of type 'DecisionEvaluation'
   */
  export type EnumDecisionEvaluationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DecisionEvaluation'>
    


  /**
   * Reference to a field of type 'StatutAttribution'
   */
  export type EnumStatutAttributionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAttribution'>
    


  /**
   * Reference to a field of type 'StatutPaiement'
   */
  export type EnumStatutPaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPaiement'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: StringFilter<"Utilisateur"> | string
    nomComplet?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    motDePasse?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleUtilisateurFilter<"Utilisateur"> | $Enums.RoleUtilisateur
    estActif?: BoolFilter<"Utilisateur"> | boolean
    etudiantId?: StringNullableFilter<"Utilisateur"> | string | null
    creeLe?: DateTimeFilter<"Utilisateur"> | Date | string
    modifieLe?: DateTimeFilter<"Utilisateur"> | Date | string
    etudiant?: XOR<EtudiantNullableScalarRelationFilter, EtudiantWhereInput> | null
    evaluations?: EvaluationListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    nomComplet?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    estActif?: SortOrder
    etudiantId?: SortOrderInput | SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    etudiant?: EtudiantOrderByWithRelationInput
    evaluations?: EvaluationOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: UtilisateurOrderByRelevanceInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    etudiantId?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    nomComplet?: StringFilter<"Utilisateur"> | string
    motDePasse?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleUtilisateurFilter<"Utilisateur"> | $Enums.RoleUtilisateur
    estActif?: BoolFilter<"Utilisateur"> | boolean
    creeLe?: DateTimeFilter<"Utilisateur"> | Date | string
    modifieLe?: DateTimeFilter<"Utilisateur"> | Date | string
    etudiant?: XOR<EtudiantNullableScalarRelationFilter, EtudiantWhereInput> | null
    evaluations?: EvaluationListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email" | "etudiantId">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    nomComplet?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    estActif?: SortOrder
    etudiantId?: SortOrderInput | SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Utilisateur"> | string
    nomComplet?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    motDePasse?: StringWithAggregatesFilter<"Utilisateur"> | string
    role?: EnumRoleUtilisateurWithAggregatesFilter<"Utilisateur"> | $Enums.RoleUtilisateur
    estActif?: BoolWithAggregatesFilter<"Utilisateur"> | boolean
    etudiantId?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    creeLe?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    modifieLe?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type EtablissementWhereInput = {
    AND?: EtablissementWhereInput | EtablissementWhereInput[]
    OR?: EtablissementWhereInput[]
    NOT?: EtablissementWhereInput | EtablissementWhereInput[]
    id?: StringFilter<"Etablissement"> | string
    nom?: StringFilter<"Etablissement"> | string
    sigle?: StringNullableFilter<"Etablissement"> | string | null
    province?: StringNullableFilter<"Etablissement"> | string | null
    ville?: StringNullableFilter<"Etablissement"> | string | null
    type?: StringNullableFilter<"Etablissement"> | string | null
    estActif?: BoolFilter<"Etablissement"> | boolean
    creeLe?: DateTimeFilter<"Etablissement"> | Date | string
    modifieLe?: DateTimeFilter<"Etablissement"> | Date | string
    etudiants?: EtudiantListRelationFilter
  }

  export type EtablissementOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    sigle?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    ville?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    etudiants?: EtudiantOrderByRelationAggregateInput
    _relevance?: EtablissementOrderByRelevanceInput
  }

  export type EtablissementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EtablissementWhereInput | EtablissementWhereInput[]
    OR?: EtablissementWhereInput[]
    NOT?: EtablissementWhereInput | EtablissementWhereInput[]
    nom?: StringFilter<"Etablissement"> | string
    sigle?: StringNullableFilter<"Etablissement"> | string | null
    province?: StringNullableFilter<"Etablissement"> | string | null
    ville?: StringNullableFilter<"Etablissement"> | string | null
    type?: StringNullableFilter<"Etablissement"> | string | null
    estActif?: BoolFilter<"Etablissement"> | boolean
    creeLe?: DateTimeFilter<"Etablissement"> | Date | string
    modifieLe?: DateTimeFilter<"Etablissement"> | Date | string
    etudiants?: EtudiantListRelationFilter
  }, "id">

  export type EtablissementOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    sigle?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    ville?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    _count?: EtablissementCountOrderByAggregateInput
    _max?: EtablissementMaxOrderByAggregateInput
    _min?: EtablissementMinOrderByAggregateInput
  }

  export type EtablissementScalarWhereWithAggregatesInput = {
    AND?: EtablissementScalarWhereWithAggregatesInput | EtablissementScalarWhereWithAggregatesInput[]
    OR?: EtablissementScalarWhereWithAggregatesInput[]
    NOT?: EtablissementScalarWhereWithAggregatesInput | EtablissementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Etablissement"> | string
    nom?: StringWithAggregatesFilter<"Etablissement"> | string
    sigle?: StringNullableWithAggregatesFilter<"Etablissement"> | string | null
    province?: StringNullableWithAggregatesFilter<"Etablissement"> | string | null
    ville?: StringNullableWithAggregatesFilter<"Etablissement"> | string | null
    type?: StringNullableWithAggregatesFilter<"Etablissement"> | string | null
    estActif?: BoolWithAggregatesFilter<"Etablissement"> | boolean
    creeLe?: DateTimeWithAggregatesFilter<"Etablissement"> | Date | string
    modifieLe?: DateTimeWithAggregatesFilter<"Etablissement"> | Date | string
  }

  export type EtudiantWhereInput = {
    AND?: EtudiantWhereInput | EtudiantWhereInput[]
    OR?: EtudiantWhereInput[]
    NOT?: EtudiantWhereInput | EtudiantWhereInput[]
    id?: StringFilter<"Etudiant"> | string
    matricule?: StringFilter<"Etudiant"> | string
    nom?: StringFilter<"Etudiant"> | string
    postnom?: StringNullableFilter<"Etudiant"> | string | null
    prenom?: StringFilter<"Etudiant"> | string
    sexe?: StringNullableFilter<"Etudiant"> | string | null
    dateNaissance?: DateTimeNullableFilter<"Etudiant"> | Date | string | null
    telephone?: StringNullableFilter<"Etudiant"> | string | null
    email?: StringNullableFilter<"Etudiant"> | string | null
    adresse?: StringNullableFilter<"Etudiant"> | string | null
    provinceOrigine?: StringNullableFilter<"Etudiant"> | string | null
    niveauEtude?: StringNullableFilter<"Etudiant"> | string | null
    filiere?: StringNullableFilter<"Etudiant"> | string | null
    anneeAcademique?: StringNullableFilter<"Etudiant"> | string | null
    estActif?: BoolFilter<"Etudiant"> | boolean
    etablissementId?: StringFilter<"Etudiant"> | string
    creeLe?: DateTimeFilter<"Etudiant"> | Date | string
    modifieLe?: DateTimeFilter<"Etudiant"> | Date | string
    etablissement?: XOR<EtablissementScalarRelationFilter, EtablissementWhereInput>
    utilisateur?: XOR<UtilisateurNullableScalarRelationFilter, UtilisateurWhereInput> | null
    candidatures?: CandidatureListRelationFilter
    attributions?: AttributionBourseListRelationFilter
  }

  export type EtudiantOrderByWithRelationInput = {
    id?: SortOrder
    matricule?: SortOrder
    nom?: SortOrder
    postnom?: SortOrderInput | SortOrder
    prenom?: SortOrder
    sexe?: SortOrderInput | SortOrder
    dateNaissance?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    provinceOrigine?: SortOrderInput | SortOrder
    niveauEtude?: SortOrderInput | SortOrder
    filiere?: SortOrderInput | SortOrder
    anneeAcademique?: SortOrderInput | SortOrder
    estActif?: SortOrder
    etablissementId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    etablissement?: EtablissementOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
    candidatures?: CandidatureOrderByRelationAggregateInput
    attributions?: AttributionBourseOrderByRelationAggregateInput
    _relevance?: EtudiantOrderByRelevanceInput
  }

  export type EtudiantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matricule?: string
    AND?: EtudiantWhereInput | EtudiantWhereInput[]
    OR?: EtudiantWhereInput[]
    NOT?: EtudiantWhereInput | EtudiantWhereInput[]
    nom?: StringFilter<"Etudiant"> | string
    postnom?: StringNullableFilter<"Etudiant"> | string | null
    prenom?: StringFilter<"Etudiant"> | string
    sexe?: StringNullableFilter<"Etudiant"> | string | null
    dateNaissance?: DateTimeNullableFilter<"Etudiant"> | Date | string | null
    telephone?: StringNullableFilter<"Etudiant"> | string | null
    email?: StringNullableFilter<"Etudiant"> | string | null
    adresse?: StringNullableFilter<"Etudiant"> | string | null
    provinceOrigine?: StringNullableFilter<"Etudiant"> | string | null
    niveauEtude?: StringNullableFilter<"Etudiant"> | string | null
    filiere?: StringNullableFilter<"Etudiant"> | string | null
    anneeAcademique?: StringNullableFilter<"Etudiant"> | string | null
    estActif?: BoolFilter<"Etudiant"> | boolean
    etablissementId?: StringFilter<"Etudiant"> | string
    creeLe?: DateTimeFilter<"Etudiant"> | Date | string
    modifieLe?: DateTimeFilter<"Etudiant"> | Date | string
    etablissement?: XOR<EtablissementScalarRelationFilter, EtablissementWhereInput>
    utilisateur?: XOR<UtilisateurNullableScalarRelationFilter, UtilisateurWhereInput> | null
    candidatures?: CandidatureListRelationFilter
    attributions?: AttributionBourseListRelationFilter
  }, "id" | "matricule">

  export type EtudiantOrderByWithAggregationInput = {
    id?: SortOrder
    matricule?: SortOrder
    nom?: SortOrder
    postnom?: SortOrderInput | SortOrder
    prenom?: SortOrder
    sexe?: SortOrderInput | SortOrder
    dateNaissance?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    provinceOrigine?: SortOrderInput | SortOrder
    niveauEtude?: SortOrderInput | SortOrder
    filiere?: SortOrderInput | SortOrder
    anneeAcademique?: SortOrderInput | SortOrder
    estActif?: SortOrder
    etablissementId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    _count?: EtudiantCountOrderByAggregateInput
    _max?: EtudiantMaxOrderByAggregateInput
    _min?: EtudiantMinOrderByAggregateInput
  }

  export type EtudiantScalarWhereWithAggregatesInput = {
    AND?: EtudiantScalarWhereWithAggregatesInput | EtudiantScalarWhereWithAggregatesInput[]
    OR?: EtudiantScalarWhereWithAggregatesInput[]
    NOT?: EtudiantScalarWhereWithAggregatesInput | EtudiantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Etudiant"> | string
    matricule?: StringWithAggregatesFilter<"Etudiant"> | string
    nom?: StringWithAggregatesFilter<"Etudiant"> | string
    postnom?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    prenom?: StringWithAggregatesFilter<"Etudiant"> | string
    sexe?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    dateNaissance?: DateTimeNullableWithAggregatesFilter<"Etudiant"> | Date | string | null
    telephone?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    email?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    adresse?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    provinceOrigine?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    niveauEtude?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    filiere?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    anneeAcademique?: StringNullableWithAggregatesFilter<"Etudiant"> | string | null
    estActif?: BoolWithAggregatesFilter<"Etudiant"> | boolean
    etablissementId?: StringWithAggregatesFilter<"Etudiant"> | string
    creeLe?: DateTimeWithAggregatesFilter<"Etudiant"> | Date | string
    modifieLe?: DateTimeWithAggregatesFilter<"Etudiant"> | Date | string
  }

  export type ProgrammeBourseWhereInput = {
    AND?: ProgrammeBourseWhereInput | ProgrammeBourseWhereInput[]
    OR?: ProgrammeBourseWhereInput[]
    NOT?: ProgrammeBourseWhereInput | ProgrammeBourseWhereInput[]
    id?: StringFilter<"ProgrammeBourse"> | string
    code?: StringFilter<"ProgrammeBourse"> | string
    nom?: StringFilter<"ProgrammeBourse"> | string
    description?: StringNullableFilter<"ProgrammeBourse"> | string | null
    organismeFinanceur?: StringNullableFilter<"ProgrammeBourse"> | string | null
    montantMaximum?: DecimalNullableFilter<"ProgrammeBourse"> | Decimal | DecimalJsLike | number | string | null
    devise?: StringFilter<"ProgrammeBourse"> | string
    niveauCible?: StringNullableFilter<"ProgrammeBourse"> | string | null
    domaineCible?: StringNullableFilter<"ProgrammeBourse"> | string | null
    estActif?: BoolFilter<"ProgrammeBourse"> | boolean
    creeLe?: DateTimeFilter<"ProgrammeBourse"> | Date | string
    modifieLe?: DateTimeFilter<"ProgrammeBourse"> | Date | string
    appels?: AppelCandidatureListRelationFilter
  }

  export type ProgrammeBourseOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    organismeFinanceur?: SortOrderInput | SortOrder
    montantMaximum?: SortOrderInput | SortOrder
    devise?: SortOrder
    niveauCible?: SortOrderInput | SortOrder
    domaineCible?: SortOrderInput | SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    appels?: AppelCandidatureOrderByRelationAggregateInput
    _relevance?: ProgrammeBourseOrderByRelevanceInput
  }

  export type ProgrammeBourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProgrammeBourseWhereInput | ProgrammeBourseWhereInput[]
    OR?: ProgrammeBourseWhereInput[]
    NOT?: ProgrammeBourseWhereInput | ProgrammeBourseWhereInput[]
    nom?: StringFilter<"ProgrammeBourse"> | string
    description?: StringNullableFilter<"ProgrammeBourse"> | string | null
    organismeFinanceur?: StringNullableFilter<"ProgrammeBourse"> | string | null
    montantMaximum?: DecimalNullableFilter<"ProgrammeBourse"> | Decimal | DecimalJsLike | number | string | null
    devise?: StringFilter<"ProgrammeBourse"> | string
    niveauCible?: StringNullableFilter<"ProgrammeBourse"> | string | null
    domaineCible?: StringNullableFilter<"ProgrammeBourse"> | string | null
    estActif?: BoolFilter<"ProgrammeBourse"> | boolean
    creeLe?: DateTimeFilter<"ProgrammeBourse"> | Date | string
    modifieLe?: DateTimeFilter<"ProgrammeBourse"> | Date | string
    appels?: AppelCandidatureListRelationFilter
  }, "id" | "code">

  export type ProgrammeBourseOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    organismeFinanceur?: SortOrderInput | SortOrder
    montantMaximum?: SortOrderInput | SortOrder
    devise?: SortOrder
    niveauCible?: SortOrderInput | SortOrder
    domaineCible?: SortOrderInput | SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    _count?: ProgrammeBourseCountOrderByAggregateInput
    _avg?: ProgrammeBourseAvgOrderByAggregateInput
    _max?: ProgrammeBourseMaxOrderByAggregateInput
    _min?: ProgrammeBourseMinOrderByAggregateInput
    _sum?: ProgrammeBourseSumOrderByAggregateInput
  }

  export type ProgrammeBourseScalarWhereWithAggregatesInput = {
    AND?: ProgrammeBourseScalarWhereWithAggregatesInput | ProgrammeBourseScalarWhereWithAggregatesInput[]
    OR?: ProgrammeBourseScalarWhereWithAggregatesInput[]
    NOT?: ProgrammeBourseScalarWhereWithAggregatesInput | ProgrammeBourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgrammeBourse"> | string
    code?: StringWithAggregatesFilter<"ProgrammeBourse"> | string
    nom?: StringWithAggregatesFilter<"ProgrammeBourse"> | string
    description?: StringNullableWithAggregatesFilter<"ProgrammeBourse"> | string | null
    organismeFinanceur?: StringNullableWithAggregatesFilter<"ProgrammeBourse"> | string | null
    montantMaximum?: DecimalNullableWithAggregatesFilter<"ProgrammeBourse"> | Decimal | DecimalJsLike | number | string | null
    devise?: StringWithAggregatesFilter<"ProgrammeBourse"> | string
    niveauCible?: StringNullableWithAggregatesFilter<"ProgrammeBourse"> | string | null
    domaineCible?: StringNullableWithAggregatesFilter<"ProgrammeBourse"> | string | null
    estActif?: BoolWithAggregatesFilter<"ProgrammeBourse"> | boolean
    creeLe?: DateTimeWithAggregatesFilter<"ProgrammeBourse"> | Date | string
    modifieLe?: DateTimeWithAggregatesFilter<"ProgrammeBourse"> | Date | string
  }

  export type AppelCandidatureWhereInput = {
    AND?: AppelCandidatureWhereInput | AppelCandidatureWhereInput[]
    OR?: AppelCandidatureWhereInput[]
    NOT?: AppelCandidatureWhereInput | AppelCandidatureWhereInput[]
    id?: StringFilter<"AppelCandidature"> | string
    reference?: StringFilter<"AppelCandidature"> | string
    titre?: StringFilter<"AppelCandidature"> | string
    description?: StringNullableFilter<"AppelCandidature"> | string | null
    dateOuverture?: DateTimeFilter<"AppelCandidature"> | Date | string
    dateCloture?: DateTimeFilter<"AppelCandidature"> | Date | string
    nombrePlaces?: IntNullableFilter<"AppelCandidature"> | number | null
    criteresEligibilite?: StringNullableFilter<"AppelCandidature"> | string | null
    estPublie?: BoolFilter<"AppelCandidature"> | boolean
    programmeId?: StringFilter<"AppelCandidature"> | string
    creeLe?: DateTimeFilter<"AppelCandidature"> | Date | string
    modifieLe?: DateTimeFilter<"AppelCandidature"> | Date | string
    programme?: XOR<ProgrammeBourseScalarRelationFilter, ProgrammeBourseWhereInput>
    candidatures?: CandidatureListRelationFilter
  }

  export type AppelCandidatureOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    dateOuverture?: SortOrder
    dateCloture?: SortOrder
    nombrePlaces?: SortOrderInput | SortOrder
    criteresEligibilite?: SortOrderInput | SortOrder
    estPublie?: SortOrder
    programmeId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    programme?: ProgrammeBourseOrderByWithRelationInput
    candidatures?: CandidatureOrderByRelationAggregateInput
    _relevance?: AppelCandidatureOrderByRelevanceInput
  }

  export type AppelCandidatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: AppelCandidatureWhereInput | AppelCandidatureWhereInput[]
    OR?: AppelCandidatureWhereInput[]
    NOT?: AppelCandidatureWhereInput | AppelCandidatureWhereInput[]
    titre?: StringFilter<"AppelCandidature"> | string
    description?: StringNullableFilter<"AppelCandidature"> | string | null
    dateOuverture?: DateTimeFilter<"AppelCandidature"> | Date | string
    dateCloture?: DateTimeFilter<"AppelCandidature"> | Date | string
    nombrePlaces?: IntNullableFilter<"AppelCandidature"> | number | null
    criteresEligibilite?: StringNullableFilter<"AppelCandidature"> | string | null
    estPublie?: BoolFilter<"AppelCandidature"> | boolean
    programmeId?: StringFilter<"AppelCandidature"> | string
    creeLe?: DateTimeFilter<"AppelCandidature"> | Date | string
    modifieLe?: DateTimeFilter<"AppelCandidature"> | Date | string
    programme?: XOR<ProgrammeBourseScalarRelationFilter, ProgrammeBourseWhereInput>
    candidatures?: CandidatureListRelationFilter
  }, "id" | "reference">

  export type AppelCandidatureOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    dateOuverture?: SortOrder
    dateCloture?: SortOrder
    nombrePlaces?: SortOrderInput | SortOrder
    criteresEligibilite?: SortOrderInput | SortOrder
    estPublie?: SortOrder
    programmeId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    _count?: AppelCandidatureCountOrderByAggregateInput
    _avg?: AppelCandidatureAvgOrderByAggregateInput
    _max?: AppelCandidatureMaxOrderByAggregateInput
    _min?: AppelCandidatureMinOrderByAggregateInput
    _sum?: AppelCandidatureSumOrderByAggregateInput
  }

  export type AppelCandidatureScalarWhereWithAggregatesInput = {
    AND?: AppelCandidatureScalarWhereWithAggregatesInput | AppelCandidatureScalarWhereWithAggregatesInput[]
    OR?: AppelCandidatureScalarWhereWithAggregatesInput[]
    NOT?: AppelCandidatureScalarWhereWithAggregatesInput | AppelCandidatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppelCandidature"> | string
    reference?: StringWithAggregatesFilter<"AppelCandidature"> | string
    titre?: StringWithAggregatesFilter<"AppelCandidature"> | string
    description?: StringNullableWithAggregatesFilter<"AppelCandidature"> | string | null
    dateOuverture?: DateTimeWithAggregatesFilter<"AppelCandidature"> | Date | string
    dateCloture?: DateTimeWithAggregatesFilter<"AppelCandidature"> | Date | string
    nombrePlaces?: IntNullableWithAggregatesFilter<"AppelCandidature"> | number | null
    criteresEligibilite?: StringNullableWithAggregatesFilter<"AppelCandidature"> | string | null
    estPublie?: BoolWithAggregatesFilter<"AppelCandidature"> | boolean
    programmeId?: StringWithAggregatesFilter<"AppelCandidature"> | string
    creeLe?: DateTimeWithAggregatesFilter<"AppelCandidature"> | Date | string
    modifieLe?: DateTimeWithAggregatesFilter<"AppelCandidature"> | Date | string
  }

  export type CandidatureWhereInput = {
    AND?: CandidatureWhereInput | CandidatureWhereInput[]
    OR?: CandidatureWhereInput[]
    NOT?: CandidatureWhereInput | CandidatureWhereInput[]
    id?: StringFilter<"Candidature"> | string
    reference?: StringFilter<"Candidature"> | string
    dateSoumission?: DateTimeNullableFilter<"Candidature"> | Date | string | null
    motivation?: StringNullableFilter<"Candidature"> | string | null
    statut?: EnumStatutCandidatureFilter<"Candidature"> | $Enums.StatutCandidature
    scoreFinal?: DecimalNullableFilter<"Candidature"> | Decimal | DecimalJsLike | number | string | null
    commentaire?: StringNullableFilter<"Candidature"> | string | null
    etudiantId?: StringFilter<"Candidature"> | string
    appelId?: StringFilter<"Candidature"> | string
    creeLe?: DateTimeFilter<"Candidature"> | Date | string
    modifieLe?: DateTimeFilter<"Candidature"> | Date | string
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    appel?: XOR<AppelCandidatureScalarRelationFilter, AppelCandidatureWhereInput>
    documents?: DocumentCandidatureListRelationFilter
    evaluations?: EvaluationListRelationFilter
    attribution?: XOR<AttributionBourseNullableScalarRelationFilter, AttributionBourseWhereInput> | null
  }

  export type CandidatureOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    dateSoumission?: SortOrderInput | SortOrder
    motivation?: SortOrderInput | SortOrder
    statut?: SortOrder
    scoreFinal?: SortOrderInput | SortOrder
    commentaire?: SortOrderInput | SortOrder
    etudiantId?: SortOrder
    appelId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    etudiant?: EtudiantOrderByWithRelationInput
    appel?: AppelCandidatureOrderByWithRelationInput
    documents?: DocumentCandidatureOrderByRelationAggregateInput
    evaluations?: EvaluationOrderByRelationAggregateInput
    attribution?: AttributionBourseOrderByWithRelationInput
    _relevance?: CandidatureOrderByRelevanceInput
  }

  export type CandidatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    etudiantId_appelId?: CandidatureEtudiantIdAppelIdCompoundUniqueInput
    AND?: CandidatureWhereInput | CandidatureWhereInput[]
    OR?: CandidatureWhereInput[]
    NOT?: CandidatureWhereInput | CandidatureWhereInput[]
    dateSoumission?: DateTimeNullableFilter<"Candidature"> | Date | string | null
    motivation?: StringNullableFilter<"Candidature"> | string | null
    statut?: EnumStatutCandidatureFilter<"Candidature"> | $Enums.StatutCandidature
    scoreFinal?: DecimalNullableFilter<"Candidature"> | Decimal | DecimalJsLike | number | string | null
    commentaire?: StringNullableFilter<"Candidature"> | string | null
    etudiantId?: StringFilter<"Candidature"> | string
    appelId?: StringFilter<"Candidature"> | string
    creeLe?: DateTimeFilter<"Candidature"> | Date | string
    modifieLe?: DateTimeFilter<"Candidature"> | Date | string
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    appel?: XOR<AppelCandidatureScalarRelationFilter, AppelCandidatureWhereInput>
    documents?: DocumentCandidatureListRelationFilter
    evaluations?: EvaluationListRelationFilter
    attribution?: XOR<AttributionBourseNullableScalarRelationFilter, AttributionBourseWhereInput> | null
  }, "id" | "reference" | "etudiantId_appelId">

  export type CandidatureOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    dateSoumission?: SortOrderInput | SortOrder
    motivation?: SortOrderInput | SortOrder
    statut?: SortOrder
    scoreFinal?: SortOrderInput | SortOrder
    commentaire?: SortOrderInput | SortOrder
    etudiantId?: SortOrder
    appelId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    _count?: CandidatureCountOrderByAggregateInput
    _avg?: CandidatureAvgOrderByAggregateInput
    _max?: CandidatureMaxOrderByAggregateInput
    _min?: CandidatureMinOrderByAggregateInput
    _sum?: CandidatureSumOrderByAggregateInput
  }

  export type CandidatureScalarWhereWithAggregatesInput = {
    AND?: CandidatureScalarWhereWithAggregatesInput | CandidatureScalarWhereWithAggregatesInput[]
    OR?: CandidatureScalarWhereWithAggregatesInput[]
    NOT?: CandidatureScalarWhereWithAggregatesInput | CandidatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Candidature"> | string
    reference?: StringWithAggregatesFilter<"Candidature"> | string
    dateSoumission?: DateTimeNullableWithAggregatesFilter<"Candidature"> | Date | string | null
    motivation?: StringNullableWithAggregatesFilter<"Candidature"> | string | null
    statut?: EnumStatutCandidatureWithAggregatesFilter<"Candidature"> | $Enums.StatutCandidature
    scoreFinal?: DecimalNullableWithAggregatesFilter<"Candidature"> | Decimal | DecimalJsLike | number | string | null
    commentaire?: StringNullableWithAggregatesFilter<"Candidature"> | string | null
    etudiantId?: StringWithAggregatesFilter<"Candidature"> | string
    appelId?: StringWithAggregatesFilter<"Candidature"> | string
    creeLe?: DateTimeWithAggregatesFilter<"Candidature"> | Date | string
    modifieLe?: DateTimeWithAggregatesFilter<"Candidature"> | Date | string
  }

  export type DocumentCandidatureWhereInput = {
    AND?: DocumentCandidatureWhereInput | DocumentCandidatureWhereInput[]
    OR?: DocumentCandidatureWhereInput[]
    NOT?: DocumentCandidatureWhereInput | DocumentCandidatureWhereInput[]
    id?: StringFilter<"DocumentCandidature"> | string
    type?: EnumTypeDocumentFilter<"DocumentCandidature"> | $Enums.TypeDocument
    nomFichier?: StringFilter<"DocumentCandidature"> | string
    cheminFichier?: StringFilter<"DocumentCandidature"> | string
    estValide?: BoolFilter<"DocumentCandidature"> | boolean
    commentaire?: StringNullableFilter<"DocumentCandidature"> | string | null
    candidatureId?: StringFilter<"DocumentCandidature"> | string
    creeLe?: DateTimeFilter<"DocumentCandidature"> | Date | string
    candidature?: XOR<CandidatureScalarRelationFilter, CandidatureWhereInput>
  }

  export type DocumentCandidatureOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    nomFichier?: SortOrder
    cheminFichier?: SortOrder
    estValide?: SortOrder
    commentaire?: SortOrderInput | SortOrder
    candidatureId?: SortOrder
    creeLe?: SortOrder
    candidature?: CandidatureOrderByWithRelationInput
    _relevance?: DocumentCandidatureOrderByRelevanceInput
  }

  export type DocumentCandidatureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentCandidatureWhereInput | DocumentCandidatureWhereInput[]
    OR?: DocumentCandidatureWhereInput[]
    NOT?: DocumentCandidatureWhereInput | DocumentCandidatureWhereInput[]
    type?: EnumTypeDocumentFilter<"DocumentCandidature"> | $Enums.TypeDocument
    nomFichier?: StringFilter<"DocumentCandidature"> | string
    cheminFichier?: StringFilter<"DocumentCandidature"> | string
    estValide?: BoolFilter<"DocumentCandidature"> | boolean
    commentaire?: StringNullableFilter<"DocumentCandidature"> | string | null
    candidatureId?: StringFilter<"DocumentCandidature"> | string
    creeLe?: DateTimeFilter<"DocumentCandidature"> | Date | string
    candidature?: XOR<CandidatureScalarRelationFilter, CandidatureWhereInput>
  }, "id">

  export type DocumentCandidatureOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    nomFichier?: SortOrder
    cheminFichier?: SortOrder
    estValide?: SortOrder
    commentaire?: SortOrderInput | SortOrder
    candidatureId?: SortOrder
    creeLe?: SortOrder
    _count?: DocumentCandidatureCountOrderByAggregateInput
    _max?: DocumentCandidatureMaxOrderByAggregateInput
    _min?: DocumentCandidatureMinOrderByAggregateInput
  }

  export type DocumentCandidatureScalarWhereWithAggregatesInput = {
    AND?: DocumentCandidatureScalarWhereWithAggregatesInput | DocumentCandidatureScalarWhereWithAggregatesInput[]
    OR?: DocumentCandidatureScalarWhereWithAggregatesInput[]
    NOT?: DocumentCandidatureScalarWhereWithAggregatesInput | DocumentCandidatureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentCandidature"> | string
    type?: EnumTypeDocumentWithAggregatesFilter<"DocumentCandidature"> | $Enums.TypeDocument
    nomFichier?: StringWithAggregatesFilter<"DocumentCandidature"> | string
    cheminFichier?: StringWithAggregatesFilter<"DocumentCandidature"> | string
    estValide?: BoolWithAggregatesFilter<"DocumentCandidature"> | boolean
    commentaire?: StringNullableWithAggregatesFilter<"DocumentCandidature"> | string | null
    candidatureId?: StringWithAggregatesFilter<"DocumentCandidature"> | string
    creeLe?: DateTimeWithAggregatesFilter<"DocumentCandidature"> | Date | string
  }

  export type EvaluationWhereInput = {
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    id?: StringFilter<"Evaluation"> | string
    note?: DecimalNullableFilter<"Evaluation"> | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFilter<"Evaluation"> | $Enums.DecisionEvaluation
    commentaire?: StringNullableFilter<"Evaluation"> | string | null
    candidatureId?: StringFilter<"Evaluation"> | string
    evaluateurId?: StringFilter<"Evaluation"> | string
    creeLe?: DateTimeFilter<"Evaluation"> | Date | string
    candidature?: XOR<CandidatureScalarRelationFilter, CandidatureWhereInput>
    evaluateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type EvaluationOrderByWithRelationInput = {
    id?: SortOrder
    note?: SortOrderInput | SortOrder
    decision?: SortOrder
    commentaire?: SortOrderInput | SortOrder
    candidatureId?: SortOrder
    evaluateurId?: SortOrder
    creeLe?: SortOrder
    candidature?: CandidatureOrderByWithRelationInput
    evaluateur?: UtilisateurOrderByWithRelationInput
    _relevance?: EvaluationOrderByRelevanceInput
  }

  export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    candidatureId_evaluateurId?: EvaluationCandidatureIdEvaluateurIdCompoundUniqueInput
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    note?: DecimalNullableFilter<"Evaluation"> | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFilter<"Evaluation"> | $Enums.DecisionEvaluation
    commentaire?: StringNullableFilter<"Evaluation"> | string | null
    candidatureId?: StringFilter<"Evaluation"> | string
    evaluateurId?: StringFilter<"Evaluation"> | string
    creeLe?: DateTimeFilter<"Evaluation"> | Date | string
    candidature?: XOR<CandidatureScalarRelationFilter, CandidatureWhereInput>
    evaluateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id" | "candidatureId_evaluateurId">

  export type EvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    note?: SortOrderInput | SortOrder
    decision?: SortOrder
    commentaire?: SortOrderInput | SortOrder
    candidatureId?: SortOrder
    evaluateurId?: SortOrder
    creeLe?: SortOrder
    _count?: EvaluationCountOrderByAggregateInput
    _avg?: EvaluationAvgOrderByAggregateInput
    _max?: EvaluationMaxOrderByAggregateInput
    _min?: EvaluationMinOrderByAggregateInput
    _sum?: EvaluationSumOrderByAggregateInput
  }

  export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    OR?: EvaluationScalarWhereWithAggregatesInput[]
    NOT?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Evaluation"> | string
    note?: DecimalNullableWithAggregatesFilter<"Evaluation"> | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationWithAggregatesFilter<"Evaluation"> | $Enums.DecisionEvaluation
    commentaire?: StringNullableWithAggregatesFilter<"Evaluation"> | string | null
    candidatureId?: StringWithAggregatesFilter<"Evaluation"> | string
    evaluateurId?: StringWithAggregatesFilter<"Evaluation"> | string
    creeLe?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
  }

  export type AttributionBourseWhereInput = {
    AND?: AttributionBourseWhereInput | AttributionBourseWhereInput[]
    OR?: AttributionBourseWhereInput[]
    NOT?: AttributionBourseWhereInput | AttributionBourseWhereInput[]
    id?: StringFilter<"AttributionBourse"> | string
    reference?: StringFilter<"AttributionBourse"> | string
    montantAccorde?: DecimalFilter<"AttributionBourse"> | Decimal | DecimalJsLike | number | string
    devise?: StringFilter<"AttributionBourse"> | string
    dateDebut?: DateTimeFilter<"AttributionBourse"> | Date | string
    dateFin?: DateTimeFilter<"AttributionBourse"> | Date | string
    statut?: EnumStatutAttributionFilter<"AttributionBourse"> | $Enums.StatutAttribution
    candidatureId?: StringFilter<"AttributionBourse"> | string
    etudiantId?: StringFilter<"AttributionBourse"> | string
    creeLe?: DateTimeFilter<"AttributionBourse"> | Date | string
    modifieLe?: DateTimeFilter<"AttributionBourse"> | Date | string
    candidature?: XOR<CandidatureScalarRelationFilter, CandidatureWhereInput>
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    paiements?: PaiementListRelationFilter
    renouvellements?: RenouvellementListRelationFilter
  }

  export type AttributionBourseOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    montantAccorde?: SortOrder
    devise?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
    candidatureId?: SortOrder
    etudiantId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    candidature?: CandidatureOrderByWithRelationInput
    etudiant?: EtudiantOrderByWithRelationInput
    paiements?: PaiementOrderByRelationAggregateInput
    renouvellements?: RenouvellementOrderByRelationAggregateInput
    _relevance?: AttributionBourseOrderByRelevanceInput
  }

  export type AttributionBourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    candidatureId?: string
    AND?: AttributionBourseWhereInput | AttributionBourseWhereInput[]
    OR?: AttributionBourseWhereInput[]
    NOT?: AttributionBourseWhereInput | AttributionBourseWhereInput[]
    montantAccorde?: DecimalFilter<"AttributionBourse"> | Decimal | DecimalJsLike | number | string
    devise?: StringFilter<"AttributionBourse"> | string
    dateDebut?: DateTimeFilter<"AttributionBourse"> | Date | string
    dateFin?: DateTimeFilter<"AttributionBourse"> | Date | string
    statut?: EnumStatutAttributionFilter<"AttributionBourse"> | $Enums.StatutAttribution
    etudiantId?: StringFilter<"AttributionBourse"> | string
    creeLe?: DateTimeFilter<"AttributionBourse"> | Date | string
    modifieLe?: DateTimeFilter<"AttributionBourse"> | Date | string
    candidature?: XOR<CandidatureScalarRelationFilter, CandidatureWhereInput>
    etudiant?: XOR<EtudiantScalarRelationFilter, EtudiantWhereInput>
    paiements?: PaiementListRelationFilter
    renouvellements?: RenouvellementListRelationFilter
  }, "id" | "reference" | "candidatureId">

  export type AttributionBourseOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    montantAccorde?: SortOrder
    devise?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
    candidatureId?: SortOrder
    etudiantId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    _count?: AttributionBourseCountOrderByAggregateInput
    _avg?: AttributionBourseAvgOrderByAggregateInput
    _max?: AttributionBourseMaxOrderByAggregateInput
    _min?: AttributionBourseMinOrderByAggregateInput
    _sum?: AttributionBourseSumOrderByAggregateInput
  }

  export type AttributionBourseScalarWhereWithAggregatesInput = {
    AND?: AttributionBourseScalarWhereWithAggregatesInput | AttributionBourseScalarWhereWithAggregatesInput[]
    OR?: AttributionBourseScalarWhereWithAggregatesInput[]
    NOT?: AttributionBourseScalarWhereWithAggregatesInput | AttributionBourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttributionBourse"> | string
    reference?: StringWithAggregatesFilter<"AttributionBourse"> | string
    montantAccorde?: DecimalWithAggregatesFilter<"AttributionBourse"> | Decimal | DecimalJsLike | number | string
    devise?: StringWithAggregatesFilter<"AttributionBourse"> | string
    dateDebut?: DateTimeWithAggregatesFilter<"AttributionBourse"> | Date | string
    dateFin?: DateTimeWithAggregatesFilter<"AttributionBourse"> | Date | string
    statut?: EnumStatutAttributionWithAggregatesFilter<"AttributionBourse"> | $Enums.StatutAttribution
    candidatureId?: StringWithAggregatesFilter<"AttributionBourse"> | string
    etudiantId?: StringWithAggregatesFilter<"AttributionBourse"> | string
    creeLe?: DateTimeWithAggregatesFilter<"AttributionBourse"> | Date | string
    modifieLe?: DateTimeWithAggregatesFilter<"AttributionBourse"> | Date | string
  }

  export type PaiementWhereInput = {
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    id?: StringFilter<"Paiement"> | string
    reference?: StringFilter<"Paiement"> | string
    periode?: StringFilter<"Paiement"> | string
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    devise?: StringFilter<"Paiement"> | string
    datePrevue?: DateTimeFilter<"Paiement"> | Date | string
    datePaiement?: DateTimeNullableFilter<"Paiement"> | Date | string | null
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    modePaiement?: StringNullableFilter<"Paiement"> | string | null
    preuveUrl?: StringNullableFilter<"Paiement"> | string | null
    attributionId?: StringFilter<"Paiement"> | string
    creeLe?: DateTimeFilter<"Paiement"> | Date | string
    attribution?: XOR<AttributionBourseScalarRelationFilter, AttributionBourseWhereInput>
  }

  export type PaiementOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    periode?: SortOrder
    montant?: SortOrder
    devise?: SortOrder
    datePrevue?: SortOrder
    datePaiement?: SortOrderInput | SortOrder
    statut?: SortOrder
    modePaiement?: SortOrderInput | SortOrder
    preuveUrl?: SortOrderInput | SortOrder
    attributionId?: SortOrder
    creeLe?: SortOrder
    attribution?: AttributionBourseOrderByWithRelationInput
    _relevance?: PaiementOrderByRelevanceInput
  }

  export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    periode?: StringFilter<"Paiement"> | string
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    devise?: StringFilter<"Paiement"> | string
    datePrevue?: DateTimeFilter<"Paiement"> | Date | string
    datePaiement?: DateTimeNullableFilter<"Paiement"> | Date | string | null
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    modePaiement?: StringNullableFilter<"Paiement"> | string | null
    preuveUrl?: StringNullableFilter<"Paiement"> | string | null
    attributionId?: StringFilter<"Paiement"> | string
    creeLe?: DateTimeFilter<"Paiement"> | Date | string
    attribution?: XOR<AttributionBourseScalarRelationFilter, AttributionBourseWhereInput>
  }, "id" | "reference">

  export type PaiementOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    periode?: SortOrder
    montant?: SortOrder
    devise?: SortOrder
    datePrevue?: SortOrder
    datePaiement?: SortOrderInput | SortOrder
    statut?: SortOrder
    modePaiement?: SortOrderInput | SortOrder
    preuveUrl?: SortOrderInput | SortOrder
    attributionId?: SortOrder
    creeLe?: SortOrder
    _count?: PaiementCountOrderByAggregateInput
    _avg?: PaiementAvgOrderByAggregateInput
    _max?: PaiementMaxOrderByAggregateInput
    _min?: PaiementMinOrderByAggregateInput
    _sum?: PaiementSumOrderByAggregateInput
  }

  export type PaiementScalarWhereWithAggregatesInput = {
    AND?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    OR?: PaiementScalarWhereWithAggregatesInput[]
    NOT?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Paiement"> | string
    reference?: StringWithAggregatesFilter<"Paiement"> | string
    periode?: StringWithAggregatesFilter<"Paiement"> | string
    montant?: DecimalWithAggregatesFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    devise?: StringWithAggregatesFilter<"Paiement"> | string
    datePrevue?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
    datePaiement?: DateTimeNullableWithAggregatesFilter<"Paiement"> | Date | string | null
    statut?: EnumStatutPaiementWithAggregatesFilter<"Paiement"> | $Enums.StatutPaiement
    modePaiement?: StringNullableWithAggregatesFilter<"Paiement"> | string | null
    preuveUrl?: StringNullableWithAggregatesFilter<"Paiement"> | string | null
    attributionId?: StringWithAggregatesFilter<"Paiement"> | string
    creeLe?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
  }

  export type RenouvellementWhereInput = {
    AND?: RenouvellementWhereInput | RenouvellementWhereInput[]
    OR?: RenouvellementWhereInput[]
    NOT?: RenouvellementWhereInput | RenouvellementWhereInput[]
    id?: StringFilter<"Renouvellement"> | string
    anneeAcademique?: StringFilter<"Renouvellement"> | string
    decision?: StringFilter<"Renouvellement"> | string
    commentaire?: StringNullableFilter<"Renouvellement"> | string | null
    dateDecision?: DateTimeFilter<"Renouvellement"> | Date | string
    attributionId?: StringFilter<"Renouvellement"> | string
    creeLe?: DateTimeFilter<"Renouvellement"> | Date | string
    attribution?: XOR<AttributionBourseScalarRelationFilter, AttributionBourseWhereInput>
  }

  export type RenouvellementOrderByWithRelationInput = {
    id?: SortOrder
    anneeAcademique?: SortOrder
    decision?: SortOrder
    commentaire?: SortOrderInput | SortOrder
    dateDecision?: SortOrder
    attributionId?: SortOrder
    creeLe?: SortOrder
    attribution?: AttributionBourseOrderByWithRelationInput
    _relevance?: RenouvellementOrderByRelevanceInput
  }

  export type RenouvellementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    attributionId_anneeAcademique?: RenouvellementAttributionIdAnneeAcademiqueCompoundUniqueInput
    AND?: RenouvellementWhereInput | RenouvellementWhereInput[]
    OR?: RenouvellementWhereInput[]
    NOT?: RenouvellementWhereInput | RenouvellementWhereInput[]
    anneeAcademique?: StringFilter<"Renouvellement"> | string
    decision?: StringFilter<"Renouvellement"> | string
    commentaire?: StringNullableFilter<"Renouvellement"> | string | null
    dateDecision?: DateTimeFilter<"Renouvellement"> | Date | string
    attributionId?: StringFilter<"Renouvellement"> | string
    creeLe?: DateTimeFilter<"Renouvellement"> | Date | string
    attribution?: XOR<AttributionBourseScalarRelationFilter, AttributionBourseWhereInput>
  }, "id" | "attributionId_anneeAcademique">

  export type RenouvellementOrderByWithAggregationInput = {
    id?: SortOrder
    anneeAcademique?: SortOrder
    decision?: SortOrder
    commentaire?: SortOrderInput | SortOrder
    dateDecision?: SortOrder
    attributionId?: SortOrder
    creeLe?: SortOrder
    _count?: RenouvellementCountOrderByAggregateInput
    _max?: RenouvellementMaxOrderByAggregateInput
    _min?: RenouvellementMinOrderByAggregateInput
  }

  export type RenouvellementScalarWhereWithAggregatesInput = {
    AND?: RenouvellementScalarWhereWithAggregatesInput | RenouvellementScalarWhereWithAggregatesInput[]
    OR?: RenouvellementScalarWhereWithAggregatesInput[]
    NOT?: RenouvellementScalarWhereWithAggregatesInput | RenouvellementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Renouvellement"> | string
    anneeAcademique?: StringWithAggregatesFilter<"Renouvellement"> | string
    decision?: StringWithAggregatesFilter<"Renouvellement"> | string
    commentaire?: StringNullableWithAggregatesFilter<"Renouvellement"> | string | null
    dateDecision?: DateTimeWithAggregatesFilter<"Renouvellement"> | Date | string
    attributionId?: StringWithAggregatesFilter<"Renouvellement"> | string
    creeLe?: DateTimeWithAggregatesFilter<"Renouvellement"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    titre?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    estLue?: BoolFilter<"Notification"> | boolean
    utilisateurId?: StringFilter<"Notification"> | string
    creeLe?: DateTimeFilter<"Notification"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    message?: SortOrder
    estLue?: SortOrder
    utilisateurId?: SortOrder
    creeLe?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    titre?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    estLue?: BoolFilter<"Notification"> | boolean
    utilisateurId?: StringFilter<"Notification"> | string
    creeLe?: DateTimeFilter<"Notification"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    message?: SortOrder
    estLue?: SortOrder
    utilisateurId?: SortOrder
    creeLe?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    titre?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    estLue?: BoolWithAggregatesFilter<"Notification"> | boolean
    utilisateurId?: StringWithAggregatesFilter<"Notification"> | string
    creeLe?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ParametreWhereInput = {
    AND?: ParametreWhereInput | ParametreWhereInput[]
    OR?: ParametreWhereInput[]
    NOT?: ParametreWhereInput | ParametreWhereInput[]
    id?: StringFilter<"Parametre"> | string
    cle?: StringFilter<"Parametre"> | string
    valeur?: StringFilter<"Parametre"> | string
    creeLe?: DateTimeFilter<"Parametre"> | Date | string
    modifieLe?: DateTimeFilter<"Parametre"> | Date | string
  }

  export type ParametreOrderByWithRelationInput = {
    id?: SortOrder
    cle?: SortOrder
    valeur?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    _relevance?: ParametreOrderByRelevanceInput
  }

  export type ParametreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cle?: string
    AND?: ParametreWhereInput | ParametreWhereInput[]
    OR?: ParametreWhereInput[]
    NOT?: ParametreWhereInput | ParametreWhereInput[]
    valeur?: StringFilter<"Parametre"> | string
    creeLe?: DateTimeFilter<"Parametre"> | Date | string
    modifieLe?: DateTimeFilter<"Parametre"> | Date | string
  }, "id" | "cle">

  export type ParametreOrderByWithAggregationInput = {
    id?: SortOrder
    cle?: SortOrder
    valeur?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
    _count?: ParametreCountOrderByAggregateInput
    _max?: ParametreMaxOrderByAggregateInput
    _min?: ParametreMinOrderByAggregateInput
  }

  export type ParametreScalarWhereWithAggregatesInput = {
    AND?: ParametreScalarWhereWithAggregatesInput | ParametreScalarWhereWithAggregatesInput[]
    OR?: ParametreScalarWhereWithAggregatesInput[]
    NOT?: ParametreScalarWhereWithAggregatesInput | ParametreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parametre"> | string
    cle?: StringWithAggregatesFilter<"Parametre"> | string
    valeur?: StringWithAggregatesFilter<"Parametre"> | string
    creeLe?: DateTimeWithAggregatesFilter<"Parametre"> | Date | string
    modifieLe?: DateTimeWithAggregatesFilter<"Parametre"> | Date | string
  }

  export type UtilisateurCreateInput = {
    id?: string
    nomComplet: string
    email: string
    motDePasse: string
    role: $Enums.RoleUtilisateur
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiant?: EtudiantCreateNestedOneWithoutUtilisateurInput
    evaluations?: EvaluationCreateNestedManyWithoutEvaluateurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: string
    nomComplet: string
    email: string
    motDePasse: string
    role: $Enums.RoleUtilisateur
    estActif?: boolean
    etudiantId?: string | null
    creeLe?: Date | string
    modifieLe?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutEvaluateurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomComplet?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneWithoutUtilisateurNestedInput
    evaluations?: EvaluationUpdateManyWithoutEvaluateurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomComplet?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    estActif?: BoolFieldUpdateOperationsInput | boolean
    etudiantId?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutEvaluateurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: string
    nomComplet: string
    email: string
    motDePasse: string
    role: $Enums.RoleUtilisateur
    estActif?: boolean
    etudiantId?: string | null
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomComplet?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomComplet?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    estActif?: BoolFieldUpdateOperationsInput | boolean
    etudiantId?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtablissementCreateInput = {
    id?: string
    nom: string
    sigle?: string | null
    province?: string | null
    ville?: string | null
    type?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiants?: EtudiantCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementUncheckedCreateInput = {
    id?: string
    nom: string
    sigle?: string | null
    province?: string | null
    ville?: string | null
    type?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiants?: EtudiantUncheckedCreateNestedManyWithoutEtablissementInput
  }

  export type EtablissementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    sigle?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiants?: EtudiantUpdateManyWithoutEtablissementNestedInput
  }

  export type EtablissementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    sigle?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiants?: EtudiantUncheckedUpdateManyWithoutEtablissementNestedInput
  }

  export type EtablissementCreateManyInput = {
    id?: string
    nom: string
    sigle?: string | null
    province?: string | null
    ville?: string | null
    type?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type EtablissementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    sigle?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtablissementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    sigle?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtudiantCreateInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    etablissement: EtablissementCreateNestedOneWithoutEtudiantsInput
    utilisateur?: UtilisateurCreateNestedOneWithoutEtudiantInput
    candidatures?: CandidatureCreateNestedManyWithoutEtudiantInput
    attributions?: AttributionBourseCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantUncheckedCreateInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    etablissementId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    utilisateur?: UtilisateurUncheckedCreateNestedOneWithoutEtudiantInput
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutEtudiantInput
    attributions?: AttributionBourseUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etablissement?: EtablissementUpdateOneRequiredWithoutEtudiantsNestedInput
    utilisateur?: UtilisateurUpdateOneWithoutEtudiantNestedInput
    candidatures?: CandidatureUpdateManyWithoutEtudiantNestedInput
    attributions?: AttributionBourseUpdateManyWithoutEtudiantNestedInput
  }

  export type EtudiantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    etablissementId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUncheckedUpdateOneWithoutEtudiantNestedInput
    candidatures?: CandidatureUncheckedUpdateManyWithoutEtudiantNestedInput
    attributions?: AttributionBourseUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type EtudiantCreateManyInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    etablissementId: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type EtudiantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtudiantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    etablissementId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgrammeBourseCreateInput = {
    id?: string
    code: string
    nom: string
    description?: string | null
    organismeFinanceur?: string | null
    montantMaximum?: Decimal | DecimalJsLike | number | string | null
    devise?: string
    niveauCible?: string | null
    domaineCible?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    appels?: AppelCandidatureCreateNestedManyWithoutProgrammeInput
  }

  export type ProgrammeBourseUncheckedCreateInput = {
    id?: string
    code: string
    nom: string
    description?: string | null
    organismeFinanceur?: string | null
    montantMaximum?: Decimal | DecimalJsLike | number | string | null
    devise?: string
    niveauCible?: string | null
    domaineCible?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    appels?: AppelCandidatureUncheckedCreateNestedManyWithoutProgrammeInput
  }

  export type ProgrammeBourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organismeFinanceur?: NullableStringFieldUpdateOperationsInput | string | null
    montantMaximum?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    devise?: StringFieldUpdateOperationsInput | string
    niveauCible?: NullableStringFieldUpdateOperationsInput | string | null
    domaineCible?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    appels?: AppelCandidatureUpdateManyWithoutProgrammeNestedInput
  }

  export type ProgrammeBourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organismeFinanceur?: NullableStringFieldUpdateOperationsInput | string | null
    montantMaximum?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    devise?: StringFieldUpdateOperationsInput | string
    niveauCible?: NullableStringFieldUpdateOperationsInput | string | null
    domaineCible?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    appels?: AppelCandidatureUncheckedUpdateManyWithoutProgrammeNestedInput
  }

  export type ProgrammeBourseCreateManyInput = {
    id?: string
    code: string
    nom: string
    description?: string | null
    organismeFinanceur?: string | null
    montantMaximum?: Decimal | DecimalJsLike | number | string | null
    devise?: string
    niveauCible?: string | null
    domaineCible?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type ProgrammeBourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organismeFinanceur?: NullableStringFieldUpdateOperationsInput | string | null
    montantMaximum?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    devise?: StringFieldUpdateOperationsInput | string
    niveauCible?: NullableStringFieldUpdateOperationsInput | string | null
    domaineCible?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgrammeBourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organismeFinanceur?: NullableStringFieldUpdateOperationsInput | string | null
    montantMaximum?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    devise?: StringFieldUpdateOperationsInput | string
    niveauCible?: NullableStringFieldUpdateOperationsInput | string | null
    domaineCible?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppelCandidatureCreateInput = {
    id?: string
    reference: string
    titre: string
    description?: string | null
    dateOuverture: Date | string
    dateCloture: Date | string
    nombrePlaces?: number | null
    criteresEligibilite?: string | null
    estPublie?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    programme: ProgrammeBourseCreateNestedOneWithoutAppelsInput
    candidatures?: CandidatureCreateNestedManyWithoutAppelInput
  }

  export type AppelCandidatureUncheckedCreateInput = {
    id?: string
    reference: string
    titre: string
    description?: string | null
    dateOuverture: Date | string
    dateCloture: Date | string
    nombrePlaces?: number | null
    criteresEligibilite?: string | null
    estPublie?: boolean
    programmeId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutAppelInput
  }

  export type AppelCandidatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateOuverture?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCloture?: DateTimeFieldUpdateOperationsInput | Date | string
    nombrePlaces?: NullableIntFieldUpdateOperationsInput | number | null
    criteresEligibilite?: NullableStringFieldUpdateOperationsInput | string | null
    estPublie?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    programme?: ProgrammeBourseUpdateOneRequiredWithoutAppelsNestedInput
    candidatures?: CandidatureUpdateManyWithoutAppelNestedInput
  }

  export type AppelCandidatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateOuverture?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCloture?: DateTimeFieldUpdateOperationsInput | Date | string
    nombrePlaces?: NullableIntFieldUpdateOperationsInput | number | null
    criteresEligibilite?: NullableStringFieldUpdateOperationsInput | string | null
    estPublie?: BoolFieldUpdateOperationsInput | boolean
    programmeId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidatures?: CandidatureUncheckedUpdateManyWithoutAppelNestedInput
  }

  export type AppelCandidatureCreateManyInput = {
    id?: string
    reference: string
    titre: string
    description?: string | null
    dateOuverture: Date | string
    dateCloture: Date | string
    nombrePlaces?: number | null
    criteresEligibilite?: string | null
    estPublie?: boolean
    programmeId: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type AppelCandidatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateOuverture?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCloture?: DateTimeFieldUpdateOperationsInput | Date | string
    nombrePlaces?: NullableIntFieldUpdateOperationsInput | number | null
    criteresEligibilite?: NullableStringFieldUpdateOperationsInput | string | null
    estPublie?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppelCandidatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateOuverture?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCloture?: DateTimeFieldUpdateOperationsInput | Date | string
    nombrePlaces?: NullableIntFieldUpdateOperationsInput | number | null
    criteresEligibilite?: NullableStringFieldUpdateOperationsInput | string | null
    estPublie?: BoolFieldUpdateOperationsInput | boolean
    programmeId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureCreateInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiant: EtudiantCreateNestedOneWithoutCandidaturesInput
    appel: AppelCandidatureCreateNestedOneWithoutCandidaturesInput
    documents?: DocumentCandidatureCreateNestedManyWithoutCandidatureInput
    evaluations?: EvaluationCreateNestedManyWithoutCandidatureInput
    attribution?: AttributionBourseCreateNestedOneWithoutCandidatureInput
  }

  export type CandidatureUncheckedCreateInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    etudiantId: string
    appelId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    documents?: DocumentCandidatureUncheckedCreateNestedManyWithoutCandidatureInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCandidatureInput
    attribution?: AttributionBourseUncheckedCreateNestedOneWithoutCandidatureInput
  }

  export type CandidatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneRequiredWithoutCandidaturesNestedInput
    appel?: AppelCandidatureUpdateOneRequiredWithoutCandidaturesNestedInput
    documents?: DocumentCandidatureUpdateManyWithoutCandidatureNestedInput
    evaluations?: EvaluationUpdateManyWithoutCandidatureNestedInput
    attribution?: AttributionBourseUpdateOneWithoutCandidatureNestedInput
  }

  export type CandidatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    etudiantId?: StringFieldUpdateOperationsInput | string
    appelId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentCandidatureUncheckedUpdateManyWithoutCandidatureNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutCandidatureNestedInput
    attribution?: AttributionBourseUncheckedUpdateOneWithoutCandidatureNestedInput
  }

  export type CandidatureCreateManyInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    etudiantId: string
    appelId: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type CandidatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    etudiantId?: StringFieldUpdateOperationsInput | string
    appelId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCandidatureCreateInput = {
    id?: string
    type: $Enums.TypeDocument
    nomFichier: string
    cheminFichier: string
    estValide?: boolean
    commentaire?: string | null
    creeLe?: Date | string
    candidature: CandidatureCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentCandidatureUncheckedCreateInput = {
    id?: string
    type: $Enums.TypeDocument
    nomFichier: string
    cheminFichier: string
    estValide?: boolean
    commentaire?: string | null
    candidatureId: string
    creeLe?: Date | string
  }

  export type DocumentCandidatureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeDocumentFieldUpdateOperationsInput | $Enums.TypeDocument
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    estValide?: BoolFieldUpdateOperationsInput | boolean
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidature?: CandidatureUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentCandidatureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeDocumentFieldUpdateOperationsInput | $Enums.TypeDocument
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    estValide?: BoolFieldUpdateOperationsInput | boolean
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    candidatureId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCandidatureCreateManyInput = {
    id?: string
    type: $Enums.TypeDocument
    nomFichier: string
    cheminFichier: string
    estValide?: boolean
    commentaire?: string | null
    candidatureId: string
    creeLe?: Date | string
  }

  export type DocumentCandidatureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeDocumentFieldUpdateOperationsInput | $Enums.TypeDocument
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    estValide?: BoolFieldUpdateOperationsInput | boolean
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCandidatureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeDocumentFieldUpdateOperationsInput | $Enums.TypeDocument
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    estValide?: BoolFieldUpdateOperationsInput | boolean
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    candidatureId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateInput = {
    id?: string
    note?: Decimal | DecimalJsLike | number | string | null
    decision: $Enums.DecisionEvaluation
    commentaire?: string | null
    creeLe?: Date | string
    candidature: CandidatureCreateNestedOneWithoutEvaluationsInput
    evaluateur: UtilisateurCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateInput = {
    id?: string
    note?: Decimal | DecimalJsLike | number | string | null
    decision: $Enums.DecisionEvaluation
    commentaire?: string | null
    candidatureId: string
    evaluateurId: string
    creeLe?: Date | string
  }

  export type EvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFieldUpdateOperationsInput | $Enums.DecisionEvaluation
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidature?: CandidatureUpdateOneRequiredWithoutEvaluationsNestedInput
    evaluateur?: UtilisateurUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFieldUpdateOperationsInput | $Enums.DecisionEvaluation
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    candidatureId?: StringFieldUpdateOperationsInput | string
    evaluateurId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateManyInput = {
    id?: string
    note?: Decimal | DecimalJsLike | number | string | null
    decision: $Enums.DecisionEvaluation
    commentaire?: string | null
    candidatureId: string
    evaluateurId: string
    creeLe?: Date | string
  }

  export type EvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFieldUpdateOperationsInput | $Enums.DecisionEvaluation
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFieldUpdateOperationsInput | $Enums.DecisionEvaluation
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    candidatureId?: StringFieldUpdateOperationsInput | string
    evaluateurId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributionBourseCreateInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    creeLe?: Date | string
    modifieLe?: Date | string
    candidature: CandidatureCreateNestedOneWithoutAttributionInput
    etudiant: EtudiantCreateNestedOneWithoutAttributionsInput
    paiements?: PaiementCreateNestedManyWithoutAttributionInput
    renouvellements?: RenouvellementCreateNestedManyWithoutAttributionInput
  }

  export type AttributionBourseUncheckedCreateInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    candidatureId: string
    etudiantId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    paiements?: PaiementUncheckedCreateNestedManyWithoutAttributionInput
    renouvellements?: RenouvellementUncheckedCreateNestedManyWithoutAttributionInput
  }

  export type AttributionBourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidature?: CandidatureUpdateOneRequiredWithoutAttributionNestedInput
    etudiant?: EtudiantUpdateOneRequiredWithoutAttributionsNestedInput
    paiements?: PaiementUpdateManyWithoutAttributionNestedInput
    renouvellements?: RenouvellementUpdateManyWithoutAttributionNestedInput
  }

  export type AttributionBourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    candidatureId?: StringFieldUpdateOperationsInput | string
    etudiantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    paiements?: PaiementUncheckedUpdateManyWithoutAttributionNestedInput
    renouvellements?: RenouvellementUncheckedUpdateManyWithoutAttributionNestedInput
  }

  export type AttributionBourseCreateManyInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    candidatureId: string
    etudiantId: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type AttributionBourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributionBourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    candidatureId?: StringFieldUpdateOperationsInput | string
    etudiantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateInput = {
    id?: string
    reference: string
    periode: string
    montant: Decimal | DecimalJsLike | number | string
    devise?: string
    datePrevue: Date | string
    datePaiement?: Date | string | null
    statut?: $Enums.StatutPaiement
    modePaiement?: string | null
    preuveUrl?: string | null
    creeLe?: Date | string
    attribution: AttributionBourseCreateNestedOneWithoutPaiementsInput
  }

  export type PaiementUncheckedCreateInput = {
    id?: string
    reference: string
    periode: string
    montant: Decimal | DecimalJsLike | number | string
    devise?: string
    datePrevue: Date | string
    datePaiement?: Date | string | null
    statut?: $Enums.StatutPaiement
    modePaiement?: string | null
    preuveUrl?: string | null
    attributionId: string
    creeLe?: Date | string
  }

  export type PaiementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    periode?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    datePrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    modePaiement?: NullableStringFieldUpdateOperationsInput | string | null
    preuveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    attribution?: AttributionBourseUpdateOneRequiredWithoutPaiementsNestedInput
  }

  export type PaiementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    periode?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    datePrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    modePaiement?: NullableStringFieldUpdateOperationsInput | string | null
    preuveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attributionId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateManyInput = {
    id?: string
    reference: string
    periode: string
    montant: Decimal | DecimalJsLike | number | string
    devise?: string
    datePrevue: Date | string
    datePaiement?: Date | string | null
    statut?: $Enums.StatutPaiement
    modePaiement?: string | null
    preuveUrl?: string | null
    attributionId: string
    creeLe?: Date | string
  }

  export type PaiementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    periode?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    datePrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    modePaiement?: NullableStringFieldUpdateOperationsInput | string | null
    preuveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    periode?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    datePrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    modePaiement?: NullableStringFieldUpdateOperationsInput | string | null
    preuveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    attributionId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenouvellementCreateInput = {
    id?: string
    anneeAcademique: string
    decision: string
    commentaire?: string | null
    dateDecision?: Date | string
    creeLe?: Date | string
    attribution: AttributionBourseCreateNestedOneWithoutRenouvellementsInput
  }

  export type RenouvellementUncheckedCreateInput = {
    id?: string
    anneeAcademique: string
    decision: string
    commentaire?: string | null
    dateDecision?: Date | string
    attributionId: string
    creeLe?: Date | string
  }

  export type RenouvellementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anneeAcademique?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateDecision?: DateTimeFieldUpdateOperationsInput | Date | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    attribution?: AttributionBourseUpdateOneRequiredWithoutRenouvellementsNestedInput
  }

  export type RenouvellementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    anneeAcademique?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateDecision?: DateTimeFieldUpdateOperationsInput | Date | string
    attributionId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenouvellementCreateManyInput = {
    id?: string
    anneeAcademique: string
    decision: string
    commentaire?: string | null
    dateDecision?: Date | string
    attributionId: string
    creeLe?: Date | string
  }

  export type RenouvellementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    anneeAcademique?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateDecision?: DateTimeFieldUpdateOperationsInput | Date | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenouvellementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    anneeAcademique?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateDecision?: DateTimeFieldUpdateOperationsInput | Date | string
    attributionId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    titre: string
    message: string
    estLue?: boolean
    creeLe?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    titre: string
    message: string
    estLue?: boolean
    utilisateurId: string
    creeLe?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    estLue?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    estLue?: BoolFieldUpdateOperationsInput | boolean
    utilisateurId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    titre: string
    message: string
    estLue?: boolean
    utilisateurId: string
    creeLe?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    estLue?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    estLue?: BoolFieldUpdateOperationsInput | boolean
    utilisateurId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParametreCreateInput = {
    id?: string
    cle: string
    valeur: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type ParametreUncheckedCreateInput = {
    id?: string
    cle: string
    valeur: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type ParametreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cle?: StringFieldUpdateOperationsInput | string
    valeur?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParametreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cle?: StringFieldUpdateOperationsInput | string
    valeur?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParametreCreateManyInput = {
    id?: string
    cle: string
    valeur: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type ParametreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cle?: StringFieldUpdateOperationsInput | string
    valeur?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParametreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cle?: StringFieldUpdateOperationsInput | string
    valeur?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleUtilisateurFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | EnumRoleUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUtilisateur[]
    notIn?: $Enums.RoleUtilisateur[]
    not?: NestedEnumRoleUtilisateurFilter<$PrismaModel> | $Enums.RoleUtilisateur
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EtudiantNullableScalarRelationFilter = {
    is?: EtudiantWhereInput | null
    isNot?: EtudiantWhereInput | null
  }

  export type EvaluationListRelationFilter = {
    every?: EvaluationWhereInput
    some?: EvaluationWhereInput
    none?: EvaluationWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurOrderByRelevanceInput = {
    fields: UtilisateurOrderByRelevanceFieldEnum | UtilisateurOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    nomComplet?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    estActif?: SortOrder
    etudiantId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    nomComplet?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    estActif?: SortOrder
    etudiantId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    nomComplet?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    role?: SortOrder
    estActif?: SortOrder
    etudiantId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleUtilisateurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | EnumRoleUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUtilisateur[]
    notIn?: $Enums.RoleUtilisateur[]
    not?: NestedEnumRoleUtilisateurWithAggregatesFilter<$PrismaModel> | $Enums.RoleUtilisateur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleUtilisateurFilter<$PrismaModel>
    _max?: NestedEnumRoleUtilisateurFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EtudiantListRelationFilter = {
    every?: EtudiantWhereInput
    some?: EtudiantWhereInput
    none?: EtudiantWhereInput
  }

  export type EtudiantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtablissementOrderByRelevanceInput = {
    fields: EtablissementOrderByRelevanceFieldEnum | EtablissementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EtablissementCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    sigle?: SortOrder
    province?: SortOrder
    ville?: SortOrder
    type?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type EtablissementMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    sigle?: SortOrder
    province?: SortOrder
    ville?: SortOrder
    type?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type EtablissementMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    sigle?: SortOrder
    province?: SortOrder
    ville?: SortOrder
    type?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EtablissementScalarRelationFilter = {
    is?: EtablissementWhereInput
    isNot?: EtablissementWhereInput
  }

  export type UtilisateurNullableScalarRelationFilter = {
    is?: UtilisateurWhereInput | null
    isNot?: UtilisateurWhereInput | null
  }

  export type CandidatureListRelationFilter = {
    every?: CandidatureWhereInput
    some?: CandidatureWhereInput
    none?: CandidatureWhereInput
  }

  export type AttributionBourseListRelationFilter = {
    every?: AttributionBourseWhereInput
    some?: AttributionBourseWhereInput
    none?: AttributionBourseWhereInput
  }

  export type CandidatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributionBourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EtudiantOrderByRelevanceInput = {
    fields: EtudiantOrderByRelevanceFieldEnum | EtudiantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EtudiantCountOrderByAggregateInput = {
    id?: SortOrder
    matricule?: SortOrder
    nom?: SortOrder
    postnom?: SortOrder
    prenom?: SortOrder
    sexe?: SortOrder
    dateNaissance?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    adresse?: SortOrder
    provinceOrigine?: SortOrder
    niveauEtude?: SortOrder
    filiere?: SortOrder
    anneeAcademique?: SortOrder
    estActif?: SortOrder
    etablissementId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type EtudiantMaxOrderByAggregateInput = {
    id?: SortOrder
    matricule?: SortOrder
    nom?: SortOrder
    postnom?: SortOrder
    prenom?: SortOrder
    sexe?: SortOrder
    dateNaissance?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    adresse?: SortOrder
    provinceOrigine?: SortOrder
    niveauEtude?: SortOrder
    filiere?: SortOrder
    anneeAcademique?: SortOrder
    estActif?: SortOrder
    etablissementId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type EtudiantMinOrderByAggregateInput = {
    id?: SortOrder
    matricule?: SortOrder
    nom?: SortOrder
    postnom?: SortOrder
    prenom?: SortOrder
    sexe?: SortOrder
    dateNaissance?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    adresse?: SortOrder
    provinceOrigine?: SortOrder
    niveauEtude?: SortOrder
    filiere?: SortOrder
    anneeAcademique?: SortOrder
    estActif?: SortOrder
    etablissementId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type AppelCandidatureListRelationFilter = {
    every?: AppelCandidatureWhereInput
    some?: AppelCandidatureWhereInput
    none?: AppelCandidatureWhereInput
  }

  export type AppelCandidatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgrammeBourseOrderByRelevanceInput = {
    fields: ProgrammeBourseOrderByRelevanceFieldEnum | ProgrammeBourseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProgrammeBourseCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    organismeFinanceur?: SortOrder
    montantMaximum?: SortOrder
    devise?: SortOrder
    niveauCible?: SortOrder
    domaineCible?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type ProgrammeBourseAvgOrderByAggregateInput = {
    montantMaximum?: SortOrder
  }

  export type ProgrammeBourseMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    organismeFinanceur?: SortOrder
    montantMaximum?: SortOrder
    devise?: SortOrder
    niveauCible?: SortOrder
    domaineCible?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type ProgrammeBourseMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    organismeFinanceur?: SortOrder
    montantMaximum?: SortOrder
    devise?: SortOrder
    niveauCible?: SortOrder
    domaineCible?: SortOrder
    estActif?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type ProgrammeBourseSumOrderByAggregateInput = {
    montantMaximum?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProgrammeBourseScalarRelationFilter = {
    is?: ProgrammeBourseWhereInput
    isNot?: ProgrammeBourseWhereInput
  }

  export type AppelCandidatureOrderByRelevanceInput = {
    fields: AppelCandidatureOrderByRelevanceFieldEnum | AppelCandidatureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppelCandidatureCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    dateOuverture?: SortOrder
    dateCloture?: SortOrder
    nombrePlaces?: SortOrder
    criteresEligibilite?: SortOrder
    estPublie?: SortOrder
    programmeId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type AppelCandidatureAvgOrderByAggregateInput = {
    nombrePlaces?: SortOrder
  }

  export type AppelCandidatureMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    dateOuverture?: SortOrder
    dateCloture?: SortOrder
    nombrePlaces?: SortOrder
    criteresEligibilite?: SortOrder
    estPublie?: SortOrder
    programmeId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type AppelCandidatureMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    dateOuverture?: SortOrder
    dateCloture?: SortOrder
    nombrePlaces?: SortOrder
    criteresEligibilite?: SortOrder
    estPublie?: SortOrder
    programmeId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type AppelCandidatureSumOrderByAggregateInput = {
    nombrePlaces?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumStatutCandidatureFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCandidature | EnumStatutCandidatureFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCandidature[]
    notIn?: $Enums.StatutCandidature[]
    not?: NestedEnumStatutCandidatureFilter<$PrismaModel> | $Enums.StatutCandidature
  }

  export type EtudiantScalarRelationFilter = {
    is?: EtudiantWhereInput
    isNot?: EtudiantWhereInput
  }

  export type AppelCandidatureScalarRelationFilter = {
    is?: AppelCandidatureWhereInput
    isNot?: AppelCandidatureWhereInput
  }

  export type DocumentCandidatureListRelationFilter = {
    every?: DocumentCandidatureWhereInput
    some?: DocumentCandidatureWhereInput
    none?: DocumentCandidatureWhereInput
  }

  export type AttributionBourseNullableScalarRelationFilter = {
    is?: AttributionBourseWhereInput | null
    isNot?: AttributionBourseWhereInput | null
  }

  export type DocumentCandidatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CandidatureOrderByRelevanceInput = {
    fields: CandidatureOrderByRelevanceFieldEnum | CandidatureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CandidatureEtudiantIdAppelIdCompoundUniqueInput = {
    etudiantId: string
    appelId: string
  }

  export type CandidatureCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    dateSoumission?: SortOrder
    motivation?: SortOrder
    statut?: SortOrder
    scoreFinal?: SortOrder
    commentaire?: SortOrder
    etudiantId?: SortOrder
    appelId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type CandidatureAvgOrderByAggregateInput = {
    scoreFinal?: SortOrder
  }

  export type CandidatureMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    dateSoumission?: SortOrder
    motivation?: SortOrder
    statut?: SortOrder
    scoreFinal?: SortOrder
    commentaire?: SortOrder
    etudiantId?: SortOrder
    appelId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type CandidatureMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    dateSoumission?: SortOrder
    motivation?: SortOrder
    statut?: SortOrder
    scoreFinal?: SortOrder
    commentaire?: SortOrder
    etudiantId?: SortOrder
    appelId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type CandidatureSumOrderByAggregateInput = {
    scoreFinal?: SortOrder
  }

  export type EnumStatutCandidatureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCandidature | EnumStatutCandidatureFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCandidature[]
    notIn?: $Enums.StatutCandidature[]
    not?: NestedEnumStatutCandidatureWithAggregatesFilter<$PrismaModel> | $Enums.StatutCandidature
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutCandidatureFilter<$PrismaModel>
    _max?: NestedEnumStatutCandidatureFilter<$PrismaModel>
  }

  export type EnumTypeDocumentFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDocument | EnumTypeDocumentFieldRefInput<$PrismaModel>
    in?: $Enums.TypeDocument[]
    notIn?: $Enums.TypeDocument[]
    not?: NestedEnumTypeDocumentFilter<$PrismaModel> | $Enums.TypeDocument
  }

  export type CandidatureScalarRelationFilter = {
    is?: CandidatureWhereInput
    isNot?: CandidatureWhereInput
  }

  export type DocumentCandidatureOrderByRelevanceInput = {
    fields: DocumentCandidatureOrderByRelevanceFieldEnum | DocumentCandidatureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DocumentCandidatureCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    nomFichier?: SortOrder
    cheminFichier?: SortOrder
    estValide?: SortOrder
    commentaire?: SortOrder
    candidatureId?: SortOrder
    creeLe?: SortOrder
  }

  export type DocumentCandidatureMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    nomFichier?: SortOrder
    cheminFichier?: SortOrder
    estValide?: SortOrder
    commentaire?: SortOrder
    candidatureId?: SortOrder
    creeLe?: SortOrder
  }

  export type DocumentCandidatureMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    nomFichier?: SortOrder
    cheminFichier?: SortOrder
    estValide?: SortOrder
    commentaire?: SortOrder
    candidatureId?: SortOrder
    creeLe?: SortOrder
  }

  export type EnumTypeDocumentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDocument | EnumTypeDocumentFieldRefInput<$PrismaModel>
    in?: $Enums.TypeDocument[]
    notIn?: $Enums.TypeDocument[]
    not?: NestedEnumTypeDocumentWithAggregatesFilter<$PrismaModel> | $Enums.TypeDocument
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeDocumentFilter<$PrismaModel>
    _max?: NestedEnumTypeDocumentFilter<$PrismaModel>
  }

  export type EnumDecisionEvaluationFilter<$PrismaModel = never> = {
    equals?: $Enums.DecisionEvaluation | EnumDecisionEvaluationFieldRefInput<$PrismaModel>
    in?: $Enums.DecisionEvaluation[]
    notIn?: $Enums.DecisionEvaluation[]
    not?: NestedEnumDecisionEvaluationFilter<$PrismaModel> | $Enums.DecisionEvaluation
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type EvaluationOrderByRelevanceInput = {
    fields: EvaluationOrderByRelevanceFieldEnum | EvaluationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EvaluationCandidatureIdEvaluateurIdCompoundUniqueInput = {
    candidatureId: string
    evaluateurId: string
  }

  export type EvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    decision?: SortOrder
    commentaire?: SortOrder
    candidatureId?: SortOrder
    evaluateurId?: SortOrder
    creeLe?: SortOrder
  }

  export type EvaluationAvgOrderByAggregateInput = {
    note?: SortOrder
  }

  export type EvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    decision?: SortOrder
    commentaire?: SortOrder
    candidatureId?: SortOrder
    evaluateurId?: SortOrder
    creeLe?: SortOrder
  }

  export type EvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    note?: SortOrder
    decision?: SortOrder
    commentaire?: SortOrder
    candidatureId?: SortOrder
    evaluateurId?: SortOrder
    creeLe?: SortOrder
  }

  export type EvaluationSumOrderByAggregateInput = {
    note?: SortOrder
  }

  export type EnumDecisionEvaluationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DecisionEvaluation | EnumDecisionEvaluationFieldRefInput<$PrismaModel>
    in?: $Enums.DecisionEvaluation[]
    notIn?: $Enums.DecisionEvaluation[]
    not?: NestedEnumDecisionEvaluationWithAggregatesFilter<$PrismaModel> | $Enums.DecisionEvaluation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDecisionEvaluationFilter<$PrismaModel>
    _max?: NestedEnumDecisionEvaluationFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumStatutAttributionFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAttribution | EnumStatutAttributionFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAttribution[]
    notIn?: $Enums.StatutAttribution[]
    not?: NestedEnumStatutAttributionFilter<$PrismaModel> | $Enums.StatutAttribution
  }

  export type PaiementListRelationFilter = {
    every?: PaiementWhereInput
    some?: PaiementWhereInput
    none?: PaiementWhereInput
  }

  export type RenouvellementListRelationFilter = {
    every?: RenouvellementWhereInput
    some?: RenouvellementWhereInput
    none?: RenouvellementWhereInput
  }

  export type PaiementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RenouvellementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttributionBourseOrderByRelevanceInput = {
    fields: AttributionBourseOrderByRelevanceFieldEnum | AttributionBourseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttributionBourseCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    montantAccorde?: SortOrder
    devise?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
    candidatureId?: SortOrder
    etudiantId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type AttributionBourseAvgOrderByAggregateInput = {
    montantAccorde?: SortOrder
  }

  export type AttributionBourseMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    montantAccorde?: SortOrder
    devise?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
    candidatureId?: SortOrder
    etudiantId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type AttributionBourseMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    montantAccorde?: SortOrder
    devise?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
    candidatureId?: SortOrder
    etudiantId?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type AttributionBourseSumOrderByAggregateInput = {
    montantAccorde?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumStatutAttributionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAttribution | EnumStatutAttributionFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAttribution[]
    notIn?: $Enums.StatutAttribution[]
    not?: NestedEnumStatutAttributionWithAggregatesFilter<$PrismaModel> | $Enums.StatutAttribution
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutAttributionFilter<$PrismaModel>
    _max?: NestedEnumStatutAttributionFilter<$PrismaModel>
  }

  export type EnumStatutPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementFilter<$PrismaModel> | $Enums.StatutPaiement
  }

  export type AttributionBourseScalarRelationFilter = {
    is?: AttributionBourseWhereInput
    isNot?: AttributionBourseWhereInput
  }

  export type PaiementOrderByRelevanceInput = {
    fields: PaiementOrderByRelevanceFieldEnum | PaiementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaiementCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    periode?: SortOrder
    montant?: SortOrder
    devise?: SortOrder
    datePrevue?: SortOrder
    datePaiement?: SortOrder
    statut?: SortOrder
    modePaiement?: SortOrder
    preuveUrl?: SortOrder
    attributionId?: SortOrder
    creeLe?: SortOrder
  }

  export type PaiementAvgOrderByAggregateInput = {
    montant?: SortOrder
  }

  export type PaiementMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    periode?: SortOrder
    montant?: SortOrder
    devise?: SortOrder
    datePrevue?: SortOrder
    datePaiement?: SortOrder
    statut?: SortOrder
    modePaiement?: SortOrder
    preuveUrl?: SortOrder
    attributionId?: SortOrder
    creeLe?: SortOrder
  }

  export type PaiementMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    periode?: SortOrder
    montant?: SortOrder
    devise?: SortOrder
    datePrevue?: SortOrder
    datePaiement?: SortOrder
    statut?: SortOrder
    modePaiement?: SortOrder
    preuveUrl?: SortOrder
    attributionId?: SortOrder
    creeLe?: SortOrder
  }

  export type PaiementSumOrderByAggregateInput = {
    montant?: SortOrder
  }

  export type EnumStatutPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel> | $Enums.StatutPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPaiementFilter<$PrismaModel>
    _max?: NestedEnumStatutPaiementFilter<$PrismaModel>
  }

  export type RenouvellementOrderByRelevanceInput = {
    fields: RenouvellementOrderByRelevanceFieldEnum | RenouvellementOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RenouvellementAttributionIdAnneeAcademiqueCompoundUniqueInput = {
    attributionId: string
    anneeAcademique: string
  }

  export type RenouvellementCountOrderByAggregateInput = {
    id?: SortOrder
    anneeAcademique?: SortOrder
    decision?: SortOrder
    commentaire?: SortOrder
    dateDecision?: SortOrder
    attributionId?: SortOrder
    creeLe?: SortOrder
  }

  export type RenouvellementMaxOrderByAggregateInput = {
    id?: SortOrder
    anneeAcademique?: SortOrder
    decision?: SortOrder
    commentaire?: SortOrder
    dateDecision?: SortOrder
    attributionId?: SortOrder
    creeLe?: SortOrder
  }

  export type RenouvellementMinOrderByAggregateInput = {
    id?: SortOrder
    anneeAcademique?: SortOrder
    decision?: SortOrder
    commentaire?: SortOrder
    dateDecision?: SortOrder
    attributionId?: SortOrder
    creeLe?: SortOrder
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    message?: SortOrder
    estLue?: SortOrder
    utilisateurId?: SortOrder
    creeLe?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    message?: SortOrder
    estLue?: SortOrder
    utilisateurId?: SortOrder
    creeLe?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    message?: SortOrder
    estLue?: SortOrder
    utilisateurId?: SortOrder
    creeLe?: SortOrder
  }

  export type ParametreOrderByRelevanceInput = {
    fields: ParametreOrderByRelevanceFieldEnum | ParametreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ParametreCountOrderByAggregateInput = {
    id?: SortOrder
    cle?: SortOrder
    valeur?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type ParametreMaxOrderByAggregateInput = {
    id?: SortOrder
    cle?: SortOrder
    valeur?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type ParametreMinOrderByAggregateInput = {
    id?: SortOrder
    cle?: SortOrder
    valeur?: SortOrder
    creeLe?: SortOrder
    modifieLe?: SortOrder
  }

  export type EtudiantCreateNestedOneWithoutUtilisateurInput = {
    create?: XOR<EtudiantCreateWithoutUtilisateurInput, EtudiantUncheckedCreateWithoutUtilisateurInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutUtilisateurInput
    connect?: EtudiantWhereUniqueInput
  }

  export type EvaluationCreateNestedManyWithoutEvaluateurInput = {
    create?: XOR<EvaluationCreateWithoutEvaluateurInput, EvaluationUncheckedCreateWithoutEvaluateurInput> | EvaluationCreateWithoutEvaluateurInput[] | EvaluationUncheckedCreateWithoutEvaluateurInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutEvaluateurInput | EvaluationCreateOrConnectWithoutEvaluateurInput[]
    createMany?: EvaluationCreateManyEvaluateurInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutEvaluateurInput = {
    create?: XOR<EvaluationCreateWithoutEvaluateurInput, EvaluationUncheckedCreateWithoutEvaluateurInput> | EvaluationCreateWithoutEvaluateurInput[] | EvaluationUncheckedCreateWithoutEvaluateurInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutEvaluateurInput | EvaluationCreateOrConnectWithoutEvaluateurInput[]
    createMany?: EvaluationCreateManyEvaluateurInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleUtilisateurFieldUpdateOperationsInput = {
    set?: $Enums.RoleUtilisateur
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EtudiantUpdateOneWithoutUtilisateurNestedInput = {
    create?: XOR<EtudiantCreateWithoutUtilisateurInput, EtudiantUncheckedCreateWithoutUtilisateurInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutUtilisateurInput
    upsert?: EtudiantUpsertWithoutUtilisateurInput
    disconnect?: EtudiantWhereInput | boolean
    delete?: EtudiantWhereInput | boolean
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutUtilisateurInput, EtudiantUpdateWithoutUtilisateurInput>, EtudiantUncheckedUpdateWithoutUtilisateurInput>
  }

  export type EvaluationUpdateManyWithoutEvaluateurNestedInput = {
    create?: XOR<EvaluationCreateWithoutEvaluateurInput, EvaluationUncheckedCreateWithoutEvaluateurInput> | EvaluationCreateWithoutEvaluateurInput[] | EvaluationUncheckedCreateWithoutEvaluateurInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutEvaluateurInput | EvaluationCreateOrConnectWithoutEvaluateurInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutEvaluateurInput | EvaluationUpsertWithWhereUniqueWithoutEvaluateurInput[]
    createMany?: EvaluationCreateManyEvaluateurInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutEvaluateurInput | EvaluationUpdateWithWhereUniqueWithoutEvaluateurInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutEvaluateurInput | EvaluationUpdateManyWithWhereWithoutEvaluateurInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUtilisateurInput | NotificationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUtilisateurInput | NotificationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUtilisateurInput | NotificationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EvaluationUncheckedUpdateManyWithoutEvaluateurNestedInput = {
    create?: XOR<EvaluationCreateWithoutEvaluateurInput, EvaluationUncheckedCreateWithoutEvaluateurInput> | EvaluationCreateWithoutEvaluateurInput[] | EvaluationUncheckedCreateWithoutEvaluateurInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutEvaluateurInput | EvaluationCreateOrConnectWithoutEvaluateurInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutEvaluateurInput | EvaluationUpsertWithWhereUniqueWithoutEvaluateurInput[]
    createMany?: EvaluationCreateManyEvaluateurInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutEvaluateurInput | EvaluationUpdateWithWhereUniqueWithoutEvaluateurInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutEvaluateurInput | EvaluationUpdateManyWithWhereWithoutEvaluateurInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUtilisateurInput | NotificationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUtilisateurInput | NotificationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUtilisateurInput | NotificationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type EtudiantCreateNestedManyWithoutEtablissementInput = {
    create?: XOR<EtudiantCreateWithoutEtablissementInput, EtudiantUncheckedCreateWithoutEtablissementInput> | EtudiantCreateWithoutEtablissementInput[] | EtudiantUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: EtudiantCreateOrConnectWithoutEtablissementInput | EtudiantCreateOrConnectWithoutEtablissementInput[]
    createMany?: EtudiantCreateManyEtablissementInputEnvelope
    connect?: EtudiantWhereUniqueInput | EtudiantWhereUniqueInput[]
  }

  export type EtudiantUncheckedCreateNestedManyWithoutEtablissementInput = {
    create?: XOR<EtudiantCreateWithoutEtablissementInput, EtudiantUncheckedCreateWithoutEtablissementInput> | EtudiantCreateWithoutEtablissementInput[] | EtudiantUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: EtudiantCreateOrConnectWithoutEtablissementInput | EtudiantCreateOrConnectWithoutEtablissementInput[]
    createMany?: EtudiantCreateManyEtablissementInputEnvelope
    connect?: EtudiantWhereUniqueInput | EtudiantWhereUniqueInput[]
  }

  export type EtudiantUpdateManyWithoutEtablissementNestedInput = {
    create?: XOR<EtudiantCreateWithoutEtablissementInput, EtudiantUncheckedCreateWithoutEtablissementInput> | EtudiantCreateWithoutEtablissementInput[] | EtudiantUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: EtudiantCreateOrConnectWithoutEtablissementInput | EtudiantCreateOrConnectWithoutEtablissementInput[]
    upsert?: EtudiantUpsertWithWhereUniqueWithoutEtablissementInput | EtudiantUpsertWithWhereUniqueWithoutEtablissementInput[]
    createMany?: EtudiantCreateManyEtablissementInputEnvelope
    set?: EtudiantWhereUniqueInput | EtudiantWhereUniqueInput[]
    disconnect?: EtudiantWhereUniqueInput | EtudiantWhereUniqueInput[]
    delete?: EtudiantWhereUniqueInput | EtudiantWhereUniqueInput[]
    connect?: EtudiantWhereUniqueInput | EtudiantWhereUniqueInput[]
    update?: EtudiantUpdateWithWhereUniqueWithoutEtablissementInput | EtudiantUpdateWithWhereUniqueWithoutEtablissementInput[]
    updateMany?: EtudiantUpdateManyWithWhereWithoutEtablissementInput | EtudiantUpdateManyWithWhereWithoutEtablissementInput[]
    deleteMany?: EtudiantScalarWhereInput | EtudiantScalarWhereInput[]
  }

  export type EtudiantUncheckedUpdateManyWithoutEtablissementNestedInput = {
    create?: XOR<EtudiantCreateWithoutEtablissementInput, EtudiantUncheckedCreateWithoutEtablissementInput> | EtudiantCreateWithoutEtablissementInput[] | EtudiantUncheckedCreateWithoutEtablissementInput[]
    connectOrCreate?: EtudiantCreateOrConnectWithoutEtablissementInput | EtudiantCreateOrConnectWithoutEtablissementInput[]
    upsert?: EtudiantUpsertWithWhereUniqueWithoutEtablissementInput | EtudiantUpsertWithWhereUniqueWithoutEtablissementInput[]
    createMany?: EtudiantCreateManyEtablissementInputEnvelope
    set?: EtudiantWhereUniqueInput | EtudiantWhereUniqueInput[]
    disconnect?: EtudiantWhereUniqueInput | EtudiantWhereUniqueInput[]
    delete?: EtudiantWhereUniqueInput | EtudiantWhereUniqueInput[]
    connect?: EtudiantWhereUniqueInput | EtudiantWhereUniqueInput[]
    update?: EtudiantUpdateWithWhereUniqueWithoutEtablissementInput | EtudiantUpdateWithWhereUniqueWithoutEtablissementInput[]
    updateMany?: EtudiantUpdateManyWithWhereWithoutEtablissementInput | EtudiantUpdateManyWithWhereWithoutEtablissementInput[]
    deleteMany?: EtudiantScalarWhereInput | EtudiantScalarWhereInput[]
  }

  export type EtablissementCreateNestedOneWithoutEtudiantsInput = {
    create?: XOR<EtablissementCreateWithoutEtudiantsInput, EtablissementUncheckedCreateWithoutEtudiantsInput>
    connectOrCreate?: EtablissementCreateOrConnectWithoutEtudiantsInput
    connect?: EtablissementWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutEtudiantInput = {
    create?: XOR<UtilisateurCreateWithoutEtudiantInput, UtilisateurUncheckedCreateWithoutEtudiantInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEtudiantInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type CandidatureCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<CandidatureCreateWithoutEtudiantInput, CandidatureUncheckedCreateWithoutEtudiantInput> | CandidatureCreateWithoutEtudiantInput[] | CandidatureUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutEtudiantInput | CandidatureCreateOrConnectWithoutEtudiantInput[]
    createMany?: CandidatureCreateManyEtudiantInputEnvelope
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
  }

  export type AttributionBourseCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<AttributionBourseCreateWithoutEtudiantInput, AttributionBourseUncheckedCreateWithoutEtudiantInput> | AttributionBourseCreateWithoutEtudiantInput[] | AttributionBourseUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutEtudiantInput | AttributionBourseCreateOrConnectWithoutEtudiantInput[]
    createMany?: AttributionBourseCreateManyEtudiantInputEnvelope
    connect?: AttributionBourseWhereUniqueInput | AttributionBourseWhereUniqueInput[]
  }

  export type UtilisateurUncheckedCreateNestedOneWithoutEtudiantInput = {
    create?: XOR<UtilisateurCreateWithoutEtudiantInput, UtilisateurUncheckedCreateWithoutEtudiantInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEtudiantInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type CandidatureUncheckedCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<CandidatureCreateWithoutEtudiantInput, CandidatureUncheckedCreateWithoutEtudiantInput> | CandidatureCreateWithoutEtudiantInput[] | CandidatureUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutEtudiantInput | CandidatureCreateOrConnectWithoutEtudiantInput[]
    createMany?: CandidatureCreateManyEtudiantInputEnvelope
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
  }

  export type AttributionBourseUncheckedCreateNestedManyWithoutEtudiantInput = {
    create?: XOR<AttributionBourseCreateWithoutEtudiantInput, AttributionBourseUncheckedCreateWithoutEtudiantInput> | AttributionBourseCreateWithoutEtudiantInput[] | AttributionBourseUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutEtudiantInput | AttributionBourseCreateOrConnectWithoutEtudiantInput[]
    createMany?: AttributionBourseCreateManyEtudiantInputEnvelope
    connect?: AttributionBourseWhereUniqueInput | AttributionBourseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EtablissementUpdateOneRequiredWithoutEtudiantsNestedInput = {
    create?: XOR<EtablissementCreateWithoutEtudiantsInput, EtablissementUncheckedCreateWithoutEtudiantsInput>
    connectOrCreate?: EtablissementCreateOrConnectWithoutEtudiantsInput
    upsert?: EtablissementUpsertWithoutEtudiantsInput
    connect?: EtablissementWhereUniqueInput
    update?: XOR<XOR<EtablissementUpdateToOneWithWhereWithoutEtudiantsInput, EtablissementUpdateWithoutEtudiantsInput>, EtablissementUncheckedUpdateWithoutEtudiantsInput>
  }

  export type UtilisateurUpdateOneWithoutEtudiantNestedInput = {
    create?: XOR<UtilisateurCreateWithoutEtudiantInput, UtilisateurUncheckedCreateWithoutEtudiantInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEtudiantInput
    upsert?: UtilisateurUpsertWithoutEtudiantInput
    disconnect?: UtilisateurWhereInput | boolean
    delete?: UtilisateurWhereInput | boolean
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutEtudiantInput, UtilisateurUpdateWithoutEtudiantInput>, UtilisateurUncheckedUpdateWithoutEtudiantInput>
  }

  export type CandidatureUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<CandidatureCreateWithoutEtudiantInput, CandidatureUncheckedCreateWithoutEtudiantInput> | CandidatureCreateWithoutEtudiantInput[] | CandidatureUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutEtudiantInput | CandidatureCreateOrConnectWithoutEtudiantInput[]
    upsert?: CandidatureUpsertWithWhereUniqueWithoutEtudiantInput | CandidatureUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: CandidatureCreateManyEtudiantInputEnvelope
    set?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    disconnect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    delete?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    update?: CandidatureUpdateWithWhereUniqueWithoutEtudiantInput | CandidatureUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: CandidatureUpdateManyWithWhereWithoutEtudiantInput | CandidatureUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
  }

  export type AttributionBourseUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<AttributionBourseCreateWithoutEtudiantInput, AttributionBourseUncheckedCreateWithoutEtudiantInput> | AttributionBourseCreateWithoutEtudiantInput[] | AttributionBourseUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutEtudiantInput | AttributionBourseCreateOrConnectWithoutEtudiantInput[]
    upsert?: AttributionBourseUpsertWithWhereUniqueWithoutEtudiantInput | AttributionBourseUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: AttributionBourseCreateManyEtudiantInputEnvelope
    set?: AttributionBourseWhereUniqueInput | AttributionBourseWhereUniqueInput[]
    disconnect?: AttributionBourseWhereUniqueInput | AttributionBourseWhereUniqueInput[]
    delete?: AttributionBourseWhereUniqueInput | AttributionBourseWhereUniqueInput[]
    connect?: AttributionBourseWhereUniqueInput | AttributionBourseWhereUniqueInput[]
    update?: AttributionBourseUpdateWithWhereUniqueWithoutEtudiantInput | AttributionBourseUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: AttributionBourseUpdateManyWithWhereWithoutEtudiantInput | AttributionBourseUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: AttributionBourseScalarWhereInput | AttributionBourseScalarWhereInput[]
  }

  export type UtilisateurUncheckedUpdateOneWithoutEtudiantNestedInput = {
    create?: XOR<UtilisateurCreateWithoutEtudiantInput, UtilisateurUncheckedCreateWithoutEtudiantInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEtudiantInput
    upsert?: UtilisateurUpsertWithoutEtudiantInput
    disconnect?: UtilisateurWhereInput | boolean
    delete?: UtilisateurWhereInput | boolean
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutEtudiantInput, UtilisateurUpdateWithoutEtudiantInput>, UtilisateurUncheckedUpdateWithoutEtudiantInput>
  }

  export type CandidatureUncheckedUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<CandidatureCreateWithoutEtudiantInput, CandidatureUncheckedCreateWithoutEtudiantInput> | CandidatureCreateWithoutEtudiantInput[] | CandidatureUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutEtudiantInput | CandidatureCreateOrConnectWithoutEtudiantInput[]
    upsert?: CandidatureUpsertWithWhereUniqueWithoutEtudiantInput | CandidatureUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: CandidatureCreateManyEtudiantInputEnvelope
    set?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    disconnect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    delete?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    update?: CandidatureUpdateWithWhereUniqueWithoutEtudiantInput | CandidatureUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: CandidatureUpdateManyWithWhereWithoutEtudiantInput | CandidatureUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
  }

  export type AttributionBourseUncheckedUpdateManyWithoutEtudiantNestedInput = {
    create?: XOR<AttributionBourseCreateWithoutEtudiantInput, AttributionBourseUncheckedCreateWithoutEtudiantInput> | AttributionBourseCreateWithoutEtudiantInput[] | AttributionBourseUncheckedCreateWithoutEtudiantInput[]
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutEtudiantInput | AttributionBourseCreateOrConnectWithoutEtudiantInput[]
    upsert?: AttributionBourseUpsertWithWhereUniqueWithoutEtudiantInput | AttributionBourseUpsertWithWhereUniqueWithoutEtudiantInput[]
    createMany?: AttributionBourseCreateManyEtudiantInputEnvelope
    set?: AttributionBourseWhereUniqueInput | AttributionBourseWhereUniqueInput[]
    disconnect?: AttributionBourseWhereUniqueInput | AttributionBourseWhereUniqueInput[]
    delete?: AttributionBourseWhereUniqueInput | AttributionBourseWhereUniqueInput[]
    connect?: AttributionBourseWhereUniqueInput | AttributionBourseWhereUniqueInput[]
    update?: AttributionBourseUpdateWithWhereUniqueWithoutEtudiantInput | AttributionBourseUpdateWithWhereUniqueWithoutEtudiantInput[]
    updateMany?: AttributionBourseUpdateManyWithWhereWithoutEtudiantInput | AttributionBourseUpdateManyWithWhereWithoutEtudiantInput[]
    deleteMany?: AttributionBourseScalarWhereInput | AttributionBourseScalarWhereInput[]
  }

  export type AppelCandidatureCreateNestedManyWithoutProgrammeInput = {
    create?: XOR<AppelCandidatureCreateWithoutProgrammeInput, AppelCandidatureUncheckedCreateWithoutProgrammeInput> | AppelCandidatureCreateWithoutProgrammeInput[] | AppelCandidatureUncheckedCreateWithoutProgrammeInput[]
    connectOrCreate?: AppelCandidatureCreateOrConnectWithoutProgrammeInput | AppelCandidatureCreateOrConnectWithoutProgrammeInput[]
    createMany?: AppelCandidatureCreateManyProgrammeInputEnvelope
    connect?: AppelCandidatureWhereUniqueInput | AppelCandidatureWhereUniqueInput[]
  }

  export type AppelCandidatureUncheckedCreateNestedManyWithoutProgrammeInput = {
    create?: XOR<AppelCandidatureCreateWithoutProgrammeInput, AppelCandidatureUncheckedCreateWithoutProgrammeInput> | AppelCandidatureCreateWithoutProgrammeInput[] | AppelCandidatureUncheckedCreateWithoutProgrammeInput[]
    connectOrCreate?: AppelCandidatureCreateOrConnectWithoutProgrammeInput | AppelCandidatureCreateOrConnectWithoutProgrammeInput[]
    createMany?: AppelCandidatureCreateManyProgrammeInputEnvelope
    connect?: AppelCandidatureWhereUniqueInput | AppelCandidatureWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AppelCandidatureUpdateManyWithoutProgrammeNestedInput = {
    create?: XOR<AppelCandidatureCreateWithoutProgrammeInput, AppelCandidatureUncheckedCreateWithoutProgrammeInput> | AppelCandidatureCreateWithoutProgrammeInput[] | AppelCandidatureUncheckedCreateWithoutProgrammeInput[]
    connectOrCreate?: AppelCandidatureCreateOrConnectWithoutProgrammeInput | AppelCandidatureCreateOrConnectWithoutProgrammeInput[]
    upsert?: AppelCandidatureUpsertWithWhereUniqueWithoutProgrammeInput | AppelCandidatureUpsertWithWhereUniqueWithoutProgrammeInput[]
    createMany?: AppelCandidatureCreateManyProgrammeInputEnvelope
    set?: AppelCandidatureWhereUniqueInput | AppelCandidatureWhereUniqueInput[]
    disconnect?: AppelCandidatureWhereUniqueInput | AppelCandidatureWhereUniqueInput[]
    delete?: AppelCandidatureWhereUniqueInput | AppelCandidatureWhereUniqueInput[]
    connect?: AppelCandidatureWhereUniqueInput | AppelCandidatureWhereUniqueInput[]
    update?: AppelCandidatureUpdateWithWhereUniqueWithoutProgrammeInput | AppelCandidatureUpdateWithWhereUniqueWithoutProgrammeInput[]
    updateMany?: AppelCandidatureUpdateManyWithWhereWithoutProgrammeInput | AppelCandidatureUpdateManyWithWhereWithoutProgrammeInput[]
    deleteMany?: AppelCandidatureScalarWhereInput | AppelCandidatureScalarWhereInput[]
  }

  export type AppelCandidatureUncheckedUpdateManyWithoutProgrammeNestedInput = {
    create?: XOR<AppelCandidatureCreateWithoutProgrammeInput, AppelCandidatureUncheckedCreateWithoutProgrammeInput> | AppelCandidatureCreateWithoutProgrammeInput[] | AppelCandidatureUncheckedCreateWithoutProgrammeInput[]
    connectOrCreate?: AppelCandidatureCreateOrConnectWithoutProgrammeInput | AppelCandidatureCreateOrConnectWithoutProgrammeInput[]
    upsert?: AppelCandidatureUpsertWithWhereUniqueWithoutProgrammeInput | AppelCandidatureUpsertWithWhereUniqueWithoutProgrammeInput[]
    createMany?: AppelCandidatureCreateManyProgrammeInputEnvelope
    set?: AppelCandidatureWhereUniqueInput | AppelCandidatureWhereUniqueInput[]
    disconnect?: AppelCandidatureWhereUniqueInput | AppelCandidatureWhereUniqueInput[]
    delete?: AppelCandidatureWhereUniqueInput | AppelCandidatureWhereUniqueInput[]
    connect?: AppelCandidatureWhereUniqueInput | AppelCandidatureWhereUniqueInput[]
    update?: AppelCandidatureUpdateWithWhereUniqueWithoutProgrammeInput | AppelCandidatureUpdateWithWhereUniqueWithoutProgrammeInput[]
    updateMany?: AppelCandidatureUpdateManyWithWhereWithoutProgrammeInput | AppelCandidatureUpdateManyWithWhereWithoutProgrammeInput[]
    deleteMany?: AppelCandidatureScalarWhereInput | AppelCandidatureScalarWhereInput[]
  }

  export type ProgrammeBourseCreateNestedOneWithoutAppelsInput = {
    create?: XOR<ProgrammeBourseCreateWithoutAppelsInput, ProgrammeBourseUncheckedCreateWithoutAppelsInput>
    connectOrCreate?: ProgrammeBourseCreateOrConnectWithoutAppelsInput
    connect?: ProgrammeBourseWhereUniqueInput
  }

  export type CandidatureCreateNestedManyWithoutAppelInput = {
    create?: XOR<CandidatureCreateWithoutAppelInput, CandidatureUncheckedCreateWithoutAppelInput> | CandidatureCreateWithoutAppelInput[] | CandidatureUncheckedCreateWithoutAppelInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutAppelInput | CandidatureCreateOrConnectWithoutAppelInput[]
    createMany?: CandidatureCreateManyAppelInputEnvelope
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
  }

  export type CandidatureUncheckedCreateNestedManyWithoutAppelInput = {
    create?: XOR<CandidatureCreateWithoutAppelInput, CandidatureUncheckedCreateWithoutAppelInput> | CandidatureCreateWithoutAppelInput[] | CandidatureUncheckedCreateWithoutAppelInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutAppelInput | CandidatureCreateOrConnectWithoutAppelInput[]
    createMany?: CandidatureCreateManyAppelInputEnvelope
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProgrammeBourseUpdateOneRequiredWithoutAppelsNestedInput = {
    create?: XOR<ProgrammeBourseCreateWithoutAppelsInput, ProgrammeBourseUncheckedCreateWithoutAppelsInput>
    connectOrCreate?: ProgrammeBourseCreateOrConnectWithoutAppelsInput
    upsert?: ProgrammeBourseUpsertWithoutAppelsInput
    connect?: ProgrammeBourseWhereUniqueInput
    update?: XOR<XOR<ProgrammeBourseUpdateToOneWithWhereWithoutAppelsInput, ProgrammeBourseUpdateWithoutAppelsInput>, ProgrammeBourseUncheckedUpdateWithoutAppelsInput>
  }

  export type CandidatureUpdateManyWithoutAppelNestedInput = {
    create?: XOR<CandidatureCreateWithoutAppelInput, CandidatureUncheckedCreateWithoutAppelInput> | CandidatureCreateWithoutAppelInput[] | CandidatureUncheckedCreateWithoutAppelInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutAppelInput | CandidatureCreateOrConnectWithoutAppelInput[]
    upsert?: CandidatureUpsertWithWhereUniqueWithoutAppelInput | CandidatureUpsertWithWhereUniqueWithoutAppelInput[]
    createMany?: CandidatureCreateManyAppelInputEnvelope
    set?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    disconnect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    delete?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    update?: CandidatureUpdateWithWhereUniqueWithoutAppelInput | CandidatureUpdateWithWhereUniqueWithoutAppelInput[]
    updateMany?: CandidatureUpdateManyWithWhereWithoutAppelInput | CandidatureUpdateManyWithWhereWithoutAppelInput[]
    deleteMany?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
  }

  export type CandidatureUncheckedUpdateManyWithoutAppelNestedInput = {
    create?: XOR<CandidatureCreateWithoutAppelInput, CandidatureUncheckedCreateWithoutAppelInput> | CandidatureCreateWithoutAppelInput[] | CandidatureUncheckedCreateWithoutAppelInput[]
    connectOrCreate?: CandidatureCreateOrConnectWithoutAppelInput | CandidatureCreateOrConnectWithoutAppelInput[]
    upsert?: CandidatureUpsertWithWhereUniqueWithoutAppelInput | CandidatureUpsertWithWhereUniqueWithoutAppelInput[]
    createMany?: CandidatureCreateManyAppelInputEnvelope
    set?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    disconnect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    delete?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    connect?: CandidatureWhereUniqueInput | CandidatureWhereUniqueInput[]
    update?: CandidatureUpdateWithWhereUniqueWithoutAppelInput | CandidatureUpdateWithWhereUniqueWithoutAppelInput[]
    updateMany?: CandidatureUpdateManyWithWhereWithoutAppelInput | CandidatureUpdateManyWithWhereWithoutAppelInput[]
    deleteMany?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
  }

  export type EtudiantCreateNestedOneWithoutCandidaturesInput = {
    create?: XOR<EtudiantCreateWithoutCandidaturesInput, EtudiantUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutCandidaturesInput
    connect?: EtudiantWhereUniqueInput
  }

  export type AppelCandidatureCreateNestedOneWithoutCandidaturesInput = {
    create?: XOR<AppelCandidatureCreateWithoutCandidaturesInput, AppelCandidatureUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: AppelCandidatureCreateOrConnectWithoutCandidaturesInput
    connect?: AppelCandidatureWhereUniqueInput
  }

  export type DocumentCandidatureCreateNestedManyWithoutCandidatureInput = {
    create?: XOR<DocumentCandidatureCreateWithoutCandidatureInput, DocumentCandidatureUncheckedCreateWithoutCandidatureInput> | DocumentCandidatureCreateWithoutCandidatureInput[] | DocumentCandidatureUncheckedCreateWithoutCandidatureInput[]
    connectOrCreate?: DocumentCandidatureCreateOrConnectWithoutCandidatureInput | DocumentCandidatureCreateOrConnectWithoutCandidatureInput[]
    createMany?: DocumentCandidatureCreateManyCandidatureInputEnvelope
    connect?: DocumentCandidatureWhereUniqueInput | DocumentCandidatureWhereUniqueInput[]
  }

  export type EvaluationCreateNestedManyWithoutCandidatureInput = {
    create?: XOR<EvaluationCreateWithoutCandidatureInput, EvaluationUncheckedCreateWithoutCandidatureInput> | EvaluationCreateWithoutCandidatureInput[] | EvaluationUncheckedCreateWithoutCandidatureInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCandidatureInput | EvaluationCreateOrConnectWithoutCandidatureInput[]
    createMany?: EvaluationCreateManyCandidatureInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type AttributionBourseCreateNestedOneWithoutCandidatureInput = {
    create?: XOR<AttributionBourseCreateWithoutCandidatureInput, AttributionBourseUncheckedCreateWithoutCandidatureInput>
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutCandidatureInput
    connect?: AttributionBourseWhereUniqueInput
  }

  export type DocumentCandidatureUncheckedCreateNestedManyWithoutCandidatureInput = {
    create?: XOR<DocumentCandidatureCreateWithoutCandidatureInput, DocumentCandidatureUncheckedCreateWithoutCandidatureInput> | DocumentCandidatureCreateWithoutCandidatureInput[] | DocumentCandidatureUncheckedCreateWithoutCandidatureInput[]
    connectOrCreate?: DocumentCandidatureCreateOrConnectWithoutCandidatureInput | DocumentCandidatureCreateOrConnectWithoutCandidatureInput[]
    createMany?: DocumentCandidatureCreateManyCandidatureInputEnvelope
    connect?: DocumentCandidatureWhereUniqueInput | DocumentCandidatureWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutCandidatureInput = {
    create?: XOR<EvaluationCreateWithoutCandidatureInput, EvaluationUncheckedCreateWithoutCandidatureInput> | EvaluationCreateWithoutCandidatureInput[] | EvaluationUncheckedCreateWithoutCandidatureInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCandidatureInput | EvaluationCreateOrConnectWithoutCandidatureInput[]
    createMany?: EvaluationCreateManyCandidatureInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type AttributionBourseUncheckedCreateNestedOneWithoutCandidatureInput = {
    create?: XOR<AttributionBourseCreateWithoutCandidatureInput, AttributionBourseUncheckedCreateWithoutCandidatureInput>
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutCandidatureInput
    connect?: AttributionBourseWhereUniqueInput
  }

  export type EnumStatutCandidatureFieldUpdateOperationsInput = {
    set?: $Enums.StatutCandidature
  }

  export type EtudiantUpdateOneRequiredWithoutCandidaturesNestedInput = {
    create?: XOR<EtudiantCreateWithoutCandidaturesInput, EtudiantUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutCandidaturesInput
    upsert?: EtudiantUpsertWithoutCandidaturesInput
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutCandidaturesInput, EtudiantUpdateWithoutCandidaturesInput>, EtudiantUncheckedUpdateWithoutCandidaturesInput>
  }

  export type AppelCandidatureUpdateOneRequiredWithoutCandidaturesNestedInput = {
    create?: XOR<AppelCandidatureCreateWithoutCandidaturesInput, AppelCandidatureUncheckedCreateWithoutCandidaturesInput>
    connectOrCreate?: AppelCandidatureCreateOrConnectWithoutCandidaturesInput
    upsert?: AppelCandidatureUpsertWithoutCandidaturesInput
    connect?: AppelCandidatureWhereUniqueInput
    update?: XOR<XOR<AppelCandidatureUpdateToOneWithWhereWithoutCandidaturesInput, AppelCandidatureUpdateWithoutCandidaturesInput>, AppelCandidatureUncheckedUpdateWithoutCandidaturesInput>
  }

  export type DocumentCandidatureUpdateManyWithoutCandidatureNestedInput = {
    create?: XOR<DocumentCandidatureCreateWithoutCandidatureInput, DocumentCandidatureUncheckedCreateWithoutCandidatureInput> | DocumentCandidatureCreateWithoutCandidatureInput[] | DocumentCandidatureUncheckedCreateWithoutCandidatureInput[]
    connectOrCreate?: DocumentCandidatureCreateOrConnectWithoutCandidatureInput | DocumentCandidatureCreateOrConnectWithoutCandidatureInput[]
    upsert?: DocumentCandidatureUpsertWithWhereUniqueWithoutCandidatureInput | DocumentCandidatureUpsertWithWhereUniqueWithoutCandidatureInput[]
    createMany?: DocumentCandidatureCreateManyCandidatureInputEnvelope
    set?: DocumentCandidatureWhereUniqueInput | DocumentCandidatureWhereUniqueInput[]
    disconnect?: DocumentCandidatureWhereUniqueInput | DocumentCandidatureWhereUniqueInput[]
    delete?: DocumentCandidatureWhereUniqueInput | DocumentCandidatureWhereUniqueInput[]
    connect?: DocumentCandidatureWhereUniqueInput | DocumentCandidatureWhereUniqueInput[]
    update?: DocumentCandidatureUpdateWithWhereUniqueWithoutCandidatureInput | DocumentCandidatureUpdateWithWhereUniqueWithoutCandidatureInput[]
    updateMany?: DocumentCandidatureUpdateManyWithWhereWithoutCandidatureInput | DocumentCandidatureUpdateManyWithWhereWithoutCandidatureInput[]
    deleteMany?: DocumentCandidatureScalarWhereInput | DocumentCandidatureScalarWhereInput[]
  }

  export type EvaluationUpdateManyWithoutCandidatureNestedInput = {
    create?: XOR<EvaluationCreateWithoutCandidatureInput, EvaluationUncheckedCreateWithoutCandidatureInput> | EvaluationCreateWithoutCandidatureInput[] | EvaluationUncheckedCreateWithoutCandidatureInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCandidatureInput | EvaluationCreateOrConnectWithoutCandidatureInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutCandidatureInput | EvaluationUpsertWithWhereUniqueWithoutCandidatureInput[]
    createMany?: EvaluationCreateManyCandidatureInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutCandidatureInput | EvaluationUpdateWithWhereUniqueWithoutCandidatureInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutCandidatureInput | EvaluationUpdateManyWithWhereWithoutCandidatureInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type AttributionBourseUpdateOneWithoutCandidatureNestedInput = {
    create?: XOR<AttributionBourseCreateWithoutCandidatureInput, AttributionBourseUncheckedCreateWithoutCandidatureInput>
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutCandidatureInput
    upsert?: AttributionBourseUpsertWithoutCandidatureInput
    disconnect?: AttributionBourseWhereInput | boolean
    delete?: AttributionBourseWhereInput | boolean
    connect?: AttributionBourseWhereUniqueInput
    update?: XOR<XOR<AttributionBourseUpdateToOneWithWhereWithoutCandidatureInput, AttributionBourseUpdateWithoutCandidatureInput>, AttributionBourseUncheckedUpdateWithoutCandidatureInput>
  }

  export type DocumentCandidatureUncheckedUpdateManyWithoutCandidatureNestedInput = {
    create?: XOR<DocumentCandidatureCreateWithoutCandidatureInput, DocumentCandidatureUncheckedCreateWithoutCandidatureInput> | DocumentCandidatureCreateWithoutCandidatureInput[] | DocumentCandidatureUncheckedCreateWithoutCandidatureInput[]
    connectOrCreate?: DocumentCandidatureCreateOrConnectWithoutCandidatureInput | DocumentCandidatureCreateOrConnectWithoutCandidatureInput[]
    upsert?: DocumentCandidatureUpsertWithWhereUniqueWithoutCandidatureInput | DocumentCandidatureUpsertWithWhereUniqueWithoutCandidatureInput[]
    createMany?: DocumentCandidatureCreateManyCandidatureInputEnvelope
    set?: DocumentCandidatureWhereUniqueInput | DocumentCandidatureWhereUniqueInput[]
    disconnect?: DocumentCandidatureWhereUniqueInput | DocumentCandidatureWhereUniqueInput[]
    delete?: DocumentCandidatureWhereUniqueInput | DocumentCandidatureWhereUniqueInput[]
    connect?: DocumentCandidatureWhereUniqueInput | DocumentCandidatureWhereUniqueInput[]
    update?: DocumentCandidatureUpdateWithWhereUniqueWithoutCandidatureInput | DocumentCandidatureUpdateWithWhereUniqueWithoutCandidatureInput[]
    updateMany?: DocumentCandidatureUpdateManyWithWhereWithoutCandidatureInput | DocumentCandidatureUpdateManyWithWhereWithoutCandidatureInput[]
    deleteMany?: DocumentCandidatureScalarWhereInput | DocumentCandidatureScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutCandidatureNestedInput = {
    create?: XOR<EvaluationCreateWithoutCandidatureInput, EvaluationUncheckedCreateWithoutCandidatureInput> | EvaluationCreateWithoutCandidatureInput[] | EvaluationUncheckedCreateWithoutCandidatureInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutCandidatureInput | EvaluationCreateOrConnectWithoutCandidatureInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutCandidatureInput | EvaluationUpsertWithWhereUniqueWithoutCandidatureInput[]
    createMany?: EvaluationCreateManyCandidatureInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutCandidatureInput | EvaluationUpdateWithWhereUniqueWithoutCandidatureInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutCandidatureInput | EvaluationUpdateManyWithWhereWithoutCandidatureInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type AttributionBourseUncheckedUpdateOneWithoutCandidatureNestedInput = {
    create?: XOR<AttributionBourseCreateWithoutCandidatureInput, AttributionBourseUncheckedCreateWithoutCandidatureInput>
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutCandidatureInput
    upsert?: AttributionBourseUpsertWithoutCandidatureInput
    disconnect?: AttributionBourseWhereInput | boolean
    delete?: AttributionBourseWhereInput | boolean
    connect?: AttributionBourseWhereUniqueInput
    update?: XOR<XOR<AttributionBourseUpdateToOneWithWhereWithoutCandidatureInput, AttributionBourseUpdateWithoutCandidatureInput>, AttributionBourseUncheckedUpdateWithoutCandidatureInput>
  }

  export type CandidatureCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<CandidatureCreateWithoutDocumentsInput, CandidatureUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CandidatureCreateOrConnectWithoutDocumentsInput
    connect?: CandidatureWhereUniqueInput
  }

  export type EnumTypeDocumentFieldUpdateOperationsInput = {
    set?: $Enums.TypeDocument
  }

  export type CandidatureUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<CandidatureCreateWithoutDocumentsInput, CandidatureUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: CandidatureCreateOrConnectWithoutDocumentsInput
    upsert?: CandidatureUpsertWithoutDocumentsInput
    connect?: CandidatureWhereUniqueInput
    update?: XOR<XOR<CandidatureUpdateToOneWithWhereWithoutDocumentsInput, CandidatureUpdateWithoutDocumentsInput>, CandidatureUncheckedUpdateWithoutDocumentsInput>
  }

  export type CandidatureCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<CandidatureCreateWithoutEvaluationsInput, CandidatureUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: CandidatureCreateOrConnectWithoutEvaluationsInput
    connect?: CandidatureWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<UtilisateurCreateWithoutEvaluationsInput, UtilisateurUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEvaluationsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type EnumDecisionEvaluationFieldUpdateOperationsInput = {
    set?: $Enums.DecisionEvaluation
  }

  export type CandidatureUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<CandidatureCreateWithoutEvaluationsInput, CandidatureUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: CandidatureCreateOrConnectWithoutEvaluationsInput
    upsert?: CandidatureUpsertWithoutEvaluationsInput
    connect?: CandidatureWhereUniqueInput
    update?: XOR<XOR<CandidatureUpdateToOneWithWhereWithoutEvaluationsInput, CandidatureUpdateWithoutEvaluationsInput>, CandidatureUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutEvaluationsInput, UtilisateurUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutEvaluationsInput
    upsert?: UtilisateurUpsertWithoutEvaluationsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutEvaluationsInput, UtilisateurUpdateWithoutEvaluationsInput>, UtilisateurUncheckedUpdateWithoutEvaluationsInput>
  }

  export type CandidatureCreateNestedOneWithoutAttributionInput = {
    create?: XOR<CandidatureCreateWithoutAttributionInput, CandidatureUncheckedCreateWithoutAttributionInput>
    connectOrCreate?: CandidatureCreateOrConnectWithoutAttributionInput
    connect?: CandidatureWhereUniqueInput
  }

  export type EtudiantCreateNestedOneWithoutAttributionsInput = {
    create?: XOR<EtudiantCreateWithoutAttributionsInput, EtudiantUncheckedCreateWithoutAttributionsInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutAttributionsInput
    connect?: EtudiantWhereUniqueInput
  }

  export type PaiementCreateNestedManyWithoutAttributionInput = {
    create?: XOR<PaiementCreateWithoutAttributionInput, PaiementUncheckedCreateWithoutAttributionInput> | PaiementCreateWithoutAttributionInput[] | PaiementUncheckedCreateWithoutAttributionInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutAttributionInput | PaiementCreateOrConnectWithoutAttributionInput[]
    createMany?: PaiementCreateManyAttributionInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type RenouvellementCreateNestedManyWithoutAttributionInput = {
    create?: XOR<RenouvellementCreateWithoutAttributionInput, RenouvellementUncheckedCreateWithoutAttributionInput> | RenouvellementCreateWithoutAttributionInput[] | RenouvellementUncheckedCreateWithoutAttributionInput[]
    connectOrCreate?: RenouvellementCreateOrConnectWithoutAttributionInput | RenouvellementCreateOrConnectWithoutAttributionInput[]
    createMany?: RenouvellementCreateManyAttributionInputEnvelope
    connect?: RenouvellementWhereUniqueInput | RenouvellementWhereUniqueInput[]
  }

  export type PaiementUncheckedCreateNestedManyWithoutAttributionInput = {
    create?: XOR<PaiementCreateWithoutAttributionInput, PaiementUncheckedCreateWithoutAttributionInput> | PaiementCreateWithoutAttributionInput[] | PaiementUncheckedCreateWithoutAttributionInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutAttributionInput | PaiementCreateOrConnectWithoutAttributionInput[]
    createMany?: PaiementCreateManyAttributionInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type RenouvellementUncheckedCreateNestedManyWithoutAttributionInput = {
    create?: XOR<RenouvellementCreateWithoutAttributionInput, RenouvellementUncheckedCreateWithoutAttributionInput> | RenouvellementCreateWithoutAttributionInput[] | RenouvellementUncheckedCreateWithoutAttributionInput[]
    connectOrCreate?: RenouvellementCreateOrConnectWithoutAttributionInput | RenouvellementCreateOrConnectWithoutAttributionInput[]
    createMany?: RenouvellementCreateManyAttributionInputEnvelope
    connect?: RenouvellementWhereUniqueInput | RenouvellementWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumStatutAttributionFieldUpdateOperationsInput = {
    set?: $Enums.StatutAttribution
  }

  export type CandidatureUpdateOneRequiredWithoutAttributionNestedInput = {
    create?: XOR<CandidatureCreateWithoutAttributionInput, CandidatureUncheckedCreateWithoutAttributionInput>
    connectOrCreate?: CandidatureCreateOrConnectWithoutAttributionInput
    upsert?: CandidatureUpsertWithoutAttributionInput
    connect?: CandidatureWhereUniqueInput
    update?: XOR<XOR<CandidatureUpdateToOneWithWhereWithoutAttributionInput, CandidatureUpdateWithoutAttributionInput>, CandidatureUncheckedUpdateWithoutAttributionInput>
  }

  export type EtudiantUpdateOneRequiredWithoutAttributionsNestedInput = {
    create?: XOR<EtudiantCreateWithoutAttributionsInput, EtudiantUncheckedCreateWithoutAttributionsInput>
    connectOrCreate?: EtudiantCreateOrConnectWithoutAttributionsInput
    upsert?: EtudiantUpsertWithoutAttributionsInput
    connect?: EtudiantWhereUniqueInput
    update?: XOR<XOR<EtudiantUpdateToOneWithWhereWithoutAttributionsInput, EtudiantUpdateWithoutAttributionsInput>, EtudiantUncheckedUpdateWithoutAttributionsInput>
  }

  export type PaiementUpdateManyWithoutAttributionNestedInput = {
    create?: XOR<PaiementCreateWithoutAttributionInput, PaiementUncheckedCreateWithoutAttributionInput> | PaiementCreateWithoutAttributionInput[] | PaiementUncheckedCreateWithoutAttributionInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutAttributionInput | PaiementCreateOrConnectWithoutAttributionInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutAttributionInput | PaiementUpsertWithWhereUniqueWithoutAttributionInput[]
    createMany?: PaiementCreateManyAttributionInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutAttributionInput | PaiementUpdateWithWhereUniqueWithoutAttributionInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutAttributionInput | PaiementUpdateManyWithWhereWithoutAttributionInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type RenouvellementUpdateManyWithoutAttributionNestedInput = {
    create?: XOR<RenouvellementCreateWithoutAttributionInput, RenouvellementUncheckedCreateWithoutAttributionInput> | RenouvellementCreateWithoutAttributionInput[] | RenouvellementUncheckedCreateWithoutAttributionInput[]
    connectOrCreate?: RenouvellementCreateOrConnectWithoutAttributionInput | RenouvellementCreateOrConnectWithoutAttributionInput[]
    upsert?: RenouvellementUpsertWithWhereUniqueWithoutAttributionInput | RenouvellementUpsertWithWhereUniqueWithoutAttributionInput[]
    createMany?: RenouvellementCreateManyAttributionInputEnvelope
    set?: RenouvellementWhereUniqueInput | RenouvellementWhereUniqueInput[]
    disconnect?: RenouvellementWhereUniqueInput | RenouvellementWhereUniqueInput[]
    delete?: RenouvellementWhereUniqueInput | RenouvellementWhereUniqueInput[]
    connect?: RenouvellementWhereUniqueInput | RenouvellementWhereUniqueInput[]
    update?: RenouvellementUpdateWithWhereUniqueWithoutAttributionInput | RenouvellementUpdateWithWhereUniqueWithoutAttributionInput[]
    updateMany?: RenouvellementUpdateManyWithWhereWithoutAttributionInput | RenouvellementUpdateManyWithWhereWithoutAttributionInput[]
    deleteMany?: RenouvellementScalarWhereInput | RenouvellementScalarWhereInput[]
  }

  export type PaiementUncheckedUpdateManyWithoutAttributionNestedInput = {
    create?: XOR<PaiementCreateWithoutAttributionInput, PaiementUncheckedCreateWithoutAttributionInput> | PaiementCreateWithoutAttributionInput[] | PaiementUncheckedCreateWithoutAttributionInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutAttributionInput | PaiementCreateOrConnectWithoutAttributionInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutAttributionInput | PaiementUpsertWithWhereUniqueWithoutAttributionInput[]
    createMany?: PaiementCreateManyAttributionInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutAttributionInput | PaiementUpdateWithWhereUniqueWithoutAttributionInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutAttributionInput | PaiementUpdateManyWithWhereWithoutAttributionInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type RenouvellementUncheckedUpdateManyWithoutAttributionNestedInput = {
    create?: XOR<RenouvellementCreateWithoutAttributionInput, RenouvellementUncheckedCreateWithoutAttributionInput> | RenouvellementCreateWithoutAttributionInput[] | RenouvellementUncheckedCreateWithoutAttributionInput[]
    connectOrCreate?: RenouvellementCreateOrConnectWithoutAttributionInput | RenouvellementCreateOrConnectWithoutAttributionInput[]
    upsert?: RenouvellementUpsertWithWhereUniqueWithoutAttributionInput | RenouvellementUpsertWithWhereUniqueWithoutAttributionInput[]
    createMany?: RenouvellementCreateManyAttributionInputEnvelope
    set?: RenouvellementWhereUniqueInput | RenouvellementWhereUniqueInput[]
    disconnect?: RenouvellementWhereUniqueInput | RenouvellementWhereUniqueInput[]
    delete?: RenouvellementWhereUniqueInput | RenouvellementWhereUniqueInput[]
    connect?: RenouvellementWhereUniqueInput | RenouvellementWhereUniqueInput[]
    update?: RenouvellementUpdateWithWhereUniqueWithoutAttributionInput | RenouvellementUpdateWithWhereUniqueWithoutAttributionInput[]
    updateMany?: RenouvellementUpdateManyWithWhereWithoutAttributionInput | RenouvellementUpdateManyWithWhereWithoutAttributionInput[]
    deleteMany?: RenouvellementScalarWhereInput | RenouvellementScalarWhereInput[]
  }

  export type AttributionBourseCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<AttributionBourseCreateWithoutPaiementsInput, AttributionBourseUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutPaiementsInput
    connect?: AttributionBourseWhereUniqueInput
  }

  export type EnumStatutPaiementFieldUpdateOperationsInput = {
    set?: $Enums.StatutPaiement
  }

  export type AttributionBourseUpdateOneRequiredWithoutPaiementsNestedInput = {
    create?: XOR<AttributionBourseCreateWithoutPaiementsInput, AttributionBourseUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutPaiementsInput
    upsert?: AttributionBourseUpsertWithoutPaiementsInput
    connect?: AttributionBourseWhereUniqueInput
    update?: XOR<XOR<AttributionBourseUpdateToOneWithWhereWithoutPaiementsInput, AttributionBourseUpdateWithoutPaiementsInput>, AttributionBourseUncheckedUpdateWithoutPaiementsInput>
  }

  export type AttributionBourseCreateNestedOneWithoutRenouvellementsInput = {
    create?: XOR<AttributionBourseCreateWithoutRenouvellementsInput, AttributionBourseUncheckedCreateWithoutRenouvellementsInput>
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutRenouvellementsInput
    connect?: AttributionBourseWhereUniqueInput
  }

  export type AttributionBourseUpdateOneRequiredWithoutRenouvellementsNestedInput = {
    create?: XOR<AttributionBourseCreateWithoutRenouvellementsInput, AttributionBourseUncheckedCreateWithoutRenouvellementsInput>
    connectOrCreate?: AttributionBourseCreateOrConnectWithoutRenouvellementsInput
    upsert?: AttributionBourseUpsertWithoutRenouvellementsInput
    connect?: AttributionBourseWhereUniqueInput
    update?: XOR<XOR<AttributionBourseUpdateToOneWithWhereWithoutRenouvellementsInput, AttributionBourseUpdateWithoutRenouvellementsInput>, AttributionBourseUncheckedUpdateWithoutRenouvellementsInput>
  }

  export type UtilisateurCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutNotificationsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutNotificationsInput
    upsert?: UtilisateurUpsertWithoutNotificationsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutNotificationsInput, UtilisateurUpdateWithoutNotificationsInput>, UtilisateurUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleUtilisateurFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | EnumRoleUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUtilisateur[]
    notIn?: $Enums.RoleUtilisateur[]
    not?: NestedEnumRoleUtilisateurFilter<$PrismaModel> | $Enums.RoleUtilisateur
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleUtilisateurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleUtilisateur | EnumRoleUtilisateurFieldRefInput<$PrismaModel>
    in?: $Enums.RoleUtilisateur[]
    notIn?: $Enums.RoleUtilisateur[]
    not?: NestedEnumRoleUtilisateurWithAggregatesFilter<$PrismaModel> | $Enums.RoleUtilisateur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleUtilisateurFilter<$PrismaModel>
    _max?: NestedEnumRoleUtilisateurFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatutCandidatureFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCandidature | EnumStatutCandidatureFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCandidature[]
    notIn?: $Enums.StatutCandidature[]
    not?: NestedEnumStatutCandidatureFilter<$PrismaModel> | $Enums.StatutCandidature
  }

  export type NestedEnumStatutCandidatureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCandidature | EnumStatutCandidatureFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCandidature[]
    notIn?: $Enums.StatutCandidature[]
    not?: NestedEnumStatutCandidatureWithAggregatesFilter<$PrismaModel> | $Enums.StatutCandidature
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutCandidatureFilter<$PrismaModel>
    _max?: NestedEnumStatutCandidatureFilter<$PrismaModel>
  }

  export type NestedEnumTypeDocumentFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDocument | EnumTypeDocumentFieldRefInput<$PrismaModel>
    in?: $Enums.TypeDocument[]
    notIn?: $Enums.TypeDocument[]
    not?: NestedEnumTypeDocumentFilter<$PrismaModel> | $Enums.TypeDocument
  }

  export type NestedEnumTypeDocumentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeDocument | EnumTypeDocumentFieldRefInput<$PrismaModel>
    in?: $Enums.TypeDocument[]
    notIn?: $Enums.TypeDocument[]
    not?: NestedEnumTypeDocumentWithAggregatesFilter<$PrismaModel> | $Enums.TypeDocument
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeDocumentFilter<$PrismaModel>
    _max?: NestedEnumTypeDocumentFilter<$PrismaModel>
  }

  export type NestedEnumDecisionEvaluationFilter<$PrismaModel = never> = {
    equals?: $Enums.DecisionEvaluation | EnumDecisionEvaluationFieldRefInput<$PrismaModel>
    in?: $Enums.DecisionEvaluation[]
    notIn?: $Enums.DecisionEvaluation[]
    not?: NestedEnumDecisionEvaluationFilter<$PrismaModel> | $Enums.DecisionEvaluation
  }

  export type NestedEnumDecisionEvaluationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DecisionEvaluation | EnumDecisionEvaluationFieldRefInput<$PrismaModel>
    in?: $Enums.DecisionEvaluation[]
    notIn?: $Enums.DecisionEvaluation[]
    not?: NestedEnumDecisionEvaluationWithAggregatesFilter<$PrismaModel> | $Enums.DecisionEvaluation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDecisionEvaluationFilter<$PrismaModel>
    _max?: NestedEnumDecisionEvaluationFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumStatutAttributionFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAttribution | EnumStatutAttributionFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAttribution[]
    notIn?: $Enums.StatutAttribution[]
    not?: NestedEnumStatutAttributionFilter<$PrismaModel> | $Enums.StatutAttribution
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumStatutAttributionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAttribution | EnumStatutAttributionFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAttribution[]
    notIn?: $Enums.StatutAttribution[]
    not?: NestedEnumStatutAttributionWithAggregatesFilter<$PrismaModel> | $Enums.StatutAttribution
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutAttributionFilter<$PrismaModel>
    _max?: NestedEnumStatutAttributionFilter<$PrismaModel>
  }

  export type NestedEnumStatutPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementFilter<$PrismaModel> | $Enums.StatutPaiement
  }

  export type NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[]
    notIn?: $Enums.StatutPaiement[]
    not?: NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel> | $Enums.StatutPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPaiementFilter<$PrismaModel>
    _max?: NestedEnumStatutPaiementFilter<$PrismaModel>
  }

  export type EtudiantCreateWithoutUtilisateurInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    etablissement: EtablissementCreateNestedOneWithoutEtudiantsInput
    candidatures?: CandidatureCreateNestedManyWithoutEtudiantInput
    attributions?: AttributionBourseCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantUncheckedCreateWithoutUtilisateurInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    etablissementId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutEtudiantInput
    attributions?: AttributionBourseUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantCreateOrConnectWithoutUtilisateurInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutUtilisateurInput, EtudiantUncheckedCreateWithoutUtilisateurInput>
  }

  export type EvaluationCreateWithoutEvaluateurInput = {
    id?: string
    note?: Decimal | DecimalJsLike | number | string | null
    decision: $Enums.DecisionEvaluation
    commentaire?: string | null
    creeLe?: Date | string
    candidature: CandidatureCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateWithoutEvaluateurInput = {
    id?: string
    note?: Decimal | DecimalJsLike | number | string | null
    decision: $Enums.DecisionEvaluation
    commentaire?: string | null
    candidatureId: string
    creeLe?: Date | string
  }

  export type EvaluationCreateOrConnectWithoutEvaluateurInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutEvaluateurInput, EvaluationUncheckedCreateWithoutEvaluateurInput>
  }

  export type EvaluationCreateManyEvaluateurInputEnvelope = {
    data: EvaluationCreateManyEvaluateurInput | EvaluationCreateManyEvaluateurInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUtilisateurInput = {
    id?: string
    titre: string
    message: string
    estLue?: boolean
    creeLe?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUtilisateurInput = {
    id?: string
    titre: string
    message: string
    estLue?: boolean
    creeLe?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput>
  }

  export type NotificationCreateManyUtilisateurInputEnvelope = {
    data: NotificationCreateManyUtilisateurInput | NotificationCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type EtudiantUpsertWithoutUtilisateurInput = {
    update: XOR<EtudiantUpdateWithoutUtilisateurInput, EtudiantUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<EtudiantCreateWithoutUtilisateurInput, EtudiantUncheckedCreateWithoutUtilisateurInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutUtilisateurInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutUtilisateurInput, EtudiantUncheckedUpdateWithoutUtilisateurInput>
  }

  export type EtudiantUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etablissement?: EtablissementUpdateOneRequiredWithoutEtudiantsNestedInput
    candidatures?: CandidatureUpdateManyWithoutEtudiantNestedInput
    attributions?: AttributionBourseUpdateManyWithoutEtudiantNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    etablissementId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidatures?: CandidatureUncheckedUpdateManyWithoutEtudiantNestedInput
    attributions?: AttributionBourseUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type EvaluationUpsertWithWhereUniqueWithoutEvaluateurInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutEvaluateurInput, EvaluationUncheckedUpdateWithoutEvaluateurInput>
    create: XOR<EvaluationCreateWithoutEvaluateurInput, EvaluationUncheckedCreateWithoutEvaluateurInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutEvaluateurInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutEvaluateurInput, EvaluationUncheckedUpdateWithoutEvaluateurInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutEvaluateurInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutEvaluateurInput>
  }

  export type EvaluationScalarWhereInput = {
    AND?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    OR?: EvaluationScalarWhereInput[]
    NOT?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    id?: StringFilter<"Evaluation"> | string
    note?: DecimalNullableFilter<"Evaluation"> | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFilter<"Evaluation"> | $Enums.DecisionEvaluation
    commentaire?: StringNullableFilter<"Evaluation"> | string | null
    candidatureId?: StringFilter<"Evaluation"> | string
    evaluateurId?: StringFilter<"Evaluation"> | string
    creeLe?: DateTimeFilter<"Evaluation"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUtilisateurInput, NotificationUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUtilisateurInput, NotificationUncheckedUpdateWithoutUtilisateurInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUtilisateurInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    titre?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    estLue?: BoolFilter<"Notification"> | boolean
    utilisateurId?: StringFilter<"Notification"> | string
    creeLe?: DateTimeFilter<"Notification"> | Date | string
  }

  export type EtudiantCreateWithoutEtablissementInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    utilisateur?: UtilisateurCreateNestedOneWithoutEtudiantInput
    candidatures?: CandidatureCreateNestedManyWithoutEtudiantInput
    attributions?: AttributionBourseCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantUncheckedCreateWithoutEtablissementInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    utilisateur?: UtilisateurUncheckedCreateNestedOneWithoutEtudiantInput
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutEtudiantInput
    attributions?: AttributionBourseUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantCreateOrConnectWithoutEtablissementInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutEtablissementInput, EtudiantUncheckedCreateWithoutEtablissementInput>
  }

  export type EtudiantCreateManyEtablissementInputEnvelope = {
    data: EtudiantCreateManyEtablissementInput | EtudiantCreateManyEtablissementInput[]
    skipDuplicates?: boolean
  }

  export type EtudiantUpsertWithWhereUniqueWithoutEtablissementInput = {
    where: EtudiantWhereUniqueInput
    update: XOR<EtudiantUpdateWithoutEtablissementInput, EtudiantUncheckedUpdateWithoutEtablissementInput>
    create: XOR<EtudiantCreateWithoutEtablissementInput, EtudiantUncheckedCreateWithoutEtablissementInput>
  }

  export type EtudiantUpdateWithWhereUniqueWithoutEtablissementInput = {
    where: EtudiantWhereUniqueInput
    data: XOR<EtudiantUpdateWithoutEtablissementInput, EtudiantUncheckedUpdateWithoutEtablissementInput>
  }

  export type EtudiantUpdateManyWithWhereWithoutEtablissementInput = {
    where: EtudiantScalarWhereInput
    data: XOR<EtudiantUpdateManyMutationInput, EtudiantUncheckedUpdateManyWithoutEtablissementInput>
  }

  export type EtudiantScalarWhereInput = {
    AND?: EtudiantScalarWhereInput | EtudiantScalarWhereInput[]
    OR?: EtudiantScalarWhereInput[]
    NOT?: EtudiantScalarWhereInput | EtudiantScalarWhereInput[]
    id?: StringFilter<"Etudiant"> | string
    matricule?: StringFilter<"Etudiant"> | string
    nom?: StringFilter<"Etudiant"> | string
    postnom?: StringNullableFilter<"Etudiant"> | string | null
    prenom?: StringFilter<"Etudiant"> | string
    sexe?: StringNullableFilter<"Etudiant"> | string | null
    dateNaissance?: DateTimeNullableFilter<"Etudiant"> | Date | string | null
    telephone?: StringNullableFilter<"Etudiant"> | string | null
    email?: StringNullableFilter<"Etudiant"> | string | null
    adresse?: StringNullableFilter<"Etudiant"> | string | null
    provinceOrigine?: StringNullableFilter<"Etudiant"> | string | null
    niveauEtude?: StringNullableFilter<"Etudiant"> | string | null
    filiere?: StringNullableFilter<"Etudiant"> | string | null
    anneeAcademique?: StringNullableFilter<"Etudiant"> | string | null
    estActif?: BoolFilter<"Etudiant"> | boolean
    etablissementId?: StringFilter<"Etudiant"> | string
    creeLe?: DateTimeFilter<"Etudiant"> | Date | string
    modifieLe?: DateTimeFilter<"Etudiant"> | Date | string
  }

  export type EtablissementCreateWithoutEtudiantsInput = {
    id?: string
    nom: string
    sigle?: string | null
    province?: string | null
    ville?: string | null
    type?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type EtablissementUncheckedCreateWithoutEtudiantsInput = {
    id?: string
    nom: string
    sigle?: string | null
    province?: string | null
    ville?: string | null
    type?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type EtablissementCreateOrConnectWithoutEtudiantsInput = {
    where: EtablissementWhereUniqueInput
    create: XOR<EtablissementCreateWithoutEtudiantsInput, EtablissementUncheckedCreateWithoutEtudiantsInput>
  }

  export type UtilisateurCreateWithoutEtudiantInput = {
    id?: string
    nomComplet: string
    email: string
    motDePasse: string
    role: $Enums.RoleUtilisateur
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    evaluations?: EvaluationCreateNestedManyWithoutEvaluateurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutEtudiantInput = {
    id?: string
    nomComplet: string
    email: string
    motDePasse: string
    role: $Enums.RoleUtilisateur
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutEvaluateurInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutEtudiantInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutEtudiantInput, UtilisateurUncheckedCreateWithoutEtudiantInput>
  }

  export type CandidatureCreateWithoutEtudiantInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    creeLe?: Date | string
    modifieLe?: Date | string
    appel: AppelCandidatureCreateNestedOneWithoutCandidaturesInput
    documents?: DocumentCandidatureCreateNestedManyWithoutCandidatureInput
    evaluations?: EvaluationCreateNestedManyWithoutCandidatureInput
    attribution?: AttributionBourseCreateNestedOneWithoutCandidatureInput
  }

  export type CandidatureUncheckedCreateWithoutEtudiantInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    appelId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    documents?: DocumentCandidatureUncheckedCreateNestedManyWithoutCandidatureInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCandidatureInput
    attribution?: AttributionBourseUncheckedCreateNestedOneWithoutCandidatureInput
  }

  export type CandidatureCreateOrConnectWithoutEtudiantInput = {
    where: CandidatureWhereUniqueInput
    create: XOR<CandidatureCreateWithoutEtudiantInput, CandidatureUncheckedCreateWithoutEtudiantInput>
  }

  export type CandidatureCreateManyEtudiantInputEnvelope = {
    data: CandidatureCreateManyEtudiantInput | CandidatureCreateManyEtudiantInput[]
    skipDuplicates?: boolean
  }

  export type AttributionBourseCreateWithoutEtudiantInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    creeLe?: Date | string
    modifieLe?: Date | string
    candidature: CandidatureCreateNestedOneWithoutAttributionInput
    paiements?: PaiementCreateNestedManyWithoutAttributionInput
    renouvellements?: RenouvellementCreateNestedManyWithoutAttributionInput
  }

  export type AttributionBourseUncheckedCreateWithoutEtudiantInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    candidatureId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    paiements?: PaiementUncheckedCreateNestedManyWithoutAttributionInput
    renouvellements?: RenouvellementUncheckedCreateNestedManyWithoutAttributionInput
  }

  export type AttributionBourseCreateOrConnectWithoutEtudiantInput = {
    where: AttributionBourseWhereUniqueInput
    create: XOR<AttributionBourseCreateWithoutEtudiantInput, AttributionBourseUncheckedCreateWithoutEtudiantInput>
  }

  export type AttributionBourseCreateManyEtudiantInputEnvelope = {
    data: AttributionBourseCreateManyEtudiantInput | AttributionBourseCreateManyEtudiantInput[]
    skipDuplicates?: boolean
  }

  export type EtablissementUpsertWithoutEtudiantsInput = {
    update: XOR<EtablissementUpdateWithoutEtudiantsInput, EtablissementUncheckedUpdateWithoutEtudiantsInput>
    create: XOR<EtablissementCreateWithoutEtudiantsInput, EtablissementUncheckedCreateWithoutEtudiantsInput>
    where?: EtablissementWhereInput
  }

  export type EtablissementUpdateToOneWithWhereWithoutEtudiantsInput = {
    where?: EtablissementWhereInput
    data: XOR<EtablissementUpdateWithoutEtudiantsInput, EtablissementUncheckedUpdateWithoutEtudiantsInput>
  }

  export type EtablissementUpdateWithoutEtudiantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    sigle?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtablissementUncheckedUpdateWithoutEtudiantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    sigle?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUpsertWithoutEtudiantInput = {
    update: XOR<UtilisateurUpdateWithoutEtudiantInput, UtilisateurUncheckedUpdateWithoutEtudiantInput>
    create: XOR<UtilisateurCreateWithoutEtudiantInput, UtilisateurUncheckedCreateWithoutEtudiantInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutEtudiantInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutEtudiantInput, UtilisateurUncheckedUpdateWithoutEtudiantInput>
  }

  export type UtilisateurUpdateWithoutEtudiantInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomComplet?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUpdateManyWithoutEvaluateurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutEtudiantInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomComplet?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutEvaluateurNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type CandidatureUpsertWithWhereUniqueWithoutEtudiantInput = {
    where: CandidatureWhereUniqueInput
    update: XOR<CandidatureUpdateWithoutEtudiantInput, CandidatureUncheckedUpdateWithoutEtudiantInput>
    create: XOR<CandidatureCreateWithoutEtudiantInput, CandidatureUncheckedCreateWithoutEtudiantInput>
  }

  export type CandidatureUpdateWithWhereUniqueWithoutEtudiantInput = {
    where: CandidatureWhereUniqueInput
    data: XOR<CandidatureUpdateWithoutEtudiantInput, CandidatureUncheckedUpdateWithoutEtudiantInput>
  }

  export type CandidatureUpdateManyWithWhereWithoutEtudiantInput = {
    where: CandidatureScalarWhereInput
    data: XOR<CandidatureUpdateManyMutationInput, CandidatureUncheckedUpdateManyWithoutEtudiantInput>
  }

  export type CandidatureScalarWhereInput = {
    AND?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
    OR?: CandidatureScalarWhereInput[]
    NOT?: CandidatureScalarWhereInput | CandidatureScalarWhereInput[]
    id?: StringFilter<"Candidature"> | string
    reference?: StringFilter<"Candidature"> | string
    dateSoumission?: DateTimeNullableFilter<"Candidature"> | Date | string | null
    motivation?: StringNullableFilter<"Candidature"> | string | null
    statut?: EnumStatutCandidatureFilter<"Candidature"> | $Enums.StatutCandidature
    scoreFinal?: DecimalNullableFilter<"Candidature"> | Decimal | DecimalJsLike | number | string | null
    commentaire?: StringNullableFilter<"Candidature"> | string | null
    etudiantId?: StringFilter<"Candidature"> | string
    appelId?: StringFilter<"Candidature"> | string
    creeLe?: DateTimeFilter<"Candidature"> | Date | string
    modifieLe?: DateTimeFilter<"Candidature"> | Date | string
  }

  export type AttributionBourseUpsertWithWhereUniqueWithoutEtudiantInput = {
    where: AttributionBourseWhereUniqueInput
    update: XOR<AttributionBourseUpdateWithoutEtudiantInput, AttributionBourseUncheckedUpdateWithoutEtudiantInput>
    create: XOR<AttributionBourseCreateWithoutEtudiantInput, AttributionBourseUncheckedCreateWithoutEtudiantInput>
  }

  export type AttributionBourseUpdateWithWhereUniqueWithoutEtudiantInput = {
    where: AttributionBourseWhereUniqueInput
    data: XOR<AttributionBourseUpdateWithoutEtudiantInput, AttributionBourseUncheckedUpdateWithoutEtudiantInput>
  }

  export type AttributionBourseUpdateManyWithWhereWithoutEtudiantInput = {
    where: AttributionBourseScalarWhereInput
    data: XOR<AttributionBourseUpdateManyMutationInput, AttributionBourseUncheckedUpdateManyWithoutEtudiantInput>
  }

  export type AttributionBourseScalarWhereInput = {
    AND?: AttributionBourseScalarWhereInput | AttributionBourseScalarWhereInput[]
    OR?: AttributionBourseScalarWhereInput[]
    NOT?: AttributionBourseScalarWhereInput | AttributionBourseScalarWhereInput[]
    id?: StringFilter<"AttributionBourse"> | string
    reference?: StringFilter<"AttributionBourse"> | string
    montantAccorde?: DecimalFilter<"AttributionBourse"> | Decimal | DecimalJsLike | number | string
    devise?: StringFilter<"AttributionBourse"> | string
    dateDebut?: DateTimeFilter<"AttributionBourse"> | Date | string
    dateFin?: DateTimeFilter<"AttributionBourse"> | Date | string
    statut?: EnumStatutAttributionFilter<"AttributionBourse"> | $Enums.StatutAttribution
    candidatureId?: StringFilter<"AttributionBourse"> | string
    etudiantId?: StringFilter<"AttributionBourse"> | string
    creeLe?: DateTimeFilter<"AttributionBourse"> | Date | string
    modifieLe?: DateTimeFilter<"AttributionBourse"> | Date | string
  }

  export type AppelCandidatureCreateWithoutProgrammeInput = {
    id?: string
    reference: string
    titre: string
    description?: string | null
    dateOuverture: Date | string
    dateCloture: Date | string
    nombrePlaces?: number | null
    criteresEligibilite?: string | null
    estPublie?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    candidatures?: CandidatureCreateNestedManyWithoutAppelInput
  }

  export type AppelCandidatureUncheckedCreateWithoutProgrammeInput = {
    id?: string
    reference: string
    titre: string
    description?: string | null
    dateOuverture: Date | string
    dateCloture: Date | string
    nombrePlaces?: number | null
    criteresEligibilite?: string | null
    estPublie?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutAppelInput
  }

  export type AppelCandidatureCreateOrConnectWithoutProgrammeInput = {
    where: AppelCandidatureWhereUniqueInput
    create: XOR<AppelCandidatureCreateWithoutProgrammeInput, AppelCandidatureUncheckedCreateWithoutProgrammeInput>
  }

  export type AppelCandidatureCreateManyProgrammeInputEnvelope = {
    data: AppelCandidatureCreateManyProgrammeInput | AppelCandidatureCreateManyProgrammeInput[]
    skipDuplicates?: boolean
  }

  export type AppelCandidatureUpsertWithWhereUniqueWithoutProgrammeInput = {
    where: AppelCandidatureWhereUniqueInput
    update: XOR<AppelCandidatureUpdateWithoutProgrammeInput, AppelCandidatureUncheckedUpdateWithoutProgrammeInput>
    create: XOR<AppelCandidatureCreateWithoutProgrammeInput, AppelCandidatureUncheckedCreateWithoutProgrammeInput>
  }

  export type AppelCandidatureUpdateWithWhereUniqueWithoutProgrammeInput = {
    where: AppelCandidatureWhereUniqueInput
    data: XOR<AppelCandidatureUpdateWithoutProgrammeInput, AppelCandidatureUncheckedUpdateWithoutProgrammeInput>
  }

  export type AppelCandidatureUpdateManyWithWhereWithoutProgrammeInput = {
    where: AppelCandidatureScalarWhereInput
    data: XOR<AppelCandidatureUpdateManyMutationInput, AppelCandidatureUncheckedUpdateManyWithoutProgrammeInput>
  }

  export type AppelCandidatureScalarWhereInput = {
    AND?: AppelCandidatureScalarWhereInput | AppelCandidatureScalarWhereInput[]
    OR?: AppelCandidatureScalarWhereInput[]
    NOT?: AppelCandidatureScalarWhereInput | AppelCandidatureScalarWhereInput[]
    id?: StringFilter<"AppelCandidature"> | string
    reference?: StringFilter<"AppelCandidature"> | string
    titre?: StringFilter<"AppelCandidature"> | string
    description?: StringNullableFilter<"AppelCandidature"> | string | null
    dateOuverture?: DateTimeFilter<"AppelCandidature"> | Date | string
    dateCloture?: DateTimeFilter<"AppelCandidature"> | Date | string
    nombrePlaces?: IntNullableFilter<"AppelCandidature"> | number | null
    criteresEligibilite?: StringNullableFilter<"AppelCandidature"> | string | null
    estPublie?: BoolFilter<"AppelCandidature"> | boolean
    programmeId?: StringFilter<"AppelCandidature"> | string
    creeLe?: DateTimeFilter<"AppelCandidature"> | Date | string
    modifieLe?: DateTimeFilter<"AppelCandidature"> | Date | string
  }

  export type ProgrammeBourseCreateWithoutAppelsInput = {
    id?: string
    code: string
    nom: string
    description?: string | null
    organismeFinanceur?: string | null
    montantMaximum?: Decimal | DecimalJsLike | number | string | null
    devise?: string
    niveauCible?: string | null
    domaineCible?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type ProgrammeBourseUncheckedCreateWithoutAppelsInput = {
    id?: string
    code: string
    nom: string
    description?: string | null
    organismeFinanceur?: string | null
    montantMaximum?: Decimal | DecimalJsLike | number | string | null
    devise?: string
    niveauCible?: string | null
    domaineCible?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type ProgrammeBourseCreateOrConnectWithoutAppelsInput = {
    where: ProgrammeBourseWhereUniqueInput
    create: XOR<ProgrammeBourseCreateWithoutAppelsInput, ProgrammeBourseUncheckedCreateWithoutAppelsInput>
  }

  export type CandidatureCreateWithoutAppelInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiant: EtudiantCreateNestedOneWithoutCandidaturesInput
    documents?: DocumentCandidatureCreateNestedManyWithoutCandidatureInput
    evaluations?: EvaluationCreateNestedManyWithoutCandidatureInput
    attribution?: AttributionBourseCreateNestedOneWithoutCandidatureInput
  }

  export type CandidatureUncheckedCreateWithoutAppelInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    etudiantId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    documents?: DocumentCandidatureUncheckedCreateNestedManyWithoutCandidatureInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCandidatureInput
    attribution?: AttributionBourseUncheckedCreateNestedOneWithoutCandidatureInput
  }

  export type CandidatureCreateOrConnectWithoutAppelInput = {
    where: CandidatureWhereUniqueInput
    create: XOR<CandidatureCreateWithoutAppelInput, CandidatureUncheckedCreateWithoutAppelInput>
  }

  export type CandidatureCreateManyAppelInputEnvelope = {
    data: CandidatureCreateManyAppelInput | CandidatureCreateManyAppelInput[]
    skipDuplicates?: boolean
  }

  export type ProgrammeBourseUpsertWithoutAppelsInput = {
    update: XOR<ProgrammeBourseUpdateWithoutAppelsInput, ProgrammeBourseUncheckedUpdateWithoutAppelsInput>
    create: XOR<ProgrammeBourseCreateWithoutAppelsInput, ProgrammeBourseUncheckedCreateWithoutAppelsInput>
    where?: ProgrammeBourseWhereInput
  }

  export type ProgrammeBourseUpdateToOneWithWhereWithoutAppelsInput = {
    where?: ProgrammeBourseWhereInput
    data: XOR<ProgrammeBourseUpdateWithoutAppelsInput, ProgrammeBourseUncheckedUpdateWithoutAppelsInput>
  }

  export type ProgrammeBourseUpdateWithoutAppelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organismeFinanceur?: NullableStringFieldUpdateOperationsInput | string | null
    montantMaximum?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    devise?: StringFieldUpdateOperationsInput | string
    niveauCible?: NullableStringFieldUpdateOperationsInput | string | null
    domaineCible?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgrammeBourseUncheckedUpdateWithoutAppelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organismeFinanceur?: NullableStringFieldUpdateOperationsInput | string | null
    montantMaximum?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    devise?: StringFieldUpdateOperationsInput | string
    niveauCible?: NullableStringFieldUpdateOperationsInput | string | null
    domaineCible?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureUpsertWithWhereUniqueWithoutAppelInput = {
    where: CandidatureWhereUniqueInput
    update: XOR<CandidatureUpdateWithoutAppelInput, CandidatureUncheckedUpdateWithoutAppelInput>
    create: XOR<CandidatureCreateWithoutAppelInput, CandidatureUncheckedCreateWithoutAppelInput>
  }

  export type CandidatureUpdateWithWhereUniqueWithoutAppelInput = {
    where: CandidatureWhereUniqueInput
    data: XOR<CandidatureUpdateWithoutAppelInput, CandidatureUncheckedUpdateWithoutAppelInput>
  }

  export type CandidatureUpdateManyWithWhereWithoutAppelInput = {
    where: CandidatureScalarWhereInput
    data: XOR<CandidatureUpdateManyMutationInput, CandidatureUncheckedUpdateManyWithoutAppelInput>
  }

  export type EtudiantCreateWithoutCandidaturesInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    etablissement: EtablissementCreateNestedOneWithoutEtudiantsInput
    utilisateur?: UtilisateurCreateNestedOneWithoutEtudiantInput
    attributions?: AttributionBourseCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantUncheckedCreateWithoutCandidaturesInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    etablissementId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    utilisateur?: UtilisateurUncheckedCreateNestedOneWithoutEtudiantInput
    attributions?: AttributionBourseUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantCreateOrConnectWithoutCandidaturesInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutCandidaturesInput, EtudiantUncheckedCreateWithoutCandidaturesInput>
  }

  export type AppelCandidatureCreateWithoutCandidaturesInput = {
    id?: string
    reference: string
    titre: string
    description?: string | null
    dateOuverture: Date | string
    dateCloture: Date | string
    nombrePlaces?: number | null
    criteresEligibilite?: string | null
    estPublie?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    programme: ProgrammeBourseCreateNestedOneWithoutAppelsInput
  }

  export type AppelCandidatureUncheckedCreateWithoutCandidaturesInput = {
    id?: string
    reference: string
    titre: string
    description?: string | null
    dateOuverture: Date | string
    dateCloture: Date | string
    nombrePlaces?: number | null
    criteresEligibilite?: string | null
    estPublie?: boolean
    programmeId: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type AppelCandidatureCreateOrConnectWithoutCandidaturesInput = {
    where: AppelCandidatureWhereUniqueInput
    create: XOR<AppelCandidatureCreateWithoutCandidaturesInput, AppelCandidatureUncheckedCreateWithoutCandidaturesInput>
  }

  export type DocumentCandidatureCreateWithoutCandidatureInput = {
    id?: string
    type: $Enums.TypeDocument
    nomFichier: string
    cheminFichier: string
    estValide?: boolean
    commentaire?: string | null
    creeLe?: Date | string
  }

  export type DocumentCandidatureUncheckedCreateWithoutCandidatureInput = {
    id?: string
    type: $Enums.TypeDocument
    nomFichier: string
    cheminFichier: string
    estValide?: boolean
    commentaire?: string | null
    creeLe?: Date | string
  }

  export type DocumentCandidatureCreateOrConnectWithoutCandidatureInput = {
    where: DocumentCandidatureWhereUniqueInput
    create: XOR<DocumentCandidatureCreateWithoutCandidatureInput, DocumentCandidatureUncheckedCreateWithoutCandidatureInput>
  }

  export type DocumentCandidatureCreateManyCandidatureInputEnvelope = {
    data: DocumentCandidatureCreateManyCandidatureInput | DocumentCandidatureCreateManyCandidatureInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationCreateWithoutCandidatureInput = {
    id?: string
    note?: Decimal | DecimalJsLike | number | string | null
    decision: $Enums.DecisionEvaluation
    commentaire?: string | null
    creeLe?: Date | string
    evaluateur: UtilisateurCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateWithoutCandidatureInput = {
    id?: string
    note?: Decimal | DecimalJsLike | number | string | null
    decision: $Enums.DecisionEvaluation
    commentaire?: string | null
    evaluateurId: string
    creeLe?: Date | string
  }

  export type EvaluationCreateOrConnectWithoutCandidatureInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutCandidatureInput, EvaluationUncheckedCreateWithoutCandidatureInput>
  }

  export type EvaluationCreateManyCandidatureInputEnvelope = {
    data: EvaluationCreateManyCandidatureInput | EvaluationCreateManyCandidatureInput[]
    skipDuplicates?: boolean
  }

  export type AttributionBourseCreateWithoutCandidatureInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiant: EtudiantCreateNestedOneWithoutAttributionsInput
    paiements?: PaiementCreateNestedManyWithoutAttributionInput
    renouvellements?: RenouvellementCreateNestedManyWithoutAttributionInput
  }

  export type AttributionBourseUncheckedCreateWithoutCandidatureInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    etudiantId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    paiements?: PaiementUncheckedCreateNestedManyWithoutAttributionInput
    renouvellements?: RenouvellementUncheckedCreateNestedManyWithoutAttributionInput
  }

  export type AttributionBourseCreateOrConnectWithoutCandidatureInput = {
    where: AttributionBourseWhereUniqueInput
    create: XOR<AttributionBourseCreateWithoutCandidatureInput, AttributionBourseUncheckedCreateWithoutCandidatureInput>
  }

  export type EtudiantUpsertWithoutCandidaturesInput = {
    update: XOR<EtudiantUpdateWithoutCandidaturesInput, EtudiantUncheckedUpdateWithoutCandidaturesInput>
    create: XOR<EtudiantCreateWithoutCandidaturesInput, EtudiantUncheckedCreateWithoutCandidaturesInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutCandidaturesInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutCandidaturesInput, EtudiantUncheckedUpdateWithoutCandidaturesInput>
  }

  export type EtudiantUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etablissement?: EtablissementUpdateOneRequiredWithoutEtudiantsNestedInput
    utilisateur?: UtilisateurUpdateOneWithoutEtudiantNestedInput
    attributions?: AttributionBourseUpdateManyWithoutEtudiantNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    etablissementId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUncheckedUpdateOneWithoutEtudiantNestedInput
    attributions?: AttributionBourseUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type AppelCandidatureUpsertWithoutCandidaturesInput = {
    update: XOR<AppelCandidatureUpdateWithoutCandidaturesInput, AppelCandidatureUncheckedUpdateWithoutCandidaturesInput>
    create: XOR<AppelCandidatureCreateWithoutCandidaturesInput, AppelCandidatureUncheckedCreateWithoutCandidaturesInput>
    where?: AppelCandidatureWhereInput
  }

  export type AppelCandidatureUpdateToOneWithWhereWithoutCandidaturesInput = {
    where?: AppelCandidatureWhereInput
    data: XOR<AppelCandidatureUpdateWithoutCandidaturesInput, AppelCandidatureUncheckedUpdateWithoutCandidaturesInput>
  }

  export type AppelCandidatureUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateOuverture?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCloture?: DateTimeFieldUpdateOperationsInput | Date | string
    nombrePlaces?: NullableIntFieldUpdateOperationsInput | number | null
    criteresEligibilite?: NullableStringFieldUpdateOperationsInput | string | null
    estPublie?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    programme?: ProgrammeBourseUpdateOneRequiredWithoutAppelsNestedInput
  }

  export type AppelCandidatureUncheckedUpdateWithoutCandidaturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateOuverture?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCloture?: DateTimeFieldUpdateOperationsInput | Date | string
    nombrePlaces?: NullableIntFieldUpdateOperationsInput | number | null
    criteresEligibilite?: NullableStringFieldUpdateOperationsInput | string | null
    estPublie?: BoolFieldUpdateOperationsInput | boolean
    programmeId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCandidatureUpsertWithWhereUniqueWithoutCandidatureInput = {
    where: DocumentCandidatureWhereUniqueInput
    update: XOR<DocumentCandidatureUpdateWithoutCandidatureInput, DocumentCandidatureUncheckedUpdateWithoutCandidatureInput>
    create: XOR<DocumentCandidatureCreateWithoutCandidatureInput, DocumentCandidatureUncheckedCreateWithoutCandidatureInput>
  }

  export type DocumentCandidatureUpdateWithWhereUniqueWithoutCandidatureInput = {
    where: DocumentCandidatureWhereUniqueInput
    data: XOR<DocumentCandidatureUpdateWithoutCandidatureInput, DocumentCandidatureUncheckedUpdateWithoutCandidatureInput>
  }

  export type DocumentCandidatureUpdateManyWithWhereWithoutCandidatureInput = {
    where: DocumentCandidatureScalarWhereInput
    data: XOR<DocumentCandidatureUpdateManyMutationInput, DocumentCandidatureUncheckedUpdateManyWithoutCandidatureInput>
  }

  export type DocumentCandidatureScalarWhereInput = {
    AND?: DocumentCandidatureScalarWhereInput | DocumentCandidatureScalarWhereInput[]
    OR?: DocumentCandidatureScalarWhereInput[]
    NOT?: DocumentCandidatureScalarWhereInput | DocumentCandidatureScalarWhereInput[]
    id?: StringFilter<"DocumentCandidature"> | string
    type?: EnumTypeDocumentFilter<"DocumentCandidature"> | $Enums.TypeDocument
    nomFichier?: StringFilter<"DocumentCandidature"> | string
    cheminFichier?: StringFilter<"DocumentCandidature"> | string
    estValide?: BoolFilter<"DocumentCandidature"> | boolean
    commentaire?: StringNullableFilter<"DocumentCandidature"> | string | null
    candidatureId?: StringFilter<"DocumentCandidature"> | string
    creeLe?: DateTimeFilter<"DocumentCandidature"> | Date | string
  }

  export type EvaluationUpsertWithWhereUniqueWithoutCandidatureInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutCandidatureInput, EvaluationUncheckedUpdateWithoutCandidatureInput>
    create: XOR<EvaluationCreateWithoutCandidatureInput, EvaluationUncheckedCreateWithoutCandidatureInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutCandidatureInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutCandidatureInput, EvaluationUncheckedUpdateWithoutCandidatureInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutCandidatureInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutCandidatureInput>
  }

  export type AttributionBourseUpsertWithoutCandidatureInput = {
    update: XOR<AttributionBourseUpdateWithoutCandidatureInput, AttributionBourseUncheckedUpdateWithoutCandidatureInput>
    create: XOR<AttributionBourseCreateWithoutCandidatureInput, AttributionBourseUncheckedCreateWithoutCandidatureInput>
    where?: AttributionBourseWhereInput
  }

  export type AttributionBourseUpdateToOneWithWhereWithoutCandidatureInput = {
    where?: AttributionBourseWhereInput
    data: XOR<AttributionBourseUpdateWithoutCandidatureInput, AttributionBourseUncheckedUpdateWithoutCandidatureInput>
  }

  export type AttributionBourseUpdateWithoutCandidatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneRequiredWithoutAttributionsNestedInput
    paiements?: PaiementUpdateManyWithoutAttributionNestedInput
    renouvellements?: RenouvellementUpdateManyWithoutAttributionNestedInput
  }

  export type AttributionBourseUncheckedUpdateWithoutCandidatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    etudiantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    paiements?: PaiementUncheckedUpdateManyWithoutAttributionNestedInput
    renouvellements?: RenouvellementUncheckedUpdateManyWithoutAttributionNestedInput
  }

  export type CandidatureCreateWithoutDocumentsInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiant: EtudiantCreateNestedOneWithoutCandidaturesInput
    appel: AppelCandidatureCreateNestedOneWithoutCandidaturesInput
    evaluations?: EvaluationCreateNestedManyWithoutCandidatureInput
    attribution?: AttributionBourseCreateNestedOneWithoutCandidatureInput
  }

  export type CandidatureUncheckedCreateWithoutDocumentsInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    etudiantId: string
    appelId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCandidatureInput
    attribution?: AttributionBourseUncheckedCreateNestedOneWithoutCandidatureInput
  }

  export type CandidatureCreateOrConnectWithoutDocumentsInput = {
    where: CandidatureWhereUniqueInput
    create: XOR<CandidatureCreateWithoutDocumentsInput, CandidatureUncheckedCreateWithoutDocumentsInput>
  }

  export type CandidatureUpsertWithoutDocumentsInput = {
    update: XOR<CandidatureUpdateWithoutDocumentsInput, CandidatureUncheckedUpdateWithoutDocumentsInput>
    create: XOR<CandidatureCreateWithoutDocumentsInput, CandidatureUncheckedCreateWithoutDocumentsInput>
    where?: CandidatureWhereInput
  }

  export type CandidatureUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: CandidatureWhereInput
    data: XOR<CandidatureUpdateWithoutDocumentsInput, CandidatureUncheckedUpdateWithoutDocumentsInput>
  }

  export type CandidatureUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneRequiredWithoutCandidaturesNestedInput
    appel?: AppelCandidatureUpdateOneRequiredWithoutCandidaturesNestedInput
    evaluations?: EvaluationUpdateManyWithoutCandidatureNestedInput
    attribution?: AttributionBourseUpdateOneWithoutCandidatureNestedInput
  }

  export type CandidatureUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    etudiantId?: StringFieldUpdateOperationsInput | string
    appelId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutCandidatureNestedInput
    attribution?: AttributionBourseUncheckedUpdateOneWithoutCandidatureNestedInput
  }

  export type CandidatureCreateWithoutEvaluationsInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiant: EtudiantCreateNestedOneWithoutCandidaturesInput
    appel: AppelCandidatureCreateNestedOneWithoutCandidaturesInput
    documents?: DocumentCandidatureCreateNestedManyWithoutCandidatureInput
    attribution?: AttributionBourseCreateNestedOneWithoutCandidatureInput
  }

  export type CandidatureUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    etudiantId: string
    appelId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    documents?: DocumentCandidatureUncheckedCreateNestedManyWithoutCandidatureInput
    attribution?: AttributionBourseUncheckedCreateNestedOneWithoutCandidatureInput
  }

  export type CandidatureCreateOrConnectWithoutEvaluationsInput = {
    where: CandidatureWhereUniqueInput
    create: XOR<CandidatureCreateWithoutEvaluationsInput, CandidatureUncheckedCreateWithoutEvaluationsInput>
  }

  export type UtilisateurCreateWithoutEvaluationsInput = {
    id?: string
    nomComplet: string
    email: string
    motDePasse: string
    role: $Enums.RoleUtilisateur
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiant?: EtudiantCreateNestedOneWithoutUtilisateurInput
    notifications?: NotificationCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    nomComplet: string
    email: string
    motDePasse: string
    role: $Enums.RoleUtilisateur
    estActif?: boolean
    etudiantId?: string | null
    creeLe?: Date | string
    modifieLe?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutEvaluationsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutEvaluationsInput, UtilisateurUncheckedCreateWithoutEvaluationsInput>
  }

  export type CandidatureUpsertWithoutEvaluationsInput = {
    update: XOR<CandidatureUpdateWithoutEvaluationsInput, CandidatureUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<CandidatureCreateWithoutEvaluationsInput, CandidatureUncheckedCreateWithoutEvaluationsInput>
    where?: CandidatureWhereInput
  }

  export type CandidatureUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: CandidatureWhereInput
    data: XOR<CandidatureUpdateWithoutEvaluationsInput, CandidatureUncheckedUpdateWithoutEvaluationsInput>
  }

  export type CandidatureUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneRequiredWithoutCandidaturesNestedInput
    appel?: AppelCandidatureUpdateOneRequiredWithoutCandidaturesNestedInput
    documents?: DocumentCandidatureUpdateManyWithoutCandidatureNestedInput
    attribution?: AttributionBourseUpdateOneWithoutCandidatureNestedInput
  }

  export type CandidatureUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    etudiantId?: StringFieldUpdateOperationsInput | string
    appelId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentCandidatureUncheckedUpdateManyWithoutCandidatureNestedInput
    attribution?: AttributionBourseUncheckedUpdateOneWithoutCandidatureNestedInput
  }

  export type UtilisateurUpsertWithoutEvaluationsInput = {
    update: XOR<UtilisateurUpdateWithoutEvaluationsInput, UtilisateurUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<UtilisateurCreateWithoutEvaluationsInput, UtilisateurUncheckedCreateWithoutEvaluationsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutEvaluationsInput, UtilisateurUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UtilisateurUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomComplet?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneWithoutUtilisateurNestedInput
    notifications?: NotificationUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomComplet?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    estActif?: BoolFieldUpdateOperationsInput | boolean
    etudiantId?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type CandidatureCreateWithoutAttributionInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiant: EtudiantCreateNestedOneWithoutCandidaturesInput
    appel: AppelCandidatureCreateNestedOneWithoutCandidaturesInput
    documents?: DocumentCandidatureCreateNestedManyWithoutCandidatureInput
    evaluations?: EvaluationCreateNestedManyWithoutCandidatureInput
  }

  export type CandidatureUncheckedCreateWithoutAttributionInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    etudiantId: string
    appelId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    documents?: DocumentCandidatureUncheckedCreateNestedManyWithoutCandidatureInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutCandidatureInput
  }

  export type CandidatureCreateOrConnectWithoutAttributionInput = {
    where: CandidatureWhereUniqueInput
    create: XOR<CandidatureCreateWithoutAttributionInput, CandidatureUncheckedCreateWithoutAttributionInput>
  }

  export type EtudiantCreateWithoutAttributionsInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    etablissement: EtablissementCreateNestedOneWithoutEtudiantsInput
    utilisateur?: UtilisateurCreateNestedOneWithoutEtudiantInput
    candidatures?: CandidatureCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantUncheckedCreateWithoutAttributionsInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    etablissementId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    utilisateur?: UtilisateurUncheckedCreateNestedOneWithoutEtudiantInput
    candidatures?: CandidatureUncheckedCreateNestedManyWithoutEtudiantInput
  }

  export type EtudiantCreateOrConnectWithoutAttributionsInput = {
    where: EtudiantWhereUniqueInput
    create: XOR<EtudiantCreateWithoutAttributionsInput, EtudiantUncheckedCreateWithoutAttributionsInput>
  }

  export type PaiementCreateWithoutAttributionInput = {
    id?: string
    reference: string
    periode: string
    montant: Decimal | DecimalJsLike | number | string
    devise?: string
    datePrevue: Date | string
    datePaiement?: Date | string | null
    statut?: $Enums.StatutPaiement
    modePaiement?: string | null
    preuveUrl?: string | null
    creeLe?: Date | string
  }

  export type PaiementUncheckedCreateWithoutAttributionInput = {
    id?: string
    reference: string
    periode: string
    montant: Decimal | DecimalJsLike | number | string
    devise?: string
    datePrevue: Date | string
    datePaiement?: Date | string | null
    statut?: $Enums.StatutPaiement
    modePaiement?: string | null
    preuveUrl?: string | null
    creeLe?: Date | string
  }

  export type PaiementCreateOrConnectWithoutAttributionInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutAttributionInput, PaiementUncheckedCreateWithoutAttributionInput>
  }

  export type PaiementCreateManyAttributionInputEnvelope = {
    data: PaiementCreateManyAttributionInput | PaiementCreateManyAttributionInput[]
    skipDuplicates?: boolean
  }

  export type RenouvellementCreateWithoutAttributionInput = {
    id?: string
    anneeAcademique: string
    decision: string
    commentaire?: string | null
    dateDecision?: Date | string
    creeLe?: Date | string
  }

  export type RenouvellementUncheckedCreateWithoutAttributionInput = {
    id?: string
    anneeAcademique: string
    decision: string
    commentaire?: string | null
    dateDecision?: Date | string
    creeLe?: Date | string
  }

  export type RenouvellementCreateOrConnectWithoutAttributionInput = {
    where: RenouvellementWhereUniqueInput
    create: XOR<RenouvellementCreateWithoutAttributionInput, RenouvellementUncheckedCreateWithoutAttributionInput>
  }

  export type RenouvellementCreateManyAttributionInputEnvelope = {
    data: RenouvellementCreateManyAttributionInput | RenouvellementCreateManyAttributionInput[]
    skipDuplicates?: boolean
  }

  export type CandidatureUpsertWithoutAttributionInput = {
    update: XOR<CandidatureUpdateWithoutAttributionInput, CandidatureUncheckedUpdateWithoutAttributionInput>
    create: XOR<CandidatureCreateWithoutAttributionInput, CandidatureUncheckedCreateWithoutAttributionInput>
    where?: CandidatureWhereInput
  }

  export type CandidatureUpdateToOneWithWhereWithoutAttributionInput = {
    where?: CandidatureWhereInput
    data: XOR<CandidatureUpdateWithoutAttributionInput, CandidatureUncheckedUpdateWithoutAttributionInput>
  }

  export type CandidatureUpdateWithoutAttributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneRequiredWithoutCandidaturesNestedInput
    appel?: AppelCandidatureUpdateOneRequiredWithoutCandidaturesNestedInput
    documents?: DocumentCandidatureUpdateManyWithoutCandidatureNestedInput
    evaluations?: EvaluationUpdateManyWithoutCandidatureNestedInput
  }

  export type CandidatureUncheckedUpdateWithoutAttributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    etudiantId?: StringFieldUpdateOperationsInput | string
    appelId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentCandidatureUncheckedUpdateManyWithoutCandidatureNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutCandidatureNestedInput
  }

  export type EtudiantUpsertWithoutAttributionsInput = {
    update: XOR<EtudiantUpdateWithoutAttributionsInput, EtudiantUncheckedUpdateWithoutAttributionsInput>
    create: XOR<EtudiantCreateWithoutAttributionsInput, EtudiantUncheckedCreateWithoutAttributionsInput>
    where?: EtudiantWhereInput
  }

  export type EtudiantUpdateToOneWithWhereWithoutAttributionsInput = {
    where?: EtudiantWhereInput
    data: XOR<EtudiantUpdateWithoutAttributionsInput, EtudiantUncheckedUpdateWithoutAttributionsInput>
  }

  export type EtudiantUpdateWithoutAttributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etablissement?: EtablissementUpdateOneRequiredWithoutEtudiantsNestedInput
    utilisateur?: UtilisateurUpdateOneWithoutEtudiantNestedInput
    candidatures?: CandidatureUpdateManyWithoutEtudiantNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutAttributionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    etablissementId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUncheckedUpdateOneWithoutEtudiantNestedInput
    candidatures?: CandidatureUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type PaiementUpsertWithWhereUniqueWithoutAttributionInput = {
    where: PaiementWhereUniqueInput
    update: XOR<PaiementUpdateWithoutAttributionInput, PaiementUncheckedUpdateWithoutAttributionInput>
    create: XOR<PaiementCreateWithoutAttributionInput, PaiementUncheckedCreateWithoutAttributionInput>
  }

  export type PaiementUpdateWithWhereUniqueWithoutAttributionInput = {
    where: PaiementWhereUniqueInput
    data: XOR<PaiementUpdateWithoutAttributionInput, PaiementUncheckedUpdateWithoutAttributionInput>
  }

  export type PaiementUpdateManyWithWhereWithoutAttributionInput = {
    where: PaiementScalarWhereInput
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyWithoutAttributionInput>
  }

  export type PaiementScalarWhereInput = {
    AND?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    OR?: PaiementScalarWhereInput[]
    NOT?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    id?: StringFilter<"Paiement"> | string
    reference?: StringFilter<"Paiement"> | string
    periode?: StringFilter<"Paiement"> | string
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    devise?: StringFilter<"Paiement"> | string
    datePrevue?: DateTimeFilter<"Paiement"> | Date | string
    datePaiement?: DateTimeNullableFilter<"Paiement"> | Date | string | null
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    modePaiement?: StringNullableFilter<"Paiement"> | string | null
    preuveUrl?: StringNullableFilter<"Paiement"> | string | null
    attributionId?: StringFilter<"Paiement"> | string
    creeLe?: DateTimeFilter<"Paiement"> | Date | string
  }

  export type RenouvellementUpsertWithWhereUniqueWithoutAttributionInput = {
    where: RenouvellementWhereUniqueInput
    update: XOR<RenouvellementUpdateWithoutAttributionInput, RenouvellementUncheckedUpdateWithoutAttributionInput>
    create: XOR<RenouvellementCreateWithoutAttributionInput, RenouvellementUncheckedCreateWithoutAttributionInput>
  }

  export type RenouvellementUpdateWithWhereUniqueWithoutAttributionInput = {
    where: RenouvellementWhereUniqueInput
    data: XOR<RenouvellementUpdateWithoutAttributionInput, RenouvellementUncheckedUpdateWithoutAttributionInput>
  }

  export type RenouvellementUpdateManyWithWhereWithoutAttributionInput = {
    where: RenouvellementScalarWhereInput
    data: XOR<RenouvellementUpdateManyMutationInput, RenouvellementUncheckedUpdateManyWithoutAttributionInput>
  }

  export type RenouvellementScalarWhereInput = {
    AND?: RenouvellementScalarWhereInput | RenouvellementScalarWhereInput[]
    OR?: RenouvellementScalarWhereInput[]
    NOT?: RenouvellementScalarWhereInput | RenouvellementScalarWhereInput[]
    id?: StringFilter<"Renouvellement"> | string
    anneeAcademique?: StringFilter<"Renouvellement"> | string
    decision?: StringFilter<"Renouvellement"> | string
    commentaire?: StringNullableFilter<"Renouvellement"> | string | null
    dateDecision?: DateTimeFilter<"Renouvellement"> | Date | string
    attributionId?: StringFilter<"Renouvellement"> | string
    creeLe?: DateTimeFilter<"Renouvellement"> | Date | string
  }

  export type AttributionBourseCreateWithoutPaiementsInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    creeLe?: Date | string
    modifieLe?: Date | string
    candidature: CandidatureCreateNestedOneWithoutAttributionInput
    etudiant: EtudiantCreateNestedOneWithoutAttributionsInput
    renouvellements?: RenouvellementCreateNestedManyWithoutAttributionInput
  }

  export type AttributionBourseUncheckedCreateWithoutPaiementsInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    candidatureId: string
    etudiantId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    renouvellements?: RenouvellementUncheckedCreateNestedManyWithoutAttributionInput
  }

  export type AttributionBourseCreateOrConnectWithoutPaiementsInput = {
    where: AttributionBourseWhereUniqueInput
    create: XOR<AttributionBourseCreateWithoutPaiementsInput, AttributionBourseUncheckedCreateWithoutPaiementsInput>
  }

  export type AttributionBourseUpsertWithoutPaiementsInput = {
    update: XOR<AttributionBourseUpdateWithoutPaiementsInput, AttributionBourseUncheckedUpdateWithoutPaiementsInput>
    create: XOR<AttributionBourseCreateWithoutPaiementsInput, AttributionBourseUncheckedCreateWithoutPaiementsInput>
    where?: AttributionBourseWhereInput
  }

  export type AttributionBourseUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: AttributionBourseWhereInput
    data: XOR<AttributionBourseUpdateWithoutPaiementsInput, AttributionBourseUncheckedUpdateWithoutPaiementsInput>
  }

  export type AttributionBourseUpdateWithoutPaiementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidature?: CandidatureUpdateOneRequiredWithoutAttributionNestedInput
    etudiant?: EtudiantUpdateOneRequiredWithoutAttributionsNestedInput
    renouvellements?: RenouvellementUpdateManyWithoutAttributionNestedInput
  }

  export type AttributionBourseUncheckedUpdateWithoutPaiementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    candidatureId?: StringFieldUpdateOperationsInput | string
    etudiantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    renouvellements?: RenouvellementUncheckedUpdateManyWithoutAttributionNestedInput
  }

  export type AttributionBourseCreateWithoutRenouvellementsInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    creeLe?: Date | string
    modifieLe?: Date | string
    candidature: CandidatureCreateNestedOneWithoutAttributionInput
    etudiant: EtudiantCreateNestedOneWithoutAttributionsInput
    paiements?: PaiementCreateNestedManyWithoutAttributionInput
  }

  export type AttributionBourseUncheckedCreateWithoutRenouvellementsInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    candidatureId: string
    etudiantId: string
    creeLe?: Date | string
    modifieLe?: Date | string
    paiements?: PaiementUncheckedCreateNestedManyWithoutAttributionInput
  }

  export type AttributionBourseCreateOrConnectWithoutRenouvellementsInput = {
    where: AttributionBourseWhereUniqueInput
    create: XOR<AttributionBourseCreateWithoutRenouvellementsInput, AttributionBourseUncheckedCreateWithoutRenouvellementsInput>
  }

  export type AttributionBourseUpsertWithoutRenouvellementsInput = {
    update: XOR<AttributionBourseUpdateWithoutRenouvellementsInput, AttributionBourseUncheckedUpdateWithoutRenouvellementsInput>
    create: XOR<AttributionBourseCreateWithoutRenouvellementsInput, AttributionBourseUncheckedCreateWithoutRenouvellementsInput>
    where?: AttributionBourseWhereInput
  }

  export type AttributionBourseUpdateToOneWithWhereWithoutRenouvellementsInput = {
    where?: AttributionBourseWhereInput
    data: XOR<AttributionBourseUpdateWithoutRenouvellementsInput, AttributionBourseUncheckedUpdateWithoutRenouvellementsInput>
  }

  export type AttributionBourseUpdateWithoutRenouvellementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidature?: CandidatureUpdateOneRequiredWithoutAttributionNestedInput
    etudiant?: EtudiantUpdateOneRequiredWithoutAttributionsNestedInput
    paiements?: PaiementUpdateManyWithoutAttributionNestedInput
  }

  export type AttributionBourseUncheckedUpdateWithoutRenouvellementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    candidatureId?: StringFieldUpdateOperationsInput | string
    etudiantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    paiements?: PaiementUncheckedUpdateManyWithoutAttributionNestedInput
  }

  export type UtilisateurCreateWithoutNotificationsInput = {
    id?: string
    nomComplet: string
    email: string
    motDePasse: string
    role: $Enums.RoleUtilisateur
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
    etudiant?: EtudiantCreateNestedOneWithoutUtilisateurInput
    evaluations?: EvaluationCreateNestedManyWithoutEvaluateurInput
  }

  export type UtilisateurUncheckedCreateWithoutNotificationsInput = {
    id?: string
    nomComplet: string
    email: string
    motDePasse: string
    role: $Enums.RoleUtilisateur
    estActif?: boolean
    etudiantId?: string | null
    creeLe?: Date | string
    modifieLe?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutEvaluateurInput
  }

  export type UtilisateurCreateOrConnectWithoutNotificationsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
  }

  export type UtilisateurUpsertWithoutNotificationsInput = {
    update: XOR<UtilisateurUpdateWithoutNotificationsInput, UtilisateurUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UtilisateurCreateWithoutNotificationsInput, UtilisateurUncheckedCreateWithoutNotificationsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutNotificationsInput, UtilisateurUncheckedUpdateWithoutNotificationsInput>
  }

  export type UtilisateurUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomComplet?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneWithoutUtilisateurNestedInput
    evaluations?: EvaluationUpdateManyWithoutEvaluateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomComplet?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleUtilisateurFieldUpdateOperationsInput | $Enums.RoleUtilisateur
    estActif?: BoolFieldUpdateOperationsInput | boolean
    etudiantId?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutEvaluateurNestedInput
  }

  export type EvaluationCreateManyEvaluateurInput = {
    id?: string
    note?: Decimal | DecimalJsLike | number | string | null
    decision: $Enums.DecisionEvaluation
    commentaire?: string | null
    candidatureId: string
    creeLe?: Date | string
  }

  export type NotificationCreateManyUtilisateurInput = {
    id?: string
    titre: string
    message: string
    estLue?: boolean
    creeLe?: Date | string
  }

  export type EvaluationUpdateWithoutEvaluateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFieldUpdateOperationsInput | $Enums.DecisionEvaluation
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidature?: CandidatureUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutEvaluateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFieldUpdateOperationsInput | $Enums.DecisionEvaluation
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    candidatureId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyWithoutEvaluateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFieldUpdateOperationsInput | $Enums.DecisionEvaluation
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    candidatureId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    estLue?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    estLue?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    estLue?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtudiantCreateManyEtablissementInput = {
    id?: string
    matricule: string
    nom: string
    postnom?: string | null
    prenom: string
    sexe?: string | null
    dateNaissance?: Date | string | null
    telephone?: string | null
    email?: string | null
    adresse?: string | null
    provinceOrigine?: string | null
    niveauEtude?: string | null
    filiere?: string | null
    anneeAcademique?: string | null
    estActif?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type EtudiantUpdateWithoutEtablissementInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneWithoutEtudiantNestedInput
    candidatures?: CandidatureUpdateManyWithoutEtudiantNestedInput
    attributions?: AttributionBourseUpdateManyWithoutEtudiantNestedInput
  }

  export type EtudiantUncheckedUpdateWithoutEtablissementInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUncheckedUpdateOneWithoutEtudiantNestedInput
    candidatures?: CandidatureUncheckedUpdateManyWithoutEtudiantNestedInput
    attributions?: AttributionBourseUncheckedUpdateManyWithoutEtudiantNestedInput
  }

  export type EtudiantUncheckedUpdateManyWithoutEtablissementInput = {
    id?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: StringFieldUpdateOperationsInput | string
    sexe?: NullableStringFieldUpdateOperationsInput | string | null
    dateNaissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    provinceOrigine?: NullableStringFieldUpdateOperationsInput | string | null
    niveauEtude?: NullableStringFieldUpdateOperationsInput | string | null
    filiere?: NullableStringFieldUpdateOperationsInput | string | null
    anneeAcademique?: NullableStringFieldUpdateOperationsInput | string | null
    estActif?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureCreateManyEtudiantInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    appelId: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type AttributionBourseCreateManyEtudiantInput = {
    id?: string
    reference: string
    montantAccorde: Decimal | DecimalJsLike | number | string
    devise?: string
    dateDebut: Date | string
    dateFin: Date | string
    statut?: $Enums.StatutAttribution
    candidatureId: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type CandidatureUpdateWithoutEtudiantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    appel?: AppelCandidatureUpdateOneRequiredWithoutCandidaturesNestedInput
    documents?: DocumentCandidatureUpdateManyWithoutCandidatureNestedInput
    evaluations?: EvaluationUpdateManyWithoutCandidatureNestedInput
    attribution?: AttributionBourseUpdateOneWithoutCandidatureNestedInput
  }

  export type CandidatureUncheckedUpdateWithoutEtudiantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    appelId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentCandidatureUncheckedUpdateManyWithoutCandidatureNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutCandidatureNestedInput
    attribution?: AttributionBourseUncheckedUpdateOneWithoutCandidatureNestedInput
  }

  export type CandidatureUncheckedUpdateManyWithoutEtudiantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    appelId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributionBourseUpdateWithoutEtudiantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidature?: CandidatureUpdateOneRequiredWithoutAttributionNestedInput
    paiements?: PaiementUpdateManyWithoutAttributionNestedInput
    renouvellements?: RenouvellementUpdateManyWithoutAttributionNestedInput
  }

  export type AttributionBourseUncheckedUpdateWithoutEtudiantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    candidatureId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    paiements?: PaiementUncheckedUpdateManyWithoutAttributionNestedInput
    renouvellements?: RenouvellementUncheckedUpdateManyWithoutAttributionNestedInput
  }

  export type AttributionBourseUncheckedUpdateManyWithoutEtudiantInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    montantAccorde?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: DateTimeFieldUpdateOperationsInput | Date | string
    statut?: EnumStatutAttributionFieldUpdateOperationsInput | $Enums.StatutAttribution
    candidatureId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppelCandidatureCreateManyProgrammeInput = {
    id?: string
    reference: string
    titre: string
    description?: string | null
    dateOuverture: Date | string
    dateCloture: Date | string
    nombrePlaces?: number | null
    criteresEligibilite?: string | null
    estPublie?: boolean
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type AppelCandidatureUpdateWithoutProgrammeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateOuverture?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCloture?: DateTimeFieldUpdateOperationsInput | Date | string
    nombrePlaces?: NullableIntFieldUpdateOperationsInput | number | null
    criteresEligibilite?: NullableStringFieldUpdateOperationsInput | string | null
    estPublie?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidatures?: CandidatureUpdateManyWithoutAppelNestedInput
  }

  export type AppelCandidatureUncheckedUpdateWithoutProgrammeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateOuverture?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCloture?: DateTimeFieldUpdateOperationsInput | Date | string
    nombrePlaces?: NullableIntFieldUpdateOperationsInput | number | null
    criteresEligibilite?: NullableStringFieldUpdateOperationsInput | string | null
    estPublie?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    candidatures?: CandidatureUncheckedUpdateManyWithoutAppelNestedInput
  }

  export type AppelCandidatureUncheckedUpdateManyWithoutProgrammeInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dateOuverture?: DateTimeFieldUpdateOperationsInput | Date | string
    dateCloture?: DateTimeFieldUpdateOperationsInput | Date | string
    nombrePlaces?: NullableIntFieldUpdateOperationsInput | number | null
    criteresEligibilite?: NullableStringFieldUpdateOperationsInput | string | null
    estPublie?: BoolFieldUpdateOperationsInput | boolean
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CandidatureCreateManyAppelInput = {
    id?: string
    reference: string
    dateSoumission?: Date | string | null
    motivation?: string | null
    statut?: $Enums.StatutCandidature
    scoreFinal?: Decimal | DecimalJsLike | number | string | null
    commentaire?: string | null
    etudiantId: string
    creeLe?: Date | string
    modifieLe?: Date | string
  }

  export type CandidatureUpdateWithoutAppelInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    etudiant?: EtudiantUpdateOneRequiredWithoutCandidaturesNestedInput
    documents?: DocumentCandidatureUpdateManyWithoutCandidatureNestedInput
    evaluations?: EvaluationUpdateManyWithoutCandidatureNestedInput
    attribution?: AttributionBourseUpdateOneWithoutCandidatureNestedInput
  }

  export type CandidatureUncheckedUpdateWithoutAppelInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    etudiantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentCandidatureUncheckedUpdateManyWithoutCandidatureNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutCandidatureNestedInput
    attribution?: AttributionBourseUncheckedUpdateOneWithoutCandidatureNestedInput
  }

  export type CandidatureUncheckedUpdateManyWithoutAppelInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    dateSoumission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    motivation?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutCandidatureFieldUpdateOperationsInput | $Enums.StatutCandidature
    scoreFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    etudiantId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    modifieLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCandidatureCreateManyCandidatureInput = {
    id?: string
    type: $Enums.TypeDocument
    nomFichier: string
    cheminFichier: string
    estValide?: boolean
    commentaire?: string | null
    creeLe?: Date | string
  }

  export type EvaluationCreateManyCandidatureInput = {
    id?: string
    note?: Decimal | DecimalJsLike | number | string | null
    decision: $Enums.DecisionEvaluation
    commentaire?: string | null
    evaluateurId: string
    creeLe?: Date | string
  }

  export type DocumentCandidatureUpdateWithoutCandidatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeDocumentFieldUpdateOperationsInput | $Enums.TypeDocument
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    estValide?: BoolFieldUpdateOperationsInput | boolean
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCandidatureUncheckedUpdateWithoutCandidatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeDocumentFieldUpdateOperationsInput | $Enums.TypeDocument
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    estValide?: BoolFieldUpdateOperationsInput | boolean
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCandidatureUncheckedUpdateManyWithoutCandidatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeDocumentFieldUpdateOperationsInput | $Enums.TypeDocument
    nomFichier?: StringFieldUpdateOperationsInput | string
    cheminFichier?: StringFieldUpdateOperationsInput | string
    estValide?: BoolFieldUpdateOperationsInput | boolean
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUpdateWithoutCandidatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFieldUpdateOperationsInput | $Enums.DecisionEvaluation
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluateur?: UtilisateurUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutCandidatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFieldUpdateOperationsInput | $Enums.DecisionEvaluation
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    evaluateurId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyWithoutCandidatureInput = {
    id?: StringFieldUpdateOperationsInput | string
    note?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    decision?: EnumDecisionEvaluationFieldUpdateOperationsInput | $Enums.DecisionEvaluation
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    evaluateurId?: StringFieldUpdateOperationsInput | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateManyAttributionInput = {
    id?: string
    reference: string
    periode: string
    montant: Decimal | DecimalJsLike | number | string
    devise?: string
    datePrevue: Date | string
    datePaiement?: Date | string | null
    statut?: $Enums.StatutPaiement
    modePaiement?: string | null
    preuveUrl?: string | null
    creeLe?: Date | string
  }

  export type RenouvellementCreateManyAttributionInput = {
    id?: string
    anneeAcademique: string
    decision: string
    commentaire?: string | null
    dateDecision?: Date | string
    creeLe?: Date | string
  }

  export type PaiementUpdateWithoutAttributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    periode?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    datePrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    modePaiement?: NullableStringFieldUpdateOperationsInput | string | null
    preuveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateWithoutAttributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    periode?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    datePrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    modePaiement?: NullableStringFieldUpdateOperationsInput | string | null
    preuveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyWithoutAttributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    periode?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    devise?: StringFieldUpdateOperationsInput | string
    datePrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    modePaiement?: NullableStringFieldUpdateOperationsInput | string | null
    preuveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenouvellementUpdateWithoutAttributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    anneeAcademique?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateDecision?: DateTimeFieldUpdateOperationsInput | Date | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenouvellementUncheckedUpdateWithoutAttributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    anneeAcademique?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateDecision?: DateTimeFieldUpdateOperationsInput | Date | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenouvellementUncheckedUpdateManyWithoutAttributionInput = {
    id?: StringFieldUpdateOperationsInput | string
    anneeAcademique?: StringFieldUpdateOperationsInput | string
    decision?: StringFieldUpdateOperationsInput | string
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    dateDecision?: DateTimeFieldUpdateOperationsInput | Date | string
    creeLe?: DateTimeFieldUpdateOperationsInput | Date | string
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