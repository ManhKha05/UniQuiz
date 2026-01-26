import "./ExamHistory.scss";
import { Button, Col, Form, Input, Row, Select } from "antd"
import { FaCalendarDays, FaCheck } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { useNavigate } from "react-router-dom"

function ExamHistory() {
  const navigate = useNavigate();

  const onFinish = () => {

  }

  const handleResult = () => {
    navigate("/exam-result/1");
  }

  return (
    <>
      <div className="examhistory">
        <div className="container">
          <h1 className="examhistory__title">
            Lịch sử làm bài
          </h1>
          <p className="examhistory__desc">
            Xem lại các bài thi đã hoàn thành và theo dõi tiến độ học tập của bạn
          </p>
          <div className="examhistory__filter">
            <Form onFinish={onFinish}>
              <Row gutter={[30, 20]}>
                <Col xs={24} md={10}>
                  <Form.Item
                    name="exam"
                  >
                    <Input className="examhistory__input"
                      placeholder="Tìm kiếm bài thi" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={10}>
                  <Form.Item
                    name="subject"
                  >
                    <Select
                      className="examhistory__input"
                      showSearch={{ optionFilterProp: 'label' }}
                      placeholder="Tất cả môn học"
                      options={[
                        {
                          value: 'jack',
                          label: 'Jack',
                        },
                        {
                          value: 'lucy',
                          label: 'Lucy',
                        },
                        {
                          value: 'tom',
                          label: 'Tom',
                        },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={4}>
                  <Form.Item label={null}>
                    <Button type="primary" htmlType="submit" className="examhistory__filter-btn">
                      Lọc
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="examhistory__list">
            <div className="examhistory__item">
              <div className="examhistory__item-left">
                <h2 className="examhistory__item-title">
                  Đề ôn tập cuối chương 1
                </h2>
                <div className="examhistory__item-info">
                  <div className="examhistory__item-desc">
                    <FaCalendarDays />
                    <span>21/01/2026</span>
                  </div>
                  <div className="examhistory__item-desc">
                    <GoClock />
                    <span>45 phút</span>
                  </div>
                  <div className="examhistory__item-desc">
                    <HiOutlineNewspaper />
                    <span>Tư tưởng Hồ Chí Minh</span>
                  </div>
                  <div className="examhistory__item-desc">
                    <FaCheck />
                    <span>35/40 câu</span>
                  </div>
                </div>
                <button onClick={handleResult} className="examhistory__item-btn">
                  Xem chi tiết
                </button>
              </div>
              <h2 className="examhistory__item-right">
                9.5/10
              </h2>
            </div>
            <div className="examhistory__item">
              <div className="examhistory__item-left">
                <h2 className="examhistory__item-title">
                  Đề ôn tập cuối chương 1
                </h2>
                <div className="examhistory__item-info">
                  <div className="examhistory__item-desc">
                    <FaCalendarDays />
                    <span>21/01/2026</span>
                  </div>
                  <div className="examhistory__item-desc">
                    <GoClock />
                    <span>45 phút</span>
                  </div>
                  <div className="examhistory__item-desc">
                    <HiOutlineNewspaper />
                    <span>Tư tưởng Hồ Chí Minh</span>
                  </div>
                  <div className="examhistory__item-desc">
                    <FaCheck />
                    <span>35/40 câu</span>
                  </div>
                </div>
                <button onClick={handleResult} className="examhistory__item-btn">
                  Xem chi tiết
                </button>
              </div>
              <h2 className="examhistory__item-right">
                9.5/10
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExamHistory;