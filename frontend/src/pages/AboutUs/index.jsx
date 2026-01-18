import { Col, Row } from "antd";
import About1 from "../../assets/images/About1.png"
import About2 from "../../assets/images/About2.png"
import About3 from "../../assets/images/About3.png"
import "./AboutUs.scss";

function AboutUs() {
  return (
    <>
      <div className="about">
        <div className="container">
          <Row gutter={[50, 50]}>
            <Col span={12}>
              <div className="about__content">
                <h2 className="about__title">
                  UniQuiz là gì?
                </h2>
                <p className="about__desc">
                  UniQuiz là nền tảng luyện tập trắc nghiệm trực tuyến dành cho sinh viên đại học, hỗ trợ ôn tập kiến thức các môn đại cương và chuyên ngành, giúp chuẩn bị hiệu quả cho các bài kiểm tra, thi giữa kỳ và cuối kỳ. <br /><br />
                  Với hệ thống câu hỏi phong phú, giao diện thân thiện và chấm điểm nhanh chóng, UniQuiz giúp sinh viên học tập chủ động, nâng cao kết quả và tự tin hơn trong suốt quá trình học tập.
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div className="about__image">
                <img src={About1} alt="" />
              </div>
            </Col>

            <Col span={12}>
              <div className="about__image">
                <img src={About2} alt="" />
              </div>
            </Col>
            <Col span={12}>
              <div className="about__content">
                <h2 className="about__title">
                  Sứ mệnh
                </h2>
                <p className="about__desc">
                  <ul className="about__list">
                    UniQuiz hướng đến việc:
                    <li>Giúp sinh viên nắm vững kiến thức các môn đại cương và chuyên ngành ở bậc đại học</li>
                    <li>Phát hiện điểm mạnh - điểm yếu trong quá trình học tập và làm bài kiểm tra</li>
                    <li>Tối ưu hóa việc ôn tập thông qua hệ thống luyện đề trắc nghiệm thông minh và hiệu quả</li>
                  </ul>
                </p>
              </div>
            </Col>

            <Col span={12}>
              <div className="about__content">
                <h2 className="about__title">
                  Cam kết của UniQuiz
                </h2>
                <p className="about__desc">
                  <ul className="about__list">
                    UniQuiz cam kết mang đến môi trường học tập:
                    <li>Dễ sử dụng - Hiệu quả - Miễn phí nhiều tính năng</li>
                    <li>Nội dung học tập chính xác, cập nhật thường xuyên</li>
                    <li>Luôn lắng nghe và hỗ trợ sinh viên trong suốt quá trình học tập</li>
                  </ul>
                </p>
              </div>
            </Col>
            <Col span={12}>
              <div className="about__image">
                <img src={About3} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default AboutUs;