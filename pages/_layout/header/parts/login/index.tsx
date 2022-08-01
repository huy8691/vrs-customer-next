import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../src/store/hooks";
import { Button, Checkbox, Form, Input } from "antd";
import { login } from "./loginAPI";
import { LoginType } from "./loginModels";
import { loginActions } from "./loginSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const onFinish = (values: LoginType) => {
    console.log("Success:", values);
    dispatch(loginActions.doLogin(values));
    // login(values)
    //   .then((res) => {
    //     const { data } = res.data;
    //     return data;
    //   })
    //   .catch((error) => {
    //     return error.response.data;
    //   });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="identity"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="Email/ số điện thoại" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="Mật khẩu" />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
