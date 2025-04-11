import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../api/user";

const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log("Success:", values);
    // Call the register API here
    try {
      const response = await RegisterUser(values);
      const { success, response: res } = response;

      if (!success) {
        messageApi.warning(res?.data?.message || message);
        return;
      }
      messageApi.success("Registration successful");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      messageApi.error(
        error?.message ||
          error?.response?.data?.message ||
          "Registration failed"
      );
    }
  };
  return (
    <header className="App-header">
      {contextHolder}
      <main className="main-area mw-500 text-center px-3">
        <section>
          <h1>Register to BookOurShow</h1>
        </section>
        <section>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Name" name="name">
              <Input
                placeholder="Enter your name"
                className="d-block"
                rules={[{ required: true, message: "Name is required" }]}
              />
            </Form.Item>

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
                Register
              </Button>
            </Form.Item>
          </Form>
        </section>
        <section>
          <p>
            Already having an account? <Link to="/login">Login here</Link>
          </p>
        </section>
      </main>
    </header>
  );
};

export default Register;
