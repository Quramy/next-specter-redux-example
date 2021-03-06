import 'react-redux'
import { Store, Dispatch, AnyAction } from 'redux'
import { RootState } from '../redux/modules'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
  export function useDispatch<TDispatch = Dispatch<any>>(): TDispatch
  export function useStore<S = DefaultRootState>(): Store<S, Actions>
}
