import React from "react";
import { useAppDispatch } from "src/store/hooks";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginType } from "./loginModels";
import { loginActions } from "./loginSlice";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();

  const onSubmit = (values: any) => {
    dispatch(loginActions.doLogin(values));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="identity"
        render={({ field }) => (
          <Form.Item
            validateStatus={errors.identity && "error"}
            help={errors.identity && `${errors.identity.message}`}
          >
            <Input
              {...field}
              prefix={<UserOutlined />}
              placeholder="Email/ số điện thoại"
            />
          </Form.Item>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Form.Item
            validateStatus={errors.password && "error"}
            help={errors.password && `${errors.password.message}`}
          >
            <Input.Password
              {...field}
              prefix={<LockOutlined />}
              placeholder="Mật khẩu"
            />
          </Form.Item>
        )}
      />
      <Controller
        control={control}
        name="remember"
        render={({ field }) => (
          <Form.Item valuePropName="checked">
            <Checkbox {...field}>Lưu mật khẩu</Checkbox>
          </Form.Item>
        )}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Đăng nhập
        </Button>
      </Form.Item>
    </form>
  );
};

export default Login;
