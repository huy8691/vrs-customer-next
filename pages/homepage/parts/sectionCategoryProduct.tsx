import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Row, Alert } from "antd";
import classes from "../styles.module.scss";
import {
  PromotionListDataResponseType,
  CategoryProductDataType,
} from "../modelHomePage";
interface Props {
  dataCategoryProduct: PromotionListDataResponseType["data"] | any;
}
const SectionCategoryProduct: React.FC<Props> = ({ dataCategoryProduct }) => {
  return (
    <section className={classes.sectionCategory}>
      <div className="container">
        <h2 className={classes.sectionCategoryTitle}>Danh mục sản phẩm</h2>
        <div className={classes.sectionCategoryContent}>
          Như mọi người đã biết Vua Rau Sạch là một hệ thống bán thực phẩm hàng
          đầu tại Việt Nam, với thị phần lớn nhất nên được nhiều người biết đến
          hiện nay. Bất kỳ cửa hàng, đại lý nào trên thị trường nông nghiệp bạn
          đều thấy sự xuất hiện của Vua Rau Sạch. Vậy hiện nay, thương hiệu Vua
          Rau Sạch có những dòng sữa nào?mà đáp ứng đa dạng nhu cầu khác nhau
          của người dùng.
        </div>
        <div className={classes.listCategory}>
          {dataCategoryProduct.errors ? (
            <Alert message={dataCategoryProduct.message} type="error" />
          ) : (
            <Row gutter={20}>
              {dataCategoryProduct?.map(
                (item: CategoryProductDataType, index: number) => {
                  return index < 9 ? (
                    <Col sm={12} md={6} key={index + Math.random()}>
                      <div className={classes.item}>
                        <div className={classes.name}>{item.name}</div>
                        <div className={classes.image}>
                          <img alt={item.name} src={item.image} />
                        </div>
                      </div>
                    </Col>
                  ) : null;
                }
              )}
            </Row>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionCategoryProduct;
