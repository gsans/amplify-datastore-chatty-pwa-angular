/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateChattyInput = {
  id?: string | null;
  user: string;
  message: string;
  createdAt?: string | null;
  _version?: number | null;
};

export type ModelChattyConditionInput = {
  user?: ModelStringInput | null;
  message?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelChattyConditionInput | null> | null;
  or?: Array<ModelChattyConditionInput | null> | null;
  not?: ModelChattyConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateChattyInput = {
  id: string;
  user?: string | null;
  message?: string | null;
  createdAt?: string | null;
  _version?: number | null;
};

export type DeleteChattyInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelChattyFilterInput = {
  id?: ModelIDInput | null;
  user?: ModelStringInput | null;
  message?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelChattyFilterInput | null> | null;
  or?: Array<ModelChattyFilterInput | null> | null;
  not?: ModelChattyFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateChattyMutation = {
  __typename: "Chatty";
  id: string;
  user: string;
  message: string;
  createdAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  updatedAt: string;
};

export type UpdateChattyMutation = {
  __typename: "Chatty";
  id: string;
  user: string;
  message: string;
  createdAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  updatedAt: string;
};

export type DeleteChattyMutation = {
  __typename: "Chatty";
  id: string;
  user: string;
  message: string;
  createdAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  updatedAt: string;
};

export type SyncChattiesQuery = {
  __typename: "ModelChattyConnection";
  items: Array<{
    __typename: "Chatty";
    id: string;
    user: string;
    message: string;
    createdAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetChattyQuery = {
  __typename: "Chatty";
  id: string;
  user: string;
  message: string;
  createdAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  updatedAt: string;
};

export type ListChattysQuery = {
  __typename: "ModelChattyConnection";
  items: Array<{
    __typename: "Chatty";
    id: string;
    user: string;
    message: string;
    createdAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateChattySubscription = {
  __typename: "Chatty";
  id: string;
  user: string;
  message: string;
  createdAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  updatedAt: string;
};

export type OnUpdateChattySubscription = {
  __typename: "Chatty";
  id: string;
  user: string;
  message: string;
  createdAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  updatedAt: string;
};

export type OnDeleteChattySubscription = {
  __typename: "Chatty";
  id: string;
  user: string;
  message: string;
  createdAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateChatty(
    input: CreateChattyInput,
    condition?: ModelChattyConditionInput
  ): Promise<CreateChattyMutation> {
    const statement = `mutation CreateChatty($input: CreateChattyInput!, $condition: ModelChattyConditionInput) {
        createChatty(input: $input, condition: $condition) {
          __typename
          id
          user
          message
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateChattyMutation>response.data.createChatty;
  }
  async UpdateChatty(
    input: UpdateChattyInput,
    condition?: ModelChattyConditionInput
  ): Promise<UpdateChattyMutation> {
    const statement = `mutation UpdateChatty($input: UpdateChattyInput!, $condition: ModelChattyConditionInput) {
        updateChatty(input: $input, condition: $condition) {
          __typename
          id
          user
          message
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateChattyMutation>response.data.updateChatty;
  }
  async DeleteChatty(
    input: DeleteChattyInput,
    condition?: ModelChattyConditionInput
  ): Promise<DeleteChattyMutation> {
    const statement = `mutation DeleteChatty($input: DeleteChattyInput!, $condition: ModelChattyConditionInput) {
        deleteChatty(input: $input, condition: $condition) {
          __typename
          id
          user
          message
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteChattyMutation>response.data.deleteChatty;
  }
  async SyncChatties(
    filter?: ModelChattyFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncChattiesQuery> {
    const statement = `query SyncChatties($filter: ModelChattyFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncChatties(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            user
            message
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncChattiesQuery>response.data.syncChatties;
  }
  async GetChatty(id: string): Promise<GetChattyQuery> {
    const statement = `query GetChatty($id: ID!) {
        getChatty(id: $id) {
          __typename
          id
          user
          message
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetChattyQuery>response.data.getChatty;
  }
  async ListChattys(
    filter?: ModelChattyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListChattysQuery> {
    const statement = `query ListChattys($filter: ModelChattyFilterInput, $limit: Int, $nextToken: String) {
        listChattys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user
            message
            createdAt
            _version
            _deleted
            _lastChangedAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListChattysQuery>response.data.listChattys;
  }
  OnCreateChattyListener: Observable<OnCreateChattySubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateChatty {
        onCreateChatty {
          __typename
          id
          user
          message
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateChattySubscription>;

  OnUpdateChattyListener: Observable<OnUpdateChattySubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateChatty {
        onUpdateChatty {
          __typename
          id
          user
          message
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateChattySubscription>;

  OnDeleteChattyListener: Observable<OnDeleteChattySubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteChatty {
        onDeleteChatty {
          __typename
          id
          user
          message
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteChattySubscription>;
}
