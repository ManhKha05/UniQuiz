import { Modal, Popconfirm, Switch, Table, Tag } from "antd";
import "./ContactFeedback.scss"
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaCheckSquare, FaCalendarDay, FaHourglassEnd } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import { CheckCircleOutlined } from '@ant-design/icons';

function ContactFeedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState({ status: "ALL" })
  const showModal = (id) => {
    console.log("Xem chi tiết liên hệ: " + id);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFilter = (status) => {
    setFilter({
      ...filter,
      status: status
    })
  }

  const dataSource = [
    {
      id: '1',
      name: 'Nguyễn Mạnh Kha',
      email: 'nguyenmanhkha3225@gmail.com',
      title: 'Cải thiện giao diện',
      createdAt: '14:00 12-01-2026',
      status: 'PENDING'
    },
    {
      id: '2',
      name: 'Trần Văn Nam',
      email: 'tranvannam@gmail.com',
      title: 'Báo lỗi hệ thống',
      createdAt: '15:40 12-01-2026',
      status: 'SOLVED'
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên người gửi',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Trạng thái',
      key: 'status',
      minWidth: '140px',
      render: (_, { status }) => {
        let check = status === 'PENDING' ? false : true;
        return (
          <Switch
            checkedChildren="Đã xử lý"
            unCheckedChildren="Đang xử lý"
            defaultChecked={check} />
        )
      }
    },
    {
      title: 'Thời gian gửi',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'Xem',
      key: 'action',
      render: (_, record) => (
        <button
          onClick={() => showModal(record.id)}
          fontSize="25px"
          cursor="pointer"
          style={{ fontSize: "18px", backgroundColor: "#fff", border: "none", cursor: "pointer" }}
        >
          <IoEye />
        </button>
      )
    }
  ];

  return (
    <>
      <div className="feedback">
        <h1 className="feedback__title">
          Quản lí Liên hệ & Góp ý
        </h1>
        <div className="feedback__list">
          <div className="feedback__item">
            <BsEnvelopeAtFill />
            <span>TỔNG SỐ</span>
            <h3>15</h3>
          </div>
          <div className="feedback__item">
            <FaHourglassEnd />
            <span>ĐANG XỬ LÝ</span>
            <h3>15</h3>
          </div>
          <div className="feedback__item">
            <FaCheckSquare />
            <span>ĐÃ XỬ LÝ</span>
            <h3>15</h3>
          </div>
          <div className="feedback__item">
            <FaCalendarDay />
            <span>HÔM NAY</span>
            <h3>15</h3>
          </div>
        </div>
        <div className="filter">
          <div className="filter__left">
            <IoIosSearch className="icon" />
            <input type="text" placeholder="Tìm theo tên, email hoặc tiêu đề" />
          </div>
          <div className="filter__right">
            <button className={"filter__btn " + (filter.status === 'ALL' ? "filter__btn--active" : "")} onClick={() => handleFilter("ALL")}>
              Tất cả
            </button>
            <button className={"filter__btn " + (filter.status === 'PENDING' ? "filter__btn--active" : "")} onClick={() => handleFilter("PENDING")} >
              Đang xử lý
            </button>
            <button className={"filter__btn " + (filter.status === 'SOLVED' ? "filter__btn--active" : "")} onClick={() => handleFilter("SOLVED")} >
              Đã xử lý
            </button>
          </div>
        </div >
        <Table
          dataSource={dataSource}
          columns={columns}
          rowKey="id"
          className="table"
        />
        <Modal
          title="Chi tiết liên hệ"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          className="feedback-modal"
          style={{ top: 20 }}
        >
          <div className="modal">
            <div className="modal__item">
              <p className="modal__item-label">
                ID
              </p>
              <div className="modal__item-content">
                1
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Tên người gửi
              </p>
              <div className="modal__item-content">
                Nguyễn Mạnh Kha
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Email
              </p>
              <div className="modal__item-content">
                nguyenmanhkha3225@gmail.com
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Tiêu đề
              </p>
              <div className="modal__item-content">
                Cải thiện giao diện
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Nội dung
              </p>
              <div className="modal__item-content">
                Tôi muốn góp ý về việc cải thiện giao diện người dùng. Có thể thêm chế độ dark mode và tối ưu hóa trải nghiệm trên mobile không?
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Trạng thái
              </p>
              <div className="modal__item-content">
                <Tag
                  icon={<CheckCircleOutlined />}
                  color={"success"}
                  style={{ fontSize: "16px" }}
                >
                  Đã xử lý
                </Tag>
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Thời gian gửi
              </p>
              <div className="modal__item-content">
                14:40 15-01-2026
              </div>
            </div>
          </div>
        </Modal>
      </div >
    </>
  )
}

export default ContactFeedback;