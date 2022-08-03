import React, { useEffect } from "react";
import { Spin, Button, message } from "antd";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { notificationActions } from "src/store/notification/notificationSlice";
import classes from "./styles.module.scss";

type Props = {
  children: JSX.Element;
};
interface initialStateType {
  open: boolean;
  message: string;
  duration: number;
  type: string;
}
const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading);
  const notification = useAppSelector((state) => state.notification);

  
  // useEffect(() => {
  //   message.warning(notification.message);
  // }, [notification.open]);
  return (
    <>
      <Header />
      {asPath !== "/" && (
        <div className="section-banner">
          <img src="/images/bannerpage.png" />
        </div>
      )}
      {children}
      <Footer />
      <div className={classes.loading}>
        {loading.isLoading && <Spin size="large" />}
      </div>
    </>
  );
};

export default Layout;
