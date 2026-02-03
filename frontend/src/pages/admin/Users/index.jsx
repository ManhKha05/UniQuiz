import { IoIosSearch } from "react-icons/io";
import "./Users.scss";
import { notification, Popconfirm, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { get, put } from "../../../utils/request"
import dayjs from "dayjs";

function Users() {
  const [users, setUsers] = useState();
  const [reload, setReload] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [notificationApi, contextHolder] = notification.useNotification();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await get('admin/users', {
          page: page - 1,
          pageSize,
          keyword
        });
        if (!res.ok) {
          throw new Error("Error");
        }
        const data = await res.json();
        setUsers(data.content);
        setTotal(data.totalElements)
      } catch (error) {
        console.log("Lỗi khi lấy danh sách người dùng: ", error);
      }
    }
    fetchApi();
  }, [reload, page, pageSize, keyword])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'fullName',
      key: 'fullNameull',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Ngày tạo',
      key: 'createdAt',
      render: (_, { createdAt }) => (
        dayjs(createdAt).format("DD/MM/YYYY HH:mm")
      )
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        status === 'ACTIVE' ? (
          <Tag color="geekblue">Hoạt động</Tag>
        ) : (
          <Tag color="volcano">Ngừng hoạt động</Tag>
        )
      )
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        record.status === 'ACTIVE' ? (
          <Popconfirm
            title="Khóa tài khoản?"
            onConfirm={() => handleStatus(record.id)}
            okText="Khóa"
            cancelText="Hủy"
          >
            <a >Khóa</a>
          </Popconfirm>
        ) : (
          <Popconfirm
            title="Mở khóa tài khoản?"
            onConfirm={() => handleStatus(record.id)}
            okText="Mở khóa"
            cancelText="Hủy"
          >
            <a >Mở khóa</a>
          </Popconfirm>
        )
      )
    }
  ];

  const handleStatus = (id) => {
    const fetchApi = async () => {
      try {
        const res = await put(`admin/users/${id}/status`)
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        notificationApi.success({
          title: 'Cập nhật trạng thái thành công',
          description: `Tài khoản ${data.username} đã được ${data.status === "ACTIVE" ? "mở khóa" : "khóa"}`
        })

        setReload(!reload);
      } catch (error) {
        console.log("Lỗi cập nhật trạng thái tài khoản: ", error);
      }
    }
    fetchApi();
  }

  const handleSearch = (e) => {
    if (e.code === 'Enter') {
      setKeyword(e.target.value);
    }
  }

  return (
    <>
      {contextHolder}
      <div className="users">
        <h1 className="users__title">
          Quản lí người dùng
        </h1>
        <div className="users__filter">
          <div className="users__filter-input">
            <IoIosSearch className="icon" />
            <input type="text" placeholder="Tìm theo tên hoặc email..." onKeyUp={handleSearch} />
          </div>
        </div>
        <Table
          dataSource={users}
          columns={columns}
          rowKey="id"
          pagination={{
            current: page,
            pageSize,
            total,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20],
            showTotal: (total) => `Tổng ${total} người dùng`
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

export default Users;