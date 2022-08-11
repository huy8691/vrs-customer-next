import React, {ReactElement} from "react";
import Link from "next/link";
// layout
import Layout from "src/layout";
import type { NextPageWithLayout } from "pages/_app.page";

import { Button, Result } from "antd";

const Custom404: NextPageWithLayout = () => {
  return (
    <div className="container">
      <Result
        status="404"
        title="404"
        subTitle="Xin lỗi, trang bạn truy cập không tồn tại"
        extra={
          <Button type="primary">
            <Link href="/">
              <a>Quay lại trang chủ</a>
            </Link>
          </Button>
        }
      />
    </div>
  );
};


Custom404.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Custom404;
