import { Space, Table, Tag } from "antd";
import "./Subjects.scss"
import { IoIosSearch } from "react-icons/io";
import { get } from "../../../utils/request";
import { useEffect, useState } from "react";
import SubjectsEdit from "./SubjectsEdit";

function Subjects() {
  const [subjectsList, setSubjectsList] = useState([]);
  const [keyword, setKeyword] = useState(null);
  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);

  const handleReload = () => setReload(!reload);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await get('subjects', {
          keyword,
          page: page - 1,
          size: pageSize
        });

        if (!res.ok) {
          throw new Error()
        }

        const data = await res.json();
        setSubjectsList(data.content);
        setTotal(data.totalElements)
      } catch (error) {
        console.log("Lỗi khi truy vấn danh sách môn học", error)
      }
    }
    fetchApi();
  }, [keyword, reload, page, pageSize])

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setPage(1)
      setKeyword(e.target.value)
    }
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'ẢNH',
      key: 'imageUrl',
      render: (_, { imageUrl }) => (
        <img src={imageUrl} alt="Ảnh đại diện" height='50px' />
      )
    },
    {
      title: 'TÊN MÔN HỌC',
      dataIndex: 'name',
      key: 'name',
      width: 150
    },
    {
      title: 'MÔ TẢ',
      dataIndex: 'description',
      key: 'description'
    },
    // {
    //   title: 'NGÀY TẠO',
    //   key: 'createdAt',
    //   render: (_, { createdAt }) => (
    //     formatDateTime(createdAt)
    //   )
    // },
    {
      title: 'TRẠNG THÁI',
      key: 'status',
      render: (_, { status }) => (
        status === 'ACTIVE' ? (
          <Tag style={{ fontSize: "14px" }} color="green">Hoạt động</Tag>
        ) : (
          <Tag style={{ fontSize: "14px" }} color="red">Ngừng hoạt động</Tag>
        )
      )
    },
    {
      title: 'HÀNH ĐỘNG',
      key: 'action',
      render: (_, record) => (
        <Space style={{ fontSize: '15px' }}>
          <SubjectsEdit mode="EDIT" record={record} onReload={handleReload} />
        </Space>
      )
    },
  ];

  return (
    <>
      <div className="subjectsAd">
        <h1 className="subjectsAd__title">
          Quản lí môn học
        </h1>
        <div className="subjectsAd__action">
          <div className="subjectsAd__search">
            <IoIosSearch />
            <input type="text" placeholder="Tìm theo tên môn" onKeyDown={handleSearch} />
          </div>
          <SubjectsEdit mode="CREATE" onReload={handleReload} />
        </div>
        <Table
          rowKey="id"
          dataSource={subjectsList}
          columns={columns}
          pagination={{
            current: page,
            pageSize,
            total,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20],
            showTotal: (total) => `Tổng ${total} môn học`
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

export default Subjects