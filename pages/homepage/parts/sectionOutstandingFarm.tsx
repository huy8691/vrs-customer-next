import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Alert, Button, Space } from "antd";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Slider from "react-slick";
import {
  OutstandingFarmDataType,
  OutstandingFarmListDataResponseType,
} from "../modelHomePage";
import { messageError } from "src/constants/message.constant";
import classes from "../styles.module.scss";

interface Props {
  dataOutstandingFarm: OutstandingFarmListDataResponseType;
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${classes.customArrow} ${classes.customArrowNext} ${className}`}
    >
      <RightOutlined />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`${classes.customArrow} ${className}`}>
      <LeftOutlined />
    </div>
  );
}

const SectionOutstandingFarm: React.FC<Props> = ({ dataOutstandingFarm }) => {
  const settingSlide = {
    customPaging: function (i: number) {
      return <div>{i + 1}</div>;
    },
    dots: true,
    className: `${classes.customSlide}`,
    dotsClass: `slick-dots slick-thumb ${classes.customPaging}`,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "30%",
    autoplay: dataOutstandingFarm?.data?.length > 3 ? true : false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={classes.sectionOutstandingFarm}>
      <div className="container">
        <div className={classes.topContent}>
          <Space direction="vertical" size="middle">
            <h2>Trang trại nổi bật</h2>
            <div>Những trang trại được ưa chuộng nhất, với chất lượng cao.</div>
            <Link href="/san-pham">
              <a>
                <Button type="primary" block size="large">
                  Xem thêm
                </Button>
              </a>
            </Link>
          </Space>
        </div>
      </div>
      <div className={classes.slideShowOutstandingFarm}>
        {dataOutstandingFarm.errors ? (
          <div className="container">
            <div className={classes.error}>
              <Alert message={messageError} type="error" />
            </div>
          </div>
        ) : (
          <>
            <Slider {...settingSlide}>
              {dataOutstandingFarm?.data?.map(
                (item: OutstandingFarmDataType, idx: number) => {
                  return (
                    <div className={classes.item} key={idx}>
                      <div className={classes.itemInner}>
                        {!item?.isFake && (
                          <div className={`${classes.itemContent} itemContent`}>
                            <h3 className={classes.name}>
                              {item?.supplier?.name}
                            </h3>
                            <div>{item?.supplier?.address}</div>
                            <div className={classes.totalProducts}>
                              <Space size="middle">
                                <span>
                                  {item?.supplier?.totalProducts} sản phẩm
                                </span>
                                <ArrowRightOutlined />
                              </Space>
                            </div>
                          </div>
                        )}
                        <div className={classes.itemImage}>
                          <Image
                            alt={item?.supplier?.name}
                            src={item?.supplier?.avatar}
                            width="760"
                            height="450"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </Slider>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionOutstandingFarm;
