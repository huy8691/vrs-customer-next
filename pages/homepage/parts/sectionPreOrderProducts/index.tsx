import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Alert } from 'antd';
import classes from "../../styles.module.scss";
import { ItemProduct } from "../../../../src/components";

const SectionPreOrderProducts: React.FC = ({dataNewProduct}) => {
  return (
    <div className={classes.sectionProducts}>
      <div className={classes.sectionProductsHead}>
        <div className={classes.sectionProductsTitle}>Sản phẩm đặt trước</div>
        <Link href="/danhsach">
          <a>Xem thêm</a>
        </Link>
      </div>
      {dataNewProduct.errors ? (
        <Alert message={dataNewProduct.message} type="error" />
      ) : (
        <div className={classes.listProduct}>
          {dataNewProduct?.map((item, index) => {
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

export default SectionPreOrderProducts;
