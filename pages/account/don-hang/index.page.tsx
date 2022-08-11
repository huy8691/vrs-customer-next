import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Alert } from "antd";
import classes from "./styles.module.scss";
import RequireAuth from "src/layout/requireAuth";
import { ItemProduct } from "src/components";
import { getProducts } from "./apiProducts";
import { ProductDataType } from "./modelProducts";

// layout
import type { ReactElement } from "react";
import Layout from "src/layout";
import NestedLayout from "src/layout/nestedLayout";
import type { NextPageWithLayout } from "pages/_app.page";

const Orders: NextPageWithLayout = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getProducts()
      .then((res) => {
        const { data } = res.data;
        return data;
      })
      .catch((error) => {
        // return error.response.data;
      });
  }, []);
  return (
    <div>Nội dung</div>
  );
};

Orders.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <RequireAuth>
        <div className="container">
          <NestedLayout>{page}</NestedLayout>
        </div>
      </RequireAuth>
    </Layout>
  );
};

export default Orders;
