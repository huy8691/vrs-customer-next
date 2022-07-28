import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Alert } from "antd";
import classes from "../../styles.module.scss";
import { getSellingProductList } from "../../apiHomePage";
import { ProductListDataResponseType } from "../../modelHomepage";
import { ItemProduct } from "../../../../src/components";

const SectionSellingProducts: React.FC = ({ dataSellingProduct }) => {
  return (
    <div className={classes.sectionProducts}>
      <div className={classes.sectionProductsHead}>
        <div className={classes.sectionProductsTitle}>Sản phẩm bán chạy</div>
        <Link href="/danhsach">
          <a>Xem thêm</a>
        </Link>
      </div>
      {dataSellingProduct.errors ? (
        <Alert message={dataSellingProduct.message} type="error" />
      ) : (
        <div className={classes.listProduct}>
          {dataSellingProduct?.map((item, index) => {
            return index < 6 ? (
              <div className={classes.item} key={index + Math.random()}>
                <ItemProduct dataProduct={item} />
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default SectionSellingProducts;
