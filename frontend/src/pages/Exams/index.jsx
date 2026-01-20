import { useParams, Link } from "react-router-dom";
import "./Exams.scss";
import { useEffect, useState } from "react";
import { get } from "../../utils/request";

function Exams() {
  const { id } = useParams();
  const [subject, setSubject] = useState([]);
  const [exams, setExams] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subjectRes, examsRes] = await Promise.all([
          get(`subjects/${id}`),
          get(`subjects/${id}/exams`)
        ])

        const subjectData = await subjectRes.json();
        const examsData = await examsRes.json();

        setSubject(subjectData);
        setExams(examsData);
      } catch (error) {
        console.error("Đã có lỗi xảy ra", error);
      }
    }
    fetchData();
  }, [id])

  // console.log(subject);
  // console.log(exams);

  return (
    <>
      <div className="exams">
        <div className="container">
          <h1 className="exams__title">
            Luyện thi trắc nghiệm môn {subject.name}
          </h1>
          <p className="exams__desc">
            {subject.description}
          </p>
          <ul className="exams__list">
            {exams.map((item, index) => (
              <Link to={`/exams/${item.id}`} key={item.id}>
                <li className="exams__item">
                  <div className="exams__item-number">
                    {(index + 1).toString().length === 2 ? (index + 1) : ("0" + (index + 1))}
                  </div>
                  <h3 className="exams__item-title">
                    {item.title}
                  </h3>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Exams;