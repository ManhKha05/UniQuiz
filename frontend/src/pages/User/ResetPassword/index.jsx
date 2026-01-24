import { Button, Form, Input, message, notification } from "antd";
import { RiLockPasswordFill } from "react-icons/ri";
import Logo from "../../../assets/images/UniQuiz.png"
import { useParams } from "react-router-dom"
import "./ResetPassword.scss";
import { useEffect, useState } from "react";
import { get, post } from "../../../utils/request";

function ResetPassword() {
  const { token } = useParams();
  const [username, setUsername] = useState("");
  const [errorToken, setErrorToken] = useState(false);
  const [messageApi, messageContextHolder] = message.useMessage();
  const [notiApi, notiContextHolder] = notification.useNotification();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await get(`auth/reset-password?token=${token}`);
        if (!res.ok) {
          const error = await res.json();
          setErrorToken(error.message);
          throw error(error.message);
        }
        const data = await res.json();
        setUsername(data.username);
      } catch (error) {
        console.log("Lỗi kiểm tra token: ", error);
      }
    }
    fetchApi();
  }, [])

  const onFinish = (e) => {
    if (e.password !== e.confirmPassword) {
      messageApi.error({
        content: "Mật khẩu nhập lại không khớp. Vui lòng kiểm tra lại"
      })
      return;
    }

    const fetchApi = async () => {
      try {
        const res = await post("auth/reset-password", {
          token: token,
          password: e.password
        })

        if (!res.ok) {
          const error = await res.json();
          console.log(error);
          notiApi.error({
            title: 'Đặt lại mật khẩu không thành công',
            description: error.message,
          });
          throw new error();
        }
        notiApi.success({
          title: 'Đặt lại mật khẩu thành công',
          description: 'Vui lòng truy cập trang đăng nhập để tiếp tục.',
        })
      } catch (error) {
        console.error("Lỗi đặt lại mật khẩu: ", error)
      }
    }
    fetchApi()
  }

  if (errorToken) {
    return (
      <>
        {errorToken}
      </>
    )
  }

  return (
    <>
      {messageContextHolder}
      {notiContextHolder}
      <div className="resetpassword">
        <div className="resetpassword__image">
          <img src={Logo} alt="" />
        </div>
        <h1 className="resetpassword__title">
          Đặt lại mật khẩu
        </h1>
        <p className="resetpassword__desc">
          Đặt lại mật khẩu cho tài khoản: {username}
        </p>
        <Form
          name="basic"
          onFinish={onFinish}
        >
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
              Đặt lại mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default ResetPassword;