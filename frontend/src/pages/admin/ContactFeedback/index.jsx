import { Modal, notification, Popconfirm, Switch, Table, Tag } from "antd";
import "./ContactFeedback.scss"
import { BsEnvelopeAtFill } from "react-icons/bs";
import { FaCheckSquare, FaCalendarDay, FaHourglassEnd } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useEffect, useState } from "react";
import { CheckCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { get, patch } from "../../../utils/request";
import { formatDateTime } from "../../../utils/date";

function ContactFeedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [contactsList, setContactsList] = useState([]);
  const [dashboard, setDashboard] = useState([]);
  const [selectedContact, setSelectedContact] = useState([]);
  const [notificationApi, contextHolder] = notification.useNotification();
  const [reload, setReload] = useState(false);


  useEffect(() => {
    const fetchApi = async () => {
      try {
        const [contactsListRes, dashboardRes] = await Promise.all([
          get('admin/contacts', { 
            page: page - 1,
            pageSize,
            keyword, 
            status }),
          get('admin/contacts/dashboard')
        ])

        const contactsListData = await contactsListRes.json();
        const dashboardData = await dashboardRes.json();

        setContactsList(contactsListData.content.reverse());
        setDashboard(dashboardData);
        setTotal(contactsListData.totalElements)
      } catch (error) {
        console.log("Lỗi lấy các Liên hệ & góp ý: ", error);
      }
    }
    fetchApi();
  }, [reload, page, pageSize, keyword, status])

  const showModal = (record) => {
    setSelectedContact(record);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSearch = (e) => {
    if (e.code === 'Enter') {
      setKeyword(e.target.value);
    }
  }

  const handleChangeStatus = (record) => {
    const fetchApi = async () => {
      try {
        const res = await patch(`admin/contacts/${record.id}/status`, {
          status: record.status === 'PENDING' ? 'RESOLVED' : 'PENDING'
        })
        if (!res.ok) {
          throw new Error()
        }
        const data = await res.json();
        notificationApi.success({
          title: 'Cập nhật trạng thái',
          description: data.status === 'RESOLVED'
            ? 'Yêu cầu đã được đánh dấu là đã xử lý.'
            : 'Yêu cầu đã được chuyển về trạng thái đang xử lý.'
        })
        setReload(!reload);
      } catch (error) {
        console.log("Lỗi cập nhật trạng thái: ", error);
      }
    }
    fetchApi();
  }


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
      render: (_, record) => {
        let check = record.status === 'PENDING' ? false : true;
        return (
          <Switch
            checkedChildren="Đã xử lý"
            unCheckedChildren="Đang xử lý"
            defaultChecked={check}
            onChange={() => handleChangeStatus(record)}
          />
        )
      }
    },
    {
      title: 'Thời gian gửi',
      key: 'createdAt',
      render: (_, { createdAt }) => (
        formatDateTime(createdAt)
      )
    },
    {
      title: 'Xem',
      key: 'action',
      render: (_, record) => (
        <button
          onClick={() => showModal(record)}
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
      {contextHolder}
      <div className="feedback">
        <h1 className="feedback__title">
          Quản lí Liên hệ & Góp ý
        </h1>
        <div className="feedback__list">
          <div className="feedback__item">
            <BsEnvelopeAtFill />
            <span>TỔNG SỐ</span>
            <h3>{dashboard.total}</h3>
          </div>
          <div className="feedback__item">
            <FaHourglassEnd />
            <span>ĐANG XỬ LÝ</span>
            <h3>{dashboard.pending}</h3>
          </div>
          <div className="feedback__item">
            <FaCheckSquare />
            <span>ĐÃ XỬ LÝ</span>
            <h3>{dashboard.resolved}</h3>
          </div>
          <div className="feedback__item">
            <FaCalendarDay />
            <span>HÔM NAY</span>
            <h3>{dashboard.today}</h3>
          </div>
        </div>
        <div className="filter">
          <div className="filter__left">
            <IoIosSearch className="icon" />
            <input type="text" placeholder="Tìm theo tên, email hoặc tiêu đề" onKeyDown={handleSearch} />
          </div>
          <div className="filter__right">
            <button className={"filter__btn " + (status === null ? "filter__btn--active" : "")} onClick={() => setStatus(null)}>
              Tất cả
            </button>
            <button className={"filter__btn " + (status === 'PENDING' ? "filter__btn--active" : "")} onClick={() => setStatus("PENDING")} >
              Đang xử lý
            </button>
            <button className={"filter__btn " + (status === 'RESOLVED' ? "filter__btn--active" : "")} onClick={() => setStatus("RESOLVED")} >
              Đã xử lý
            </button>
          </div>
        </div >
        <Table
          dataSource={contactsList}
          columns={columns}
          rowKey="id"
          className="table"
          pagination={{
            current: page,
            pageSize,
            total,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20],
            showTotal: (total) => `Tổng ${total} liên hệ`
          }}
          onChange={(pagination) => {
            setPage(pagination.current);
            setPageSize(pagination.pageSize);
          }}
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
            {/* <div className="modal__item">
              <p className="modal__item-label">
                ID
              </p>
              <div className="modal__item-content">
                {selectedContact.id}
              </div>
            </div> */}
            <div className="modal__item">
              <p className="modal__item-label">
                Tên người gửi
              </p>
              <div className="modal__item-content">
                {selectedContact.name}
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Email
              </p>
              <div className="modal__item-content">
                {selectedContact.email}
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Số điện thoại
              </p>
              <div className="modal__item-content">
                {selectedContact.phone ? selectedContact.phone : '---'}
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Tiêu đề
              </p>
              <div className="modal__item-content">
                {selectedContact.title}
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Nội dung
              </p>
              <div className="modal__item-content">
                {selectedContact.content}
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Trạng thái
              </p>
              <div className="modal__item-content">
                {selectedContact.status === 'RESOLVED' ? (
                  <Tag
                    icon={<CheckCircleOutlined />}
                    color="success"
                    style={{ fontSize: "16px" }}
                  >
                    Đã xử lý
                  </Tag>
                ) : (
                  <Tag
                    icon={<SyncOutlined spin />}
                    color='processing'
                    style={{ fontSize: "16px" }}
                  >
                    Đang xử lý
                  </Tag>
                )}
              </div>
            </div>
            <div className="modal__item">
              <p className="modal__item-label">
                Thời gian gửi
              </p>
              <div className="modal__item-content">
                {formatDateTime(selectedContact.createdAt)}
              </div>
            </div>
          </div>
        </Modal>
      </div >
    </>
  )
}

export default ContactFeedback;