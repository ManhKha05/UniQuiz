import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./LayoutAdmin.scss";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/UniQuiz-r.png"
import { FaUsersCog, FaFileSignature  } from "react-icons/fa";
import { MdOutlineSubject, MdContacts  } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { FaList } from "react-icons/fa6";

function LayoutAdmin() {

  const items = [
    {
      key: 'users',
      label: 'Người dùng',
      icon: <FaUsersCog />
    },
    {
      key: 'subjects',
      label: 'Môn học',
      icon: <FaList />
    },
    {
      key: 'exams',
      label: 'Đề thi',
      icon: <FaFileSignature />
    },
    {
      key: 'results',
      label: 'Kết quả',
      icon: <PiExam />
    },
    {
      key: 'contact',
      label: 'Liên hệ & góp ý',
      icon: <MdContacts />
    },
  ]

  const handleBackToHome = () => {

  }

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
          <Sider width="250px" theme="light">
            <Menu
              // onClick={onClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
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