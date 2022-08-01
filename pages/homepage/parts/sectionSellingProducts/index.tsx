import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Alert } from "antd";
import classes from "../../styles.module.scss";
import { ItemProduct } from "../../../../src/components";
import { ProductDataType } from "../../modelHomePage";

interface Props {
  dataSellingProduct: any,
}
const SectionSellingProducts: React.FC<Props> = ({ dataSellingProduct }) => {
  return (
    <div className={classes.sectionProducts}>
      <div className={classes.sectionProductsHead}>
        <div className={classes.sectionProductsTitle}>Sản phẩm bán chạy</div>
        <Link href="/san-pham">
          <a>Xem thêm</a>
        </Link>
      </div>
      {dataSellingProduct.errors ? (
        <Alert message={dataSellingProduct.message} type="error" />
      ) : (
        <div className={classes.listProduct}>
          {dataSellingProduct?.map((item: ProductDataType, index:number) => {
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
