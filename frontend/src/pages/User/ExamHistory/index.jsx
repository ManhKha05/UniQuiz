import { useEffect, useState } from "react";
import "./ExamHistory.scss";
import { Button, Col, Form, Input, message, Row, Select } from "antd"
import { FaCalendarDays, FaCheck } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { useNavigate } from "react-router-dom"
import { get } from "../../../utils/request"
import { formatDateTime } from "../../../utils/date"
import { useQuery } from "@tanstack/react-query";

function ExamHistory() {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [subjectId, setSubjectId] = useState();

  // const fetchSubjects = async () => {
  //   const res = await get('subjects');
  //   return res.json();
  // }

  // const fetchExamsHistory = async ({queryKey}) => {
  //   const [, { keyword, subjectId }] = queryKey;

  //   const res = await get('exam-history', {
  //     keyword,
  //     subjectId: subjectId === 'ALL' ? null : subjectId
  //   });
  //   return res.json();
  // }

  // const {data: dataSubjects} = useQuery({
  //   queryKey: ["subjects"],
  //   queryFn: fetchSubjects
  // })
  // const subjects = dataSubjects?.content || [];

  // const {data: dataExams} = useQuery({
  //   queryKey: ["exams-history", {keyword, subjectId}],
  //   queryFn: fetchExamsHistory
  // })

  // const results = dataExams?.reverse() || [];

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const [subjectsRes, resultsRes] = await Promise.all([
          await get('subjects'),
          await get('exam-history', {
            keyword,
            subjectId: subjectId === 'ALL' ? null : subjectId
          })
        ])

        // if (!resultsRes.ok) {
        //   throw new Error();
        // }
        const subjectsData = await subjectsRes.json();
        const resultsData = await resultsRes.json();
        // console.log(data);
        // setTimeout(() => {
          setSubjects(subjectsData.content);
          setResults(resultsData.reverse());
        // }, 50)

      } catch (error) {
        // messageApi.warning("Hết phiên đăng nhập, vui lòng đăng nhập lại")
        console.log(error)
      }
    }
    fetchApi();
  }, [keyword, subjectId])

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setKeyword(e.target.value);
    }
  }

  const handleResult = (id) => {
    navigate(`/exam-result/${id}`);
  }

  return (
    <>
      <div className="examhistory">
        <div className="container">
          <h1 className="examhistory__title">
            Lịch sử làm bài
          </h1>
          <p className="examhistory__desc">
            Xem lại các bài thi đã hoàn thành và theo dõi tiến độ học tập của bạn
          </p>
          <div className="examhistory__filter">
            <Row gutter={[30, 20]}>
              <Col xs={24} md={10}>
                <Input
                  className="examhistory__input"
                  placeholder="Tìm kiếm bài thi"
                  onKeyDown={handleSearch}
                />
              </Col>
              <Col xs={24} md={10}>
                <Select
                  className="examhistory__input"
                  showSearch={{ optionFilterProp: 'label' }}
                  placeholder="Tất cả môn học"
                  options={[
                    { value: 'ALL', label: 'Tất cả môn học' },
                    ...subjects.map(item => ({
                      value: item.id,
                      label: item.name
                    }))
                  ]}
                  onChange={e => setSubjectId(e)}
                  style={{ width: '100%' }}
                />
              </Col>
            </Row>
          </div>
          <div className="examhistory__list">
            {(results || []).map((item, index) => (
              <div className="examhistory__item" key={index}>
                <div className="examhistory__item-left">
                  <h2 className="examhistory__item-title">
                    {item.examTitle}
                  </h2>
                  <div className="examhistory__item-info">
                    <div className="examhistory__item-desc">
                      <FaCalendarDays />
                      <span>{formatDateTime(item.submittedAt)}</span>
                    </div>
                    <div className="examhistory__item-desc">
                      <GoClock />
                      <span>{item.duration} phút</span>
                    </div>
                    <div className="examhistory__item-desc">
                      <HiOutlineNewspaper />
                      <span>{item.subjectName}</span>
                    </div>
                    {/* <div className="examhistory__item-desc">
                      <FaCheck />
                      <span>35/40 câu</span>
                    </div> */}
                  </div>
                  <button onClick={() => handleResult(item.resultId)} className="examhistory__item-btn">
                    Xem chi tiết
                  </button>
                </div>
                <h2 className="examhistory__item-right">
                  {item.score?.toFixed(2)}/10
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ExamHistory;