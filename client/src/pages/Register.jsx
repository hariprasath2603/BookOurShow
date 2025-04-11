import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <header className="App-header">
      <main className="main-area mw-500 text-center px-3">
        <section>
          <h1>Register to BookOurShow</h1>
        </section>
        <section>
          <Form layout="vertical">
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
                Login
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
