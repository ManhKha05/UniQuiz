import { Link } from "react-router-dom";
import logo from "../../assets/images/UniQuiz.png"
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { loginModal } from "../../actions/authModal";
import AuthModal from "../../components/AuthModal";
import { HiMiniUserCircle } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";
import { PiStudentFill } from "react-icons/pi";
import { Dropdown, message } from "antd";
import { logout } from "../../actions/auth";
import { useEffect, useState } from "react";
import { get } from "../../utils/request";

function Header() {
  const isLogin = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const [itemsSubjects, setItemsSubjects] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const handleLogOut = () => {
    localStorage.clear();
    dispatch(logout());
    messageApi.success({
      content: "Đã đăng xuất"
    })
  }

  useEffect(() => {
    const fetchApi = async () => {
      const res = await get("subjects");
      const data = await res.json()
      const items = data.map(item => (
        {
          key: item.id,
          label: <Link className="dropdown__item" to={`subjects/${item.id}/exams`}>{item.name}</Link>
        }
      ))
      setItemsSubjects(items);
    }
    fetchApi();
  }, [])

  const itemsUser = [
    {
      key: 'history',
      icon: <PiStudentFill size={20} />,
      label: <Link to='/exam-history' className="dropdown__item" >Lịch sử làm bài</Link>
    },
    {
      type: "divider"
    },
    {
      key: 'logout',
      icon: <CiLogout size={20} />,
      label: <span className="dropdown__item" onClick={handleLogOut}>Đăng xuất</span>
    }
  ]

  return (
    <>
      {contextHolder}
      <AuthModal />
      <div className="header">
        <div className="container">
          <Link to="/" className="header__logo">
            <img src={logo} alt="" />
          </Link>
          <div className="header__content">
            <ul className="header__menu">
              <li className="header__item">
                <Dropdown
                  menu={{
                    items: itemsSubjects,
                    className: "dropdown"
                  }}
                  arrow>
                  <span>Luyện tập</span>
                </Dropdown>
              </li>
              <li className="header__item"><Link to="/about-us">Giới thiệu</Link></li>
              <li className="header__item"><Link to="/contact">Liên hệ</Link></li>
            </ul>
            {!isLogin.isAuthenticated ? (
              <button onClick={() => dispatch(loginModal())} className="button">
                Đăng nhập
              </button>
            ) : (
              <Dropdown
                menu={{
                  items: itemsUser,
                  className: "dropdown"
                }}
                placement="bottomRight"
                arrow>
                <div className="header__user">
                  <HiMiniUserCircle />{user}
                </div>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;