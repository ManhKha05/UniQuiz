import { Button, Form, Input, message } from "antd";
import "./Login.scss";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { close, forgotPassword, register } from "../../actions/authModal";
import { post } from "../../utils/request";
import { useNavigate } from "react-router-dom"

function Login() {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = async (e) => {
    const res = await post("login", e)
    if (!res.ok) {
      messageApi.error({
        style: {
          // marginTop: "30px",
          fontSize: '16px'
        },
        content: 'Bạn đã nhập sai tài khoản hoặc mật khẩu!',
      });
      return;
    }
    const data = await res.json();
    console.log(data)
    localStorage.setItem("token", data.token)

    if (data.role === 'ROLE_ADMIN') {
      navigate('/admin')
    } else {
      dispatch(close())
      setTimeout(() => {
        messageApi.success({
          style: {
          // marginTop: "30px",
          fontSize: '16px'
        },
          content: 'Đăng nhập thành công!',
        });
      }, 200)
    }
  }

  return (
    <>
      {contextHolder}
      <h2 className="authmodal__title">Đăng nhập</h2>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
        >
          {/* <FaUserCircle className="authmodal__icon" /> */}
          <Input prefix={<FaUserCircle className="authmodal__icon" />} className="authmodal__input" placeholder="Nhập tài khoản" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Vui lòng điền thông tin!' }]}
        >
          {/* <RiLockPasswordFill className="authmodal__icon" /> */}
          <Input.Password prefix={<RiLockPasswordFill className="authmodal__icon" />} className="authmodal__input" placeholder="Nhập mật khẩu" />
        </Form.Item>
        <p className="login__forgot" onClick={() => dispatch(forgotPassword())}>Quên mật khẩu</p>

        <Form.Item label={null}>
          <Button className="authmodal__button" type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
        <p className="authmodal__footer">Bạn chưa có tài khoản? <span onClick={() => dispatch(register())}>Đăng ký ngay</span></p>
      </Form>
    </>
  )
}

export default Login;