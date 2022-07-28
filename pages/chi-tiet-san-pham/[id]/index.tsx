import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getProductDetail } from "../apiProductDetail";
import { ProductDetailType } from "../modelProductDetail";

const ProductDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [dataProductDetail, setDataNewProduct] = useState<ProductDetailType>();
  useEffect(() => {
    if(id){
      getProductDetail(id)
      .then((res) => {
        const { data } = res.data;
        setDataNewProduct(data);
      })
      .catch(() => {});
    }
  }, [id]);
  return (
    <>
      <Head>
        <title>{dataProductDetail?.name} | Vua Rau Sạch</title>
        <meta name="description" content="Chi tiết sản phẩm | Vua Rau Sạch" />
      </Head>
      <div className="container">{dataProductDetail?.name}</div>
    </>
  );
};


// export async function getStaticProps(context) {
//   const { id } = context.query
//   const dataProductDetail = await getProductDetail(id)
//     .then((res) => {
//       const { data } = res.data;
//       return data;
//     })
//     .catch((error) => {
//       return error.response.data;
//     });
  
//   return {
//     props: {
//       dataProductDetail: dataProductDetail,
//     },
//   };
// }
export default ProductDetail;


