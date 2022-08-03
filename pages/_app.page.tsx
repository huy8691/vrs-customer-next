
import "../styles/globals.less"
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/store/store";
import Layout from "../src/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Layout><Component {...pageProps} /></Layout>
      </Provider>
    </>
  );
}

export default MyApp;
