/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query CareerJourneyPageData {\n    careerExperiences(orderBy: order_ASC) {\n        location\n        closeDate\n        description {\n            raw\n        }\n        id\n        photo\n        positionTitle\n        skills\n        startDate\n        present\n        companyName\n        companyLink\n    }\n  }\n": types.CareerJourneyPageDataDocument,
    "\n  query HomePageToolkitSectionData {\n    homePageToolkitSections {\n      subtitle\n      title\n      subsections {\n        id\n        subtitle\n        title\n        listOfTechnologies(first: 50) {\n          id\n          technologyName\n          iconClassName\n          confidenceLevel\n        }\n      }\n    }\n  }\n": types.HomePageToolkitSectionDataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query CareerJourneyPageData {\n    careerExperiences(orderBy: order_ASC) {\n        location\n        closeDate\n        description {\n            raw\n        }\n        id\n        photo\n        positionTitle\n        skills\n        startDate\n        present\n        companyName\n        companyLink\n    }\n  }\n"): (typeof documents)["\n  query CareerJourneyPageData {\n    careerExperiences(orderBy: order_ASC) {\n        location\n        closeDate\n        description {\n            raw\n        }\n        id\n        photo\n        positionTitle\n        skills\n        startDate\n        present\n        companyName\n        companyLink\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query HomePageToolkitSectionData {\n    homePageToolkitSections {\n      subtitle\n      title\n      subsections {\n        id\n        subtitle\n        title\n        listOfTechnologies(first: 50) {\n          id\n          technologyName\n          iconClassName\n          confidenceLevel\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query HomePageToolkitSectionData {\n    homePageToolkitSections {\n      subtitle\n      title\n      subsections {\n        id\n        subtitle\n        title\n        listOfTechnologies(first: 50) {\n          id\n          technologyName\n          iconClassName\n          confidenceLevel\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;