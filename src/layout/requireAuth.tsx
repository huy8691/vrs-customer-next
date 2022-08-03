import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Result } from "antd";

const RequireAuth: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const token = Boolean(Cookies.get("token"));
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [is403, setIs403] = useState<boolean>(false);
  useEffect(() => {
    setIsLoggedIn(token);
    if (!token) {
      setIs403(true);
    }
  }, [token]);
  return (
    <>
      {isLoggedIn && children}
      {is403 && (
        <Result
          status="403"
          title="403"
          subTitle="Xin lỗi, bạn không được phép truy cập trang này."
          extra={
            <Button type="primary">
              <Link href="/">
                <a>Quay lại trang chủ</a>
              </Link>
            </Button>
          }
        />
      )}
    </>
  );
};
export default RequireAuth;
