import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Result,
  Row,
  Col,
  Typography,
  Tabs,
  Pagination,
  Space,
  Button,
} from "antd";
import { FileSyncOutlined, ClearOutlined } from "@ant-design/icons";
import classes from "./styles.module.scss";
import { ItemProduct } from "src/components";
import { getProducts } from "./apiProducts";
import { ProductDataType } from "./modelProducts";
import SideBarProducts from "./parts/sidebarProducts";
import { useAppDispatch } from "src/store/hooks";
import { loadingActions } from "src/store/loading/loadingSlice";
import { ProductListDataResponseType } from "./modelProducts";
import { objToStringParam, isEmptyObject } from "src/utils/global.utils";
// layout
import type { ReactElement } from "react";
import Layout from "src/layout";
import type { NextPageWithLayout } from "pages/_app.page";

const tabsData = [
  {
    label: "Phổ biến",
    sort: "",
    order: "",
    key: "0",
  },
  {
    label: "Bán chạy",
    sort: "soldQuantity",
    order: "",
    key: "1",
  },
  {
    label: "Hàng mới",
    sort: "approved_at",
    order: "",
    key: "2",
  },
  {
    label: "Giá thấp - cao",
    key: "3",
    sort: "pr.price",
    order: "ASC",
  },
  {
    label: "Giá cao - thấp",
    key: "4",
    sort: "pr.price",
    order: "DESC",
  },
];

const { Title } = Typography;
const { TabPane } = Tabs;

const Products: NextPageWithLayout = () => {
  const [dataProducts, setDataProducts] =
    useState<ProductListDataResponseType>();
  const [defaultActiveTabs, setDefaultActiveTabs] = useState<string>("0");
  const router = useRouter();
  const dispatch = useAppDispatch();

  // handle tabs
  const handleChangeTabs = (key: string) => {
    let routerQuery = {
      ...router.query,
      sort: tabsData[parseInt(key)].sort,
      order: tabsData[parseInt(key)].order,
      page: 1,
    };
    let search = objToStringParam(routerQuery);
    router.replace({
      search: `${search}`,
    });
  };

  const handleActiveTabs = (sort: any, order: any) => {
    for (let i = 0; i < tabsData.length; i++) {
      if (sort === tabsData[i].sort && order === tabsData[i].order) {
        setDefaultActiveTabs(tabsData[i].key);
      }
    }
  };

  // handleChangePagination
  const handleChangePagination = (page: number, pageSize: number) => {
    console.log("page", page, pageSize);
    let routerQuery = {
      ...router.query,
      page: page,
    };
    let search = objToStringParam(routerQuery);
    router.replace({
      search: `${search}`,
    });
  };

  useEffect(() => {
    handleActiveTabs(
      router.query.sort ? router.query.sort : "",
      router.query.order ? router.query.order : ""
    );
    if (!isEmptyObject(router.query)) {
      dispatch(loadingActions.doLoading());
      getProducts(router.query)
        .then((res) => {
          const data = res.data;
          console.log("Products", res);
          setDataProducts(data);
          dispatch(loadingActions.doLoadingSuccess());
        })
        .catch((error) => {
          dispatch(loadingActions.doLoadingFailure());
        });
    }
    if (router.asPath === "/san-pham") {
      getProducts(router.query)
        .then((res) => {
          const data = res.data;
          setDataProducts(data);
          console.log("Products", res.data);
          dispatch(loadingActions.doLoadingSuccess());
        })
        .catch((error) => {
          dispatch(loadingActions.doLoadingFailure());
        });
    }
  }, [router, dispatch]);

  const renderResult = () => {
    if (dataProducts?.data?.length === 0) {
      return (
        <Result
          icon={<FileSyncOutlined />}
          title={<Title level={5}>Không tìm thấy sản phẩm</Title>}
        />
      );
    }
    return (
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Row gutter={20} justify="space-between">
          <Col>{dataProducts?.total} kết quả</Col>
          {!isEmptyObject(router.query) && (
            <Col>
              <Button type="primary" size="small">
                <Link href="/san-pham">
                  <a>
                    Xoá tìm kiếm <ClearOutlined />
                  </a>
                </Link>
              </Button>
            </Col>
          )}
        </Row>
        <Row gutter={24}>
          {dataProducts?.data?.map((item: ProductDataType, index: number) => (
            <Col span={6} key={index + Math.random()}>
              <div className={classes.itemProduct}>
                <ItemProduct dataProduct={item} />
              </div>
            </Col>
          ))}
        </Row>
        {dataProducts?.total && dataProducts?.total > 20 && (
          <Pagination
            defaultCurrent={1}
            current={router.query.page ? parseInt(router.query.page[0]) : 1}
            total={dataProducts?.total}
            pageSize={20}
            onChange={handleChangePagination}
          />
        )}
      </Space>
    );
  };
  return (
    <div className="container">
      <Row gutter={30}>
        <Col span={6}>
          <SideBarProducts />
        </Col>
        <Col span={18}>
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
        </Col>
      </Row>
    </div>
  );
};

Products.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Products;
