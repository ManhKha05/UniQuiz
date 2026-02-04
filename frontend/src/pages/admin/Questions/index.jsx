import { Button, Col, Form, Input, message, Popconfirm, Row, Select, Space, Table, Tag } from "antd";
import "./Questions.scss"
import QuestionsEdit from "./QuestionsEdit"
import { useEffect, useState } from "react";
import { del, get } from "../../../utils/request";
import { formatDateTime } from "../../../utils/date"

function Questions() {
  const [subjects, setSubjects] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [keyword, setKeyword] = useState(null);
  const [subjectId, setSubjectId] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchApi = async () => {
      try {
        const [questionsRes, subjectsRes] = await Promise.all([
          get('questions', {
            page: page - 1,
            size: pageSize,
            keyword,
            subjectId: subjectId !== 'ALL' ? subjectId : null
          }),
          get('subjects')
        ])

        const questionsData = await questionsRes.json();
        const subjectsData = await subjectsRes.json();
        setQuestions(questionsData.content);
        setTotal(questionsData.totalElements)
        setSubjects(subjectsData.content);
        setLoading(false)
      } catch (error) {
        console.log("Lỗi danh sách câu hỏi: ", error);
      }
    }
    fetchApi()
  }, [reload, page, pageSize, keyword, subjectId])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'CÂU HỎI',
      dataIndex: 'content',
      key: 'content'
    },
    {
      title: 'MÔN HỌC',
      dataIndex: 'subjectName',
      key: 'subject'
    },
    {
      title: 'ĐỘ KHÓ',
      key: 'level',
      render: (_, { level }) => {
        switch (level) {
          case 'HARD':
            return <Tag style={{ fontSize: "14px" }} color="red">Khó</Tag>
          case 'MEDIUM':
            return <Tag style={{ fontSize: "14px" }} color="yellow">Trung bình</Tag>
          case 'EASY':
            return <Tag style={{ fontSize: "14px" }} color="green">Dễ</Tag>
          default:
            break;
        }
      }
    },
    {
      title: 'NGÀY TẠO',
      key: 'createdAt',
      render: (_, { createdAt }) => (
        formatDateTime(createdAt)
      )
    },
    {
      title: 'HÀNH ĐỘNG',
      key: 'action',
      render: (_, record) => (
        <Space style={{ fontSize: '15px' }}>
          <QuestionsEdit subjects={subjects} id={record.id} onReload={handleReload} />
          {/* <Popconfirm
            title="Câu hỏi này sẽ không còn hiển thị trong đề thi. Bạn có chắc chắn?"
            onConfirm={() => handleDelete(record.id)}
            // onCancel={cancel}
            okText="Xóa"
            cancelText="Hủy"
          >
            <a style={{ color: "orange" }}>Xóa</a>
          </Popconfirm> */}
        </Space>
      )
    },
  ];

  const handleSubjectChange = (id) => {
    setSubjectId(id);
    setPage(1);
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setKeyword(e.target.value);
      setPage(1);
    }
  }

  const handleReload = () => {
    setReload(!reload)
  }


  // const handleDelete = (id) => {
  //   const fetchApi = async () => {
  //     try {
  //       const res = await del(`admin/questions/${id}`);
  //       if (!res.ok) {
  //         throw new Error()
  //       }
  //       messageApi.success("Xóa câu hỏi thành công");
  //       handleReload()
  //     } catch (error) {
  //       console.log("Lỗi xóa câu hỏi: ", error)
  //     }
  //   }
  //   fetchApi()
  // }

  return (
    <>
      {contextHolder}
      <div className="questionsAd">
        <h1 className="questionsAd__title">
          Ngân hàng câu hỏi
        </h1>

        <QuestionsEdit subjects={subjects} mode='CREATE' onReload={handleReload} />

        <div
          layout="vertical"
          className="questionsAd__filter"
        >
          <Row gutter={[20, 0]} align="middle">
            <Col span={8}>
              <label >Tìm câu hỏi</label>
              <Input placeholder="Nội dung câu hỏi..." onKeyDown={handleSearch} />
              {/* </Form.Item> */}
            </Col >

            <Col span={6}>
              <label >Môn học</label>
              <Select
                defaultValue={'ALL'}
                options={[
                  { value: 'ALL', label: 'Tất cả môn học' },
                  ...subjects.map(item => ({
                    value: item.id,
                    label: item.name
                  }))
                ]}
                style={{ width: '100%' }}
                onChange={e => handleSubjectChange(e)}
              />
            </Col>
            {/* 
            <Col span={4}>
              <label >Sắp xếp</label>
              <Select
                defaultValue="newest"
                options={[
                  { value: 'newest', label: 'Mới nhất' },
                  { value: 'oldest', label: 'Cũ nhất' },
                  { value: 'name', label: 'Tên A - Z' },
                ]}
              />
            </Col> */}
          </Row >
        </div >

        <Table
          rowKey="id"
          loading={loading}
          dataSource={questions}
          columns={columns}
          pagination={{
            current: page,
            pageSize,
            total,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20],
            showTotal: (total) => `Tổng ${total} câu hỏi`
          }}
          onChange={(pagination) => {
            setPage(pagination.current);
            setPageSize(pagination.pageSize);
          }}
        />
      </div>
    </>
  )
}

export default Questions;