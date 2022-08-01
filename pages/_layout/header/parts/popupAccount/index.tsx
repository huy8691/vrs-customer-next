import { Button, Modal, Col, Row, Tabs } from "antd";
import React, { useState, useEffect } from "react";
import Login from "../login"
import { useAppSelector } from "../../../../../src/store/hooks";


const { TabPane } = Tabs;

const PopupAccount = () => {
  const [visible, setVisible] = useState(false);
  const [tabActive, setTabActive] = useState("1");
  const login = useAppSelector((state) => state.login);
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
    setTabActive("1")
  };

  const onChange = (key: string) => {
    console.log(key);
    setTabActive(key)
  };

  console.log("login", login)
  useEffect(()=>{
    if(login.data?.accessToken){
      setVisible(false);
    setTabActive("1")
    }

  },[login])
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Đăng nhập
      </Button>
      <Button type="primary" onClick={()=>{
        setTabActive("2")
        showModal()
      }}>
        Đăng ký
      </Button>
      <Modal
        visible={visible}
        title=""
        onCancel={handleCancel}
        footer=""
        width={900}
      >
        <Row>
          <Col span={8}>
            <h3>Giới thiệu</h3>
            <div>
              Với con số doanh thu hàng năm trên nhiều tỷ đồng. Mô hình trang
              trại rau xanh là bước tiến đột phá thoát nghèo vươn lên. làm giàu
              chính đáng , hơn nữa mô hình này còn mở rộng thị phần cho ngành
              nông nghiệp ở việt nam. Chúng tôi nhằm. vào lợi thế này để phát
              triển mô hình trang rau xanh sạch đẹp để làm giàu cho bản thân,
              gia đình và xã hội...
            </div>
          </Col>
          <Col span={16}>
            <Tabs  activeKey={tabActive} onChange={onChange}>
              <TabPane tab="Đăng nhập" key="1">
                <Login/>
              </TabPane>
              <TabPane tab="Đăng ký" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default PopupAccount;
