import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { Alert, Col, Row, Breadcrumb } from "antd";
import Slider from "react-slick";
import { getProductDetail } from "./apiProductDetail";
import { ProductDetailType } from "./modelProductDetail";
import classes from "./styles.module.scss";

// layout
import type { ReactElement } from "react";
import Layout from "src/layout";
import type { NextPageWithLayout } from "pages/_app.page";

const ProductDetail: NextPageWithLayout = (data:any) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  if (data.errors) {
    return (
      <div className="container">
        <Alert message={data.message} type="error" />
      </div>
    );
  }
  const detailSlide1 = {
    dots: true,
    infinite: data.images?.length > 5 ? true : false,
    slidesToShow: data.images?.length > 5 ? 5 : data.images?.length,
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
    dots: false,
  };
  return (
    <>
      <Head>
        <title>{data?.name} | Vua Rau Sạch</title>
        <meta name="description" content="Chi tiết sản phẩm | Vua Rau Sạch" />
      </Head>
      <div className="container">
        <div>Chi tiết sản phẩm</div>
        <Row>
          <Col span={12}>
            <div className={classes.rowSlideShow}>
              <div className={classes.slideShowSmall}>
                <Slider
                  {...detailSlide1}
                  asNavFor={nav2}
                  ref={(c: any) => setNav1(c)}
                >
                  {data.images?.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <Image
                          alt={data?.name}
                          src={item.url}
                          layout="fixed"
                          width="85"
                          height="85"
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className={classes.slideShowBig}>
                <Slider
                  {...detailSlide2}
                  asNavFor={nav1}
                  ref={(c: any) => setNav2(c)}
                >
                  {data.images?.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <Image
                          alt={data.name}
                          src={item.url}
                          layout="fixed"
                          width="400"
                          height="400"
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <Breadcrumb>
              {data.categories?.map((item, idx) => {
                return <Breadcrumb.Item key={idx}>{item.name}</Breadcrumb.Item>;
              })}
            </Breadcrumb>
            <h1>{data.name}</h1>
          </Col>
        </Row>
        <div>
          <h2>Mô tả sản phẩm</h2>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </div>
    </>
  );
};
ProductDetail.getInitialProps = async ({ query }: any) => {
  const productId = query.id;
  const dataProductDetail = await getProductDetail(productId)
    .then((res) => {
      const { data } = res.data;
      return data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return dataProductDetail;
};

ProductDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default ProductDetail;
