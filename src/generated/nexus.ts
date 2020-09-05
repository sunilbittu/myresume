/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as faces from "../interfaces"
import { core } from "@nexus/schema"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "Date";
    url<FieldName extends string>(fieldName: FieldName, opts?: core.ScalarInputFieldConfig<core.GetGen3<"inputTypes", TypeName, FieldName>>): void // "URL";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
    url<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "URL";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: Date
  URL: URL
}

export interface NexusGenRootTypes {
  Bio: faces.BioInterface;
  Position: faces.PositionInterface;
  Query: {};
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
  Date: NexusGenScalars['Date'];
  URL: NexusGenScalars['URL'];
}

export interface NexusGenFieldTypes {
  Bio: { // field return type
    email: string; // String!
    github: NexusGenScalars['URL']; // URL!
    linkedin: NexusGenScalars['URL']; // URL!
    name: string; // String!
    objective: string; // String!
    skills: string[]; // [String!]!
    tagline: string; // String!
    website: NexusGenScalars['URL']; // URL!
  }
  Position: { // field return type
    achievements: string[]; // [String!]!
    company: string; // String!
    endDate: NexusGenScalars['Date'] | null; // Date
    id: string; // ID!
    location: string; // String!
    months: number; // Int!
    startDate: NexusGenScalars['Date']; // Date!
    title: string; // String!
    years: number; // Int!
  }
  Query: { // field return type
    bio: NexusGenRootTypes['Bio']; // Bio!
    position: NexusGenRootTypes['Position'] | null; // Position
    positions: NexusGenRootTypes['Position'][]; // [Position!]!
  }
}

export interface NexusGenArgTypes {
  Query: {
    position: { // args
      id?: string | null; // ID
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Bio" | "Position" | "Query";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Date" | "Float" | "ID" | "Int" | "String" | "URL";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: {};
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}