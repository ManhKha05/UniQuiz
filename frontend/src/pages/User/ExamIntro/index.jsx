import './ExamIntro.scss';
import { useNavigate, useParams } from "react-router-dom";
import { Row, Col, message } from "antd";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { useEffect, useState } from 'react';
import { get } from "../../../utils/request";

function ExamIntro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await get(`exams/${id}`);

        if (!res.ok) {
          throw new Error()
        }
        const data = await res.json();
        setExam(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, [])


  const handleStart = () => {
    const fetchApi = async () => {
      try {
        const res = await get(`exams/request`);
        
        if (!res.ok) {
          throw new Error()
        }
        navigate(`/exams/${id}/start`);
      } catch (error) {
        messageApi.warning("Bạn cần đăng nhập để làm bài thi")
      }
    }
    fetchApi();
  }

  return (
    <>
      {contextHolder}
      <div className="examIntro">
        <div className="container">
          <div className="examIntro__header">
            <h1 className="examIntro__subject">
              Trắc nghiệm môn {exam.subjectName}
            </h1>
            <h2 className="examIntro__exam">
              {exam.title}
            </h2>
            <div className="examIntro__info">
              <div className="examIntro__info-item">
                <BsFillQuestionCircleFill />
                <span>{exam.totalQuestions} câu</span>
              </div>
              <div className="examIntro__info-item">
                <GoClock />
                <span>{exam.duration} phút</span>
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