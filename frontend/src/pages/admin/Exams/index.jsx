import "./Exams.scss";
import { Button, Col, Flex, Form, Input, InputNumber, Modal, Row, Select, Space, Tag } from "antd"
import { IoNewspaperOutline, IoTime } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import ExamsEdit from "./ExamsEdit";

function Exams() {

  const handleFilter = (e) => {
    console.log(e);
  }


  return (
    <>
      <div className="examsAd">
        <h1 className="examsAd__title">
          Quản lí đề thi
        </h1>
        <div className="examsAd__statics">
          <div className="examsAd__statics-item">
            <p>TỔNG SỐ ĐỀ</p>
            <h2>24</h2>
          </div>
          <div className="examsAd__statics-item">
            <p>ĐỀ ĐANG HOẠT ĐỘNG</p>
            <h2>15</h2>
          </div>
          <div className="examsAd__statics-item">
            <p>ĐỀ NHÁP</p>
            <h2>6</h2>
          </div>
          <div className="examsAd__statics-item">
            <p>ĐỀ ĐÃ LƯU TRỮ</p>
            <h2>3</h2>
          </div>
        </div>
        {/* <Button type="primary" onClick={showModal}>
          + Tạo đề mới
        </Button> */}
        
        <ExamsEdit />

        <Form
          onFinish={handleFilter}
          layout="vertical"
          className="examsAd__filter"
        >
          <Row gutter={[20, 0]} align="middle">
            <Col span={8}>
              <Form.Item
                label="Tìm kiếm đề thi"
                name="name"
              >
                <Input placeholder="Tên đề thi..." />
              </Form.Item>
            </Col >

            <Col span={4}>
              <Form.Item
                label="Môn học"
                name="exam"
                initialValue="all"
              >
                <Select
                  // defaultValue="all"
                  options={[
                    { value: 'all', label: 'Tất cả môn học' },
                    { value: '1', label: 'Lập trình Web' }
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={4}>
              <Form.Item
                label="Trạng thái"
                name="status"
                initialValue="all"
              >
                <Select
                  // defaultValue="all"
                  options={[
                    { value: 'all', label: 'Tất cả' },
                    { value: 'active', label: 'Đang hoạt động' },
                    { value: 'draft', label: 'Nháp' },
                    { value: 'inactive', label: 'Đã lưu trữ' },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={4}>
              <Form.Item
                label="Sắp xếp"
                name="sort"
                initialValue="newest"
              >
                <Select
                  // defaultValue="all"
                  options={[
                    { value: 'newest', label: 'Mới nhất' },
                    { value: 'oldest', label: 'Cũ nhất' },
                    { value: 'name', label: 'Tên A - Z' },
                  ]}
                />
              </Form.Item>
            </Col>

            <Col span={4}>
              <Button type="primary" htmlType="submit">
                Tìm kiếm
              </Button>
            </Col>
          </Row >
        </Form >

        <div className="examsAd__list">
          <Row gutter={[20, 20]}>
            <Col span={8}>
              <div className="examsAd-item">
                <h2 className="examsAd-item__title">
                  Đề thi giữa kỳ - Lập trình Web
                </h2>
                <Tag color="green" variant="outlined" className="examsAd-item__tag">HOẠT ĐỘNG</Tag>
                <div className="examsAd-item__info">
                  <div className="examsAd-item__info-item">
                    <IoNewspaperOutline />
                    <span>Lập trình Web</span>
                  </div>
                  <div className="examsAd-item__info-item">
                    <IoTime />
                    <span>60 phút</span>
                  </div>
                  <div className="examsAd-item__info-item">
                    <AiFillQuestionCircle />
                    <span>20 câu hỏi</span>
                  </div>
                  <div className="examsAd-item__info-item">
                    <FaRegCalendarAlt />
                    <span>26-01-2026</span>
                  </div>
                </div>
                <div className="examsAd-item__stats">
                  <div className="examsAd-item__stats-item">
                    <h2>150</h2>
                    <p>LƯỢT THI</p>
                  </div>
                  <div className="examsAd-item__stats-item">
                    <h2>9.4</h2>
                    <p>ĐIỂM TB</p>
                  </div>
                </div>
                <Button style={{ backgroundColor: "#f8fafc" }}>Chỉnh sửa</Button>
              </div>
            </Col>
            <Col span={8}>
              <div className="examsAd-item">
                <h2 className="examsAd-item__title">
                  Đề thi giữa kỳ - Lập trình Web
                </h2>
                <Tag color="lime" variant="solid" className="examsAd-item__tag">NHÁP</Tag>
                <div className="examsAd-item__info">
                  <div className="examsAd-item__info-item">
                    <IoNewspaperOutline />
                    <span>Lập trình Web</span>
                  </div>
                  <div className="examsAd-item__info-item">
                    <IoTime />
                    <span>60 phút</span>
                  </div>
                  <div className="examsAd-item__info-item">
                    <AiFillQuestionCircle />
                    <span>20 câu hỏi</span>
                  </div>
                  <div className="examsAd-item__info-item">
                    <FaRegCalendarAlt />
                    <span>26-01-2026</span>
                  </div>
                </div>
                <div className="examsAd-item__stats">
                  <div className="examsAd-item__stats-item">
                    <h2>99</h2>
                    <p>LƯỢT THI</p>
                  </div>
                  <div className="examsAd-item__stats-item">
                    <h2>0.5</h2>
                    <p>ĐIỂM TB</p>
                  </div>
                </div>
                <Button style={{ backgroundColor: "#f8fafc" }}>Chỉnh sửa</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Exams;