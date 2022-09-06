import React, { useEffect, useState } from "react";
import { FileSyncOutlined, DatabaseOutlined } from "@ant-design/icons";
import {
  Tabs,
  Space,
  Alert,
  Pagination,
  Result,
  Typography,
  Collapse,
  Steps,
} from "antd";
import { useRouter } from "next/router";
import { useAppDispatch } from "src/store/hooks";
import classes from "./styles.module.scss";
import RequireAuth from "src/layout/requireAuth";
import OrderDetailHead from "./parts/orderDetailHead";
import OrderDetailContent from "./parts/orderDetailContent";
import { getOrders } from "./apiOrders";
import { loadingActions } from "src/store/loading/loadingSlice";
import { OrderListDataResponseType } from "./modelOrders";
import { objToStringParam, isEmptyObject } from "src/utils/global.utils";

// layout
import type { ReactElement } from "react";
import Layout from "src/layout/layout";
import NestedLayout from "src/layout/nestedLayout";
import type { NextPageWithLayout } from "pages/_app.page";

const { Title } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const tabsData = [
  {
    label: "Tất cả",
    status: "",
    key: "0",
  },
  {
    label: "Đơn hàng mới",
    status: "1",
    key: "1",
  },
  {
    label: "Đã xác nhận",
    status: "2",
    key: "2",
  },
  {
    label: "Đang chuẩn bị",
    status: "3",
    key: "3",
  },
  {
    label: "Đang giao hàng",
    status: "4",
    key: "4",
  },
  {
    label: "Đã giao hàng",
    status: "5",
    key: "5",
  },
  {
    label: "Đã nhận hàng",
    status: "6",
    key: "6",
  },
  {
    label: "Đã đánh giá",
    status: "7",
    key: "7",
  },
];

const Orders: NextPageWithLayout = () => {
  const [dataOrders, setDataOrders] = useState<OrderListDataResponseType>();
  const [defaultActiveTabs, setDefaultActiveTabs] = useState<string>("0");
  const router = useRouter();
  const dispatch = useAppDispatch();

  // handle tabs
  const handleChangeTabs = (key: string) => {
    let routerQuery = {
      ...router.query,
      status: tabsData[parseInt(key)].status,
      page: 1,
    };
    let search = objToStringParam(routerQuery);
    router.replace({
      search: `${search}`,
    });
  };

  const handleActiveTabs = (status: any) => {
    for (let i = 0; i < tabsData.length; i++) {
      if (status === tabsData[i].status) {
        setDefaultActiveTabs(tabsData[i].key);
      }
    }
  };
  // handleChangePagination
  const handleChangePagination = (page: number, pageSize: number) => {
    let routerQuery = {
      ...router.query,
      page: page,
    };
    let search = objToStringParam(routerQuery);
    router.replace({
      search: `${search}`,
    });
  };

  const renderResult = () => {
    if (dataOrders?.errors) {
      return <Alert message="Đã xảy ra lỗi" type="error" />;
    }
    if (dataOrders?.data?.length === 0) {
      return (
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Result
            icon={<FileSyncOutlined />}
            title={<Title level={5}>Không tìm thấy đơn hàng</Title>}
          />
        </Space>
      );
    }
    return (
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          {dataOrders?.data?.map((item: any, index: number) => (
            <Panel
              header={<OrderDetailHead orderDetail={item} />}
              key={index + Math.random()}
            >
              <OrderDetailContent orderDetail={item} />
            </Panel>
          ))}
        </Collapse>
        {dataOrders?.total && dataOrders?.total > 20 && (
          <Pagination
            defaultCurrent={1}
            current={router.query.page ? parseInt(router.query.page[0]) : 1}
            total={dataOrders?.total}
            pageSize={20}
            onChange={handleChangePagination}
            showSizeChanger={false}
          />
        )}
      </Space>
    );
  };
  useEffect(() => {
    handleActiveTabs(router.query.status ? router.query.status : "");
    setDataOrders({});
    dispatch(loadingActions.doLoading());
    getOrders(router.query)
      .then((res) => {
        const data = res.data;
        setDataOrders(data);
        dispatch(loadingActions.doLoadingSuccess());
      })
      .catch((error) => {
        const errors = error.response ? error.response.data : true;
        setDataOrders({
          errors: errors,
        });
        dispatch(loadingActions.doLoadingFailure());
      });
  }, [router, dispatch]);

  return (
    <div>
      <Tabs
        defaultActiveKey={defaultActiveTabs}
        activeKey={defaultActiveTabs}
        onChange={handleChangeTabs}
      >
        {tabsData.map((item, idx) => {
          return <TabPane tab={item.label} key={item.key}></TabPane>;
        })}
      </Tabs>
      {renderResult()}
    </div>
  );
};

Orders.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <RequireAuth>
        <div className="container">
          <NestedLayout icon={<DatabaseOutlined />} title="Quản lý đơn hàng">
            {page}
          </NestedLayout>
        </div>
      </RequireAuth>
    </Layout>
  );
};

export default Orders;
