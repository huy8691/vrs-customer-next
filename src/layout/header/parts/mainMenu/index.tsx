import Link from "next/link";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import React, { useState } from "react";
import classes from "./styles.module.scss";

const MainMenu = () => {
  const [current, setCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const itemsLeft: MenuProps["items"] = [
    {
      label: (
        <Link href="/">
          <a>Trang chủ</a>
        </Link>
      ),
      key: "1",
    },
    {
      label: "Chính sách & điều khoản",
      key: "subMenu1",
      popupClassName: classes.subMenuCustom,
      popupOffset: [-55, 1],
      children: [
        {
          label: (
            <Link href="/terms-and-policy/policy">
              <a>Điều Kiện Giao Dịch Chung</a>
            </Link>
          ),
          key: "2",
        },
        {
          label: (
            <Link href="/terms-and-policy/payment">
              <a>Chính sách thanh toán</a>
            </Link>
          ),
          key: "3",
        },
        {
          label: (
            <Link href="/terms-and-policy/delivery">
              <a>Chính Sách Giao Nhận Vận Chuyển</a>
            </Link>
          ),
          key: "4",
        },
        {
          label: (
            <Link href="/terms-and-policy/return">
              <a>Chính Sách Đổi Trả Hàng Và Hoàn Tiền</a>
            </Link>
          ),
          key: "5",
        },
        {
          label: (
            <Link href="/terms-and-policy/protection">
              <a>Bảo vệ thông tin cá nhân khách hàng</a>
            </Link>
          ),
          key: "6",
        },
        {
          label: (
            <Link href="/terms-and-policy/dispute">
              <a>Cơ chế quản lý tranh chấp</a>
            </Link>
          ),
          key: "7",
        },
        {
          label: (
            <Link href="/terms-and-policy/operations">
              <a>Quy chế quản lý hoạt động</a>
            </Link>
          ),
          key: "8",
        },
      ],
    },
  ];
  const itemsRight: MenuProps["items"] = [
    {
      label: "Danh mục",
      key: "subMenu2",
      popupClassName: classes.subMenuCustom,
      popupOffset: [-90, 1],
      children: [
        {
          label: (
            <Link href="/terms-and-policy/policy">
              <a>Điều Kiện Giao Dịch Chung</a>
            </Link>
          ),
          key: "9",
        },
        {
          label: (
            <Link href="/terms-and-policy/payment">
              <a>Chính sách thanh toán</a>
            </Link>
          ),
          key: "10",
        },
        {
          label: (
            <Link href="/terms-and-policy/delivery">
              <a>Chính Sách Giao Nhận Vận Chuyển</a>
            </Link>
          ),
          key: "11",
        },
        {
          label: (
            <Link href="/terms-and-policy/return">
              <a>Chính Sách Đổi Trả Hàng Và Hoàn Tiền</a>
            </Link>
          ),
          key: "12",
        },
      ],
    },
    {
      label: (
        <Link href="https://cms.vuarausach.vn" target="_blank">
          <a>Bán hàng cùng rau sạch</a>
        </Link>
      ),
      key: "1",
    },
  ];
  return (
    <div className={classes.mainMenu}>
      <div className={classes.mainMenuLeft}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemsLeft}
          selectable={false}
          style={{
            background: "none",
            borderBottom: "none",
            color: "white",
            justifyContent: "flex-end",
            lineHeight: "32px",
          }}
        />
      </div>
      <div className={classes.mainMenuRight}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={itemsRight}
          style={{
            background: "none",
            borderBottom: "none",
            color: "white",
            lineHeight: "32px",
          }}
        />
      </div>
    </div>
  );
};

export default MainMenu;
