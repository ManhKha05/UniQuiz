import { Button, Col, Flex, Form, Input, InputNumber, message, Modal, Row, Select, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import "./ExamsEdit.scss"
import { useForm } from "antd/es/form/Form";
import { FaTrashAlt } from "react-icons/fa";
import { get, post, put } from "../../../../utils/request";

function ExamsEdit({ mode, record, subjects, onReload }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [selectedRow, setSelectedRow] = useState();
  const [form] = useForm();
  const [keyword, setKeyword] = useState();
  const [subjectId, setSubjectId] = useState();
  const [level, setLevel] = useState();
  const [questions, setQuestions] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();


  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await get('admin/questions', {
          page: page - 1,
          pageSize,
          keyword,
          subjectId,
          level: level === 'ALL' ? null : level
        });
        if (!res.ok) {
          throw new Error()
        }
        const data = await res.json();
        setQuestions(data.content);
        setTotal(data.totalElements);
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  }, [page, pageSize, keyword, subjectId, level])

  const showModalCreate = () => {
    form.resetFields();
    setIsModalOpen(true);
  };

  const showModalUpdate = () => {
    form.setFieldsValue(record);
    setSubjectId(record.subjectId);
    setSelectedRow(record.questionIds.map(id => id.toString()))
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };


  const rowSelection = {
    selectedRowKeys: selectedRow,
    onChange: (newSelectedRow) => {
      setSelectedRow(newSelectedRow);
      form.setFieldsValue({
        questionIds: newSelectedRow.map(id => Number(id))
      });
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setKeyword(e.target.value);
    }
  }

  const onFinish = (e) => {
    console.log(e);
    const fetchApi = async () => {
      try {
        let res = null;
        mode === 'CREATE' ? (
          res = await post('admin/exams', e)
        ) : (
          res = await put('admin/exams', e)
        )

        if (!res.ok) {
          throw new Error()
        }

        messageApi.success(mode === 'CREATE' ? "Tạo đề thi mới thành công" : "Chỉnh sửa đề thi thành công")
        setIsModalOpen(false);
        onReload()
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi();
  }


  return (
    <>
      {contextHolder}
      {mode === 'CREATE' ? (
        <Button type="primary" onClick={showModalCreate}>
          + Tạo đề mới
        </Button>
      ) : (
        <Button onClick={showModalUpdate} style={{ color: "blue", textWrap: "nowrap" }}>Chỉnh sửa</Button>
      )}

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        style={{ top: 50 }}
        width={800}
      >
        <h1>
          {mode === 'ADD' ? 'Tạo đề thi mới' : 'Chỉnh sửa đề thi'}
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
                name="subjectId"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}
              >
                <Select
                  placeholder="Chọn môn học"
                  options={subjects.map(item => ({
                    value: item.id,
                    label: item.name
                  }))}
                  onChange={e => setSubjectId(e)}
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
                initialValue='DRAFT'
              >
                <Select
                  options={[
                    { value: 'DRAFT', label: 'Nháp' },
                    { value: 'ACTIVE', label: 'Hoạt động' },
                    { value: 'INACTIVE', label: 'Lưu trữ' },
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
            <Col span={12}>
              <Input
                placeholder="Tìm nội dung câu hỏi..."
                allowClear
                // prefix={<IoIosSearch />}
                // onChange={(e) => setSearchText(e.target.value)}
                style={{ width: 300, marginBottom: 16 }}
                onKeyDown={handleSearch}
              />
            </Col>
            <Col span={12}>
              <Select
                style={{ width: 300, marginBottom: 16 }}
                defaultValue={'ALL'}
                options={[
                  { value: 'ALL', label: 'Tất cả mức độ' },
                  { value: 'EASY', label: 'Dễ' },
                  { value: 'MEDIUM', label: 'Trung bình' },
                  { value: 'HARD', label: 'Khó' },
                ]}
                onChange={e => setLevel(e)}
              />
            </Col>

            <Col span={24}>
              <Form.Item
                name="questionIds"
                label="Chọn câu hỏi"
                rules={[{ required: true, message: 'Vui lòng chọn ít nhất 1 câu hỏi' }]}
              >
                <Table
                  rowKey="id"
                  rowSelection={rowSelection}
                  columns={[
                    {
                      title: 'ID',
                      dataIndex: 'id',
                      key: 'id'
                    },
                    {
                      title: 'Câu hỏi',
                      dataIndex: 'content',
                      key: 'content',
                      ellipsis: true
                    },
                    {
                      title: 'Mức độ',
                      dataIndex: 'level',
                      render: (_, { level }) => (
                        <Tag color={level === 'EASY' ? 'green' : level === 'MEDIUM' ? 'orange' : 'red'}>
                          {level}
                        </Tag>
                      )
                    }
                  ]}
                  dataSource={questions}
                  pagination={{
                    current: page,
                    pageSize,
                    total,
                    showSizeChanger: true,
                    pageSizeOptions: [5, 10, 20],
                    showTotal: (total) => `Tổng ${total} câu hỏi`
                  }}
                  onChange={pagination => {
                    setPage(pagination.current)
                    setPageSize(pagination.pageSize)
                  }}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item label={null}>
                <Flex justify="end" gap="middle" style={{ marginTop: "20px" }} >
                  <Button htmlType="button" onClick={handleCancel}>
                    Hủy
                  </Button>
                  <Button type="primary" onClick={() => form.submit()}>
                    Lưu đề thi
                  </Button>
                </Flex>
              </Form.Item>
            </Col>
          </Row>
        </Form >
      </Modal >
    </>
  )
}

export default ExamsEdit;