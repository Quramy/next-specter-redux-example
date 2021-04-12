import { AnyAction } from "redux";
import { ParsedUrlQuery } from "querystring";
import { StepAction } from "redux-effects-steps";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { createServerSideStore } from "../createStore";
import { RootState } from "../modules";

export type StepFactory = (
  ctx: GetServerSidePropsContext
) => StepAction<AnyAction>;

export type Keys = keyof RootState["resources"] & string;

export function serverSideSteps<Q extends ParsedUrlQuery = ParsedUrlQuery>(...stepFactories: readonly StepFactory[]) {
  return (k: Keys, ...keys: Keys[]) => {
    const fn: GetServerSideProps<Record<string, any>, Q> = async ctx => {
      const store = createServerSideStore();
      await stepFactories.reduce(async (queue, stepFactory) => {
        await queue;
        await store.dispatch(stepFactory(ctx));
      }, Promise.resolve());
      const resources = store.getState().resources;
      const partialState = [k, ...keys].reduce((acc, k) => ({
        ...acc,
        [k]: resources[k],
      }), { } as any);
      return {
        props: {
          _loadedState: { resources: partialState }
        }
      };
    };
    return fn;
  };
}
