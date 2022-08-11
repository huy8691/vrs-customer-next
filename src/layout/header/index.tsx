import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Input, Badge, Avatar, Dropdown, Menu } from "antd";
import Cookies from "js-cookie";
import PopupAccount from "./parts/popupAccount";
import MainMenu from "./parts/mainMenu";
import { useAppDispatch } from "src/store/hooks";

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
      color: "rgba(0, 0, 0, 0.25)",
    }}
  />
);
const Header = ({}) => {
  const token = Boolean(Cookies.get("token"));
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const handleLogout = () => {
    dispatch(loginActions.doLogout());
  };
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link href="/account">Thông tin tài khoản</Link>,
        },
        {
          key: "2",
          label: <div onClick={handleLogout}>Logout</div>,
        },
      ]}
    />
  );

  // search
  const onSearch = (value: string) => {
    if (value) {
      router.push({
        pathname: "/san-pham",
        search: `?name=${value}`,
      });
    } else {
      router.push({
        pathname: "/san-pham",
      });
    }
  };

  useEffect(() => {
    setIsLoggedIn(token);
  }, [token]);
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
            <div className={classes.customSearch}>
              <Search
                placeholder="Tìm kiếm sản phẩm"
                enterButton="Tìm kiếm"
                suffix={suffix}
                onSearch={onSearch}
              />
            </div>
          </div>
          <div className={classes.mainLogo}>
            <Link href="/">
              <a>
                <img
                  src="/images/logoft.png"
                  alt="Logo"
                  className={classes.logo}
                />
                <img
                  src="/images/bg-logo.png"
                  alt="Logo"
                  className={classes.mainLogoBg}
                />
              </a>
            </Link>
          </div>
          <div className={classes.headerMenuRight}>
            {isLoggedIn ? (
              <div className={classes.listItem}>
                <div className={classes.item}>
                  <AuditOutlined />
                  <Link href="/account/don-hang">Theo dõi đơn hàng</Link>
                </div>
                <div className={classes.item}>
                  <Badge size="small" count={0} showZero>
                    <BellOutlined />
                  </Badge>
                  <Link href="/account/thong-báo">Thông báo</Link>
                </div>
                <div className={classes.item}>
                  <ShoppingCartOutlined />
                  <Link href="/account/gio-hang">Giỏ hàng</Link>
                  <Badge count={0} showZero></Badge>
                </div>
                <div className={classes.itemUser}>
                  <Dropdown overlay={menu} placement="bottom" arrow>
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                  </Dropdown>
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
      <div className={classes.sectionMainMenu}>
        <div className="container">
          <MainMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
