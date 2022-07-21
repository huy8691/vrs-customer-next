import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProductDataType } from "../../pages/homepage/model";
import defaultImage from "../../assets/images/ProductImageComingSoon.png";
import classes from "./styles.module.scss";

type Props = {
  dataProps: ProductDataType;
};

const ItemProduct: React.FC<Props> = (props: Props) => {
  const [imgProduct, setImgProduct] = useState(
    ""
  );
  return (
    <div className={classes.itemProduct}>
      {props.dataProps.name}
      <div className={classes.image}>
        <img src={imgProduct} />
      </div>
    </div>
  );
};

export default ItemProduct;
