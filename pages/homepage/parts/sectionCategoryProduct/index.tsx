import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Row, Alert } from "antd";
import classes from "../../styles.module.scss";
import { CategoryProductDataType } from "../../modelHomePage";
interface Props {
  dataCategoryProduct: any;
}
const SectionSellingProducts: React.FC<Props> = ({ dataCategoryProduct }) => {
  return (
    <div className={classes.sectionCategory}>
      <div className="container">
        <h2>Danh mục sản phẩm</h2>
        <div>
          Như mọi người đã biết Vua Rau Sạch là một hệ thống bán thực phẩm hàng
          đầu tại Việt Nam, với thị phần lớn nhất nên được nhiều người biết đến
          hiện nay. Bất kỳ cửa hàng, đại lý nào trên thị trường nông nghiệp bạn
          đều thấy sự xuất hiện của Vua Rau Sạch. Vậy hiện nay, thương hiệu Vua
          Rau Sạch có những dòng sữa nào?mà đáp ứng đa dạng nhu cầu khác nhau
          của người dùng.
        </div>
        <div>
          {dataCategoryProduct.errors ? (
            <Alert message={dataCategoryProduct.message} type="error" />
          ) : (
            <Row>
              {dataCategoryProduct?.map(
                (item: CategoryProductDataType, index: number) => {
                  return index < 6 ? (
                    <Col sm={12} md={8} key={index + Math.random()}>
                      <div className={classes.item}>
                        <div>{item.name}</div>
                        <Image
                          alt={item.name}
                          src={item.image}
                          layout="fixed"
                          width="160"
                          height="160"
                        />
                      </div>
                    </Col>
                  ) : null;
                }
              )}
            </Row>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionSellingProducts;
