import { Button, Form, Input, Modal, notification, Select, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { post } from "../../../../utils/request";
import { UploadOutlined } from '@ant-design/icons';

const CLOUD_NAME = "dcjraarbb";

function SubjectsEdit({ mode, record, onReload }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = useForm();
  const [imageUrl, setImageUrl] = useState();
  const [notificationApi, contextHolder] = notification.useNotification();

  const showModal = () => { setIsModalOpen(true) };
  const handleCancel = () => { setIsModalOpen(false) };

  const handleOpenCreate = () => {
    form.resetFields();
    setImageUrl();
    showModal();
  }

  const handleOpenEdit = () => {
    form.setFieldsValue(record);
    setImageUrl(record.imageUrl);
    showModal();
  }

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "subjects");
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData
      }
      );
      const data = await res.json();
      setImageUrl(data.secure_url);
    } catch (error) {
      console.log("Lỗi up ảnh đại diện: ", error);
    }
  };

  const handleUpload = (e) => {
    uploadToCloudinary(e.file);
  }

  const onFinish = (e) => {
    const newSubject = { ...e, imageUrl };
    const fetchApi = async () => {
      try {
        const res = await post("admin/subjects", newSubject);
        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();

        notificationApi.success({
          title: 'Thành công',
          description: mode === "CREATE"
            ? `Thêm mới môn học ${data.name} thành công`
            : `Cập nhật môn học ${data.name} thành công`
        })

        setIsModalOpen(false);
        onReload();
      } catch (error) {
        console.log("Lỗi thêm/sửa môn học: ", error);
      }
    }
    fetchApi();
  }

  return (
    <>
      {contextHolder}
      {mode === 'CREATE' ? (
        <Button
          type="primary"
          className="subjectsAd__create"
          onClick={handleOpenCreate}
        >
          Thêm môn học
        </Button>
      ) : (
        <a onClick={handleOpenEdit} style={{ color: "blue", textWrap: "nowrap" }}>Chỉnh sửa</a>
      )}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <h1>{mode === 'CREATE' ? 'Thêm môn học' : 'Chỉnh sửa môn học'}</h1>
        <Form
          onFinish={onFinish}
          layout="vertical"
          form={form}
        >
          <Form.Item
            label="ID"
            name="id"
            hidden
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tên môn học"
            name="name"
            rules={[{ required: true, message: 'Không được bỏ trống !' }]}
          >
            <Input placeholder="Nhập tên môn học" />
          </Form.Item>

          <Form.Item
            label="Ảnh đại diện"
            name="imageUrl"
            rules={[{ required: true, message: 'Không được bỏ trống !' }]}
          >
            {imageUrl ? (
              <>
                <img src={imageUrl} alt="avatar" style={{ height: '150px', display: 'block', marginBottom: '8px' }} />
                <Upload
                  showUploadList={false}
                  customRequest={handleUpload}
                >
                  <Button icon={<UploadOutlined />}>Thay đổi ảnh</Button>
                </Upload>
              </>
            ) : (
              <Upload
                listType="picture-card"
                // showUploadList={false}
                customRequest={handleUpload}
              >
                + Thêm ảnh
              </Upload>
            )}

          </Form.Item>

          <Form.Item
            label="Mô tả"
            name="description"
            rules={[{ required: true, message: 'Không được bỏ trống !' }]}
          >
            <Input.TextArea placeholder="Nhập mô tả về môn học" rows={5} />
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
              {mode === 'CREATE' ? 'Thêm mới' : 'Cập nhật'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default SubjectsEdit;