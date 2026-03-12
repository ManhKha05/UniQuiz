import { useParams, Link } from "react-router-dom";
import "./Exams.scss";
import { useEffect, useState } from "react";
import { get } from "../../../utils/request";
import { useQuery } from "@tanstack/react-query";

function Exams() {
  const { id } = useParams();
  // const [subject, setSubject] = useState([]);
  // const [exams, setExams] = useState([]);

  const fetchSubject = async (id) => {
    const res = await get(`subjects/${id}`);

    if (!res.ok) {
      throw new Error("Lỗi khi lấy môn học");
    }

    return res.json();
  };

  const fetchExamsBySubject = async (id) => {
    const res = await get(`subjects/${id}/exams`);

    if (!res.ok) {
      throw new Error("Lỗi khi lấy danh sách đề thi");
    }

    return res.json();
  };

  const {data: subject, isLoading: loadingSubject } = useQuery({
    queryKey: ["subject", id],
    queryFn: () => fetchSubject(id),
    enabled: !!id,
    // keepPreviousData: true
  })

  const {data: exams, isLoading: loadingExams } = useQuery({
    queryKey: ["examsBySubject", id],
    queryFn: () => fetchExamsBySubject(id),
    enabled: !!id
  })

  if (loadingSubject || loadingExams) return;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const [subjectRes, examsRes] = await Promise.all([
  //         get(`subjects/${id}`),
  //         get(`subjects/${id}/exams`)
  //       ])

  //       const subjectData = await subjectRes.json();
  //       const examsData = await examsRes.json();

  //       setSubject(subjectData);
  //       setExams(examsData);
  //     } catch (error) {
  //       console.error("Đã có lỗi xảy ra", error);
  //     }
  //   }
  //   fetchData();
  // }, [id])

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