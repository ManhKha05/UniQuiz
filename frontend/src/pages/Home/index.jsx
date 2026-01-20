import SubjectList from "./SubjectList";
import "./Home.scss";
import { Col, Row } from "antd";
import { FaQuestion, FaFileInvoice, FaChartBar } from "react-icons/fa";
import { PiDevicesFill, PiStudentFill } from "react-icons/pi";
import { MdQuiz } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { FaCheckDouble } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import FeaturesImg from "../../assets/images/Features.png"
import registerImg from "../../assets/images/Register.png"
import Avt1 from "../../assets/images/Avt1.png"
import Avt2 from "../../assets/images/Avt2.png"
import Avt3 from "../../assets/images/Avt3.png"
import { useDispatch } from "react-redux"
import {registerModal} from "../../actions/authModal"


function Home() {
  const dispatch = useDispatch();

  return (
    <>
      <SubjectList />

      <div className="steps">
        <div className="container">
          <div className="steps__header">
            <h2 className="steps__title">
              3 bước luyện tập trắc nghiệm hiệu quả
            </h2>
            <p className="steps__desc">
              Lộ trình rõ ràng giúp học sinh cải thiện điểm số mỗi ngày
            </p>
          </div>
          <div className="steps__list">
            <Row gutter={[80, 20]}>
              <Col span={8}>
                <div className="steps__item">
                  <h2 className="steps__item-number">
                    Bước 1
                  </h2>
                  <h3 className="steps__item-title">
                    Chọn đúng mục tiêu
                  </h3>
                  <p className="steps__item-desc">
                    Sinh viên bắt đầu bằng việc lựa chọn lựa chọn môn học và các dạng bài trắc nghiệm phù hợp với trình độ hiện tại và môn học của mình.
                  </p>
                </div>
              </Col>
              <Col span={8}>
                <div className="steps__item">
                  <h2 className="steps__item-number">
                    Bước 2
                  </h2>
                  <h3 className="steps__item-title">
                    Luyện tập như thi thật
                  </h3>
                  <p className="steps__item-desc">
                    Các bài trắc nghiệm được thiết kế với thời gian làm bài và cấu trúc bám sát đề thi. Rèn luyện khả năng tư duy, phân bổ thời gian hợp lý.
                  </p>
                </div>
              </Col>
              <Col span={8}>
                <div className="steps__item">
                  <h2 className="steps__item-number">
                    Bước 3
                  </h2>
                  <h3 className="steps__item-title">
                    Ôn tập và cải thiện
                  </h3>
                  <p className="steps__item-desc">
                    Khi sinh viên hoàn thành bài làm, hệ thống tự động chấm điểm và hiển thị đáp án. Học sinh dễ dàng nhận ra những câu sai, luyện tập lại.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="container">
          <Row>
            <Col span={12}>
              <div className="features__image">
                <img src={FeaturesImg} alt="" />
              </div>
            </Col>
            <Col span={12}>
              <div className="features__list">
                <Row gutter={[80, 60]}>
                  <Col span={12}>
                    <div className="features__item">
                      <div className="features__item-icon">
                        <FaQuestion />
                      </div>
                      <h2 className="features__item-title">
                        Câu hỏi chuẩn đề thi
                      </h2>
                      <p className="features__item-desc">
                        Ngân hàng câu hỏi được xây dựng bám sát chương trình học và cấu trúc đề thi chính thức
                      </p>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="features__item">
                      <div className="features__item-icon">
                        <FaFileInvoice />
                      </div>
                      <h2 className="features__item-title">
                        Đề thi đa dạng
                      </h2>
                      <p className="features__item-desc">
                        Bộ đề thi theo các môn với đầy đủ đề thi các Chương, Giữa Học Kì, cuối Học Kì có chấm điểm
                      </p>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="features__item">
                      <div className="features__item-icon">
                        <FaChartBar />
                      </div>
                      <h2 className="features__item-title">
                        Theo dõi tiến độ rõ ràng
                      </h2>
                      <p className="features__item-desc">
                        Kết quả học tập được thống kê chi tiết sau mỗi lần làm bài, dễ dàng theo dõi sự tiến bộ theo từng giai đoạn.
                      </p>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="features__item">
                      <div className="features__item-icon">
                        <PiDevicesFill />
                      </div>
                      <h2 className="features__item-title">
                        Học mọi lúc - mọi nơi
                      </h2>
                      <p className="features__item-desc">
                        Chỉ cần thiết bị có kết nối Internet, học sinh có thể luyện tập trắc nghiệm bất cứ lúc nào, phù hợp với lịch học cá nhân.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="stats">
        <div className="container">
          <h2 className="stats__title">
            Nền tảng UniQuiz có gì ?
          </h2>
          <div className="stats__list">
            <Row gutter={[60, 60]}>
              <Col span={8}>
                <div className="stats__item">
                  <div className="stats__icon">
                    <PiStudentFill />
                  </div>
                  <div className="stats__content">
                    <h2 className="stats__number">
                      1000+
                    </h2>
                    <p className="stats__desc">
                      Học Viên
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="stats__item">
                  <div className="stats__icon">
                    <MdQuiz />
                  </div>
                  <div className="stats__content">
                    <h2 className="stats__number">
                      2100+
                    </h2>
                    <p className="stats__desc">
                      Câu Trắc Nghiệm
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="stats__item">
                  <div className="stats__icon">
                    <IoIosPaper />
                  </div>
                  <div className="stats__content">
                    <h2 className="stats__number">
                      200+
                    </h2>
                    <p className="stats__desc">
                      Đề Luyện Thi
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="registerbox">
        <div className="container">
          <Row>
            <Col span={12}>
              <div className="registerbox__content">
                <div className="registerbox__title">
                  <div className="registerbox__title-sub">
                    <h2 className="registerbox__title-dangky">
                      Đăng ký
                    </h2>
                    <h2 className="registerbox__title-taikhoan">
                      tài khoản
                    </h2>
                  </div>
                  <h2 className="registerbox__title-free">FREE</h2>
                </div>
                <ul className="registerbox__list">
                  <li className="registerbox__item">
                    <FaCheckDouble />
                    <span>Làm bài trắc nghiệm không giới hạn</span>
                  </li>
                  <li className="registerbox__item">
                    <FaCheckDouble />
                    <span>Nhận kết quả chấm điểm ngay lập tức</span>
                  </li>
                  <li className="registerbox__item">
                    <FaCheckDouble />
                    <span>Đề thi được chọn lọc và cập nhật thường xuyên</span>
                  </li>
                  <li className="registerbox__item">
                    <FaCheckDouble />
                    <span>Theo dõi tiến bộ học tập theo thời gian</span>
                  </li>
                </ul>
                <button onClick={() => dispatch(registerModal())} className="button">Đăng ký ngay</button>
              </div>
            </Col>
            <Col span={12} className="registerbox__image">
              <img src={registerImg} alt="" />
            </Col>
          </Row>
        </div>
      </div>

      <div className="testimonials">
        <div className="container">
          <h2 className="testimonials__title">
            Cảm nhận của sinh viên
          </h2>
          <div className="testimonials__list">
            <Row gutter={[30, 20]} style={{alignItems: "center"}}>
              <Col span={8}>
                <div className="testimonials__item">
                  <div className="testimonials__avt">
                    <img src={Avt1} alt="" />
                  </div>
                  <h3 className="testimonials__name">
                    Trần Thùy Dung
                  </h3>
                  <div className="testimonials__star">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                  </div>
                  <p className="testimonials__cmt">
                    Web có thống kê điểm và theo dõi tiến trình học tập khá hay. Làm xong bài là biết ngay mình yếu phần nào để ôn lại.
                  </p>
                </div>
              </Col>
              <Col span={8}>
                <div className="testimonials__item main">
                  <div className="testimonials__avt">
                    <img src={Avt2} alt="" />
                  </div>
                  <h3 className="testimonials__name">
                    Nguyễn Mạnh Kha
                  </h3>
                  <div className="testimonials__star">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                  </div>
                  <p className="testimonials__cmt">
                    Giao diện dễ nhìn, làm bài mượt, xem kết quả và đáp án rất rõ ràng. Học và ôn tập trên web này giúp mình tiến bộ hơn sau mỗi lần làm đề.
                  </p>
                </div>
              </Col>
              <Col span={8}>
                <div className="testimonials__item">
                  <div className="testimonials__avt">
                    <img src={Avt3} alt="" />
                  </div>
                  <h3 className="testimonials__name">
                    Phạm Tuấn Tú
                  </h3>
                  <div className="testimonials__star">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                  </div>
                  <p className="testimonials__cmt">
                    Mình thích nhất là dùng tài khoản miễn phí mà vẫn đủ tính năng để luyện thi hiệu quả.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;