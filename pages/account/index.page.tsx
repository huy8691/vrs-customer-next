import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Alert } from "antd";
import classes from "./styles.module.scss";
import { useAppDispatch } from "src/store/hooks";
import RequireAuth from "src/layout/requireAuth";
import { getInfoAccount } from "./apiAccount";
import { AccountDataType } from "./modelAccount";
import { loadingActions } from "src/store/loading/loadingSlice";
// layout
import type { ReactElement } from "react";
import Layout from "src/layout/layout";
import NestedLayout from "src/layout/nestedLayout";
import type { NextPageWithLayout } from "pages/_app.page";

const Account: NextPageWithLayout = () => {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<AccountDataType>();
  // funtion
  const handleGetInfoAccount = () => {
    dispatch(loadingActions.doLoading());
    getInfoAccount()
      .then((res) => {
        const { data } = res.data;
        setData(data);
        dispatch(loadingActions.doLoadingSuccess());
      })
      .catch((error) => {
        setData({
          isError: error.response ? error.response.data : true,
        });
        dispatch(loadingActions.doLoadingFailure());
      });
  };
  useEffect(() => {
    handleGetInfoAccount();
  }, []);
  if (data?.isError) {
    return <Alert message={data?.isError.message} type="error" />;
  }
  return (
    <>
      {data?.email}
      {data?.dob}
      {data?.gender}
    </>
  );
};

Account.getLayout = function getLayout(page: ReactElement) {
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

export default Account;
