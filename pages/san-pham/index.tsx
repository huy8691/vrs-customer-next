import React, { useEffect, useState } from "react";
import { Alert } from "antd";
import classes from "./styles.module.scss";
import { ItemProduct } from "../../src/components";
import { getProducts } from "./apiProducts";
import { ProductDataType } from "./modelProducts";

const Products: React.FC = ({ data }: any) => {
  return (
    <div className="container">
      {data.errors ? (
        <Alert message={data.message} type="error" />
      ) : (
        <div className={classes.listProduct}>
          {data?.map((item: ProductDataType, index: number) => {
            return (
              <div className={classes.item} key={index + Math.random()}>
                <ItemProduct dataProduct={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const dataProducts = await getProducts()
    .then((res) => {
      const { data } = res.data;
      return data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return {
    props: {
      data: dataProducts,
    },
  };
}

export default Products;
