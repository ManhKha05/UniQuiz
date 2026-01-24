import './ExamIntro.scss';
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col } from "antd";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { GoClock } from "react-icons/go";

function ExamIntro() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/exams/${id}/start`);
  }

  return (
    <>
      <div className="examIntro">
        <div className="container">
          <div className="examIntro__header">
            <h1 className="examIntro__subject">
              Trắc nghiệm môn Lịch sử Đảng Cộng sản Việt Nam
            </h1>
            <h2 className="examIntro__exam">
              Luyện tập chương 1
            </h2>
            <div className="examIntro__info">
              <div className="examIntro__info-item">
                <BsFillQuestionCircleFill />
                <span>40 câu</span>
              </div>
              <div className="examIntro__info-item">
                <GoClock />
                <span>50 phút</span>
              </div>
            </div>
          </div>
          <div className="examIntro__main">
            <div className="examIntro__main-title">
              ĐỂ LÀM BÀI HIỆU QUẢ
            </div>
            <div className="examIntro__main-list">
              <Row>
                <Col span={12}>
                  <div className="examIntro__main-item">
                    <h2 className="examIntro__main-number">
                      1
                    </h2>
                    <p className="examIntro__main-content">
                      Ôn tập kiến thức trong chương trình học
                    </p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="examIntro__main-item">
                    <h2 className="examIntro__main-number">
                      2
                    </h2>
                    <p className="examIntro__main-content">
                      Tắt các thiết bị không cần thiết để tập trung làm bài
                    </p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="examIntro__main-item">
                    <h2 className="examIntro__main-number">
                      3
                    </h2>
                    <p className="examIntro__main-content">
                      Điều chỉnh thời gian hợp lí
                    </p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="examIntro__main-item">
                    <h2 className="examIntro__main-number">
                      4
                    </h2>
                    <p className="examIntro__main-content">
                      Chuẩn bị dụng cụ để làm bài
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="examIntro__btn">
            <button onClick={handleStart} className="button">Bắt đầu làm</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExamIntro;