import React from "react";
import { Row, Col } from "antd";
import {InfoCircleOutlined, DatabaseOutlined } from "@ant-design/icons";
import { ActiveLink } from "src/components";
import classes from "./styles.module.scss";
type Props = {
  children: JSX.Element;
};
const NestedLayout = ({ children }: Props) => {
  const items = [
    {
      label: "Thông tin tài khoản",
      icon: <InfoCircleOutlined />,
      href: "/account",
    },
    {
      label: "Quản lý đơn hàng",
      icon: <DatabaseOutlined />,
      href: "/account/don-hang",
    },
  ];
  return (
    <Row>
      <Col span={6}>
        <div className={classes.menu}>
          {items.map((item, index: number) => {
            return (
              <div key={index} className={classes.menuItem}>
                <ActiveLink href={item.href}>
                  <a>
                    <span className={classes.icon}>{item.icon}</span>
                    {item.label}
                  </a>
                </ActiveLink>
              </div>
            );
          })}
        </div>
      </Col>
      <Col span={18}>{children}</Col>
    </Row>
  );
};
export default NestedLayout;
