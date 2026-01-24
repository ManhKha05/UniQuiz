import { useNavigate } from "react-router-dom";
import "./ExamResult.scss";

function ExamResult() {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/exams/1');
  }

  return (
    <>
      <div className="result">
        <div className="container">
          <div className="result__header">
            <h1 className="result__title">
              Kết quả bài làm
            </h1>
            <p className="result__title-sub">
              Lịch sử Đảng Cộng sản Việt Nam - Chương 1
            </p>
          </div>
          <div className="result__main">
            <h1 className="result__grade">
              9.5
              <p>Điểm</p>
            </h1>
            <div className="result__info">
              <div className="result__info-item">
                20
                <p>TỔNG SỐ CÂU</p>
              </div>
              <div className="result__info-item">
                18
                <p>CÂU ĐÚNG</p>
              </div>
              <div className="result__info-item">
                2
                <p>CÂU SAI</p>
              </div>
            </div>
            <div className="result__time">
              Thời gian hoàn thành: 35 phút 42 giây | Nộp bài lúc: 14:35 - 23/01/2026
            </div>
          </div>
          <div className="result__detail">
            <h2 className="result__detail-title">
              Chi tiết bài làm
            </h2>
            <div className="question">
              <div className="question__header">
                <span className="question__icon question__icon-true" >
                  ✓
                </span>
                <p className="question__content">
                  Câu 1: Nhận thức nào dưới đây của Đảng về kinh tế thị trường định hướng xã hội chủ nghĩa trước đổi mới:
                </p>
              </div>
              <div className="answer__list">
                <div className="answer__item">
                  <span className="answer__label">A. </span>
                  <span className="answer__content">Coi kinh tế thị trường là cái riêng có của chủ nghĩa tư bản, không phải là thành tựu của văn minh chung nhân loại.</span>
                </div>
                <div className="answer__item">
                  <span className="answer__label">B. </span>
                  <span className="answer__content">Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình phát triển tổng quát của nước ta trong thời kỳ quá độ lên chủ nghĩa xã hội.</span>
                  <span className="answer__badge"></span>
                </div>
                <div className="answer__item answer__item--selected  answer__item--correct">
                  <span className="answer__label">C. </span>
                  <span className="answer__content"> Đã thừa nhận có thể và cần thiết sử dụng kinh tế thị trường để xây dựng chủ nghĩa xã hội ở nước ta.</span>
                  <span className="answer__badge">✓ Đáp án của bạn - Chính xác</span>
                </div>
                <div className="answer__item">
                  <span className="answer__label">D. </span>
                  <span className="answer__content">Gắn nền kinh tế thị trường của nước ta với quá trình toàn cầu hóa, hội nhập quốc tế, tham gia sâu rộng vào mạng sản xuất và chuỗi cung ứng toàn cầu.</span>
                  <span className="answer__badge"></span>
                </div>
              </div>
            </div>

            <div className="question">
              <div className="question__header">
                <span className="question__icon question__icon-false" >
                  ✗
                </span>
                <p className="question__content">
                  Câu 2: Đáp án nào dưới đây không đúng khi xác định nguyên nhân dẫn đến những hạn chế trong đường lối đối ngoại thời kỳ trước đổi mới:
                </p>
              </div>
              <div className="answer__list">
                <div className="answer__item">
                  <span className="answer__label">A.</span>
                  <span className="answer__content">Do chịu nhiều ảnh hưởng các quan điểm quốc tế của Liên Xô.</span>
                </div>
                <div className="answer__item answer__item--selected ">
                  <span className="answer__label">B.</span>
                  <span className="answer__content">Do tư tưởng chủ quan, say sưa với thắng lợi sau giải phóng miền Nam.</span>
                  <span className="answer__badge">✗ Đáp án của bạn - Sai</span>
                </div>
                <div className="answer__item answer__item--correct">
                  <span className="answer__label">C.</span>
                  <span className="answer__content">Do phân tích đúng và kịp thời tình hình thế giới </span>
                  <span className="answer__badge">✓ Đáp án đúng</span>
                </div>
                <div className="answer__item">
                  <span className="answer__label">D.</span>
                  <span className="answer__content">Do không nhận thức được xu thế chuyển từ đối đầu sang hòa hoãn, chạy đua phát triển kinh tế của các nước trên thế giới.</span>
                  <span className="answer__badge"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="result__footer">
            <button onClick={handleRetry} className="result__button">Làm lại bài thi </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExamResult;