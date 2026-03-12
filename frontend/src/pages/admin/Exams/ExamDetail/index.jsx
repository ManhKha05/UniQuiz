import { Col, Flex, Form, Input, InputNumber, Modal, Row, Select, Table, Tag } from "antd";
import "./ExamDetail.scss";
import { useEffect, useState } from "react";
import { get } from "../../../../utils/request";
import { useForm } from "antd/es/form/Form";


function ExamDetail({ open, record, onCancel, subjects }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [keyword, setKeyword] = useState();
  const [level, setLevel] = useState();
  const [questions, setQuestions] = useState([]);
  const [subjectId, setSubjectId] = useState();
  const [form] = useForm();

  console.log(record);

  useEffect(() => {
    if (record) {
      form.setFieldsValue(record);
    }
  }, [record])

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await get('admin/questions', {
          page: page - 1,
          pageSize,
          keyword,
          subjectId: record.subjectId,
          level: level === 'ALL' ? null : level
        });
        if (!res.ok) {
          throw new Error()
        }
        const data = await res.json();
        const selectedQuestion = data.content
          .filter(it => (record.questionIds?.includes(it.id)));
        setQuestions(selectedQuestion);
        setTotal(data.totalElements);
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi()
  }, [page, pageSize, keyword, level, record])

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setKeyword(e.target.value);
    }
  }

  return (
    <>
      <Modal
        open={open}
        onCancel={onCancel}
        footer={null}
        style={{ top: 50 }}
        width={1000}
      >
        <h1>
          Chi tiết đề thi
        </h1>
        <hr />
        <Form
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
                <Input placeholder="VD: Luyện tập số 1 - Lập trình Web" readOnly />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Môn học"
                name="subjectId"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}

              >
                <Select
                  options={subjects.map(item => ({
                    value: item.id,
                    label: item.name
                  }))}
                  open={false}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Thời gian làm bài (phút)"
                name="duration"
                rules={[{ required: true, message: 'Không được bỏ trống' }]}
              >
                <InputNumber style={{ width: "100%" }} readOnly />
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
                  open={false}
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
                rules={[{ required: true, message: 'Vui lòng chọn ít nhất 1 câu hỏi' }]}
              >
                <Table
                  rowKey="id"
                  // rowSelection={rowSelection}
                  columns={[
                    {
                      title: 'ID',
                      dataIndex: 'id',
                      key: 'id',
                      width: 50
                    },
                    {
                      title: 'Câu hỏi',
                      dataIndex: 'content',
                      // key: 'content',
                      // ellipsis: true,
                      width: 650,
                      render: (_, record) => (
                        <div className="exam-question" style={{ fontSize: '15px' }}>
                          <div className="exam-question__content">
                            {record.content}
                          </div>
                          {record.answers.map((it, index) => (
                            <div className="exam-question__answer" key={index}>
                              {String.fromCharCode(index + 65)}. {it.content}
                            </div>
                          ))}
                          <div className="exam-question__correct">
                            Đáp án đúng:
                            {record.correctAnswer.map((it, index) => (
                              <span style={{ display: 'inline-block', margin: '0 4px' }} key={index}>{String.fromCharCode(it + 65)}</span>
                            ))}
                          </div>
                        </div>
                      )
                    },
                    {
                      title: 'Loại',
                      dataIndex: 'type',
                      key: 'type',
                      ellipsis: true,
                      width: 100
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


          </Row>
        </Form >
      </Modal >
    </>
  )
}

export default ExamDetail;