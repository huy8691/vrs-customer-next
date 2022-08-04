import React, { useEffect } from "react";
import { Spin, Button, notification } from "antd";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";
import { useAppSelector } from "src/store/hooks";
import notificationType from "src/store/notification/notificationSlice"
import classes from "./styles.module.scss";

type Props = {
  children: JSX.Element;
};
const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  const loading = useAppSelector((state) => state.loading);
  const notificationApp = useAppSelector((state) => state.notification);
  
  useEffect(() => {
    if (notificationApp.message ) {
      const request=()=>{
        if(notificationApp.type===undefined) {
          return  "success"
        } 
        return notificationApp.type
      }
      notification[request()]({
        message: notificationApp.message,
        placement: "bottomLeft",
        duration: notificationApp.duration,
      });
    }
    console.log("notificationApp", notificationApp)
    
  }, [notificationApp.open]);
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
      {loading.isLoading && (
        <div className={classes.loading}>
          <Spin size="large"/>
        </div>
      )}
    </>
  );
};

export default Layout;
