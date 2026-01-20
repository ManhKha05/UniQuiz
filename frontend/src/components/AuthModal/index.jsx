import Login from "../Login";
import { Modal } from "antd";
import Register from "../Register";
import "./AuthModal.scss";
import ForgotPassword from "../ForgotPassword";
import { useDispatch, useSelector } from "react-redux";
import { closeAuthModal } from "../../actions/authModal";

function AuthModal() {
  const modal = useSelector(state => state.AuthModalReducer);
  const dispatch = useDispatch();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    // setIsModalOpen(state.open);
    dispatch(closeAuthModal());
  };


  return (
    <>
      <Modal
        open={modal.open}
        onCancel={handleCancel}
        footer={null}
        className="authmodal"
      >
        {modal.mode === "login" && (
          <Login />
        )}
        {modal.mode === "register" && (
          <Register />
        )}
        {modal.mode === "forgotPassword" && (
          <ForgotPassword />
        )}
      </Modal>
    </>
  )
}

export default AuthModal;