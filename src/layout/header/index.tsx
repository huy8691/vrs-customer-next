import React,{useState, useEffect} from "react";
import Link from "next/link";
import { Input, Badge, Button } from "antd";
import Cookies from "js-cookie";
import PopupAccount from "./parts/popupAccount";
import { useAppDispatch, useAppSelector } from "src/store/hooks";

import {
  SearchOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { loginActions } from "./parts/login/loginSlice";
import classes from "./styles.module.scss";

const { Search } = Input;
const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const Header = ({}) => {
  const token = Boolean(Cookies.get("token"));
  const dispatch = useAppDispatch();
  const onSearch = (value: string) => console.log(value);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const handleLogout = () => {
    dispatch(loginActions.doLogout());
  };
  useEffect(()=>{
    setIsLoggedIn(token)
  },[token])
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.headerContent}>
          <div className={classes.headerMenuLeft}>
            <div className={classes.logo}>
              <Link href="/">
                <a>
                  <img src="/images/vrs-logo.svg" alt="Vua rau sạch" />
                </a>
              </Link>
            </div>
            <Search
              placeholder="Tìm kiếm sản phẩm"
              enterButton="Tìm kiếm"
              suffix={suffix}
              onSearch={onSearch}
            />
          </div>
          <div className={classes.mainLogo}>
            <Link href="/">
              <img src="/images/logoft.png" alt="Logo" />
            </Link>
          </div>
          <div className={classes.headerMenuRight}>
            {isLoggedIn ? (
              <div className={classes.listItem}>
                <div className={classes.item}>
                  <AuditOutlined />
                  Theo dõi đơn hàng
                </div>
                <div className={classes.item}>
                  <Badge size="small" count={0} showZero>
                    <BellOutlined />
                  </Badge>
                  Thông báo
                </div>
                <div className={classes.item}>
                  <ShoppingCartOutlined />
                  Giỏ hàng
                  <Badge count={0} showZero></Badge>
                </div>
                <div className={classes.item}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <div className={classes.listItem}>
                <PopupAccount />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
