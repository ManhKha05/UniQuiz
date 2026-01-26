import { Button, Col, Form, Input, InputNumber, notification, Row } from "antd";
import "./Contact.scss"
import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useForm } from "antd/es/form/Form";
import { post } from "../../../utils/request"

function Contact() {
  const [form] = useForm();
  const [notificationApi, contextHolder] = notification.useNotification();

  const handleSubmit = async (e) => {
    try {
      const res = await post("contact", e);

      if (!res.ok) {
        throw new Error("Lỗi hệ thống !!")
      }
      notificationApi.success({
        title: 'Gửi liên hệ thành công',
        description: 'Chúng tôi đã nhận được phản hồi của bạn và sẽ liên hệ lại sớm nhất.'
      });

    } catch (error) {
      console.error(error);
    }
    form.resetFields();
  }
  return (
    <>
      {contextHolder}
      <div className="contact">
        <div className="container">
          <Row gutter={[70, 50]}>
            <Col xs={24} lg={14}>
              <div className="contact__form">
                <h1 className="contact__title">
                  Liên hệ với chúng tôi
                </h1>
                <p className="contact__desc">
                  UniQuiz là website luyện tập trắc nghiệm online dành cho sinh viên đại học, hỗ trợ ôn tập kiến thức các môn đại cương và chuyên ngành. Nếu bạn có bất kỳ thắc mắc nào trong quá trình học tập và ôn thi, đừng ngần ngại liên hệ với UniQuiz để được hỗ trợ.
                </p>

                <Form
                  onFinish={handleSubmit}
                  autoComplete="off"
                  layout="vertical"
                  form={form}
                >
                  <Row>
                    <Col xs={24} sm={11}>
                      <Form.Item
                        label="Họ và tên"
                        name="name"
                        rules={[{ required: true, message: 'Không được bỏ trống' }]}
                      >
                        <Input placeholder="Nhập họ và tên" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={{span: 11, offset: 2}} >
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Không được bỏ trống' }]}
                      >
                        <Input placeholder="Nhập email" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={11}>
                      <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[{ required: false, message: 'Không được bỏ trống' }]}
                      >
                        <InputNumber min={0} style={{ width: "100%" }} placeholder="Nhập số điện thoại" />
                      </Form.Item>
                    </Col>

                    <Col xs={24} sm={{span: 11, offset: 2}}>
                      <Form.Item
                        label="Tiêu đề"
                        name="title"
                        rules={[{ required: true, message: 'Không được bỏ trống' }]}
                      >
                        <Input placeholder="Nhập tiêu đề" />
                      </Form.Item>
                    </Col>

                    <Col span={24}>
                      <Form.Item
                        label="Nội dung"
                        name="content"
                        rules={[{ required: true, message: 'Không được bỏ trống' }]}
                      >
                        <Input.TextArea rows={4} placeholder="Nhập nội dung bạn muốn gửi tới UniQuiz" />
                      </Form.Item>
                    </Col>

                    <Form.Item label={null}>
                      <Button className="contact__button" type="primary" htmlType="submit">
                        Gửi đi
                      </Button>
                    </Form.Item>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col xs={24} lg={10}>
              <div className="contact__info">
                <h3 className="contact__info-title">
                  Công ty TNHH Phát triển Giáo dục Trực tuyến UniQuiz
                </h3>
                <ul className="contact__info-list">
                  <li className="contact__info-item">
                    <FaMapLocationDot />
                    <span>Ngõ 128, Nguyễn Đức Cảnh, Tương Mai, Hà Nội</span>
                  </li>
                  <li className="contact__info-item">
                    <MdEmail />
                    <span>nguyenmanhkha3225@gmail.com</span>
                  </li>
                  <li className="contact__info-item">
                    <FaPhoneVolume />
                    <span>0382079152</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Contact; 