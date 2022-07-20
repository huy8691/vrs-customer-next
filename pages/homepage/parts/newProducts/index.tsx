
import React, { useEffect } from "react";
import classes from './styles.module.scss'
import { getProductList} from "../../api";
import {ItemProduct} from "../../../../components"


const NewProducts: React.FC = () => {
    useEffect(() => {
        getProductList()
          .then((res) => {
            const { data } = res;
            console.log("data", data);
          })
          .catch(() => {
          });
      }, []);
  
  return (
    <div className={classes.main}>
      {/* <ItemProduct/> */}
      <div>4444</div>
    </div>
  );
};

export default NewProducts;
