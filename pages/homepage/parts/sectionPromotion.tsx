import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Alert } from "antd";
import Slider from "react-slick";
import {
  PromotionDataType,
} from "../modelHomePage";
import classes from "../styles.module.scss";

interface Props {
  dataPromotion: any;
}
const SectionPromotion: React.FC<Props> = ({ dataPromotion }) => {
  console.log("dataPromotion", dataPromotion);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const detailSlide1 = {
    dots: true,
    infinite: dataPromotion?.length > 5 ? true : false,
    slidesToShow: dataPromotion?.length > 5 ? 5 : dataPromotion?.length,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
  };
  const detailSlide2 = {
    slidesToShow: 1,
    arrows: false,
    dots: true,
  };
  return (
    <div className={classes.rowSlideShow}>
      {dataPromotion.errors ? (
        <div className="container"><Alert message={dataPromotion.message} type="error" /></div>
      ) : (
        <>
          <div className={classes.slideShowSmall}>
            <Slider
              {...detailSlide1}
              asNavFor={nav2}
              ref={(c: any) => setNav1(c)}
            >
              {dataPromotion?.map((item:PromotionDataType, idx:number) => {
                return <div className={classes.item} key={idx}><h3>{item?.name}</h3></div>;
              })}
            </Slider>
          </div>
          <div className={classes.slideShowBig}>
            <Slider
              {...detailSlide2}
              asNavFor={nav1}
              ref={(c: any) => setNav2(c)}
            >
              {dataPromotion?.map((item:PromotionDataType, idx:number) => {
                return (
                  <div key={idx}>
                    <Image
                      alt={item?.name}
                      src={item.featureImage.url}
                      layout="fixed"
                      width="1920"
                      height="400"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
};

export default SectionPromotion;
