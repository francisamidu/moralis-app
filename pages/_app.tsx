import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { Provider } from "next-auth/client";
import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import "../styles/home.scss";
import { ToastContainer } from "react-toastify";

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <WagmiConfig client={client}>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
