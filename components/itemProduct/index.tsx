
import React, { useEffect } from "react";
import Image from 'next/image'

type Props = {
    img: string;
    name: string;
    unit: string;
    price: number;
    qty: number;
  };
  
const ItemProduct: React.FC <Props> = (props) => {
  return (
    <div>
    <Image
      src={props.img}
      alt="Picture of the author"
      width={500}
      height={500}
    />
    </div>
  );
};

export default ItemProduct;
