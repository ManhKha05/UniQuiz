import "./Exams.scss";
import { Button, Col, Form, Input, Pagination, Row, Select, Space, Table, Tag } from "antd"
import { IoNewspaperOutline, IoTime } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { FaTable } from "react-icons/fa6";
import ExamsEdit from "./ExamsEdit";
import { useEffect, useState } from "react";
import { get } from "../../../utils/request"
import { formatDate } from "../../../utils/date"

function Exams() {
  const [viewMode, setViewMode] = useState('grid')
  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(12);
  const [dashboard, setDashboard] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [exams, setExams] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [subjectId, setSubjectId] = useState();
  const [status, setStatus] = useState();
  const [sort, setSort] = useState('NEWEST');

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const [dashboardRes, subjectsRes, examsRes] = await Promise.all([
          get('admin/exams/dashboard'),
          get('subjects', { status: 'ACTIVE' }),
          get('admin/exams', {
            page: page - 1,
            size: pageSize,
            keyword,
            subjectId: subjectId === 'ALL' ? null : subjectId,
            status: status === 'ALL' ? null : status,
            sort
          })
        ])
        const dashboardData = await dashboardRes.json();
        const subjectsData = await subjectsRes.json();
        const examsData = await examsRes.json();
        setDashboard(dashboardData);
        setSubjects(subjectsData.content);
        setExams(examsData.content);
        setTotal(examsData.totalElements);
      } catch (error) {
        console.log("Lỗi Get Dashboard Exams: ", error)
      }
    }
    fetchApi()
  }, [reload, page, pageSize, keyword, subjectId, status, sort])

  const handleReload = () => {
    setReload(!reload);
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setKeyword(e.target.value);
    }
  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'ĐỀ THI',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'MÔN HỌC',
      dataIndex: 'subjectName',
      key: 'subjectName'
    },
    {
      title: 'THỜI GIAN',
      dataIndex: 'duration',
      key: 'duration'
    },
    {
      title: 'SỐ CÂU HỎI',
      dataIndex: 'totalQuestions',
      key: 'totalQuestions'
    },
    {
      title: 'SỐ LƯỢT LÀM',
      dataIndex: 'totalAttempts',
      key: 'totalAttempts',
    },
    {
      title: 'ĐIỂM TB',
      key: 'averageScore',
      render: (_, { averageScore }) => (
        averageScore.toFixed(2)
      )
    },
    {
      title: 'THỜI GIAN TẠO',
      key: 'createdAt',
      render: (_, { createdAt }) => (
        formatDate(createdAt)
      )
    },
    {
      title: 'TRẠNG THÁI',
      key: 'status',
      render: (_, { status }) => {
        switch (status) {
          case 'ACTIVE':
            return <Tag color="green" variant="outlined">HOẠT ĐỘNG</Tag>
          case 'INACTIVE':
            return <Tag style={{ fontSize: "14px" }} color="red">Ngừng hoạt động</Tag>
          case 'DRAFT':
            return <Tag color="lime" variant="solid" className="examsAd-item__tag">NHÁP</Tag>
          default:
            break;
        }
      }
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <ExamsEdit record={record} subjects={subjects} onReload={handleReload} />
      )
    }

  ];

  return (
    <>
      <div className="examsAd">
        <h1 className="examsAd__title">
          Quản lí đề thi
        </h1>
        <div className="examsAd__statics">
          <div className="examsAd__statics-item">
            <p>TỔNG SỐ ĐỀ</p>
            <h2>{dashboard.total}</h2>
          </div>
          <div className="examsAd__statics-item">
            <p>ĐỀ ĐANG HOẠT ĐỘNG</p>
            <h2>{dashboard.active}</h2>
          </div>
          <div className="examsAd__statics-item">
            <p>ĐỀ NHÁP</p>
            <h2>{dashboard.draft}</h2>
          </div>
          <div className="examsAd__statics-item">
            <p>ĐỀ ĐÃ LƯU TRỮ</p>
            <h2>{dashboard.inactive}</h2>
          </div>
        </div>
        {/* <Button type="primary" onClick={showModal}>
          + Tạo đề mới
        </Button> */}

        <ExamsEdit mode='CREATE' subjects={subjects} onReload={handleReload} />

        <div className="examsAd__filter">
          <Row gutter={[20, 0]} align="middle">
            <Col span={8}>
              <label >Tìm kiếm đề thi</label>
              <Input placeholder="Tên đề thi..." onKeyDown={handleSearch} />
            </Col >

            <Col span={5}>
              <label >Môn học</label>
              <Select
                defaultValue="ALL"
                options={[
                  { value: 'ALL', label: 'Tất cả môn học' },
                  ...subjects.map(item => ({
                    value: item.id,
                    label: item.name
                  }))
                ]}
                onChange={id => setSubjectId(id)}
                style={{ width: '100%' }}
              />
            </Col>

            <Col span={4}>
              <label >Trạng thái</label>
              <Select
                defaultValue="ALL"
                options={[
                  { value: 'ALL', label: 'Tất cả' },
                  { value: 'ACTIVE', label: 'Đang hoạt động' },
                  { value: 'DRAFT', label: 'Nháp' },
                  { value: 'INACTIVE', label: 'Đã lưu trữ' },
                ]}
                onChange={status => setStatus(status)}
                style={{ width: '100%' }}
              />
            </Col>

            <Col span={3}>
              <label >Sắp xếp</label>
              <Select
                defaultValue="NEWEST"
                options={[
                  { value: 'NEWEST', label: 'Mới nhất' },
                  { value: 'OLDEST', label: 'Cũ nhất' },
                  // { value: 'NAME', label: 'Tên A - Z' },
                ]}
                onChange={sort => setSort(sort)}
                style={{ width: '100%' }}
              />
            </Col>
          </Row >
        </div>

        <Space style={{ marginBottom: 16 }}>
          <Button
            type={viewMode === 'table' ? 'primary' : 'default'}
            icon={<FaTable />}
            onClick={() => setViewMode('table')}
          >
            Table
          </Button>

          <Button
            type={viewMode === 'grid' ? 'primary' : 'default'}
            icon={<CiGrid41 />}
            onClick={() => setViewMode('grid')}
          >
            Lưới
          </Button>
        </Space>

        {viewMode === 'grid' ? (
          <div className="examsAd__list">
            <Row gutter={[20, 20]}>
              {(exams || []).map(item => (
                <Col span={8} key={item.id}>
                  <div className="examsAd-item">
                    <h2 className="examsAd-item__title">
                      {item.title}
                    </h2>
                    
                    {item.status === 'ACTIVE' && <Tag color="green" variant="outlined" className="examsAd-item__tag">HOẠT ĐỘNG</Tag>}
                    {item.status === 'INACTIVE' && <Tag style={{ fontSize: "14px" }} color="red" className="examsAd-item__tag">Ngừng hoạt động</Tag>}
                    {item.status === 'DRAFT' && <Tag color="lime" variant="solid" className="examsAd-item__tag">NHÁP</Tag>}

                    <div className="examsAd-item__info">
                      <div className="examsAd-item__info-item">
                        <IoNewspaperOutline />
                        <span>{item.subjectName}</span>
                      </div>
                      <div className="examsAd-item__info-item">
                        <IoTime />
                        <span>{item.duration} phút</span>
                      </div>
                      <div className="examsAd-item__info-item">
                        <AiFillQuestionCircle />
                        <span>{item.totalQuestions} câu hỏi</span>
                      </div>
                      <div className="examsAd-item__info-item">
                        <FaRegCalendarAlt />
                        <span>{formatDate(item.createdAt)}</span>
                      </div>
                    </div>
                    <div className="examsAd-item__stats">
                      <div className="examsAd-item__stats-item">
                        <h2>{item.totalAttempts}</h2>
                        <p>LƯỢT THI</p>
                      </div>
                      <div className="examsAd-item__stats-item">
                        <h2>{item.averageScore.toFixed(2)}</h2>
                        <p>ĐIỂM TB</p>
                      </div>
                    </div>
                    <ExamsEdit mode='EDIT' record={item} subjects={subjects} onReload={handleReload} />
                  </div>
                </Col>
              ))}

              <Col span={24}>
                <Pagination
                  align="end"
                  current={page}
                  pageSize={pageSize}
                  total={total}
                  showTotal={(total) => `Tổng ${total} đề thi`}
                  showSizeChanger
                  onShowSizeChange={(current, size) => {
                    setPage(1);        // reset về trang 1
                    setPageSize(size); // cập nhật pageSize
                  }}
                  onChange={p => setPage(p)}
                />
              </Col>
            </Row>
          </div>
        ) : (
          <Table
            rowKey="id"
            dataSource={exams}
            columns={columns}
            pagination={{
              current: page,
              pageSize,
              total,
              showSizeChanger: true,
              pageSizeOptions: [5, 10, 20],
              showTotal: (total) => `Tổng ${total} đề thi`
            }}
            onChange={pagination => {
              setPage(pagination.current)
              setPageSize(pagination.pageSize)
            }}
          />
        )}
      </div>
    </>
  )
}

export default Exams;