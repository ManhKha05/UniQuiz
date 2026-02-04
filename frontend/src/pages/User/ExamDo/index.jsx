import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import "./ExamDo.scss";
import { Button, Modal } from "antd";
import { GoClock } from "react-icons/go";
import { get, post } from "../../../utils/request";

function ExamDo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const showModal = () => { setIsModalOpen(true) };
  const handleCancel = () => { setIsModalOpen(false) };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await get(`exams/${id}/start`);

        if (!res.ok) {
          throw new Error()
        }
        const data = await res.json();

        console.log(data);

        setExam(data);
        setTimeLeft(data.duration * 60)
      } catch (error) {
        console.log(error)
      }
    }
    fetchApi();
  }, [])


  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  const formatTimer = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  const handleSubmit = async () => {
    const payload = {
      resultId: exam.resultId,
      answers: Object.entries(selectedAnswers).map(
        ([questionId, answerId]) => ({
          questionId: Number(questionId),
          answerId
        })
      )
    }

    const res = await post('exams/submit', payload);
    navigate(`/exam-result/${exam.resultId}`)
    setIsModalOpen(false);
  };

  const handleChange = (questionId, answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId
    })
  }

  // console.log(timeLeft);

  return (
    <>
      <div className="examdo">
        <div className="container">
          <div className="examdo__header">
            <h1 className="examdo__title">
              Trắc nghiệm môn {exam.subjectName}
            </h1>
            <h2 className="examdo__title--sub">
              {exam.title}
            </h2>
            <div className="examdo__timer">
              <GoClock /> {formatTimer()}
            </div>
          </div>
          <div className="examdo__main">
            {(exam.questions || []).map((question, index) => (
              <div className="examdo__question" key={question.id}>
                <div className="examdo__question-text">
                  <span className="examdo__question-number">{index + 1}.</span>
                  {question.content}
                </div>
                <div className="examdo__options">
                  {question.answers.map((answer, index) => (
                    <label className="examdo__option" key={answer.id}>
                      <input
                        className="examdo__option-radio"
                        type="radio"
                        name={question.id}
                        value={answer.id}
                        onChange={() => handleChange(question.id, answer.id)}
                      />
                      <span>{String.fromCharCode(65 + index)}. {answer.content}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            {/* <div className="examdo__question">
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
            </div> */}
          </div>
          <div className="examdo__footer">
            <button className="button" onClick={showModal}>Nộp bài</button>
            <Modal
              open={isModalOpen}
              onOk={handleSubmit}
              onCancel={handleCancel}
              centered
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Hủy
                </Button>,
                <Button key="submit" type="primary" onClick={handleSubmit}>
                  Nộp bài
                </Button>
              ]}
            >
              <h2 style={{ textAlign: "center" }}>Tạm dừng</h2>
              <p style={{ fontSize: "16px", marginTop: "10px" }}>Sau khi nộp bài, bạn không được phép quay lại phần thi này. Bạn có chắc chắn muốn nộp bài làm của mình không</p>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExamDo;