import { Button, Col, Form, Input, Row, Select, Table } from "antd";
import "./Results.scss"
import { useEffect, useState } from "react";
import { get } from "../../../utils/request";
import { formatDateTime } from "../../../utils/date";

function Results() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState();
  const [keyword, setKeyword] = useState("");
  const [subjectId, setSubjectId] = useState();
  const [examId, setExamId] = useState();
  const [sort, setSort] = useState("newest");
  const [subjects, setSubjects] = useState([]);
  const [exams, setExams] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const [subjectsRes, examsRes, resultsRes] = await Promise.all([
          get('subjects'),
          get('admin/exams', {
            subjectId
          }),
          get('admin/results', {
            page: page - 1,
            pageSize,
            keyword,
            subjectId: subjectId === "" ? null : subjectId,
            examId: examId === "" ? null : examId,
            sort
          })
        ]);
        const subjectsData = await subjectsRes.json();
        const examsData = await examsRes.json();
        const resultsData = await resultsRes.json();
        setSubjects(subjectsData.content);
        setExams(examsData.content);
        setResults(resultsData.content);
        setTotal(resultsData.totalElements);
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi();
  }, [page, pageSize, keyword, subjectId, examId, sort])

  console.log(subjectId, examId);
  console.log(results);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setKeyword(e.target.value);
    }
  }


  const columns = [
    {
      title: 'THÍ SINH',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'USERNAME',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'ĐỀ',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'MÔN',
      dataIndex: 'subjectName',
      key: 'subjectName',
    },
    // {
    //   title: 'SỐ CÂU ĐÚNG',
    //   dataIndex: 'correct',
    //   key: 'correct',
    // },
    {
      title: 'ĐIỂM SỐ',
      key: 'score',
      render: (_, { score }) => (
        score.toFixed(2)
      )
    },
    {
      title: 'THỜI GIAN LÀM BÀI',
      key: 'duration',
      render: (_, { duration }) => (
        `${Math.floor(duration / 60)} phút ${duration % 60} giây`
      )
    },
    {
      title: 'NGÀY NỘP',
      key: 'submitTime',
      render: (_, { submitTime }) => (
        formatDateTime(submitTime)
      )
    },
  ];

  return (
    <>
      <div className="resultsAd">
        <h1 className="resultsAd__title">
          Quản lí kết quả & bài làm
        </h1>
        <div className="resultsAd__filter">
          <Row gutter={[20, 0]} align="middle">
            <Col span={7}>
              <label>Tìm kiếm thí sinh</label>
              <Input placeholder="Tìm kiếm theo tên hoặc username" onKeyDown={handleSearch} />
            </Col >

            <Col span={5}>
              <label>Môn học</label>
              <Select
                defaultValue=""
                options={[
                  { value: "", label: 'Tất cả' },
                  ...subjects.map(item => ({
                    value: item.id,
                    label: item.name
                  }))
                ]}
                onChange={e => setSubjectId(e)}
                style={{ width: '100%' }}
              />
            </Col>

            <Col span={5}>
              <label>Đề</label>
              <Select
                defaultValue=""
                options={[
                  { value: "", label: 'Tất cả' },
                  ...exams.map(item => ({
                    value: item.id,
                    label: item.title
                  }))
                ]}
                onChange={e => setExamId(e)}
                style={{ width: '100%' }}
              />
            </Col>

            <Col span={5}>
              <label >Sắp xếp</label>
              <Select
                defaultValue={"newest"}
                options={[
                  { value: 'newest', label: 'Mới nhất' },
                  { value: 'desc', label: 'Điểm giảm dần' },
                  { value: 'asc', label: 'Điểm tăng dần' }
                ]}
                onChange={(e) => setSort(e)}
                style={{ width: '100%' }}
              />
            </Col>
          </Row >
        </div>
        <Table
          rowKey="id"
          dataSource={results}
          columns={columns}
          pagination={{
            current: page,
            pageSize,
            total,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20],
            showTotal: (total) => `Tổng ${total} bài làm`
          }}
          onChange={(pagination) => {
            setPage(pagination.current);
            setPageSize(pagination.pageSize);
          }}
        />
      </div >
    </>
  )
}

export default Results;