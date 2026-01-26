import { Button, Col, Form, Input, Row, Select, Table } from "antd";
import "./Results.scss"

function Results() {

  const dataSource = [
    {
      id: '1',
      name: 'Nguyễn Mạnh Kha',
      username: "kha1",
      exam: 'Luyện tập số 1',
      subject: 'Lịch sử Đảng',
      correct: '19/20',
      grade: '9.5',
      duration: '40 phút',
      time: '12:00 26-01-2026'
    },
  ];

  const columns = [
    {
      title: 'THÍ SINH',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'USERNAME',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'ĐỀ',
      dataIndex: 'exam',
      key: 'exam',
    },
    {
      title: 'MÔN',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'SỐ CÂU ĐÚNG',
      dataIndex: 'correct',
      key: 'correct',
    },
    {
      title: 'ĐIỂM SỐ',
      dataIndex: 'grade',
      key: 'grade',
    },
    {
      title: 'THỜI GIAN LÀM BÀI',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'NGÀY NỘP',
      dataIndex: 'time',
      key: 'time',
    },
  ];

  const handleFilter = (e) => {
    console.log(e);
  }

  return (
    <>
      <div className="resultsAd">
        <h1 className="resultsAd__title">
          Quản lí kết quả & bài làm
        </h1>
        <Form
          onFinish={handleFilter}
          layout="vertical"
          className="resultsAd__filter"
        >
          <Row gutter={[20, 0]} align="middle">
            <Col span={7}>
              <Form.Item
                label="Tìm kiếm thí sinh"
                name="name"
              >
                <Input placeholder="Tìm kiếm theo tên hoặc username" />
              </Form.Item>
            </Col >

            <Col span={5}>
              <Form.Item
                label="Bài kiểm tra"
                name="exam"
                initialValue="all"
              >
                <Select
                  // defaultValue="all"
                  options={[
                    { value: 'all', label: 'Tất cả' },
                    { value: '1', label: 'Chương 1 - TTHCM' }
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={5}>
              <Form.Item
                label="Lọc theo điểm"
                name="grade"
                initialValue="all"
              >
                <Select
                  // defaultValue="all"
                  options={[
                    { value: 'all', label: 'Tất cả' },
                    { value: '9', label: 'Xuất sắc (>=9)' },
                    { value: '7', label: 'Khá (7 - 8.9)' },
                    { value: '5', label: 'Trung bình (5 - 6.9)' },
                    { value: '0', label: 'Yếu (<5)' },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={5}>
              <Button type="primary" htmlType="submit">
                Lọc
              </Button>
            </Col>
          </Row >
        </Form >
        <Table
          rowKey="id"
          dataSource={dataSource}
          columns={columns}
        />
      </div >
    </>
  )
}

export default Results;