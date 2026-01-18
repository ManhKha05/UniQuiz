import { Button, Form, Input } from "antd";
import { RiLockPasswordFill } from "react-icons/ri";
import Logo from "../../assets/images/UniQuiz.png"
import "./ResetPassword.scss";

function ResetPassword() {

  const onFinish = () => {
    console.log("ok")
  }

  return (
    <>
      <div className="resetpassword">
        <div className="resetpassword__image">
          <img src={Logo} alt="" />
        </div>
        <h1 className="resetpassword__title">
          Đặt lại mật khẩu
        </h1>
        <p className="resetpassword__desc">
          Đặt lại mật khẩu cho tài khoản: abc
        </p>
        <Form
          name="basic"
          onFinish={onFinish}
        >
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
          >
            <RiLockPasswordFill className="authmodal__icon" />
            <Input.Password className="authmodal__input" placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
          >
            <RiLockPasswordFill className="authmodal__icon" />
            <Input.Password className="authmodal__input" placeholder="Nhập lại mật khẩu" />
          </Form.Item>

          <Form.Item label={null}>
            <Button className="authmodal__button" type="primary" htmlType="submit">
              Đặt lại mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default ResetPassword;