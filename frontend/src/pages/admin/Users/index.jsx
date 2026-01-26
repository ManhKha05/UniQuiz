import { IoIosSearch } from "react-icons/io";
import "./Users.scss";
import { Popconfirm, Space, Table, Tag } from "antd";

function Users() {

  const dataSource = [
    {
      id: '1',
      name: 'Nguyễn Mạnh Kha',
      username: 'kha1',
      email: 'nguyenmanhkha3225@gmail.com',
      phone: '0382079152',
      createdAt: '12-01-2026',
      status: true
    },
    {
      id: '2',
      name: 'Nguyễn Mạnh Kha',
      username: 'kha1',
      email: 'nguyenmanhkha3225@gmail.com',
      phone: '',
      createdAt: '12-01-2026',
      status: false
    }
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'name',
      key: 'name',
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
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (_, { status }) => (
        status ? (
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
        record.status ? (
          <Popconfirm
            title="Khóa tài khoản?"
            // description="Are you sure to delete this task?"
            onConfirm={() => handleInactive(record.id)}
            okText="Khóa"
            cancelText="Hủy"
          >
            <a >Khóa</a>
          </Popconfirm>
        ) : (
          <Popconfirm
            title="Mở khóa tài khoản?"
            // description="Are you sure to delete this task?"
            onConfirm={() => handleActive(record.id)}
            okText="Mở khóa"
            cancelText="Hủy"
          >
            <a >Mở khóa</a>
          </Popconfirm>
        )
      )
    }
  ];

  const handleActive = (id) => {
    console.log("Active:" + id)
  }

  const handleInactive = (id) => {
    console.log("Inactive:" + id)
  }

  return (
    <>
      <div className="users">
        <h1 className="users__title">
          Quản lí người dùng
        </h1>
        <div className="users__filter">
          <div className="users__filter-input">
            <IoIosSearch className="icon" />
            <input type="text" placeholder="Tìm theo tên hoặc email..." />
          </div>
        </div>
        <Table
          dataSource={dataSource}
          columns={columns}
          rowKey="id"
        />
      </div>
    </>
  )
}

export default Users;