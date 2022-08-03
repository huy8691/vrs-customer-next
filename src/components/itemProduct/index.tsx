import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatMoney } from "src/utils/money.utils";
// import defaultImage from "/image/ProductImageComingSoon.png";
import classes from "./styles.module.scss";
interface ImgProductType {
  url: string;
}
type Props = {
  dataProduct: {
    id:number;
    name: string;
    thumbnails: Array<ImgProductType>;
    prices: Array<{ price: number }>;
    unit: string;
  };
};
const ItemProduct: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes.itemProduct}>
      <Link href={`/chi-tiet-san-pham/${props.dataProduct.id}`}>
        <a>
          <div className={classes.image}>
            <Image
              alt={props.dataProduct.name}
              src={
                props.dataProduct.thumbnails[0]
                  ? props.dataProduct.thumbnails[0].url
                  : "https://via.placeholder.com/160x160?text=vuarausach.com"
              }
              layout="fixed"
              width="160"
              height="160"
            />
          </div>
          <div className={classes.name}>{props.dataProduct.name}</div>
          <div className={classes.priceUnit}>
            <span className={classes.price}>
              {formatMoney(props.dataProduct.prices[0].price)}
            </span>
            /{props.dataProduct.unit}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ItemProduct;
