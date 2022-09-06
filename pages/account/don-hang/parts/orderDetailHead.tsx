import React, { useEffect, useState } from "react";
import { Space, Row, Col } from "antd";
import { statusOrderRender } from "src/constants/status.contants";
import moment from "moment";

type Props = {
  orderDetail: {
    orderCode?: string;
    status?: number;
    estimated_date?: string;
    supplier?: {
      name?: string;
    };
  };
};
const OrderDetailHead: React.FC<Props> = ({ orderDetail }: Props) => {
  return (
    <Row gutter={20}>
      <Col span={10}>
        <Space direction="vertical">
          {orderDetail?.supplier?.name}
          {orderDetail?.orderCode}
        </Space>
      </Col>
      <Col>
        <Space direction="vertical">
          Tình trạng
          {statusOrderRender(orderDetail?.status)}
        </Space>
      </Col>
      <Col>
        <Space direction="vertical">
          Giao hàng dự kiến
          {moment(orderDetail?.estimated_date).format("dd, DD/MM/YYYY")}
        </Space>
      </Col>
    </Row>
  );
};

export default OrderDetailHead;
