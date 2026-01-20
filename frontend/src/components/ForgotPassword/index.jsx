import { Button, Form, Input } from "antd";
import { IoIosReturnLeft } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "./ForgotPassword.scss"
import { useDispatch } from "react-redux";
import { loginModal } from "../../actions/authModal";

function ForgotPassword() {
  const dispatch = useDispatch();

  const onFinish = () => {
    console.log("ok")
  }

  return (
    <>
      <div className="forgotpassword__return" onClick={() => dispatch(loginModal())}>
        <IoIosReturnLeft />
        <h3>Quay lại</h3>
      </div>
      <h2 className="authmodal__title">Đặt lại mật khẩu</h2>
      <p className="forgotpassword__desc">
        Hãy điền địa chỉ email của bạn. Bạn sẽ nhận được một liên kết để tạo mật khẩu mới qua email.
      </p>
      <Form
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
        >
          <MdEmail className="authmodal__icon" />
          <Input className="authmodal__input" placeholder="Nhập email" />
        </Form.Item>

        <Form.Item label={null}>
          <Button className="authmodal__button" type="primary" htmlType="submit">
            Quên mật khẩu
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ForgotPassword;