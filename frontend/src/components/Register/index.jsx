import { Button, Form, Input, message } from "antd";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import "./Register.scss"
import { useDispatch } from "react-redux";
import { loginModal } from "../../actions/authModal";
import { post } from "../../utils/request";

function Register() {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (e) => {
    const res = await post("register", e);
    if (!res.ok) {
      return;
    }
    messageApi.success({
      style: {
        fontSize: '16px'
      },
      content: 'Đăng ký tài khoản thành công!',
    });
  }

  return (
    <>
      {contextHolder}
      <h2 className="authmodal__title">Tạo tài khoản</h2>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className="register"
      >
        <Form.Item
          name="fullName"
          rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
        >
          <Input prefix={<MdDriveFileRenameOutline className="authmodal__icon" />} className="authmodal__input" placeholder="Nhập tên" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
        >
          <Input prefix={<MdEmail className="authmodal__icon" />} className="authmodal__input" placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
        >
          <Input prefix={<FaPhone className="authmodal__icon" />} className="authmodal__input" placeholder="Số điện thoại" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
        >
          <Input prefix={<FaUserCircle className="authmodal__icon" />} className="authmodal__input" placeholder="Nhập tài khoản" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
        >
          <Input.Password prefix={<RiLockPasswordFill className="authmodal__icon" />} className="authmodal__input" placeholder="Nhập mật khẩu" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
        >
          <Input.Password prefix={<RiLockPasswordFill className="authmodal__icon" />} className="authmodal__input" placeholder="Nhập lại mật khẩu" />
        </Form.Item>

        <Form.Item label={null}>
          <Button className="authmodal__button" type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
        <p className="authmodal__footer">Bạn đã có tài khoản? <span onClick={() => dispatch(loginModal())}>Đăng nhập ngay</span></p>
      </Form>
      {/* </Modal> */}
    </>
  )
}

export default Register;