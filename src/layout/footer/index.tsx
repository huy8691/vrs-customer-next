import React from "react";
import Link from "next/link";
import { Col, Row } from 'antd';
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.styleFooter}>
      <div className="container">
        <div className={styles.itemFooter}>
          <Row>
            <Col sm={12} md={6}>
              <div className={styles.contentFooter}>
                <div className={styles.titleFooter}>
                  <Link href="/">
                    <img
                      className={styles.logoFt}
                      src="/images/logoft.png"
                      alt="Logo"
                    />
                  </Link>
                  <div className={styles.titleText}>VUA RAU SẠCH</div>
                </div>

                <ul className={styles.bodyFooter}>
                  <li>CÔNG TY CỔ PHẦN VUA RAU SẠCH</li>
                  <ul >
                    <li>
                      {" "}
                      Giấy chứng nhận Đăng ký Kinh doanh số{" "}
                      <span style={{ textDecoration: "underline" }}>
                        0316832935
                      </span>{" "}
                      do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày
                      28/04/2021{" "}
                    </li>
                  </ul>
                  <li>Người đại diện:</li>
                  <ul>
                    <li> Giám đốc Huỳnh Long Điền</li>
                  </ul>
                  <li>Địa chỉ:</li>
                  <ul >
                    <li>
                      371 Tân Sơn Nhì, phường Tân Thành, quận Tân Phú, TP.HCM
                    </li>
                  </ul>
                </ul>
                <p>
                  
                  0767 444 411
                </p>
                <p>
                  
                  hotro@vuarausach.vn
                </p>
              </div>
            </Col>

            <Col sm={12} md={6}>
              <div className={styles.contentCategory}>
                <div className={styles.titleText}>Về Chúng Tôi</div>
                <ul>
                  <li>
                    <Link className={styles.contextFooter} href="/">
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.contextFooter} href="/san-pham">
                      Sản phẩm
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.contextFooter} href="/list-farms">
                      Cửa hàng
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.contextFooter} href="/category">
                      Danh sách sản phẩm
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col sm={12} md={6}>
              <div className={styles.contentCategory}>
                <div className={styles.titleText}>Chính sách</div>
                <ul>
                  <li>
                    <Link
                      className={styles.contextFooter}
                      href="/terms-and-policy/policy"
                    >
                      Điều kiện giao dịch chung
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.contextFooter}
                      href="/terms-and-policy/payment"
                    >
                      Chính sách thanh toán
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.contextFooter}
                      href="/terms-and-policy/delivery"
                    >
                      Chính sách giao nhận vận chuyển
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.contextFooter}
                      href="/terms-and-policy/return"
                    >
                      Chính sách đổi trả hàng và hoàn tiền
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.contextFooter}
                      href="/terms-and-policy/protection"
                    >
                      Chính sách bảo vệ thông tin cá nhân khách hàng
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className={styles.contentCategory}>
                <div className={styles.titleText}>Quy chế</div>
                <ul>
                  <li>
                    <Link
                      className={styles.contextFooter}
                      href="/terms-and-policy/dispute"
                    >
                      Cơ chế quản lý tranh chấp
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={styles.contextFooter}
                      href="/terms-and-policy/operations"
                    >
                      Quy chế quản lý hoạt động
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.confirmRegister}>
        <div className="container">
          Giấy chứng nhận Đăng ký Kinh doanh số <span>0316832935</span> do Sở Kế
          hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 28/04/2021
        </div>
      </div>

      <div className={styles.coppyrightFooter}>
        <div className="container">
          <div
            className={
              styles.groupIcon +
              " " +
              "row d-flex text-center align-items-center"
            }
          >
            <div className="col-sm-4 col-lg-4 d-flex justify-content-center">
            </div>
            <div className="col-sm-4 col-lg-4">
              <span>Copyright © 2003 - 2020 All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
