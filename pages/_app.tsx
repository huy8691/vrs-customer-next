import "antd/dist/antd.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { history, store } from "../src/store/store";

import Footer from "./_layout/footer";
import Header from "./_layout/header";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <>
      <Provider store={store}>
        <Header />
        {asPath !== "/" && (
          <div className="section-banner">
            <img src="/images/bannerpage.png" />
          </div>
        )}
        <Component {...pageProps} history={history}/>
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
