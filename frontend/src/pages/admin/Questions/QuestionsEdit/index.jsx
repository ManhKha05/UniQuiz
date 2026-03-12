import { Button, Col, Flex, Form, Input, message, Modal, Row, Select } from "antd";
import { useEffect, useState } from "react";
// import "./QuestionsEdit.scss"
import { useForm } from "antd/es/form/Form";
import { get, post, put } from "../../../../utils/request"

function QuestionsEdit({ mode, subjects, id, onReload }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [type, setType] = useState("SINGLE")

  const showModalCreate = () => {
    form.resetFields();
    setIsModalOpen(true)
  }
  // [...Array(10)].forEach((_, index) => console.log(index))
  const showModalEdit = async (id) => {
    const fetchApi = async () => {
      try {
        const res = await get(`admin/questions/${id}`)
        if (!res.ok) {
          throw new Error()
        }
        const data = await res.json();
        console.log(data);
        form.setFieldsValue(data);
        setType(data.type)
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi();
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = (e) => {
    const payload = {
      ...e,
      correctAnswer: Array.isArray(e.correctAnswer) ? e.correctAnswer : [e.correctAnswer]
    }
    console.log(payload)
    const fetchApi = async () => {
      try {
        let res = null;
        if (mode === 'CREATE') {
          res = await post('admin/questions', payload);
        } else {
          res = await put(`admin/questions/${id}`, payload);
        }

        if (!res.ok) {
          throw new Error()
        }

        messageApi.success(mode === 'CREATE' ? "Tạo câu hỏi thành công" : "Chỉnh sửa câu hỏi thành công")
        setIsModalOpen(false);
        onReload();
      } catch (error) {
        message.error('Thất bại');
        console.log("Lỗi thêm/sửa câu hỏi: ", error)
      }
    }
    fetchApi();
  }

  return (
    <>
      {contextHolder}
      {mode === 'CREATE' ? (
        <div style={{textAlign: 'end'}}>
          <Button type="primary" onClick={showModalCreate}>
            + Tạo câu hỏi mới
          </Button>
        </div>
      ) : (
        <a onClick={() => showModalEdit(id)} style={{ color: "blue", textWrap: "nowrap" }}>Chỉnh sửa</a>
      )}

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        style={{ top: 10 }}
        width={800}
      >
        <h1>
          {mode === 'CREATE' ? 'Tạo câu hỏi mới' : 'Chỉnh sửa câu hỏi'}
        </h1>
        <hr />
        <Form
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="examsAd__form"
          form={form}
        >
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
          <Row gutter={[25]}>
            <Col span={12}>
              <Form.Item
                label="Môn học"
                name="subjectId"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}
              >
                <Select
                  placeholder="Chọn môn học"
                  options={subjects.map(item => ({
                    value: item.id,
                    label: item.name
                  }))}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Mức khó"
                name="level"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}
              >
                <Select
                  placeholder="Chọn mức độ"
                  options={[
                    { value: 'EASY', label: 'Dễ' },
                    { value: 'MEDIUM', label: 'Trung bình' },
                    { value: 'HARD', label: 'Khó' },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Loại câu hỏi"
                name="type"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}
                initialValue={"SINGLE"}
              >
                <Select
                  placeholder="Chọn loại câu hỏi"
                  options={[
                    { value: 'SINGLE', label: '1 đáp án đúng' },
                    { value: 'MULTIPLE', label: 'Nhiều đáp án đúng' },
                    { value: 'BOOLEAN', label: 'Đúng / Sai' }
                  ]}
                  onChange={(e) => setType(e)}
                />
              </Form.Item>
            </Col>

            <Col span={24}>

              {/* Nội dung câu hỏi */}
              <Form.Item
                name={'content'}
                label="Nội dung câu hỏi"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}
              >
                <Input.TextArea rows={3} placeholder="Nhập nội dung câu hỏi" />
              </Form.Item>

              {/* 4 đáp án */}
              {type === "BOOLEAN" ? (
                <>
                  <Row gutter={12}>
                    {[0, 1].map((index) => (
                      <Col span={24} key={index}>
                        {/* id đáp án */}
                        <Form.Item
                          name={['answers', index, 'id']}
                          initialValue={index}
                          hidden
                        >
                          <Input />
                        </Form.Item>

                        {/* nội dung đáp án */}
                        <Form.Item
                          name={['answers', index, 'content']}
                          label={`Đáp án ${index + 1}`}
                          // initialValue={label}
                          rules={[{ required: true, message: 'Không được bỏ trống' }]}
                        >
                          <Input.TextArea placeholder={`Nhập câu trả lời ${index + 1}`} />
                        </Form.Item>
                      </Col>
                    ))}
                  </Row>
                </>
              ) : (
                <Row gutter={12}>
                  {['A', 'B', 'C', 'D'].map((keyAnswer, index) => (
                    <Col span={24} key={keyAnswer}>
                      {/* Gán key A/B/C/D */}
                      <Form.Item
                        name={['answers', index, 'id']}
                        initialValue={index}
                        hidden
                      >
                        <Input />
                      </Form.Item>

                      {/* Nội dung đáp án */}
                      <Form.Item
                        name={['answers', index, 'content']}
                        label={`Đáp án ${keyAnswer}`}
                        rules={[{ required: true, message: 'Không được bỏ trống' }]}
                      >
                        <Input.TextArea rows={2} placeholder={`Nhập đáp án ${keyAnswer}`} />
                      </Form.Item>
                    </Col>
                  ))}
                </Row>
              )}


              {/* Đáp án đúng */}
              <Form.Item
                name='correctAnswer'
                label="Đáp án đúng"
                rules={[{ required: true, message: 'Chọn đáp án đúng' }]}
              >
                {type === "BOOLEAN" ? (
                  <Select
                    placeholder="Chọn đáp án đúng"
                    options={[
                      { value: 0, label: 'Đáp án 1' },
                      { value: 1, label: 'Đáp án 2' }
                    ]}
                    style={{ width: 200 }}
                  />
                ) : (
                  <Select
                    placeholder="Chọn đáp án đúng"
                    options={
                      [
                        { value: 0, label: 'A' },
                        { value: 1, label: 'B' },
                        { value: 2, label: 'C' },
                        { value: 3, label: 'D' },
                      ]
                    }
                    mode={type === "MULTIPLE" ? "multiple" : undefined}
                    style={{ width: 200 }}
                  />
                )}
              </Form.Item>

            </Col>

            <Col span={24}>
              <Form.Item label={null}>
                <Flex justify="end" gap="middle" style={{ marginTop: "20px" }} >
                  <Button htmlType="button" onClick={handleCancel}>
                    Hủy
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Lưu câu hỏi
                  </Button>
                </Flex>
              </Form.Item>
            </Col>
          </Row >
        </Form >
      </Modal >
    </>
  )
}

export default QuestionsEdit;