import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Login from "../login";
import Register from "../register";
import { Button, Modal, Col, Row, Tabs, Typography, Space } from "antd";
import { useAppSelector } from "src/store/hooks";
import classes from "../../styles.module.scss";

const { TabPane } = Tabs;
const { Title } = Typography;

const PopupAccount = () => {
  const [visible, setVisible] = useState(false);
  const [tabActive, setTabActive] = useState("1");
  // const login = useAppSelector((state) => state.login);
  const register = useAppSelector((state) => state.register);
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
    setTabActive("1");
  };

  const onChange = (key: string) => {
    console.log(key);
    setTabActive(key);
  };

  // useEffect(() => {
  //   if (login.data?.access_token) {
  //     setVisible(false);
  //     setTabActive("1");
  //   }
  // }, [login]);

  useEffect(() => {
    if (register.data) {
      setTabActive("1");
    }
  }, [register]);

  return (
    <>
      <Row gutter={16}>
        <Col>
          <Button type="primary" onClick={showModal}>
            Đăng nhập
          </Button>
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={() => {
              setTabActive("2");
              showModal();
            }}
          >
            Đăng ký
          </Button>
        </Col>
      </Row>

      <Modal
        visible={visible}
        title=""
        onCancel={handleCancel}
        footer=""
        width={900}
      >
        <Row gutter={16}>
          <Col span={10}>
            <div className={classes.modalAccountIntro}>
              <h3>Giới thiệu</h3>
              <div>
                Với con số doanh thu hàng năm trên nhiều tỷ đồng. Mô hình trang
                trại rau xanh là bước tiến đột phá thoát nghèo vươn lên. làm
                giàu chính đáng , hơn nữa mô hình này còn mở rộng thị phần cho
                ngành nông nghiệp ở việt nam. Chúng tôi nhằm. vào lợi thế này để
                phát triển mô hình trang rau xanh sạch đẹp để làm giàu cho bản
                thân, gia đình và xã hội...
              </div>
            </div>
          </Col>
          <Col span={14}>
            <div className={classes.modalAccountContent}>
              <div className={classes.modalAccountHeader}>
                <Space>
                  <Typography className={classes.modalAccountTitle}>
                    Chào bạn đến với Vua Rau Sạch
                  </Typography>
                  <div>
                    <Image
                      src="/images/logoft.png"
                      alt="Logo"
                      width="70"
                      height="60"
                      layout="fixed"
                    />
                  </div>
                </Space>
              </div>

              <Tabs activeKey={tabActive} onChange={onChange} centered>
                <TabPane
                  tab="Đăng nhập"
                  key="1"
                  // style={{ display: "block !important" }}
                >
                  <div className={classes.tabContent}>
                    <Login />
                    <Space size="large" className={classes.tabContentBottom}>
                      <Link href="/quen-mat-khau">
                        <a>Quên mật khẩu</a>
                      </Link>
                      <Typography.Link onClick={() => onChange("2")}>
                        Đăng ký tài khoản
                      </Typography.Link>
                    </Space>
                  </div>
                </TabPane>
                <TabPane
                  tab="Đăng ký"
                  key="2"
                  // style={{ display: "block !important" }}
                >
                  <div className={classes.tabContent}>
                    <Register />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default PopupAccount;
