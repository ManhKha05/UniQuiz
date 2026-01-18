import { Link } from "react-router-dom";
import logo from "../../assets/images/UniQuiz.png"
import "./Header.scss";
import { useDispatch } from "react-redux";
import { login } from "../../actions/authModal";
import AuthModal from "../../components/AuthModal";

function Header() {
  const dispatch = useDispatch();

  return (
    <>
      <AuthModal />
      <div className="header">
        <div className="container">
          <Link to="/" className="header__logo">
            <img src={logo} alt="" />
          </Link>
          <div className="header__content">
            <ul className="header__menu">
              <li className="header__item">
                <Link>Luyện tập</Link></li>
              <li className="header__item"><Link to="/about-us">Giới thiệu</Link></li>
              <li className="header__item"><Link to="/contact">Liên hệ</Link></li>
            </ul>
            <button onClick={() => dispatch(login())} className="button">
              Đăng nhập
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;