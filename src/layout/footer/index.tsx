import React from "react";
import Link from "next/link";
import { Col, Row } from "antd";
import { PhoneFilled,MailFilled } from '@ant-design/icons';
import classes from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <div className="container">
          <Row gutter={16}>
            <Col sm={12} md={6}>
              <>
                <div className={classes.footerLogo}>
                  <div className={classes.footerLogoImage}>
                    <Link href="/">
                      <a>
                        <img src="/images/logoft.png" alt="Logo" />
                      </a>
                    </Link>
                  </div>
                  <div>VUA RAU SẠCH</div>
                </div>
                <ul className={classes.footerMenuType2}>
                  <li>CÔNG TY CỔ PHẦN VUA RAU SẠCH</li>
                  <ul>
                    <li>
                      Giấy chứng nhận Đăng ký Kinh doanh số 0316832935 do Sở Kế
                      hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 28/04/2021
                    </li>
                  </ul>
                </ul>
                <ul className={classes.footerMenuType2}>
                  <li>Người đại diện:</li>
                  <ul>
                    <li>Giám đốc Huỳnh Long Điền</li>
                  </ul>
                </ul>
                <ul className={classes.footerMenuType2}>
                  <li>Địa chỉ:</li>
                  <ul>
                    <li>
                      371 Tân Sơn Nhì, phường Tân Thành, quận Tân Phú, TP.HCM
                    </li>
                  </ul>
                </ul>
                <div className={classes.contact}><PhoneFilled /><a href="tel:0767444411">0767 444 411</a></div>
                <div className={classes.contact}><MailFilled /><a href="mailto:hotro@vuarausach.vn">hotro@vuarausach.vn</a></div>
              </>
            </Col>
            <Col sm={12} md={6}>
              <>
                <h3 className={classes.titleMenu}>Về Chúng Tôi</h3>
                <ul className={classes.footerMenu}>
                  <li>
                    <Link href="/">
                      <a>Giới thiệu</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/san-pham">
                      <a>Sản phẩm</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/list-farms">
                      <a>Cửa hàng</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/category">
                      <a>Danh sách sản phẩm</a>
                    </Link>
                  </li>
                </ul>
              </>
            </Col>
            <Col sm={12} md={6}>
              <>
                <h3 className={classes.titleMenu}>Chính sách</h3>
                <ul className={classes.footerMenu}>
                  <li>
                    <Link href="/terms-and-policy/policy">
                      <a>Điều kiện giao dịch chung</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-policy/payment">
                      <a>Chính sách thanh toán</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-policy/delivery">
                      <a>Chính sách giao nhận vận chuyển</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-policy/return">
                      <a>Chính sách đổi trả hàng và hoàn tiền</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-policy/protection">
                      <a>Chính sách bảo vệ thông tin cá nhân khách hàng</a>
                    </Link>
                  </li>
                </ul>
              </>
            </Col>
            <Col sm={12} md={6}>
              <>
                <h3 className={classes.titleMenu}>Quy chế</h3>
                <ul className={classes.footerMenu}>
                  <li>
                    <Link href="/terms-and-policy/dispute">
                      <a>Cơ chế quản lý tranh chấp</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-policy/operations">
                      <a>Quy chế quản lý hoạt động</a>
                    </Link>
                  </li>
                </ul>
              </>
            </Col>
          </Row>
        </div>
      </div>

      <div className={classes.footerMiddle}>
        <div className="container">
          Giấy chứng nhận Đăng ký Kinh doanh số <span style={{textDecoration: 'underline'}}>0316832935</span> do Sở Kế
          hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 28/04/2021
        </div>
      </div>
      <div className={classes.footerBottom}>
        <div className="container">
          <div
            className={
              classes.groupIcon +
              " " +
              "row d-flex text-center align-items-center"
            }
          >
            <div className="col-sm-4 col-lg-4 d-flex justify-content-center"></div>
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
