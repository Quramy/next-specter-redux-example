import { Provider as ReduxProvider } from "react-redux";
import { getStore } from "../redux/createStore";

function MyApp({ Component, pageProps }: any) {
  const { _loadedState, ...props} = pageProps;
  const store = getStore(_loadedState);
  return (
    <ReduxProvider store={store}>
      <Component {...props} />
    </ReduxProvider>
  );
}

export default MyApp;
