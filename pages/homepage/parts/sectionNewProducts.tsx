import React from "react";
import Link from "next/link";
import { Alert,Button } from "antd";
import classes from "../styles.module.scss";
import { ItemProduct } from "src/components";
import { ProductDataType } from "../modelHomePage";
interface Props {
  dataNewProduct: any;
}
const SectionNewProducts: React.FC<Props> = ({ dataNewProduct }) => {
  return (
    <section className={classes.sectionProducts}>
      <div className="container">
        <div className={classes.sectionProductsHead}>
          <div className={classes.sectionProductsTitle}>Sản phẩm mới</div>
          <Link href="/san-pham">
            <a>
              <Button type="primary">Xem thêm</Button>
            </a>
          </Link>
        </div>
        {dataNewProduct.errors ? (
          <Alert message={dataNewProduct.message} type="error" />
        ) : (
          <div className={classes.listProduct}>
            {dataNewProduct?.map((item: ProductDataType, index: number) => {
              return index < 6 ? (
                <div className={classes.item} key={index + Math.random()}>
                  <ItemProduct dataProduct={item} />
                </div>
              ) : null;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionNewProducts;