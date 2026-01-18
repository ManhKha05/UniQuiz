import Button from "../../../components/Button";
import { Col, Row } from "antd"
import "./SubjectList.scss";
import { useEffect, useState } from "react";
import { get } from "../../../utils/request"

function SubjectList() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await get("subjects");
      setSubjects(result);
    }
    fetchApi();
  }, [])

  return (
    <>
      <div className="subjects">
        <div className="container">
          <div className="subjects__header">
            <h2 className="subjects__title">
              Luyện tập trắc nghiệm các môn học đại học tại UniQuiz
            </h2>
            <p className="subjects__desc">
              Hệ thống bài tập và đề trắc nghiệm các môn đại cương và chuyên ngành, giúp sinh viên ôn tập kiến thức, chuẩn bị tốt cho kiểm tra và thi cuối kỳ.
            </p>
          </div>
          <div className="subjects__list">
            <Row gutter={[20, 20]}>
              {subjects.map(item => (
                <Col span={6} key={item.id}>
                  <div className="subjects__item">
                    <img className="subjects__item-img" src={item.imageUrl} alt={item.name} />
                    <h3 className="subjects__item-title">{item.name}</h3>
                    <Button text="Luyện tập ngay" link="/" />
                  </div>
                </Col>
              ))}
              {/* <Col span={6}>
                <div className="subjects__item">
                  <img className="subjects__item-img" src={SubImg} alt="" />
                  <h3 className="subjects__item-title">Tư tưởng Hồ Chí Minh</h3>
                  <Button text="Luyện tập ngay" link="/" />
                </div>
              </Col>
              <Col span={6}>
                <div className="subjects__item">
                  <img className="subjects__item-img" src={SubImg} alt="" />
                  <h3 className="subjects__item-title">Tư tưởng Hồ Chí Minh</h3>
                  <Button text="Luyện tập ngay" link="/" />
                </div>
              </Col>
              <Col span={6}>
                <div className="subjects__item">
                  <img className="subjects__item-img" src={SubImg} alt="" />
                  <h3 className="subjects__item-title">Tư tưởng Hồ Chí Minh</h3>
                  <Button text="Luyện tập ngay" link="/" />
                </div>
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubjectList;