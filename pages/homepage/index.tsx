import React, { useEffect } from "react";
import { Col, Row } from "antd";
import NewProducts from "./parts/newProducts";
const HomePage: React.FC = () => {
  return (
    <>
      <NewProducts />
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
    </>
  );
};

export default HomePage;
