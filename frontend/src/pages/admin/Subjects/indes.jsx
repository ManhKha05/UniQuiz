import { Button, Form, Input, Modal, Popconfirm, Select, Space, Table, Tag } from "antd";
import "./Subjects.scss"
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";

function Subjects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subject, setSubject] = useState()
  const [form] = useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (e) => {
    console.log(e)
  }

  const handleOpenCreate = () => {
    console.log("Create Subject");
    setSubject({});
    form.resetFields();
    showModal();
  }

  const handleOpenEdit = (id) => {
    console.log("Edit Subject: " + id);
    const data = {
      name: "Test",
      description: "Mô tả",
      status: "ACTIVE"
    }
    showModal();

    setTimeout(() => {
      form.setFieldsValue(data);
    })
  }

  const dataSource = [
    {
      id: '1',
      name: 'Tư tưởng Hồ Chí Minh',
      description: "Bộ câu hỏi trắc nghiệm môn Tư tưởng Hồ Chí Minh giúp sinh viên hệ thống hóa kiến thức lý luận, nắm vững các nội dung trọng tâm và ôn tập hiệu quả cho các bài kiểm tra, thi giữa kỳ và cuối kỳ.",
      total: 25,
      createdAt: '15-01-2026',
      status: 'ACTIVE'
    },
    {
      id: '2',
      name: 'Lập trình Web',
      total: 10,
      description: "Học các công nghệ web hiện đại như HTML, CSS, JavaScript, React và Node.js.",
      createdAt: '25-01-2026',
      status: 'INACTIVE'
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
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
    {
      title: 'NGÀY TẠO',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 120
    },
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
          <a onClick={() => handleOpenEdit(record.id)} style={{ color: "blue", textWrap: "nowrap" }}>Chỉnh sửa</a>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa môn học?"
            // onConfirm={confirm}
            // onCancel={cancel}
            okText="Xóa"
            cancelText="Hủy"
          >
            <a style={{ color: "orange" }}>Xóa</a>
          </Popconfirm>
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
            <input type="text" placeholder="Tìm theo tên môn" />
          </div>
          <Button
            type="primary"
            className="subjectsAd__create"
            onClick={handleOpenCreate}
          >
            Thêm môn học
          </Button>
        </div>
        <Table
          rowKey="id"
          dataSource={dataSource}
          columns={columns}
        />
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <h1>Thêm môn học</h1>
        <Form
          onFinish={onFinish}
          layout="vertical"
          form={form}
        >
          <Form.Item
            label="Tên môn học"
            name="name"
            rules={[{ required: true, message: 'Không được bỏ trống !' }]}
          >
            <Input placeholder="Nhập tên môn học" />
          </Form.Item>
          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: 'Không được bỏ trống !' }]}
          >
            <Input.TextArea placeholder="Nhập mô tả về môn học" rows={3} />
          </Form.Item>
          <Form.Item
            label="Trạng thái"
            name="status"
            rules={[{ required: true, message: 'Không được bỏ trống !' }]}
            initialValue="INACTIVE"
          >
            <Select
              // defaultValue="INACTIVE"
              options={[
                { value: 'INACTIVE', label: 'Ngừng hoạt động' },
                { value: 'ACTIVE', label: 'Hoạt động' },
              ]}
            />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Tạo mới
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Subjects