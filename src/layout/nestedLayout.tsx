import React from "react";
import { Avatar, Image, Row, Col, Space } from "antd";
import { InfoCircleOutlined, DatabaseOutlined } from "@ant-design/icons";
import { useAppSelector } from "src/store/hooks";
import { ActiveLink } from "src/components";
import classes from "./styles.module.scss";
type Props = {
  children: JSX.Element;
  icon?: JSX.Element;
  title?: string;
};
const NestedLayout: React.FC<Props> = ({ children, icon, title }: Props) => {
  // reducer
  const userInfoReducer = useAppSelector((state) => state.userInfo);
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
    <Row gutter={30} className={classes.nestedLayout}>
      <Col span={6} className={classes.colMenuNestedLayout}>
        <Space className={classes.colMenuNestedLayoutUser} size={15}>
          <Avatar src={userInfoReducer?.data?.avatar} size={100}>
            {userInfoReducer?.data?.fullName?.charAt(0)}
          </Avatar>
          <Space direction="vertical" size={5}>
            Xin chào
            <div className={classes.name}>
              {userInfoReducer?.data?.fullName}
            </div>
          </Space>
        </Space>
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
      <Col span={18}>
        <div className={classes.colContentNestedLayout}>
          <div className={classes.colContentNestedLayoutHeader}>
            <div className={classes.icon}>{icon}</div>
            {title}
          </div>
          {children}
        </div>
      </Col>
    </Row>
  );
};
export default NestedLayout;
