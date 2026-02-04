import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./LayoutAdmin.scss";
import { Link, Outlet, Navigate } from "react-router-dom";
import logo from "../../assets/images/UniQuiz-r.png"
import { FaUsersCog, FaFileSignature  } from "react-icons/fa";
import { MdContacts  } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { FaList } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";

function LayoutAdmin() {
  const role = localStorage.getItem('role');
  console.log(role);
  if(role === 'ROLE_USER' || role === null){
    return <Navigate to="/404" replace />;
  } 

  const items = [
     {
      key: 'dashboard',
      label: <Link to='/admin'>Tổng quan</Link>,
      icon: <MdDashboard />
    },
    {
      key: 'contacts',
      label: <Link to='/admin/contacts'>Liên hệ & góp ý</Link>,
      icon: <MdContacts />
    },
    {
      key: 'users',
      label: <Link to='/admin/users'>Người dùng</Link>,
      icon: <FaUsersCog />
    },
    {
      key: 'subjects',
      label: <Link to='/admin/subjects'>Môn học</Link>,
      icon: <FaList />
    },
    {
      key: 'questions',
      label: <Link to='/admin/questions'>Ngân hàng câu hỏi</Link>,
      icon: <BsFillQuestionSquareFill />
    },
    {
      key: 'exams',
      label: <Link to='/admin/exams'>Đề thi</Link>,
      icon: <FaFileSignature />
    },
    {
      key: 'results',
      label: <Link to='/admin/results'>Kết quả</Link>,
      icon: <PiExam />
    },
  ]


  return (
    <>
      <Layout className="admin-layout">
        <div className="header">
          <Link to="/admin" className="header__logo">
            <img src={logo} alt="UniQuiz" />
            <h2>Admin</h2>
          </Link>
          <div className="header__menu">
            <a href="/" className="button">Quay về trang chủ</a>
          </div>
        </div>
        <Layout>
          <Sider width="250px" theme="light" breakpoint="lg">
            <Menu
              // onClick={onClick}
              defaultSelectedKeys={['dashboard']}
              mode="inline"
              items={items}
              className="menu"
            />
          </Sider>
          <Content className="content" >
            <Outlet />
          </Content>
        </Layout>
        {/* <Footer >Footer</Footer> */}
      </Layout>
    </>
  )
}

export default LayoutAdmin;