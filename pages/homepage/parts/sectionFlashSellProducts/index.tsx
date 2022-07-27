import React, { useEffect, useState } from "react";
import Link from "next/link";
import classes from "../../styles.module.scss";
import { getNewProductList } from "../../apiHomePage";
import { ProductListDataResponseType } from "../../modelHomepage";
import { ItemProduct } from "../../../../src/components";

const SectionCategoryProduct: React.FC = () => {
  const [dataNewProduct, setDataNewProduct] =
    useState<ProductListDataResponseType["data"]>();
  useEffect(() => {
    getNewProductList()
      .then((res) => {
        const { data } = res.data;
        setDataNewProduct(data);
      })
      .catch(() => {});
  }, []);
  return (
    <div className={classes.sectionProducts}>
      <div className={classes.sectionProductsHead}>
        <div className={classes.sectionProductsTitle}>Flash Sell</div>
        <Link href="/danhsach">
          <a>Xem thêm</a>
        </Link>
      </div>
      <div className={classes.listProduct}>
        {dataNewProduct?.map((item, index) => {
          return index < 6 ? (
            <div className={classes.item} key={index + Math.random()}>
              <ItemProduct dataProduct={item} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default SectionCategoryProduct;
