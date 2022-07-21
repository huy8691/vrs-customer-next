import React, { useEffect, useState } from "react";
import classes from "./styles.module.scss";
import { getProductList } from "../../api";
import { ProductListDataResponseType } from "../../model";
import { ItemProduct } from "../../../../components";

const NewProducts: React.FC = () => {
  const [dataNewProduct, setDataNewProduct] = useState<ProductListDataResponseType["data"]>();
  useEffect(() => {
    getProductList()
      .then((res) =>{
        const { data } = res;
        setDataNewProduct(data.data);
      })
      .catch(() => {});
      
  }, []);

  return (
    <div className={classes.listProduct}>
      {dataNewProduct?.map((item, index) => {
        return <ItemProduct dataProps={item} key={index+Math.random()} />;
      })}
    </div>
  );
};

export default NewProducts;
