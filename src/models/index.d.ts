import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Chatty {
  readonly id: string;
  readonly user: string;
  readonly message: string;
  readonly createdAt?: string;
  constructor(init: ModelInit<Chatty>);
  static copyOf(source: Chatty, mutator: (draft: MutableModel<Chatty>) => MutableModel<Chatty> | void): Chatty;
}