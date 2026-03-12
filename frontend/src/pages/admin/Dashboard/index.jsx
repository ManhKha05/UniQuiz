import { Col, Row } from "antd";
import "./Dashboard.scss";
import { MdWavingHand } from "react-icons/md";
import { FaUserFriends, FaAtlas } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { TiChartBar } from "react-icons/ti";
import { IoStar } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";
import { Line, Pie } from "@ant-design/plots";
import { useEffect, useState } from "react";
import { get } from "../../../utils/request"

function Dashboard() {
  const [dashboard, setDashBoard] = useState({});
  const [topUserGrade, setTopUserGrade] = useState([]);
  const [topUserTry, setTopUserTry] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const [dashboardRes, topUserGradeRes, topUserTryRes] = await Promise.all(
          [
            get('admin/dashboard'),
            get('admin/top-user-grade'),
            get('admin/top-user-try')
          ]
        );
        const dashboardData = await dashboardRes.json();
        const topUserGrade = await topUserGradeRes.json();
        const topUserTry = await topUserTryRes.json();
        setDashBoard(dashboardData);
        setTopUserGrade(topUserGrade);
        setTopUserTry(topUserTry)
      } catch (error) {
        console.log("Lỗi Admin Dashboard: ", error)
      }
    }
    fetchApi()
  }, [])
  console.log(topUserGrade)
  console.log(topUserTry)

  const configRecent = {
    data: dashboard.attemptsRecent || [],
    xField: 'date',
    yField: 'quantity',
    height: 300,
    point: true
  }

  const dataGrade = [
    { type: '0 - 5', value: 13 },
    { type: '5 - 7', value: 15 },
    { type: '7 - 8.5', value: 20 },
    { type: '8.5 - 10', value: 18 },
  ]

  const configGrade = {
    data: dataGrade,
    angleField: 'value',
    colorField: 'type',
    height: 300,
    width: 500,
    label: {
      text: (d) => `Điểm: ${d.type} \n Số lượng:  ${d.value}`
    }
  }

  return (
    <>
      <div className="dashboard">
        <h1 className="dashboard__header">
          <span>Chào mừng, Admin! </span>
          <MdWavingHand />
        </h1>
        <div className="dashboard__list">
          <Row gutter={[20, 20]}>
            <Col span={6}>
              <div className="dashboard__item">
                <div className="dashboard__item-header">
                  <h3>Tổng người dùng</h3>
                  <FaUserFriends className="primary" />
                </div>
                <h1 className="dashboard__item-value">
                  {dashboard.totalUsers}
                </h1>
                {/* <div className="dashboard__item-change">
                  ↑ 12.5% so với tháng trước
                </div> */}
              </div>
            </Col>
            <Col span={6}>
              <div className="dashboard__item">
                <div className="dashboard__item-header">
                  <h3>Đề thi hoạt động</h3>
                  <MdLibraryBooks className="success" />
                </div>
                <h1 className="dashboard__item-value">
                  {dashboard.totalExams}
                </h1>
                {/* <div className="dashboard__item-change">
                  ↑ 8.4% so với tháng trước
                </div> */}
              </div>
            </Col>
            <Col span={6}>
              <div className="dashboard__item">
                <div className="dashboard__item-header">
                  <h3>Bài thi hôm nay</h3>
                  <TiChartBar className="warning" />
                </div>
                <h1 className="dashboard__item-value">
                  {dashboard.totalAttemptsToday}
                </h1>
                {/* <div className="dashboard__item-change">
                  ↑ 10.3% so với hôm qua
                </div> */}
              </div>
            </Col>
            <Col span={6}>
              <div className="dashboard__item">
                <div className="dashboard__item-header">
                  <h3>Điểm TB hệ thống</h3>
                  <IoStar className="danger" />
                </div>
                <h1 className="dashboard__item-value">
                  {dashboard.averageScore && dashboard.averageScore.toFixed(2)}
                </h1>
                {/* <div className="dashboard__item-change">
                  ↑ 2.6% so với tháng trước
                </div> */}
              </div>
            </Col>
          </Row>
        </div>

        <div className="dashboard__chart-recent">
          <h2>Số lượt làm bài gần đây</h2>
          <Line {...configRecent} />
        </div>

        <Row gutter={20}>
          {/* <Col span={12}>
            <div className="dashboard__chart-grade">
              <h2>Biểu đồ phân bố điểm</h2>
              <Pie {...configGrade} />
            </div>
          </Col> */}
          <Col span={12}>
            <div className="dashboard__top-exam-list">
              <h2> <FaFire /> Top 5 đề thi phổ biến</h2>
              {(dashboard.topExam || []).map((item, index) => (
                <div className="dashboard__top-exam-item" key={index}>
                  <div className={"rank rank-" + (index + 1)}>{index + 1}</div>
                  <div className="info">
                    <div className="name">{item.title}</div>
                    <div className="meta">
                      <FaAtlas />
                      {item.subject}
                    </div>
                  </div>
                  <div className="number">
                    <h2>{item.totalAttempts}</h2>
                    <p>LƯỢT THI</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col span={12}>
            <div className="dashboard__top-exam-list">
              <h2> <FaFire /> Top 5 thí sinh ĐTB cao nhất</h2>
              {(topUserGrade || []).map((item, index) => (
                <div className="dashboard__top-exam-item" key={index}>
                  <div className={"rank rank-" + (index + 1)}>{index + 1}</div>
                  <div className="info">
                    <div className="name">{item.name}</div>
                    {/* <div className="meta">
                      <FaAtlas />
                      {item.subject}
                    </div> */}
                  </div>
                  <div className="number">
                    <h2>{Math.round(item.grade * 100) / 100}</h2>
                    <p>ĐTB</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col span={12}>
            <div className="dashboard__top-exam-list">
              <h2> <FaFire /> Top 5 thí sinh làm nhiều bài thi nhất</h2>
              {(topUserTry || []).map((item, index) => (
                <div className="dashboard__top-exam-item" key={index}>
                  <div className={"rank rank-" + (index + 1)}>{index + 1}</div>
                  <div className="info">
                    <div className="name">{item.name}</div>
                    {/* <div className="meta">
                      <FaAtlas />
                      {item.subject}
                    </div> */}
                  </div>
                  <div className="number">
                    <h2>{item.total}</h2>
                    <p>LƯỢT THI</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

      </div>
    </>
  )
}

export default Dashboard;