import { Button, Form, Input } from "antd";
import { IoIosReturnLeft } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import "./ForgotPassword.scss"
import { useDispatch } from "react-redux";
import { loginModal } from "../../actions/authModal";
import { post } from "../../utils/request";
import { useState } from "react";

function ForgotPassword() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onFinish = async (e) => {
    setLoading(true);
    try {
      const res = await post("auth/forgot-password", e);

      if (!res.ok) {
        setMessage("Đã có lỗi xảy ra!!");
        return;
      }

      const data = await res.json();
      setLoading(false);
      setMessage(data.message);
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu đặt lại mật khẩu: ", error);
    }
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
          <Input prefix={<MdEmail className="authmodal__icon" />} className="authmodal__input" placeholder="Nhập email" />
        </Form.Item>
        <div className="forgotpassword__message">
          {message}
        </div>
        <Form.Item label={null}>
          <Button loading={loading} disabled={loading} className="authmodal__button" type="primary" htmlType="submit">
            Quên mật khẩu
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ForgotPassword;