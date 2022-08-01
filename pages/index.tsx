import Head from "next/head";
import {
  getNewProductList,
  getSellingProductList,
  getCategoryProduct,
} from "./homepage/apiHomePage";
import SectionNewProducts from "./homepage/parts/sectionNewProducts";
import SectionSellingProducts from "./homepage/parts/sectionSellingProducts";
import SectionPreOrderProducts from "./homepage/parts/sectionPreOrderProducts";
import SectionFlashSellProducts from "./homepage/parts/sectionFlashSellProducts";
import SectionCategoryProduct from "./homepage/parts/sectionCategoryProduct";

const Home: React.FC = ({ dataNewProduct, dataSellingProduct, dataCategoryProduct }: any) => {
  return (
    <>
      <Head>
        <title>Vua Rau Sạch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <SectionFlashSellProducts dataNewProduct={dataNewProduct} />
        <SectionNewProducts dataNewProduct={dataNewProduct} />
        <SectionSellingProducts dataSellingProduct={dataSellingProduct} />
        <SectionPreOrderProducts dataNewProduct={dataNewProduct} />
        <SectionCategoryProduct dataCategoryProduct={dataCategoryProduct} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const dataNewProduct = await getNewProductList()
    .then((res) => {
      const { data } = res.data;
      return data;
    })
    .catch((error) => {
      return error.response.data;
    });
  const dataSellingProduct = await getSellingProductList()
    .then((res) => {
      const { data } = res.data;
      return data;
    })
    .catch((error) => {
      return error.response.data;
    });
  const dataCategoryProduct = await getCategoryProduct()
    .then((res) => {
      const { data } = res.data;
      return data;
    })
    .catch((error) => {
      return error.response.data;
    });
  return {
    props: {
      dataNewProduct: dataNewProduct,
      dataSellingProduct: dataSellingProduct,
      dataCategoryProduct: dataCategoryProduct,
    },
  };
}

export default Home;
