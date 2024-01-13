/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Numeric: { input: any; output: any; }
  UnsignedInt: { input: any; output: any; }
};

export type Character = {
  __typename?: 'Character';
  attack: Scalars['Int']['output'];
  defence: Scalars['Int']['output'];
  element: Element;
  elementEnergy: Scalars['Int']['output'];
  health: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  rarelity: Scalars['Int']['output'];
  region: Region;
  uniqueAbility: UniqueAbility;
  weaponKind: WeaponKind;
};

export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  nodes: Array<Character>;
  pageInfo: PageInfo;
};

export type CharacterFilterCriteria = {
  attack?: InputMaybe<ComparisonCriterion>;
  defence?: InputMaybe<ComparisonCriterion>;
  element?: InputMaybe<Element>;
  elementEnergy?: InputMaybe<ComparisonCriterion>;
  health?: InputMaybe<ComparisonCriterion>;
  rarelity?: InputMaybe<Scalars['Int']['input']>;
  region?: InputMaybe<Region>;
  uniqueAbilityKind?: InputMaybe<Scalars['String']['input']>;
  uniqueAbilityScore?: InputMaybe<ComparisonCriterion>;
  weaponKind?: InputMaybe<WeaponKind>;
};

export enum CharacterOrderField {
  Attack = 'ATTACK',
  Defence = 'DEFENCE',
  ElementEnergy = 'ELEMENT_ENERGY',
  Health = 'HEALTH',
  UniqueAbilityScore = 'UNIQUE_ABILITY_SCORE'
}

export type CharactersOrder = {
  direction: OrderDirection;
  field: CharacterOrderField;
};

export type ComparisonCriterion = {
  op: ComparisonOperator;
  value: Scalars['Numeric']['input'];
};

export enum ComparisonOperator {
  Eq = 'EQ',
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE'
}

export enum Element {
  /** # 風 */
  Anemo = 'ANEMO',
  /** # 氷 */
  Cryo = 'CRYO',
  /** # 草 */
  Dendro = 'DENDRO',
  /** # 雷 */
  Electro = 'ELECTRO',
  /** # 岩 */
  Geo = 'GEO',
  /** # 水 */
  Hydro = 'HYDRO',
  /** # 炎 */
  Pyro = 'PYRO'
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNext: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  character?: Maybe<Character>;
  characters: CharacterConnection;
};


export type QueryCharacterArgs = {
  name: Scalars['String']['input'];
};


export type QueryCharactersArgs = {
  filter?: InputMaybe<CharacterFilterCriteria>;
  first: Scalars['UnsignedInt']['input'];
  order?: InputMaybe<CharactersOrder>;
};

export enum Region {
  /** # フォンテーヌ */
  Fontaine = 'FONTAINE',
  /** # 稲妻 */
  Inazuma = 'INAZUMA',
  /** # 璃月 */
  Liyue = 'LIYUE',
  /** # モンド */
  Mondstadt = 'MONDSTADT',
  /** # ナタ */
  Natlan = 'NATLAN',
  /** # スネージナヤ */
  Snezhnaya = 'SNEZHNAYA',
  /** # スメール */
  Sumeru = 'SUMERU'
}

export type UniqueAbility = {
  __typename?: 'UniqueAbility';
  kind: Scalars['String']['output'];
  score: Scalars['Float']['output'];
};

export enum WeaponKind {
  /** # 弓 */
  Bow = 'BOW',
  /** # 法器 */
  Catalyst = 'CATALYST',
  /** # 両手剣 */
  Claymore = 'CLAYMORE',
  /** # 長柄武器 */
  Polearm = 'POLEARM',
  /** # 片手剣 */
  Sword = 'SWORD'
}
