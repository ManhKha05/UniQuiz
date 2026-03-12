import { Link } from "react-router-dom";
import { FaYoutube, FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import logoR from "../../../assets/images/UniQuiz-r.png"
import "./Footer.scss";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__info">
            <img src={logoR} alt="Logo" />
            <div className="footer__info-item">
              <FaLocationDot />
              <span>Ngõ 128, Nguyễn Đức Cảnh, Tương Mai, Hà Nội</span>
            </div>
            <div className="footer__info-item">
              <FaBuilding />
              <span>Công ty TNHH Phát triển Giáo dục Trực tuyến UniQuiz</span>
            </div>
            <iframe title="Địa chỉ" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4429.974576421387!2d105.85265397648396!3d20.986633877439758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1768564800140!5m2!1svi!2s" style={{ border: 0, width: "600", height: "450" }} loading="lazy"></iframe>
          </div>
          <div className="footer__right">
            <div className="footer__about">
              <h3 className="footer__title">
                Về chúng tôi
              </h3>
              <Link to="/about-us" className="footer__about-item">
                Giới thiệu
              </Link>
              <Link to="/contact" className="footer__about-item">
                Liên hệ
              </Link>
            </div>
            <div className="footer__social">
              <h3 className="footer__title">
                Kết nối với chúng tôi
              </h3>
              <ul className="footer__social-list">
                <li>
                  <a className="footer__social-icon" href="https://www.facebook.com/nguyen.manh.kha.617573"><FaYoutube /></a>
                </li>
                <li>
                  <a className="footer__social-icon" href="https://www.facebook.com/nguyen.manh.kha.617573"><FaFacebookF /></a>
                </li>
                <li>
                  <a className="footer__social-icon" href="https://www.facebook.com/nguyen.manh.kha.617573"><FaTiktok /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;