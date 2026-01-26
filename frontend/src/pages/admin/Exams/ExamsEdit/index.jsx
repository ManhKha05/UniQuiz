import { Button, Col, Flex, Form, Input, InputNumber, Modal, Row, Select } from "antd";
import { useState } from "react";
import "./ExamsEdit.scss"

function ExamsEdit() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions, setQuestions] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const onFinish = (e) => {
    console.log(e)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        + Tạo đề mới
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        style={{ top: 50 }}
        width={800}
      >
        <h1>Tạo đề thi mới</h1>
        <hr />
        <Form
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="examsAd__form"
        >
          <Row gutter={[25]}>
            <Col span={12}>
              <Form.Item
                label="Tên đề thi"
                name="title"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}
              >
                <Input placeholder="VD: Luyện tập số 1 - Lập trình Web" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Môn học"
                name="subject"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}
                initialValue=''
              >
                <Select
                  options={[
                    { value: '', label: 'Chọn môn học' },
                    { value: 'lucy', label: 'Lucy' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Thời gian làm bài (phút)"
                name="duration"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Trạng thái"
                name="status"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}
                initialValue='draft'
              >
                <Select
                  options={[
                    { value: 'draft', label: 'Nháp' },
                    { value: 'active', label: 'Hoạt động' },
                    { value: 'inactive', label: 'Lưu trữ' },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <h2 style={{ margin: '20px 0' }}>
                Danh sách câu hỏi
                <hr />
              </h2>
            </Col>

            <Col span={24}>
              <div className="questionAd">
                <h2>Câu hỏi 1</h2>
                
              </div>
            </Col>

            <Col span={24}>
              <Form.Item label={null}>
                <Flex justify="end" gap="middle" >
                  <Button htmlType="button" onClick={handleCancel}>
                    Hủy
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Lưu đề thi
                  </Button>
                </Flex>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default ExamsEdit;