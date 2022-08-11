import React, { useEffect } from "react";
import { Spin, Button, notification } from "antd";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";
import { useAppSelector } from "src/store/hooks";
import { Provider } from "react-redux";
import { store } from "src/store/store";
import classes from "./styles.module.scss";

type Props = {
  children: JSX.Element;
};
const LayoutInner = ({ children }: Props) => {
  const { asPath } = useRouter();
  const notificationApp = useAppSelector((state) => state.notification);
  const loading = useAppSelector((state) => state.loading);
  useEffect(() => {
    if (notificationApp.message) {
      const request = () => {
        if (notificationApp.type === undefined) {
          return "success";
        }
        return notificationApp.type;
      };
      notification[request()]({
        message: notificationApp.message,
        placement: "bottomLeft",
        duration: notificationApp.duration,
      });
    }
  }, [notificationApp]);
  return (
    <div className={asPath !== "/" ? classes.layoutInner : ""}>
      {children}
      {loading.isLoading && (
        <div className={classes.loading}>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};
const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  return (
    <Provider store={store}>
      <>
        <Header />
        {asPath !== "/" && (
          <div className="section-banner">
            <img src="/images/bannerpage.png" />
          </div>
        )}
        <LayoutInner>{children}</LayoutInner>
        <Footer />
      </>
    </Provider>
  );
};

export default Layout;
