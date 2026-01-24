import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import "./ExamDo.scss";
import { Button, Modal } from "antd";
import { GoClock } from "react-icons/go";

function ExamDo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60);
  const navigate = useNavigate();

  const showModal = () => {setIsModalOpen(true)};
  const handleCancel = () => {setIsModalOpen(false)};
  const handleOk = () => {
    navigate('/exam-result/1')
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      handleOk();
      return
    }

    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }, [ timeLeft ])

  const formatTimer = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  // console.log(timeLeft);

  return (
    <>
      <div className="examdo">
        <div className="container">
          <div className="examdo__header">
            <h1 className="examdo__title">
              Trắc nghiệm môn Lịch sử Đảng Cộng sản Việt Nam
            </h1>
            <h2 className="examdo__title--sub">
              Chương 1
            </h2>
            <div className="examdo__timer">
              <GoClock /> {formatTimer()}
            </div>
          </div>
          <div className="examdo__main">
            <div className="examdo__question">
              <div className="examdo__question-text">
                <span className="examdo__question-number">1.</span>
                Nhận thức nào dưới đây của Đảng về kinh tế thị trường định hướng xã hội chủ nghĩa trước đổi mới:
              </div>
              <div className="examdo__options">
                <label className="examdo__option">
                  <input className="examdo__option-radio" type="radio" name="1" id="1" value="1" />
                  <span>A. Coi kinh tế thị trường là cái riêng có của chủ nghĩa tư bản, không phải là thành tựu của văn minh chung nhân loại.</span>
                </label>
                <label className="examdo__option">
                  <input className="examdo__option-radio" type="radio" name="1" id="1" value="1" />
                  <span>B. Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình phát triển tổng quát của nước ta trong thời kỳ quá độ lên chủ nghĩa xã hội.</span>
                </label>
              </div>
            </div>
            <div className="examdo__question">
              <div className="examdo__question-text">
                <span className="examdo__question-number">2.</span>
                Nhận thức nào dưới đây của Đảng về kinh tế thị trường định hướng xã hội chủ nghĩa trước đổi mới:
              </div>
              <div className="examdo__options">
                <label className="examdo__option">
                  <input className="examdo__option-radio" type="radio" name="1" id="1" value="1" />
                  <span>A. Coi kinh tế thị trường là cái riêng có của chủ nghĩa tư bản, không phải là thành tựu của văn minh chung nhân loại.</span>
                </label>
                <label className="examdo__option">
                  <input className="examdo__option-radio" type="radio" name="1" id="1" value="1" />
                  <span>B. Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình phát triển tổng quát của nước ta trong thời kỳ quá độ lên chủ nghĩa xã hội.</span>
                </label>
              </div>
            </div>
          </div>
          <div className="examdo__footer">
            <button className="button" onClick={showModal}>Nộp bài</button>
            <Modal
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              centered
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Hủy
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                  Nộp bài
                </Button>,
              ]}
            >
              <h2 style={{textAlign: "center"}}>Tạm dừng</h2>
              <p style={{fontSize: "16px", marginTop: "10px"}}>Sau khi nộp bài, bạn không được phép quay lại phần thi này. Bạn có chắc chắn muốn nộp bài làm của mình không</p>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExamDo;