import React from "react";

import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { LoginUser } from "../api/user";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await LoginUser(values);

      const { success, response: res } = response;

      // Handle the response here
      if (success) {
        messageApi.success("Login successful");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        messageApi.warning(res?.data?.message || message);
      }
    } catch (error) {
      // Notify user about error
      messageApi.error(
        error?.message || error?.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <header className="App-header">
      {contextHolder}
      <main className="main-area mw-500 text-center px-3">
        <section>
          <h1>Login to BookOurShow</h1>
        </section>
        <section>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email">
              <Input
                placeholder="Enter your email"
                className="d-block"
                rules={[{ required: true, message: "Email is required" }]}
              />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password
                placeholder="Enter your password"
                rules={[{ required: true, message: "Password is required" }]}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>
        <section>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </section>
      </main>
    </header>
  );
};

export default Login;
