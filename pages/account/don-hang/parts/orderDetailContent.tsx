import React, { useEffect, useState } from "react";
import { Space, Row, Col, Steps } from "antd";
import { statusOrder } from "src/constants/status.contants";
import moment from "moment";
import classes from "./styles.module.scss";

interface Product {
  product: {};
  productName: string;
  productPrice: number;
  quantity: number;
}
type Props = {
  orderDetail: {
    status: number;
    items: Product[];
    paymentMethod: {
      name: string;
    };
    address: string;
    name: string;
    phoneNumber: string;
    estimated_date: string;
  };
};
const { Step } = Steps;

const OrderDetailContent: React.FC<Props> = ({ orderDetail }: Props) => {
  console.log("orderDetail", orderDetail);
  return (
    <>
      <Space direction="vertical">
        <div>Tiến độ giao hàng</div>
        <Steps size="small" current={orderDetail?.status - 1}>
          {statusOrder?.map((itemStatus: any, index: number) => (
            <Step title={itemStatus.status} key={index + Math.random()} />
          ))}
        </Steps>
      </Space>
      <div>
        <div>Thông tin đơn hàng</div>
        <Row gutter={20}>
          <Col span="12">
            {orderDetail?.items.map((item: Product, index: number) => (
              <div key={index + Math.random()} className={classes.listProduct}>
                <div className={classes.item}>{item.productName}</div>
                <div className={classes.item}>
                  {item.productPrice} x {item.quantity}
                </div>
              </div>
            ))}
          </Col>
          <Col span="12">
            <Space>
              Tạm tính
              <div>dd</div>
            </Space>
          </Col>
        </Row>
      </div>
      <div className={classes.itemInfo}>
        <div>Hình thức thanh toán</div>
        <div>{orderDetail.paymentMethod?.name}</div>
      </div>
      <div className={classes.itemInfo}>
        <div>Địa chỉ giao hàng</div>
        <div>{orderDetail.address}</div>
      </div>
      <div className={classes.itemInfo}>
        <div>Họ và tên người nhận</div>
        <div>{orderDetail.name}</div>
      </div>
      <div className={classes.itemInfo}>
        <div>Số điện thoại</div>
        <div>{orderDetail.phoneNumber}</div>
      </div>
      <div className={classes.itemInfo}>
        <div>Thời gian nhận hàng (dự kiến)</div>
        <div>
          {moment(orderDetail?.estimated_date).format("dd, DD/MM/YYYY")}
        </div>
      </div>
    </>
  );
};

export default OrderDetailContent;
