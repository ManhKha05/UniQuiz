import Button from "../../components/Button";
import logo from "../../assets/images/UniQuiz.png"
import "./NotFound.scss"

function NotFound() {
  return (
    <>
      <div className="notfound">
        <img className="notfound__img" src={logo} alt="" />
        <p className="notfound__404">404</p>
        <h1 className="notfound__title">
          Không tìm thấy trang
        </h1>
        <h3 className="notfound__desc">
          Xin lỗi, chúng tôi không tìm thấy trang bạn yêu cầu
        </h3>
        <Button text="Về trang chủ" link="/" />
      </div>
    </>
  )
}

export default NotFound;