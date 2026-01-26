import { Layout, Menu } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import "./LayoutAdmin.scss";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/images/UniQuiz-r.png"
import { FaUsersCog, FaFileSignature  } from "react-icons/fa";
import { MdContacts  } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { FaList } from "react-icons/fa6";

function LayoutAdmin() {

  const items = [
    {
      key: 'users',
      label: <Link to='/admin'>Người dùng</Link>,
      icon: <FaUsersCog />
    },
    {
      key: 'subjects',
      label: <Link to='/admin/subjects'>Môn học</Link>,
      icon: <FaList />
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
    {
      key: 'contact',
      label: <Link to='/admin/contacts'>Liên hệ & góp ý</Link>,
      icon: <MdContacts />
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
              defaultSelectedKeys={['users']}
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